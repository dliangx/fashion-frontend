import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isUserLoggedIn = () => {
    return !!localStorage.getItem("userToken");
  };
  let location = useLocation();
  if (!isUserLoggedIn()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
