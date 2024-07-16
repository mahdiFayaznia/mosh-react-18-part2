import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import NavBar from "./NavBar";

const PrivateRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default PrivateRoutes;
