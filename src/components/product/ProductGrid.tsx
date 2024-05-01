import { useContext } from "react";
import { ProductInfo } from "../data/Product";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { Heart } from "../common/Icon";

const ProductGrid = (props: ProductInfo) => {
  const { setTabIndex } = useContext(AppContext);
  const navigate = useNavigate();
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

        <Heart className="absolute right-2 bottom-2 h-4 " color="#ff4700" />
      </div>
      <div className="font-serif text-lg">{props.brand}</div>
      <div className="font-sans">{props.name}</div>
      <div className="font-sans text-orange-500">${props.price}</div>
    </div>
  );
};

export default ProductGrid;
