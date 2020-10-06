import React, { Component, createElement } from "react";
import { AnyAction, ManageContext, Reducer } from "../types/stateManagement";

export const ProviderCreator = <State, Action extends AnyAction>(
  defaultState: State,
  reducer: Reducer<State, Action>,
  context: React.Context<ManageContext<State, Action>>
) =>
  class ProviderComponent extends Component<
    { children: React.ReactNode },
    State
  > {
    static state: State;
    state = defaultState;

    dispatch(action: Action) {
      this.setState((prevState) => {
        return reducer(prevState, action);
      });
    }
    render() {
      const { Provider } = context;
      return createElement(Provider, {
        children: this.props.children,
        value: {
          state: this.state,
          dispatch: this.dispatch,
        },
      });
    }
  };
