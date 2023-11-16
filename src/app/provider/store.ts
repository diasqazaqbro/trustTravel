import FiltrationSlice from "@/features/Navigation/FiltrationSlice";
import { configureStore,combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  filtration: FiltrationSlice
  },);

export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 