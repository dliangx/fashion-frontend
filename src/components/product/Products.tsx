import { ProductInfo } from "../data/Product";
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";

type productsProps = {
  products: ProductInfo[];
  option: number;
};

const Products = (props: productsProps) => {
  return (
    <>
      <div className="flex flex-wrap w-full p-2">
        {props.option == 1 &&
          props.products.map((product, index) => {
            return (
              <div className="w-1/2">
                <ProductGrid {...product} key={index} />
              </div>
            );
          })}
      </div>

      <div className="w-full p-2">
        {props.option == 2 &&
          props.products.map((product, index) => {
            return <ProductList {...product} key={index} />;
          })}
      </div>
      <div className="grid w-full p-2">
        {props.option == 3 &&
          props.products.map((product, index) => {
            return (
              <div className="">
                <ProductGrid {...product} key={index} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
