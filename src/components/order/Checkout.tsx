import { useState } from "react";
import Header from "../common/Header";
import { ShoppingBag } from "../common/Icon";
import PaymentSuccess from "./PaymentSuccess";
import { OrderItems } from "./PlaceOrder";
import { AddressView } from "./AddNewAddress";
import { CardView } from "./AddNewCard";
import { Address, PaymentCard } from "../data/User";

const Checkout = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  let shippingAddress: Address = {
    username: "",
    first_name: "Name",
    second_name: "Second_name",
    address: "Address",
    city: "city",
    state: "state",
    zip: "1000",
    phone: "13111111111",
  };
  let paymentCard: PaymentCard = {
    username: "",
    card_type: 1,
    card_name: "name",
    card_num: "1222333444556",
    exp_mon: "3",
    exp_date: "2025/01/01",
    cvv: "003",
  };
  return (
    <div>
      <Header />
      <div className="m-4 mb-16">
        <div className="mt-4">
          <OrderItems />
        </div>
        <AddressView address={shippingAddress} />
        <CardView card={paymentCard} />
      </div>

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
