import { Heart } from "../common/Icon";
import { ProductInfo } from "../data/Product";

const ProductList = (props: ProductInfo) => {
  return (
    <>
      <div className="flex w-full m-2">
        <div className="h32 w-1/4">
          <img src={props.pic} alt={props.name} onClick={() => {}} />
        </div>
        <div className="h32 w-3/4 ml-2">
          <div className="h8 mt-4">{props.brand}</div>
          <div className="h6">{props.name}</div>
          <div className="h6">${props.price}</div>
          <div className="flex h6 place-items-center mt-2">
            <img src="/assets/favorite.svg" />
            <div className="">{props.rating} Rating</div>
            <div className="m-auto"></div>
            <div>
              <Heart className="mr-8 w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
