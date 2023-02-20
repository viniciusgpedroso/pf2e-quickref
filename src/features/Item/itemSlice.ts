import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./types";

const initialState: Item[] = [
  { title: "Item 0 Title", description: "Item 0 Description" },
  { title: "Item 1 Title", description: "Item 1 Description" },
];

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },
    addItems: (state, action: PayloadAction<Item[]>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
