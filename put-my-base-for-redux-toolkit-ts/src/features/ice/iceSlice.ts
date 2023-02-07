import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IceSliceInitialState } from "../../types";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState: IceSliceInitialState = {
  numberOfIces: 100,
};

const iceSlice = createSlice({
  name: "ice",
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<number>) => {
      state.numberOfIces -= action.payload || 1;
    },
    refilled: (state, action: PayloadAction<number>) => {
      state.numberOfIces += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIces--;
    });
  },
});

export default iceSlice.reducer;
export const { ordered, refilled } = iceSlice.actions;
