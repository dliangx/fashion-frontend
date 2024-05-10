import { useState } from "react";
import { Close, Down, Forward } from "../common/Icon";
import { PaymentCard } from "../data/User";
import { createPortal } from "react-dom";

export const CardView = (props: { card: PaymentCard }) => {
  return (
    <div className="flex">
      {props.card.card_type}
      {props.card.card_num.slice(-4)}
    </div>
  );
};

export const PaymentMethod = (props: {
  paymentMethod: PaymentCard[];
  setPaymentMethod: any;
  setSelectPaymentMethodIndex: any;
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [isShowAddNewCard, setIsShowAddNewCard] = useState(false);
  return (
    <div className="mt-4">
      <div>PAYMENT METHOD</div>
      {index >= 0 && <CardView card={props.paymentMethod[index]} />}
      <button
        className="w-full  rounded-3xl p-3 mt-2"
        onClick={() => {
          setIsCollapse(isCollapse ? false : true);
        }}
      >
        <div className="flex">
          <div className=" ">Select payment method</div>
          <div className="m-auto"></div>
          {isCollapse && <Down />}
          {!isCollapse && <Forward />}
        </div>
      </button>
      {isCollapse &&
        props.paymentMethod != undefined &&
        props.paymentMethod.map((card, index) => {
          setIndex(index);
          props.setSelectPaymentMethodIndex(index);
          return <CardView card={card} key={index} />;
        })}
      {isCollapse && props.paymentMethod.length == 0 && (
        <div
          className="ml-8 h-10 place-content-end "
          onClick={() => {
            setIsShowAddNewCard(true);
          }}
        >
          Add New Card
        </div>
      )}

      {isShowAddNewCard &&
        createPortal(
          <AddNewCard
            onClose={() => {
              setIsShowAddNewCard(false);
            }}
          ></AddNewCard>,
          document.body
        )}
    </div>
  );
};
const AddNewCard = (props: { onClose: any }) => {
  return (
    <div className="modal phone-width">
      <Close className="m-4" onClick={props.onClose} />
      <div className="grid place-items-center mt-10 mb-8">
        <h1 className="text-center text-xl ">PAYMENT METHOD</h1>
        <img src="/assets/underline.svg"></img>
      </div>
      <div className="m-4">
        <input
          placeholder="Name On Card"
          className="w-full  h-12 mb-4 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
        />
        <input
          placeholder="Card Number"
          className="w-full  h-12 mb-4 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
        />
        <div className="flex">
          <input
            placeholder="Exp Month"
            className="w-1/2  h-12 mb-4 mr-2 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
          />
          <input
            placeholder="Exp Date"
            className="w-1/2  h-12 mb-4 ml-2 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
          />
        </div>
        <input
          placeholder="CVV"
          className="w-full  h-12 mb-4 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black text-white border-none phone-width   place-content-center">
        <div className="flex  text-center  place-content-center">
          <div>ADD CARD</div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
