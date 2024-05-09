import { useState } from "react";
import { Forward } from "../common/Icon";
import { Address } from "../data/User";

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
          <Forward />
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
    <div>
      <div>
        {props.address.first_name}
        {props.address.second_name}
      </div>
      <div>
        {props.address.zip}
        {props.address.state}
      </div>
      <div>{props.address.address}</div>
      <div>{props.address.phone}</div>
    </div>
  );
};

export const ShippingAddress = (props: {
  shippingAddress: Address[];
  setShippingAddress: any;
  setSelectShippingAddressIndex: any;
}) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  return (
    <div>
      <div>SHIPPING ADDRESS</div>

      <button
        className="w-full  rounded-3xl p-3 mt-2"
        onClick={() => {
          setIsCollapse(isCollapse ? false : true);
        }}
      >
        <div className="flex">
          <div className=" ">Select shipping address</div>
          <div className="m-auto"></div>
          <Forward />
        </div>
      </button>
      {isCollapse &&
        props.shippingAddress != undefined &&
        props.shippingAddress.map((address, index) => {
          return <AddressView address={address} key={index} />;
        })}
      {isCollapse && props.shippingAddress.length == 0 && (
        <div className="ml-8 h-10 place-content-end ">Add New address</div>
      )}
    </div>
  );
};

const AddNewAddress = () => {
  return <></>;
};

export default AddNewAddress;
