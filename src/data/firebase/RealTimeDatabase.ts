import config from "./FirebaseConfig";
import { getDatabase } from "firebase/database";

const database = getDatabase(config);

export default database;
