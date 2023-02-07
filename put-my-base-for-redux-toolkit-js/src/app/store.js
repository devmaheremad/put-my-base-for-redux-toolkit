import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer, iceReducer, userReducer } from "../features/forReducersExport";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
    user: userReducer
  }
})

export default store