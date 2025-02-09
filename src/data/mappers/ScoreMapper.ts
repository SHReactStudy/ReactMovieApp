import Score from "../../domain/model/score/Score";
import ScoreEntity from "../entities/ScoreEntity";

function mapScoreToScoreEntity(score: Score): ScoreEntity {
  return { ...score };
}

function mapScoreEntitiyToScore(entity: ScoreEntity): Score {
  return { ...entity };
}

export { mapScoreEntitiyToScore, mapScoreToScoreEntity };
