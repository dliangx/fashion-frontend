import { useState } from "react";
import { Back, Forward, ForwardArrow } from "../common/Icon";
import { Logo } from "../common/Logo";

const Login = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <div className="flex  h-10 pt-2 pr-12 items-end w-full ">
        <Back className=" ml-2 " onClick={() => history.go(-1)} />
        <Logo className="h-8 m-auto" />
      </div>
      <div className="  mt-20 ">
        <div className="flex w-4/5 m-auto  pb-4">
          <button className="w-1/2 mr-2 h-8" onClick={() => setTab(1)}>
            <div className="text-center">LOGIN</div>
          </button>
          <button className="w-1/2 ml-2 h-8" onClick={() => setTab(2)}>
            <div className="text-center ">REGISTER</div>
          </button>
        </div>
        {tab == 1 && (
          <>
            <div className="flex">
              <input
                placeholder="username"
                type="text"
                className="w-4/5  m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                autoFocus
              ></input>
            </div>
            <div className="flex ">
              <div className=" relative w-4/5   m-auto place-items-end ">
                <input
                  placeholder="password"
                  type="text"
                  className="w-full   m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                  autoFocus
                ></input>
                <ForwardArrow className="absolute bottom-2 right-2 z-10 " />
              </div>
            </div>
          </>
        )}
        {tab == 2 && (
          <>
            <div className="flex">
              <input
                placeholder="username"
                type="text"
                className="w-4/5  m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                autoFocus
              ></input>
            </div>
            <div className="flex ">
              <div className=" relative w-4/5   m-auto place-items-end ">
                <input
                  placeholder="password"
                  type="text"
                  className="w-full   m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                  autoFocus
                ></input>
              </div>
            </div>
            <div className="flex ">
              <div className=" relative w-4/5   m-auto place-items-end ">
                <input
                  placeholder="password"
                  type="text"
                  className="w-full   m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                  autoFocus
                ></input>
                <ForwardArrow className="absolute bottom-2 right-2 z-10 " />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
