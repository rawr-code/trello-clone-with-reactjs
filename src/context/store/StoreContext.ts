import { createContext } from "react";
import { ManageContext } from "../../types/stateManagement";

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
