import { Close, ShoppingBag } from "../common/Icon";

const Cart = () => {
  return (
    <div className="h-full">
      <Close className="m-2" onClick={() => history.go(-1)} />
      <div className="m-3">CART</div>

      <div className="grid place-items-center min-h-screen pb-12">
        <div>You have no items in you Shopping Bag.</div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black text-color=#fff h-14 pt-3 text-center text-white phone-width">
        <div>
          <ShoppingBag className="absolute top-2 left-20 z-20" color="#fff" />
          CONTINUE SHOPPING
        </div>
      </div>
    </div>
  );
};

export default Cart;
