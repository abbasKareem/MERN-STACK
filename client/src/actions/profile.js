import axios from "axios";
import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";

// Get current users profile
export const getCurrentProfile = () => async (dispatct) => {
  try {
    const res = await axios.get("/api/profile/me");

    dispatct({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatct({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
