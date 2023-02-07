import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 50
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => { state.numberOfCakes -= (action.payload || 1) },
    refilled: (state, action) => { state.numberOfCakes += action.payload },
  }
})

export default cakeSlice.reducer
export const { ordered, refilled } = cakeSlice.actions