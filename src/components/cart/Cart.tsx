import { Close, ShoppingBag } from "../common/Icon";

const Cart = () => {
  return (
    <div className="h-full">
      <Close className="m-2" onClick={() => history.go(-1)} />
      <div className="m-3">CART</div>

      <div className="fixed bottom-0 left-0 right-0 bg-black text-color=#fff h-12 pt-3 text-center text-white ">
        <div>
          <ShoppingBag className="absolute top-2 left-20 z-20" color="#fff" />
          CONTINUE SHOPPING
        </div>
      </div>
    </div>
  );
};

export default Cart;
