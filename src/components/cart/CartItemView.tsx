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
          <div className="flex mt-2 mb-2">
            <button className="mr-2 rounded-full border   place-content-center ">
              <MINUS />
            </button>
            <div className=" align-middle">{props.num}</div>

            <button className="ml-2 rounded-full border">
              <Plus />
            </button>
          </div>
          <div className="font-sans text-orange-500">${props.price}</div>
        </div>
      </div>
    </>
  );
};

export default CartItemView;
