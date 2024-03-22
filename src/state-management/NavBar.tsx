import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TasksContext from "./contexts/tasksContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <nav className="navbar w-full flex justify-between">
      <span className="badge badge-primary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
