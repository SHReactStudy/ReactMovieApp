import Score from "../model/score/Score";
import Result from "../Result";

export interface ScoreRepository {
  updateScore(
    userId: string,
    platform: string,
    score: number
  ): Promise<Result<void>>;

  getAllScores(): Promise<Result<Score[]>>;
}
