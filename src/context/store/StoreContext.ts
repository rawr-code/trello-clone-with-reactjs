import { createContext } from "react";
import { ManageContext } from "../../types/stateManagement";
import { ProviderCreator } from "../contextInjector";
import { storeReducer } from "./StoreReducer";

export interface StoreState {}

export type StoreAction = {
  type: string;
};

export type StoreCtx = ManageContext<StoreState, StoreAction>;

export const INITIAL_STATE = {};

export const StoreContext = createContext<StoreCtx>({
  state: INITIAL_STATE,
  dispatch: (action) => {},
});

export const StoreProvider = ProviderCreator<StoreState, StoreAction>(
  INITIAL_STATE,
  storeReducer,
  StoreContext
);
