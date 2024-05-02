import { useContext } from "react";
import { CartItem } from "../data/Cart";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

const CartItemView = (props: CartItem) => {
  const { setTabIndex } = useContext(AppContext);
  const navigate = useNavigate();
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
          <button className="w-5 h-5  rounded-full border-2 text-xs  align-text-top">
            -
          </button>
          {props.num}
          <button className="w-5 h-5  rounded-full border-2 text-xs  align-text-top">
            +
          </button>
        </div>
        <div className="font-sans text-orange-500">${props.price}</div>
      </div>
    </div>
  </>;
};

export default CartItemView;
