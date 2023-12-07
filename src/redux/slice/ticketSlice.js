import dataTicket from "./../../data/danhSachGhe.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrTicket: dataTicket,
  arrBookTicked: [],
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    datGhe: (state, actions) => {
      let gheDaDat = actions.payload;
      let index = state.arrBookTicked.findIndex(
        (item) => item.soGhe === gheDaDat.soGhe
      );
      index != -1
        ? state.arrBookTicked.splice(index, 1)
        : state.arrBookTicked.push(gheDaDat);
    },
    huyGhe: (state, actions) => {
      let huyGhe = actions.payload;
      state.arrBookTicked = state.arrBookTicked.filter(
        (item) => item.soGhe != huyGhe
      );
    },
  },
});

export const { huyGhe, datGhe } = ticketSlice.actions;

export default ticketSlice.reducer;
