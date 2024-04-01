import { useContext } from "react";
import LoginStatus from "../state-management/auth/LoginStatus";
import TasksContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { counter } = useCounterStore();

  return (
    <nav className="navbar w-full flex justify-between">
      {/* <span className="badge badge-primary">{tasks.length}</span> */}
      <span className="badge badge-primary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
