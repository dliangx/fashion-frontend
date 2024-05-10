import { useState } from "react";
import { Close, Down, Forward } from "../common/Icon";
import { Address } from "../data/User";
import { createPortal } from "react-dom";

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
  return (
    <div className="modal">
      <Close className="m-4" onClick={props.onClose} />
      <div className="grid place-items-center mt-10 mb-8">
        <h1 className="text-center text-xl ">ADD SHIPPING ADDRESS</h1>
        <img src="/assets/underline.svg"></img>
      </div>
      <div className="m-4">
        <div className="flex">
          <input
            placeholder="First name"
            className="w-1/2  h-12 mb-4 mr-2 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
          />
          <input
            placeholder="Second name"
            className="w-1/2  h-12 mb-4 ml-2 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
          />
        </div>
        <input
          placeholder="Address"
          className="w-full  h-12 mb-4 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
        />
        <input
          placeholder="City"
          className="w-full  h-12 mb-4 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
        />
        <div className="flex">
          <input
            placeholder="State"
            className="w-1/2  h-12 mb-4 mr-2 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
          />
          <input
            placeholder="ZIP code"
            className="w-1/2  h-12 mb-4 ml-2 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
          />
        </div>
        <input
          placeholder="Phone number"
          className="w-full  h-12 mb-4 bg-transparent p-2  border-b  rounded-none border-gray-600 hover:border-gray-300 focus:outline-none "
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
