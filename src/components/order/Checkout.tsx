import { useState } from "react";
import Header from "../common/Header";
import { ShoppingBag } from "../common/Icon";
import PaymentSuccess from "./PaymentSuccess";
import { OrderItems } from "./PlaceOrder";
import { AddressView } from "./AddNewAddress";
import { CardView } from "./AddNewCard";
import { Address, PaymentCard } from "../data/User";

const Checkout = (props: { order_sn: string }) => {
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
    id: 0,
    username: "",
    card_type: 1,
    card_name: "name",
    card_num: "1222333444556",
    exp_mon: "3",
    exp_year: "2025",
    cvv: "003",
  };
  return (
    <div>
      <Header />
      <div className="m-4 mb-16">
        <div className="mt-4">
          <OrderItems />
        </div>
        <AddressView address={shippingAddress} onclick={() => {}} />
        <CardView card={paymentCard} onclick={() => {}} />
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
            const username = localStorage.getItem("username");
            const bodyStr = JSON.stringify({
              user_name: username,
              order_sn: "ordersn",
            });
            const url = import.meta.env.VITE_API_URL + "/api/checkout";
            const token = localStorage.getItem("user_token");
            fetch(url, {
              method: "POST",
              body: bodyStr,
              headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + token,
              },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
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
