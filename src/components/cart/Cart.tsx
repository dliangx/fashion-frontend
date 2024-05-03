import { useContext, useState } from "react";
import { Close, Heart, ShoppingBag } from "../common/Icon";
import { AppContext } from "../../App";

const Cart = () => {
  const { theme } = useContext(AppContext);
  const [tabIndex, setTabIndex] = useState(0);

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
          CART(0)
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
      {tabIndex == 0 && (
        <div className="grid  place-items-center mt-24">
          <div>You Shopping Bag Is Empty.</div>
        </div>
      )}

      <div
        className="fixed bottom-0 left-0 right-0 bg-black 
      text-color=#fff h-14 pt-3 text-center text-white phone-width"
      >
        <div className="flex place-content-center ">
          <ShoppingBag className="mr-4" color="#fff" />
          CONTINUE SHOPPING
        </div>
      </div>
    </div>
  );
};

export default Cart;
