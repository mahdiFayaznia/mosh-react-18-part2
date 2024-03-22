// interface Action {
//   type: "LOGIN" | "LOGOUT";
// }

interface LoginAction {
  type: "LOGIN";
  userName: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  // if (action.type === "LOGIN") return action.userName;
  // if (action.type === "LOGOUT") return "";
  // return state;

  switch (action.type) {
    case "LOGIN":
      return action.userName;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

export default authReducer;
