import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Condition, Item } from "./types";
import { fetchConditions } from "./utils";

const initialState: Item[] = [];

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
  extraReducers: (builder) => {
    // TODO: Deal with unfulfilled cases
    builder.addCase(fetchConditions.fulfilled, (state, action) => {
      const conditions = action.payload.condition as Condition[];
      for (let c of conditions) {
        state.push({
          title: c.name,
          description: c.name,
        });
      }
    });
  },
});

export const { addItem, addItems } = itemSlice.actions;
export default itemSlice.reducer;
