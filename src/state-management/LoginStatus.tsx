import { useReducer, useState } from "react";
import authReducer from "./reducers/authReducer";

const LoginStatus = () => {
  // const [user, setUser] = useState("");
  const [user, dispatch] = useReducer(authReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a
            className="btn btn-outline btn-primary"
            // onClick={() => setUser("")}
            onClick={() => dispatch({ type: "LOGOUT" })}
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
        onClick={() => dispatch({ type: "LOGIN", userName: "mahdi" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
