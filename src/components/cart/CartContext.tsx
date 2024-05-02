import { createContext, ReactNode, useReducer } from "react";
import { CartItem } from "../data/Cart";
import { FavoriteProvider } from "./FavoriteContext";

type CartState = {
  items: CartItem[];
};
type CartAction = {
  type: "ADD" | "REMOVE";
  payload: CartItem;
};

const initialCartState: CartState = { items: [] };

export const CartContext = createContext<CartState | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD":
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        return {
          items: state.items.map((item, index) =>
            index === itemIndex ? { ...item, quantity: item.num + 1 } : item
          ),
        };
      } else {
        return { items: [...state.items, { ...action.payload, num: 1 }] };
      }
    case "REMOVE":
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    default:
      throw new Error();
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ ...state, ...dispatch }}>
      <FavoriteProvider>{children}</FavoriteProvider>
    </CartContext.Provider>
  );
};
