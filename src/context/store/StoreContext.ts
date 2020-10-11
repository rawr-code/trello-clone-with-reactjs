import { createContext } from "react";
import { Action, ManageContext } from "../../types/stateManagement";
import { ProviderCreator } from "../contextInjector";
import { storeReducer } from "./StoreReducer";
import { Board } from "./StoreTypes";

export interface StoreState {
  boards: Board[];
}

export const INITIAL_STATE: StoreState = {
  boards: [],
};

export type StoreContext = ManageContext<StoreState>;

export const storeContext = createContext<StoreContext>({
  state: INITIAL_STATE,
  dispatch: (action) => {},
});

export const StoreProvider = ProviderCreator<StoreState, Action>(
  INITIAL_STATE,
  storeReducer,
  storeContext
);
