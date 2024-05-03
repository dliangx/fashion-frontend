import { useContext } from "react";
import { CartItem } from "../data/Cart";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { MINUS, Plus } from "../common/Icon";

const CartItemView = (props: CartItem) => {
  const { setTabIndex } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full m-2">
        <div className="h32 w-1/4">
          <img
            src={props.pic}
            alt={props.name}
            onClick={() => {
              setTabIndex(3);
              navigate("/product/" + props.id.toString());
            }}
          />
        </div>
        <div className="h32 w-3/4 ml-2">
          <div className="font-mono text-xl  mt-4">{props.brand}</div>
          <div className="font-sans">{props.name}</div>
          <div>
            <button className="w-6 h-6 mr-2 rounded-full border text-xs  align-text-top justify-center">
              <MINUS className="w-3" />
            </button>
            {props.num}
            <button className="w-6 h-6 ml-2 rounded-full border text-xs  align-text-top">
              <Plus className="h-4" />
            </button>
          </div>
          <div className="font-sans text-orange-500">${props.price}</div>
        </div>
      </div>
    </>
  );
};

export default CartItemView;
