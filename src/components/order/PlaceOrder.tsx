import { useContext, useEffect, useState } from "react";
import Header from "../common/Header";
import { ShoppingBag } from "../common/Icon";
import { CartContext } from "../cart/CartContext";
import { ShippingAddress, ShippingMethod } from "./AddNewAddress";
import { PaymentMethod } from "./AddNewCard";
import { Address, PaymentCard } from "../data/User";
import { createPortal } from "react-dom";
import AlertModal from "../product/AlertModal";

export const OrderItems = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      {state.items.map((item, index) => {
        return (
          <div className="flex w-full mt-4 mb-4" key={index}>
            <div className="h32 w-1/4">
              <img src={item.pic} alt={item.name} />
            </div>
            <div className="h32 w-3/4 ml-2  space-y-2">
              <div className="font-mono text-xl  mt-4">{item.brand}</div>
              <div className="font-sans">{item.name}</div>
              <div className="flex flex-wrap">
                {item.attr.map((attr, index) => {
                  return (
                    <div className="flex font-sans " key={index}>
                      <div>{attr.name}-</div>
                      <div>({attr.value});</div>
                    </div>
                  );
                })}
              </div>
              <div className="font-sans text-orange-500">
                ${item.price} * {item.num}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const PlaceOrder = () => {
  const [shippingAddress, setShippingAddress] = useState<Address[]>([]);
  const [shippingMethod, setShippingMethod] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentCard[]>([]);

  const [selectShippingAddressIndex, setSelectShippingAddressIndex] =
    useState<number>(-1);
  const [selectPaymentMethodIndex, setSelectPaymentMethodIndex] =
    useState<number>(-1);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const handlePlaceOrder = () => {
    if (selectPaymentMethodIndex < 0) {
      setAlertMsg("please select payment method!");
      setIsShowAlert(true);
    }
    if (selectShippingAddressIndex < 0) {
      setAlertMsg("please select shipping address!");
      setIsShowAlert(true);
    }
    if (shippingMethod == "") {
      setAlertMsg("please select shipping method!");
      setIsShowAlert(true);
    }
    //place order
  };

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username != undefined) {
      const url = import.meta.env.VITE_API_URL + "/api/get_shipping_address";
      const bodyStr = JSON.stringify({ username: username });
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
          setShippingAddress(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username != undefined) {
      const url = import.meta.env.VITE_API_URL + "/api/get_payment_method";
      const bodyStr = JSON.stringify({ username: username });
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
          setPaymentMethod(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="m-4 mb-16">
        <div className="mt-4">
          <OrderItems />
        </div>

        <ShippingAddress
          shippingAddress={shippingAddress}
          setShippingAddress={setShippingAddress}
          setSelectShippingAddressIndex={setSelectShippingAddressIndex}
        />
        <ShippingMethod
          setShippingMethod={setShippingMethod}
          shippingMethod={shippingMethod}
        />

        <PaymentMethod
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          setSelectPaymentMethodIndex={setSelectPaymentMethodIndex}
        />
      </div>
      {isShowAlert &&
        createPortal(
          <AlertModal
            content={alertMsg}
            onClose={() => {
              setIsShowAlert(false);
            }}
          />,
          document.body
        )}
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black text-white border-none phone-width   place-content-center">
        <div
          className="flex  text-center  place-content-center"
          onClick={handlePlaceOrder}
        >
          <ShoppingBag className="mr-4" color="white" />
          <div>PLACE ORDER</div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
