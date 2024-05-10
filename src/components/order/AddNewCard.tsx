import { useState } from "react";
import { Down, Forward } from "../common/Icon";
import { PaymentCard } from "../data/User";

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
        <div className="ml-8 h-10 place-content-end ">Add New Card</div>
      )}
    </div>
  );
};
const AddNewCard = () => {
  return <></>;
};

export default AddNewCard;
