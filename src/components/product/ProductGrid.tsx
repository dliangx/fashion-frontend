import { useContext } from "react";
import { ProductInfo } from "../data/Product";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

const ProductGrid = (props: ProductInfo) => {
  const { setTabIndex } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="grid  m-2">
      <img
        src={props.pic}
        alt={props.name}
        onClick={() => {
          setTabIndex(3);
          navigate("/product/" + props.id.toString());
        }}
      />
      <div className="font-serif text-lg">{props.brand}</div>
      <div className="font-sans">{props.name}</div>
      <div className="font-sans">${props.price}</div>
    </div>
  );
};

export default ProductGrid;
