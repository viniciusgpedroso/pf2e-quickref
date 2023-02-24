import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Condition, Item, ItemState } from "./types";
import {
  fetchConditions,
  generateConditionIconURL,
  LoadingStates,
} from "./utils";

const initialState: ItemState = {
  items: [] as Item[],
  loading: LoadingStates.IDLE,
  error: null,
};
const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    addItems: (state, action: PayloadAction<Item[]>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConditions.fulfilled, (state, action) => {
        const conditions = action.payload.condition as Condition[];
        state.loading = LoadingStates.FULFILLED;
        for (let c of conditions) {
          state.items.push({
            title: c.name,
            description: parseDescriptionString(c.entries),
            iconURL: generateConditionIconURL(c.name),
          });
        }
      })
      .addCase(fetchConditions.pending, (state, action) => {
        if (state.loading === LoadingStates.IDLE) {
          state.loading = LoadingStates.PENDING;
        }
      })
      .addCase(fetchConditions.rejected, (state, action) => {
        if (state.loading === LoadingStates.PENDING) {
          state.loading = LoadingStates.IDLE;
          state.error = action.error;
        }
      });
  },
});

const parseDescriptionString = (entries: string[]): string[] => {
  // TODO: Create types and check for no string entries
  const re = /\{(.*?\s(.*?))\}/g;
  for (let i = 0; i < entries.length; i++) {
    if (typeof entries[i] === "string")
      entries[i] = entries[i].replace(re, "$2");
  }
  return entries;
};

export const { addItem, addItems } = itemSlice.actions;
export default itemSlice.reducer;
