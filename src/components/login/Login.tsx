import { Back } from "../common/Icon";
import { Logo } from "../common/Logo";

const Login = () => {
  return (
    <>
      <div className="flex mt-4">
        <Back className=" ml-4 " onClick={() => history.go(-1)} />
        <Logo className="h-8 m-auto pr-8" />
      </div>
    </>
  );
};

export default Login;
