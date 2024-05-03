import { useContext, useState } from "react";
import { Close, Heart, ShoppingBag } from "../common/Icon";
import { AppContext } from "../../App";
import { CartContext } from "./CartContext";
import CartItemView from "./CartItemView";
import { FavoriteContext } from "./FavoriteContext";
import FavoriteItemView from "./FavoriteItemView";

const Cart = () => {
  const { theme } = useContext(AppContext);
  const [tabIndex, setTabIndex] = useState(0);
  const { state } = useContext(CartContext);
  const favoriteContext = useContext(FavoriteContext);
  const favoriteState = favoriteContext.state;

  return (
    <div className="h-full">
      <Close className="m-2" onClick={() => history.go(-1)} />

      <div className="flex mt-4 place-items-center  ">
        <div
          className={`w-1/2 h-8  content-center text-center  border-r-0 border-l-0  border 
          ${theme === "dark" ? "border-white " : "border-black"}
          ${tabIndex == 0 ? "text-lg " : "text-sm"}
          `}
          onClick={() => {
            setTabIndex(0);
          }}
        >
          CART({state.items.length})
        </div>
        <div
          className={`flex w-1/2 h-8 place-content-center   place-items-center  border-r-0  border 
          ${theme === "dark" ? "border-white " : "border-black"}
          ${tabIndex == 1 ? "text-lg" : "text-sm"}
          `}
          onClick={() => {
            setTabIndex(1);
          }}
        >
          FAVORITE
          <Heart className="h-4" />
        </div>
      </div>
      {tabIndex == 0 && state.items.length == 0 && (
        <div className="grid  place-items-center mt-24">
          <div>You Shopping Bag Is Empty.</div>
        </div>
      )}

      {tabIndex == 0 &&
        state.items.map((item, index) => {
          return (
            <>
              <CartItemView
                id={0}
                pic={item.pic}
                brand={item.brand}
                name={item.name}
                num={item.num}
                price={item.price}
                attr={item.attr}
                key={index.toString()}
              />
            </>
          );
        })}

      {tabIndex == 1 &&
        localStorage.getItem("user_token") != undefined &&
        favoriteState.items.map((item, index) => {
          return (
            <>
              <FavoriteItemView
                id={item.id}
                pic={item.pic}
                brand={item.brand}
                name={item.name}
                price={item.price}
                key={index}
              />
            </>
          );
        })}

      <div className="fixed bottom-0 left-0 right-0  h-14 text-center bg-black text-white  border-none phone-width   place-content-center ">
        <div className="flex place-content-center ">
          <ShoppingBag className="mr-4" color="#fff" />
          CONTINUE SHOPPING
        </div>
      </div>
    </div>
  );
};

export default Cart;
