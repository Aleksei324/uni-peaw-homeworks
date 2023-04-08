import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100
}

export const valueSlice = createSlice({
  name: 'valueSlice',
  initialState, // *estado inicial*
  reducers: { // cada *tipo* de acción con su codigo
    aumentar: (state, action) => {
      state.value += action.payload
    },
    reducir: (state) => {
      state.value -= 5
    },
  }
})

export const {aumentar, reducir} = valueSlice.actions // exportamos todas las acciones
