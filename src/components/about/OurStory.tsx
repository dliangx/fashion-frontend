import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";

const OurStory = () => {
  const navigate = useNavigate();

  const isUserLoggedIn = () => {
    return !!localStorage.getItem("user_token");
  };
  return (
    <>
      <Header />
      {!isUserLoggedIn() && (
        <div>
          <div className="h-10 mt-20 font-sans  text-xl  text-center">
            Welcome to your account
          </div>
          <div>
            <div className="w-4/5 m-auto mt-10  pb-4">
              <button
                className="text-center w-full mr-2 h-12 bg-black  text-white"
                onClick={() => navigate("/login")}
              >
                LOGIN
              </button>
            </div>
            <div className="w-4/5 m-auto  pb-4">
              <button
                className="text-center w-full mr-2 h-12 bg-black bg-opacity-10"
                onClick={() => navigate("/register")}
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      )}
      {isUserLoggedIn() && (
        <div>
          <div className="h-10 mt-20 font-sans  text-xl  text-center">
            CONTACT ME
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default OurStory;
