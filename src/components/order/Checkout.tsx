import { useState } from "react";
import Header from "../common/Header";
import { ShoppingBag } from "../common/Icon";
import PaymentSuccess from "./PaymentSuccess";

const Checkout = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div>
      <Header />
      {isSuccess && (
        <PaymentSuccess
          onclick={() => {
            setIsSuccess(false);
          }}
        />
      )}
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black text-white border-none phone-width   place-content-center z-50">
        <div
          className="flex  text-center  place-content-center"
          onClick={() => {
            setIsSuccess(true);
          }}
        >
          <ShoppingBag className="mr-4" color="white" />
          <div>CHECKOUT</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
