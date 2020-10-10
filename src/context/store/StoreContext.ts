import { createContext } from "react";
import { ManageContext } from "../../types/stateManagement";
import { ProviderCreator } from "../contextInjector";
import { storeReducer } from "./StoreReducer";
import { Board } from "./StoreTypes";

export interface StoreState {
  boards: Board[];
  // containers: {
  //   [name: string]: Board;
  // };
}

export type StoreAction = {
  type: string;
  payload?: any;
};

export type StoreCtx = ManageContext<StoreState, StoreAction>;

export const INITIAL_STATE: StoreState = {
  boards: [],
};

export const StoreContext = createContext<StoreCtx>({
  state: INITIAL_STATE,
  dispatch: (action) => {},
});

export const StoreProvider = ProviderCreator<StoreState, StoreAction>(
  INITIAL_STATE,
  storeReducer,
  StoreContext
);
