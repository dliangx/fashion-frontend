import { createContext, ReactNode, useReducer } from "react";
import { FavoriteItem } from "../data/Cart";

type FavoriteState = {
  items: FavoriteItem[];
};
type FavoriteAction = {
  type: "ADD" | "REMOVE";
  payload: FavoriteItem;
};

type FavoriteContextType = {
  state: FavoriteState;
  dispatch: null | React.Dispatch<FavoriteAction>;
};

const initialFavoriteState: FavoriteState = { items: [] };

export const FavoriteContext = createContext<FavoriteContextType>({
  dispatch: null,
  state: {
    items: [],
  },
});

const favoriteReducer = (
  state: FavoriteState,
  action: FavoriteAction
): FavoriteState => {
  switch (action.type) {
    case "ADD":
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.items.push(action.payload);
      }
      return state;
    case "REMOVE":
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      throw new Error();
  }
};

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialFavoriteState);

  return (
    <FavoriteContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
};
