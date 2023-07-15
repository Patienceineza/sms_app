import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../configs/config";

const UserThunk = createAsyncThunk("user", async () => {
  try {
    const res = await axios.get("/api/v1/users/check", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Ishema-token")}`,
      },
    });

    return res.data;
  } catch (error) {
    return { error };
  }
});

export default UserThunk;
