import { configureStore } from "@reduxjs/toolkit";
import passwordGeneratorReducer from "../redux/passwordGeneratorSlice";

const store = configureStore({
  reducer: {
    passwordGenerator: passwordGeneratorReducer,
  },
});

export default store;
