import Score from "../../domain/model/score/Score";
import { ScoreRepository } from "../../domain/repository/ScoreRepository";
import Result from "../../domain/Result";
import { ScoreDataSource } from "../datasource/ScoreDataSource";
import { mapScoreEntitiyToScore } from "../mappers/ScoreMapper";

export class ScoreRepositoryImpl implements ScoreRepository {
  private dataSource: ScoreDataSource;

  public constructor(dataSource: ScoreDataSource) {
    this.dataSource = dataSource;
  }

  async updateScore(
    userId: string,
    platform: string,
    score: number
  ): Promise<Result<void>> {
    try {
      const update = await this.dataSource.updateGameScore({
        id: userId,
        platform: platform,
        score: score,
        date: Date.now(),
      });
      if (update.isSuccessful) return Result.Success(undefined);
      else throw update.error;
    } catch (error) {
      return Result.Failure("결과 업로드 실패 : " + error);
    }
  }

  async getAllScores(): Promise<Result<Score[]>> {
    try {
      const scores = await this.dataSource.getGameScores();
      if (scores.isSuccessful)
        return Result.Success(
          scores.value?.map(mapScoreEntitiyToScore).sort((s1, s2) => {
            if (s1.score != s2.score) {
              return s2.score - s1.score;
            } else {
              return s1.date - s2.date;
            }
          }) ?? []
        );
      else throw scores.error;
    } catch (error) {
      return Result.Failure("점수 조회 실패 : " + error);
    }
  }
}
