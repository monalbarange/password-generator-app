import { createSlice } from "@reduxjs/toolkit";

const passwordGeneratorSlice = createSlice({
  name: "passwordGenerator",
  initialState: {
    value: "",
    passwordLength: 10,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false,
    passwordStrength: "Medium",
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setPasswordLength: (state, action) => {
      state.passwordLength = action.payload;
    },
    setIncludeUppercase: (state, action) => {
      state.includeUppercase = action.payload;
    },
    setIncludeLowercase: (state, action) => {
      state.includeLowercase = action.payload;
    },
    setIncludeNumbers: (state, action) => {
      state.includeNumbers = action.payload;
    },
    setIncludeSymbols: (state, action) => {
      state.includeSymbols = action.payload;
    },
    setPasswordStrength: (state, action) => {
      state.passwordStrength = action.payload;
    },
  },
});

export const {
  setValue,
  setPasswordLength,
  setIncludeUppercase,
  setIncludeLowercase,
  setIncludeNumbers,
  setIncludeSymbols,
  setPasswordStrength,
} = passwordGeneratorSlice.actions;

export default passwordGeneratorSlice.reducer;
