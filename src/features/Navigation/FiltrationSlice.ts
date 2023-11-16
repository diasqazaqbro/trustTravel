"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFiltration {
  category: String;
  location: String;
  time: String;
  age: String;
}

const initialState: IFiltration = {
  category: "Смешанный",
  location: "Алматы",
  time: "Любое",
  age: "Все",
};

export const filtrationSlice = createSlice({
  name: "filtration",
  initialState,
  reducers: {
    categoryFC: (state, action: PayloadAction<string>) => {
      state.category = action.payload; 
    },
    locationFC: (state, action: PayloadAction<string>) => {
      state.location = action.payload; 
    },
    timeFC: (state, action: PayloadAction<string>) => {
      state.time = action.payload; 
    },
    ageFC: (state, action: PayloadAction<string>) => {
      state.age = action.payload; 
    },
  },
});

export const { categoryFC, locationFC, timeFC, ageFC } = filtrationSlice.actions;

export default filtrationSlice.reducer;
