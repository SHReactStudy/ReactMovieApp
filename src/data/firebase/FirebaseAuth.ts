import config from "./FirebaseConfig";
import { getAuth } from "firebase/auth";

const auth = getAuth(config);
export default auth;
