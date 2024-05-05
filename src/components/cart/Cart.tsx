import { useContext, useState } from "react";
import { Close, Heart, ShoppingBag } from "../common/Icon";
import { AppContext } from "../../App";
import { CartContext } from "./CartContext";
import CartItemView from "./CartItemView";
import { FavoriteContext } from "./FavoriteContext";
import FavoriteItemView from "./FavoriteItemView";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { theme } = useContext(AppContext);
  const [tabIndex, setTabIndex] = useState(0);
  const { state } = useContext(CartContext);
  const favoriteContext = useContext(FavoriteContext);
  const favoriteState = favoriteContext.state;
  const navigate = useNavigate();

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
        state.items.map((item) => {
          return (
            <>
              <CartItemView
                id={item.id}
                pic={item.pic}
                brand={item.brand}
                name={item.name}
                num={item.num}
                price={item.price}
                attr={item.attr}
                key={item.id.toString()}
              />
            </>
          );
        })}

      {tabIndex == 1 &&
        localStorage.getItem("user_token") != undefined &&
        favoriteState.items.map((item) => {
          return (
            <>
              <FavoriteItemView
                id={item.id}
                pic={item.pic}
                brand={item.brand}
                name={item.name}
                price={item.price}
                key={item.id.toString()}
              />
            </>
          );
        })}

      <div className="fixed bottom-0 left-0 right-0  h-14 text-center bg-black text-white  border-none phone-width   place-content-center ">
        {tabIndex == 0 && state.items.length == 0 && (
          <div
            className="flex place-content-center "
            onClick={() => {
              setTabIndex(3);
              navigate("/product");
            }}
          >
            <ShoppingBag className="mr-4" color="#fff" />
            CONTINUE SHOPPING
          </div>
        )}
        {tabIndex == 0 && state.items.length > 0 && (
          <div
            className="flex place-content-center "
            onClick={() => {
              navigate("/checkout");
            }}
          >
            CHECKOUT
          </div>
        )}
        {tabIndex == 1 && (
          <div className="flex place-content-center ">ADD TO CART</div>
        )}
      </div>
      <div className="h-16" />
    </div>
  );
};

export default Cart;
