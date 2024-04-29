import { useRef, useState } from "react";
import { Back, ForwardArrow } from "../common/Icon";
import { Logo } from "../common/Logo";

const Login = () => {
  const [tab, setTab] = useState(1);
  const [loginName, setLoginName] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [registerRep, setRegisterRep] = useState("");
  const [error, setError] = useState("");

  const loginNameRef = useRef<HTMLInputElement>(null);
  const loginPassRef = useRef<HTMLInputElement>(null);
  const registerNameRef = useRef<HTMLInputElement>(null);
  const registerPassRef = useRef<HTMLInputElement>(null);
  const registerRepRef = useRef<HTMLInputElement>(null);

  const regexUsername = "^[a-zA-Z][a-zA-Z0-9_]{4,15}$";
  const regexPassword = "^[a-zA-Z]w{5,17}$";

  function regex_username_test(username: string) {
    if (username != "" && !username.match(regexUsername)) {
      setError(
        "username consists of characters and numbers, and is between 5 and 16 in length "
      );
    } else {
      setError("");
    }
  }

  function regex_password_test(password: string) {
    if (password != "" && !password.match(regexPassword)) {
      setError(
        "password starts with a letter, is between 6~18 in length, and can only contain letters, numbers, and underscores "
      );
    } else {
      setError("");
    }
  }

  function handle_login(username: string, password: string) {
    if (username == "") {
      console.log("please fill username ");
      loginNameRef.current?.focus();
    }
    if (password == "") {
      console.log("please fill password");
      loginPassRef.current?.focus();
    }
    if (error != "") {
      console.log(error);
    }
  }

  function handle_register(
    username: string,
    password: string,
    passwordRep: string
  ) {
    if (username == "") {
      console.log("please fill username ");
      registerNameRef.current?.focus();
    }
    if (password == "") {
      console.log("please fill password");
      registerPassRef.current?.focus();
    }
    if (passwordRep == "") {
      console.log("please fill password");
      registerRepRef.current?.focus();
    }
    if (error != "") {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex  h-10 pt-2 pr-12 items-end w-full ">
        <Back className=" ml-2 " onClick={() => history.go(-1)} />
        <Logo className="h-8 m-auto" />
      </div>
      <div className="  mt-20 ">
        <div className="flex w-4/5 m-auto  pb-4">
          <button
            className={`w-1/2 mr-2 h-8 ${
              tab == 1 && `border-orange-400 border-2`
            } `}
            onClick={() => setTab(1)}
          >
            <div className="text-center">LOGIN</div>
          </button>
          <button
            className={`w-1/2 ml-2 h-8" ${
              tab == 2 && `border-orange-400 border-2`
            } `}
            onClick={() => setTab(2)}
          >
            <div className="text-center ">REGISTER</div>
          </button>
        </div>
        {tab == 1 && (
          <>
            <div className="flex">
              <input
                placeholder="username"
                type="text"
                ref={loginNameRef}
                value={loginName}
                onChange={(e) => {
                  regex_username_test(e.target.value);
                  setLoginName(e.target.value);
                }}
                className="w-4/5  m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                autoFocus
              ></input>
            </div>
            <div className="flex ">
              <div className=" relative w-4/5   m-auto place-items-end ">
                <input
                  placeholder="password"
                  type="password"
                  ref={loginPassRef}
                  value={loginPass}
                  onChange={(e) => {
                    regex_password_test(e.target.value);
                    setLoginPass(e.target.value);
                  }}
                  className="w-full   m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                ></input>
                <ForwardArrow
                  className="absolute bottom-2 right-2 z-10 "
                  onClick={() => handle_login(loginName, loginPass)}
                />
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
                ref={registerNameRef}
                value={registerName}
                onChange={(e) => {
                  regex_username_test(e.target.value);
                  setRegisterName(e.target.value);
                }}
                className="w-4/5  m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                autoFocus
              ></input>
            </div>
            <div className="flex ">
              <div className=" relative w-4/5   m-auto place-items-end ">
                <input
                  placeholder="password"
                  type="password"
                  ref={registerPassRef}
                  value={registerPass}
                  onChange={(e) => {
                    regex_password_test(e.target.value);
                    setRegisterPass(e.target.value);
                  }}
                  className="w-full   m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                ></input>
              </div>
            </div>
            <div className="flex ">
              <div className=" relative w-4/5   m-auto place-items-end ">
                <input
                  placeholder="password"
                  type="password"
                  ref={registerRepRef}
                  value={registerRep}
                  onChange={(e) => {
                    regex_password_test(e.target.value);
                    setRegisterRep(e.target.value);
                  }}
                  className="w-full   m-auto h-12 bg-transparent p-2 border-b border-gray-600 hover:border-gray-300 focus:outline-none "
                ></input>
                <ForwardArrow
                  className="absolute bottom-2 right-2 z-10 "
                  onClick={() =>
                    handle_register(registerName, registerPass, registerRep)
                  }
                />
              </div>
            </div>
          </>
        )}
        {error != "" && (
          <div className="mt-10 w-4/5   m-auto  text-center  text-orange-400">
            {error}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
