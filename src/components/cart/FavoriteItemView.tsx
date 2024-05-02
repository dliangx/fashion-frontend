import { useContext } from "react";
import { FavoriteItem } from "../data/Cart";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

const FavoriteItemView = (props: FavoriteItem) => {
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
          <div className="font-sans text-orange-500">${props.price}</div>
        </div>
      </div>
    </>
  );
};

export default FavoriteItemView;
