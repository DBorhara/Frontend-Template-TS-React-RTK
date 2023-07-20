import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

axios.defaults.withCredentials = true;

interface CustomError {
  name: string;
  message: string;
  code: string;
}

interface UserState {
  data?: any;
  error?: CustomError | null;
}

const initialState: UserState = {};

// Thunks

// Fetch user Thunk
const me = createAsyncThunk("user/me", async () => {
  try {
    const response = await axios.get("http://localhost:8080/auth/me", {
      withCredentials: true,
    });
    console.log("ME response", response);
    if (!response.data) {
      console.log("NO RESPONSE DATA");
      throw new Error("Error");
    }
    return response.data;
  } catch (error) {
    const {
      response: { data, status },
    } = error as unknown as {
      response: { data: string; status: number };
    };
    throw {
      name: "Request Failed",
      message: data,
      code: `${status}`,
    };
  }
});

// Sign Up Thunk
const signup = createAsyncThunk(
  "user/signup",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        email,
        password,
      });
      if (!response.data) {
        throw new Error("User not created");
      }
      return response.data;
    } catch (error) {
      const {
        response: { data, status },
      } = error as unknown as {
        response: { data: string; status: number };
      };
      throw {
        name: "Request Failed",
        message: data,
        code: `${status}`,
      };
    }
  }
);

// Log In Thunk
const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: String }) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });
      console.log("response", response);
      if (!response.data) {
        throw new Error("Error");
      }
      return response.data;
    } catch (error) {
      console.log("error", error);
      const {
        response: { data, status },
      } = error as unknown as {
        response: { data: string; status: number };
      };
      throw {
        name: "Request Failed",
        message: data,
        code: `${status}`,
      };
    }
  }
);

// Log Out Thunk
const logout = createAsyncThunk("user/logout", async () => {
  console.log("USER/LOGOUT THUNK HIT");
  try {
    const response = await axios.post("http://localhost:8080/auth/logout");
    if (!response.data) {
      throw new Error("Error");
    }
    return response.data;
  } catch (error) {
    const {
      response: { data, status },
    } = error as unknown as {
      response: { data: string; status: number };
    };
    throw {
      name: "Request Failed",
      message: data,
      code: `${status}`,
    };
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Log In Thunk Reducer+Error Handling
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<UserState>) => {
        const { payload } = action;
        state.data = payload;
      }
    );
    builder.addCase(login.rejected, (state, { error }) => {
      if (error) {
        state.error = error as CustomError;
      } else {
        state.error = {
          name: "Request Failed",
          message: "Error",
          code: "500",
        };
      }
    });
    //Sign Up Thunk Reducer+Error Handling
    builder.addCase(
      signup.fulfilled,
      (state, action: PayloadAction<UserState>) => {
        const { payload } = action;
        state.data = payload;
      }
    );
    builder.addCase(signup.rejected, (state, { error }) => {
      if (error) {
        state.error = error as CustomError;
      } else {
        state.error = {
          name: "Request Failed",
          message: "Error",
          code: "500",
        };
      }
    });
    //Log Out Thunk Reducer+Error Handling
    builder.addCase(logout.fulfilled, (state) => {
      state.data = {};
    });
    builder.addCase(logout.rejected, (state, { error }) => {
      if (error) {
        state.error = error as CustomError;
      } else {
        state.error = {
          name: "Request Failed",
          message: "Error",
          code: "500",
        };
      }
    });
    // Fetch User Thunk Reducer+Error Handling
    builder.addCase(me.fulfilled, (state, action: PayloadAction<UserState>) => {
      const { payload } = action;
      state.data = payload;
    });
    builder.addCase(me.rejected, (state, { error }) => {
      if (error) {
        state.error = error as CustomError;
      } else {
        state.error = {
          name: "Request Failed",
          message: "Error",
          code: "500",
        };
      }
    });
  },
});

export { login, signup, logout, me };
export type { UserState };

export default userSlice.reducer;
