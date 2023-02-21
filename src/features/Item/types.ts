import { SerializedError } from "@reduxjs/toolkit";
import { LoadingStates } from "./utils";

export interface Item {
  title: string;
  description: string;
}

export interface ItemProps {
  item: Item;
}

export interface Condition {
  name: string;
  entries: string[];
}

export interface ItemState {
  items: Item[];
  loading: LoadingStates;
  error: SerializedError | null;
}
