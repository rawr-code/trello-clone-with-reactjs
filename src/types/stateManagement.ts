export interface Action {
  type: string;
  payload?: any;
}

export interface AnyAction extends Action {
  [extraProps: string]: any;
}

export type Reducer<State = any, A extends Action = AnyAction> = (
  state: State,
  actions: A
) => State;

export interface ManageContext<State = any, A extends Action = AnyAction> {
  state: State;
  dispatch: (action: A) => void;
}
