import { createContext } from "react";
import { ManageContext } from "../../types/stateManagement";
import { ProviderCreator } from "../contextInjector";
import { storeReducer } from "./StoreReducer";

export interface Task {
  title: string;
}

export interface Board {
  title: string;
}

export interface StoreState {
  containers: Board[];
}

export type StoreAction = {
  type: string;
  payload?: any;
};

export type StoreCtx = ManageContext<StoreState, StoreAction>;

export const INITIAL_STATE: StoreState = {
  containers: [],
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
