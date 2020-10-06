import { useContext } from "react";
import { setToken } from "./StoreActions";
import { StoreContext, StoreCtx } from "./StoreContext";

export const useStore = () => {
  const { dispatch } = useContext<StoreCtx>(StoreContext);

  return (token: string) => dispatch(setToken(token));
};
