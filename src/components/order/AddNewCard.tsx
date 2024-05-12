import { useState } from "react";
import { Close, Down, Forward } from "../common/Icon";
import { PaymentCard } from "../data/User";
import { createPortal } from "react-dom";
import CustomInput from "./CustomInput";

export const CardView = (props: { card: PaymentCard }) => {
  function card_name(index: number) {
    if (index == 1) {
      return "Master Card";
    } else if (index == 2) {
      return "VISA";
    } else if (index == 3) {
      return "Union Pay";
    }
  }
  function card_icon(index: number) {
    if (index == 1) {
      return <img src="/icon/Master-Card.svg" className="h-10" />;
    } else if (index == 2) {
      return <img src="/icon/VISA.svg" />;
    } else if (index == 3) {
      return <img src="/icon/Union-Pay.svg" />;
    }
  }
  return (
    <div className="flex pt-4 pb-4 place-items-center border-b">
      {card_icon(props.card.card_type)}
      {card_name(props.card.card_type)}&nbsp;
      {props.card.card_num.slice(-4)}
      <div className="m-auto"></div>
      <div className="ml-8 place-content-center">
        <Forward />
      </div>
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
  const name_regular = "^.{3,30}$";

  // const visa_card_regular = "^4[0-9]{12}(?:[0-9]{3})?$"; // Visa
  // const master_card_regular = "^5[1-5][0-9]{14}$"; // MasterCard
  // const american_card_regular = "^3[47][0-9]{13}$"; // American Express
  // const diners_club_regular = "^3(?:0[0-5]|[68][0-9])[0-9]{11}$ "; // Diners Club
  // const discover_club_regular = "^6(?:011|5[0-9]{2})[0-9]{12}$"; // Discover
  // const jcb_club_regular = "^(?:2131|1800|35d{3})d{11}$"; // JCB";
  // const union_pay_regular = "^62[0-9]{14,17}$"; //UnionPay
  const card_regular =
    "^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11}|62[0-9]{14,17})$";
  const month_regular = "^[0-9]{2}$";
  const year_regular = "^[0-9]{4}$";
  const cvv_regular = "^[0-9]{3,4}$";

  const [cardDate, setCardDate] = useState<PaymentCard>({
    username: "",
    card_type: 0,
    card_name: "",
    card_num: "",
    exp_mon: "",
    exp_date: "",
    cvv: "",
  });

  function handleAddCard() {}

  return (
    <div className="modal phone-width">
      <Close className="m-4" onClick={props.onClose} />
      <div className="grid place-items-center mt-10 mb-8">
        <h1 className="text-center text-xl ">PAYMENT METHOD</h1>
        <img src="/assets/underline.svg"></img>
      </div>
      <div className="m-4">
        <CustomInput
          locationStyle={"mt-4"}
          placeholder={"Name On Card"}
          type={"text"}
          regular={name_regular}
          errorMsg={"please input the name on credit card"}
          setValue={(value) => {
            if (value != undefined) {
              setCardDate({ ...cardDate, card_name: value });
            }
          }}
        />
        <CustomInput
          locationStyle={"mt-4"}
          placeholder={"Card Number"}
          type={"text"}
          regular={card_regular}
          errorMsg={"please input credit card number"}
          setValue={(value) => {
            if (value != undefined) {
              setCardDate({ ...cardDate, card_num: value });
            }
          }}
        />

        <div className="flex">
          <CustomInput
            locationStyle={"w-1/2 mt-4 mr-2"}
            placeholder={"Exp Month"}
            type={"number"}
            regular={month_regular}
            errorMsg={"please input month"}
            setValue={(value) => {
              if (value != undefined) {
                setCardDate({ ...cardDate, exp_mon: value });
              }
            }}
          />
          <CustomInput
            locationStyle={"w-1/2 mt-4 ml-2"}
            placeholder={"Exp Year"}
            type={"number"}
            regular={year_regular}
            errorMsg={"please input year"}
            setValue={(value) => {
              if (value != undefined) {
                setCardDate({ ...cardDate, exp_mon: value });
              }
            }}
          />
        </div>
        <CustomInput
          locationStyle={"w-full mt-4"}
          placeholder={"CVV"}
          type={"text"}
          regular={cvv_regular}
          errorMsg={"please input credit card CVV"}
          setValue={(value) => {
            if (value != undefined) {
              setCardDate({ ...cardDate, cvv: value });
            }
          }}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black text-white border-none phone-width   place-content-center">
        <div
          className="flex  text-center  place-content-center"
          onClick={handleAddCard}
        >
          <div>ADD CARD</div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
