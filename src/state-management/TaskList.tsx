import { useContext, useReducer, useState } from "react";
import tasksReducer from "./reducers/tasksReducer";
import TasksContext from "./contexts/tasksContext";

// interface Task {
//   id: number;
//   title: string;
// }

const TaskList = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  // const [tasks, dispatch] = useReducer(tasksReducer, []);

  const { tasks, dispatch } = useContext(TasksContext);

  return (
    <>
      <button
        onClick={() =>
          // setTasks([{ id: Date.now(), title: "Task " + Date.now() }, ...tasks])
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="menu bg-base-200 w-full rounded-box">
        {tasks.map((task) => (
          <li key={task.id}>
            <a className="w-full flex justify-between">
              <span>{task.title}</span>
              <button
                className="btn btn-error w-20"
                // onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
                onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
              >
                Delete
              </button>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
