import { Back } from "../common/Icon";
import { Logo } from "../common/Logo";

const Login = () => {
  return (
    <>
      <div className="flex  h-10 pt-2 pr-12 items-end w-full ">
        <Back className=" ml-2 " onClick={() => history.go(-1)} />
        <Logo className="h-8 m-auto" />
      </div>
    </>
  );
};

export default Login;
