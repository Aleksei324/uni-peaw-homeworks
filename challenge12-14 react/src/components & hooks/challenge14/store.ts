import { configureStore } from "@reduxjs/toolkit";
import { valueSlice } from "./";

export const reduxStore = configureStore({ // creando la store
  reducer: {
    valueSlice: valueSlice.reducer // añadimos el slice como reducer de la store
  }
})
