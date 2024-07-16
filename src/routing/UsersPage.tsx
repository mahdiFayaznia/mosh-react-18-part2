import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";

const UsersPage = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="grid grid-cols-2">
      <div>
        <UserList />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
