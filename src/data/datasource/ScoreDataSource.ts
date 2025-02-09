import DataResult from "../DataResult";
import ScoreEntity from "../entities/ScoreEntity";

export interface ScoreDataSource {
  updateGameScore(entity: ScoreEntity): Promise<DataResult<void>>;

  getGameScores(): Promise<DataResult<ScoreEntity[]>>;
}
