import { useState } from "react";
import { Close, Down, Forward } from "../common/Icon";
import { Address } from "../data/User";
import { createPortal } from "react-dom";
import CustomInput from "./CustomInput";

export const ShippingMethod = (props: {
  shippingMethod: string;
  setShippingMethod: any;
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<number>(-1);
  const methods = ["Express(Free)", "Pickup at store"];
  return (
    <div className="mt-4">
      <div>SHIPPING METHOD</div>

      <button
        className="w-full  rounded-3xl p-3 mt-2"
        onClick={() => {
          setIsCollapse(isCollapse ? false : true);
        }}
      >
        <div className="flex">
          {selectIndex < 0 && <div>Select shipping method</div>}
          {selectIndex >= 0 && <div>{methods[selectIndex]}</div>}
          <div className="m-auto"></div>
          {isCollapse && <Down />}
          {!isCollapse && <Forward />}
        </div>
      </button>
      {isCollapse &&
        methods.map((item, index) => {
          return (
            <div
              className="ml-8 h-10 place-content-end"
              key={index}
              onClick={() => {
                setSelectIndex(index);
                setIsCollapse(false);
                props.setShippingMethod(methods[index]);
              }}
            >
              {item}
            </div>
          );
        })}
    </div>
  );
};

export const AddressView = (props: { address: Address }) => {
  return (
    <div className="flex  pt-4 pb-4 border-b">
      <div>
        <div className="font-serif">
          {props.address.first_name}&nbsp;
          {props.address.second_name}
        </div>
        <div>
          {props.address.zip}
          {props.address.state}
        </div>
        <div>{props.address.address}</div>
        <div>{props.address.phone}</div>
      </div>
      <div className="m-auto"></div>
      <div className="ml-8 place-content-center">
        <Forward />
      </div>
    </div>
  );
};

export const ShippingAddress = (props: {
  shippingAddress: Address[];
  setShippingAddress: any;
  setSelectShippingAddressIndex: any;
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);
  const [isShowAddNewAddress, setIsShowAddNewAddress] = useState(false);
  return (
    <div>
      <div>SHIPPING ADDRESS</div>
      {index >= 0 && <AddressView address={props.shippingAddress[index]} />}
      <button
        className="w-full  rounded-3xl p-3 mt-2"
        onClick={() => {
          setIsCollapse(isCollapse ? false : true);
        }}
      >
        <div className="flex">
          <div className=" ">Select shipping address</div>
          <div className="m-auto"></div>
          {isCollapse && <Down />}
          {!isCollapse && <Forward />}
        </div>
      </button>
      {isCollapse &&
        props.shippingAddress != undefined &&
        props.shippingAddress.map((address, index) => {
          setIndex(index);
          props.setSelectShippingAddressIndex(index);
          return <AddressView address={address} key={index} />;
        })}
      {isCollapse && props.shippingAddress.length == 0 && (
        <div
          className="ml-8 h-10 place-content-end "
          onClick={() => {
            setIsShowAddNewAddress(true);
          }}
        >
          Add New address
        </div>
      )}
      {isShowAddNewAddress &&
        createPortal(
          <AddNewAddress
            onClose={() => {
              setIsShowAddNewAddress(false);
            }}
          ></AddNewAddress>,
          document.body
        )}
    </div>
  );
};

const AddNewAddress = (props: { onClose: any }) => {
  const name_regular = "^.{3,30}$";
  const address_regular = "^.{3,60}$";
  const city_state_regular = "^.{1,20}$";
  const zip_regular = "^.{3,10}$";
  const phone_regular = "^1[3-9][0-9]{9}$";

  return (
    <div className="modal phone-width">
      <Close className="m-4" onClick={props.onClose} />
      <div className="grid place-items-center mt-10 mb-8">
        <h1 className="text-center text-xl ">ADD SHIPPING ADDRESS</h1>
        <img src="/assets/underline.svg"></img>
      </div>
      <div className="m-4">
        <div className="flex">
          <CustomInput
            locationStyle={"w-1/2 mt-4 mr-2 "}
            placeholder={"First name"}
            type={"text"}
            regular={name_regular}
            errorMsg={"input length 3-30"}
          />
          <CustomInput
            locationStyle={"w-1/2  mt-4 ml-2"}
            placeholder={"Second name"}
            type={"text"}
            regular={name_regular}
            errorMsg={"input length 3-30"}
          />
        </div>

        <CustomInput
          locationStyle={"mt-4 "}
          placeholder={"Address"}
          type={"text"}
          regular={address_regular}
          errorMsg={"please input address,length is 3-60 "}
        />
        <CustomInput
          locationStyle={"mt-4 "}
          placeholder={"City"}
          type={"text"}
          regular={city_state_regular}
          errorMsg={"please input city,max length is 20"}
        />

        <div className="flex">
          <CustomInput
            locationStyle={"w-1/2 mt-4 mr-2"}
            placeholder={"State"}
            type={"text"}
            regular={city_state_regular}
            errorMsg={"max length is 20"}
          />
          <CustomInput
            locationStyle={"w-1/2  mt-4 ml-2"}
            placeholder={"ZIP code"}
            type={"text"}
            regular={zip_regular}
            errorMsg={"max length is 20"}
          />
        </div>
        <CustomInput
          locationStyle={"mt-4 w-full"}
          placeholder={"Phone Number"}
          type={"text"}
          regular={phone_regular}
          errorMsg={"please input cellphone number"}
        />
      </div>
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-black text-white border-none phone-width   place-content-center">
        <div className="flex  text-center  place-content-center">
          <div>ADD NOW</div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
