import { ProductInfo } from "../data/Product";

const ProductGrid = (props: ProductInfo) => {
  return (
    <div className="grid  m-2">
      <img src={props.pic} alt={props.name} onClick={() => {}} />
      <div className="h6">{props.brand}</div>
      <div className="h6">{props.name}</div>
      <div className="h6">${props.price}</div>
    </div>
  );
};

export default ProductGrid;
