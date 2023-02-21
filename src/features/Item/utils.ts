import { createAsyncThunk } from "@reduxjs/toolkit";

enum SessionStorageKeys {
  CONDITIONS = "pf2e-conditions",
}

export enum LoadingStates {
  IDLE,
  PENDING,
  FULFILLED,
}

// TODO: Add check for new versions of schemas and update automatically using local storage
export const fetchConditions = createAsyncThunk(
  "items/fetchConditions",
  async () => {
    const sessionData = sessionStorage.getItem(SessionStorageKeys.CONDITIONS);
    if (sessionData) {
      return JSON.parse(sessionData);
    } else {
      const response = await fetch(
        `https://pf2etools.com/data/conditions.json?v=0.7.10`
      );
      const data = await response.json();
      sessionStorage.setItem(
        SessionStorageKeys.CONDITIONS,
        JSON.stringify(data)
      );
      return data;
    }
  }
);
