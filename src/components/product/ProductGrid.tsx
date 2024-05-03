import { useContext } from "react";
import { ProductInfo } from "../data/Product";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Heart } from "../common/Icon";
import { FavoriteContext } from "../cart/FavoriteContext";

const ProductGrid = (props: ProductInfo) => {
  const { setTabIndex } = useContext(AppContext);
  const navigate = useNavigate();
  const { dispatch } = useContext(FavoriteContext);

  return (
    <div className="grid  m-2">
      <div className="relative">
        <img
          src={props.pic}
          alt={props.name}
          onClick={() => {
            setTabIndex(3);
            navigate("/product/" + props.id.toString());
          }}
        />

        <Heart
          className="absolute right-2 bottom-2 h-4 "
          color="#ff4700"
          onClick={() => {
            if (localStorage.getItem("user_token") == undefined) {
              navigate("/login");
              return;
            }
            dispatch != null &&
              dispatch({
                type: "ADD",
                payload: {
                  id: props.id,
                  pic: props.pic,
                  brand: props.brand,
                  name: props.name,
                  price: props.price,
                },
              });
          }}
        />
      </div>
      <div className="font-serif text-lg">{props.brand}</div>
      <div className="font-sans">{props.name}</div>
      <div className="font-sans text-orange-500">${props.price}</div>
    </div>
  );
};

export default ProductGrid;
