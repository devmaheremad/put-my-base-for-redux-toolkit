import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numberOfIces: 100
}

const iceSlice = createSlice({
  name: "ice",
  initialState,
  reducers: {
    ordered: (state, action) => { state.numberOfIces -= (action.payload || 1) },
    refilled: (state, action) => { state.numberOfIces += action.payload }
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => { state.numberOfIces-- })
  }
})

export default iceSlice.reducer
export const { ordered, refilled } = iceSlice.actions