import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  // refer Payload to take only focus on returned data of the response
  dispatch({ type: FETCH_USER, payload: res.data });
};
