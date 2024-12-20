import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const BASE_URL =
  "https://react-movie-app-9af06-default-rtdb.asia-southeast1.firebasedatabase.app";

const firebaseConfig = {
  databaseURL: BASE_URL,
};

const firebaseAppInstance = initializeApp(firebaseConfig);

const database = getDatabase(firebaseAppInstance);

export default database;
