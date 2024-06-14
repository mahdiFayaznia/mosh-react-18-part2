import { Outlet } from "react-router-dom";
import UserList from "./UserList";

const UsersPage = () => {
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
