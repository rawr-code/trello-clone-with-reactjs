import { createContext } from "react";
import { ManageContext } from "../../types/stateManagement";
import { ProviderCreator } from "../contextInjector";
import { storeReducer } from "./StoreReducer";
import { Board, StoreActionTypes } from "./StoreTypes";

export interface StoreState {
  boards: Board[];
}

export const INITIAL_STATE: StoreState = {
  boards: [],
};

export type StoreContext = ManageContext<StoreState, StoreActionTypes>;

export const storeContext = createContext<StoreContext>({
  state: INITIAL_STATE,
  dispatch: (action) => {},
});

export const StoreProvider = ProviderCreator<StoreState, StoreActionTypes>(
  INITIAL_STATE,
  storeReducer,
  storeContext
);
