import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CakeSliceInitialState } from "../../types";

const initialState: CakeSliceInitialState = {
  numberOfCakes: 50,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action: PayloadAction<number>) => {
      state.numberOfCakes -= action.payload || 1;
    },
    refilled: (state, action: PayloadAction<number>) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, refilled } = cakeSlice.actions;
