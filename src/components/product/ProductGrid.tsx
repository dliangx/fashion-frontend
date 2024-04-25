import { ProductInfo } from "../data/Product";

const ProductGrid = (props: ProductInfo) => {
  return (
    <div className="grid  m-2">
      <img src={props.pic} alt={props.name} onClick={() => {}} />
      <div className="text-xl font-mono">{props.brand}</div>
      <div className="font-sans">{props.name}</div>
      <div className="font-sans">${props.price}</div>
    </div>
  );
};

export default ProductGrid;
