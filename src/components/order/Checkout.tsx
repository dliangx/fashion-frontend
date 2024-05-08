import Header from "../common/Header";
import { ShoppingBag } from "../common/Icon";

const Checkout = () => {
  return (
    <div>
      <Header />

      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black text-white border-none phone-width   place-content-center">
        <div className="flex  text-center  place-content-center">
          <ShoppingBag className="mr-4" color="white" />
          <div>CHECKOUT</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
