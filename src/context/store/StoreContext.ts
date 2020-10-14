import { createContext } from "react";
import { ManageContext } from "../../types/stateManagement";
import { ProviderCreator } from "../contextInjector";
import { storeReducer, storePersistor } from "./StoreReducer";
import { Board, StoreActionTypes } from "./StoreTypes";
import { v4 as uuidv4 } from "uuid";

export interface StoreState {
  boards: Board[];
}

export const INITIAL_STATE: StoreState = storePersistor.get() || {
  boards: ((): Board[] => {
    const [todoID, InProgressID, DoneID] = [uuidv4(), uuidv4(), uuidv4()];

    return [
      {
        id: todoID,
        title: "To do",
        tasks: [
          {
            boardId: todoID,
            title: "This is a Simple Scrum with ReactJs.",
            id: uuidv4(),
          },
          {
            boardId: todoID,
            title: "All data is save in Local Storage.",
            id: uuidv4(),
          },
          {
            boardId: todoID,
            title: "This a example task",
            id: uuidv4(),
          },
        ],
      },
      {
        id: InProgressID,
        title: "In Progress",
        tasks: [],
      },
      {
        id: DoneID,
        title: "Done",
        tasks: [],
      },
    ];
  })(),
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
