import DataResult from "../DataResult";
import { ScoreDataSource } from "../datasource/ScoreDataSource";
import ScoreEntity from "../entities/ScoreEntity";
import database from "../firebase/RealTimeDatabase";
import { ref, push, get, child } from "firebase/database";

export default class ScoreDataSourceImpl implements ScoreDataSource {
  dbref = ref(database);

  async updateGameScore(entity: ScoreEntity): Promise<DataResult<void>> {
    try {
      await push(ref(database, "/scores"), entity);
      return DataResult.Success(undefined);
    } catch (e) {
      return DataResult.Failure(e);
    }
  }

  async getGameScores(): Promise<DataResult<ScoreEntity[]>> {
    try {
      const snapshot = await get(child(this.dbref, "/scores"));
      let result: ScoreEntity[] = [];
      if (snapshot.exists()) {
        result = Object.values(snapshot.val()) as ScoreEntity[];
      }
      return DataResult.Success(result);
    } catch (e) {
      return DataResult.Failure(e);
    }
  }
}
