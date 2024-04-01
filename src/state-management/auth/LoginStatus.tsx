// import { useContext, useReducer, useState } from "react";
// import AuthContext from "./authContext";
// import useAuth from "./useAuth";

import useAuthStore from "./store";

const LoginStatus = () => {
  // const [user, setUser] = useState("");
  // const [user, dispatch] = useReducer(authReducer, "");

  // const { user, dispatch } = useContext(AuthContext);
  // const { user, dispatch } = useAuth();

  const { user, login, logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a
            className="btn btn-outline btn-primary"
            // onClick={() => setUser("")}
            // onClick={() => dispatch({ type: "LOGOUT" })}
            onClick={() => logout()}
            href="#"
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        className="btn btn-primary"
        // onClick={() => setUser("mahdi")}
        // onClick={() => dispatch({ type: "LOGIN", userName: "mahdi" })}
        onClick={() => login("mahdi")}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
