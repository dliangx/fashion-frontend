import { createContext, ReactNode, useReducer } from "react";
import { FavoriteItem } from "../data/Cart";

type FavoriteState = {
  items: FavoriteItem[];
};
type FavoriteAction = {
  type: "ADD" | "REMOVE";
  payload: FavoriteItem;
};

const initialFavoriteState: FavoriteState = { items: [] };

export const FavoriteContext = createContext<FavoriteState | null>(null);

const cartReducer = (
  state: FavoriteState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case "ADD":
      state.items.push(action.payload);
      return state;
    case "REMOVE":
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      throw new Error();
  }
};

export const FavoriteProvider = (children: ReactNode) => {
  const [state, dispatch] = useReducer(cartReducer, initialFavoriteState);

  return (
    <FavoriteContext.Provider value={{ ...state, ...dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
};
