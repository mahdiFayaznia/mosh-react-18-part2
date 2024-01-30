// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
import useTodos from "./hooks/useTodos";

// interface Todo {
//   id: number;
//   title: string;
//   userId: number;
//   completed: boolean;
// }

const TodoList = () => {
  // const fetchTodos = () =>
  //   axios
  //     .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.data);

  // const query = useQuery({
  // const { data } = useQuery({
  // const { data: todos, error } = useQuery({
  // const {
  //   data: todos,
  //   error,
  //   isLoading,
  // } = useQuery<Todo[], Error>({
  //   queryKey: ["todos"],
  //   // queryFn: () =>
  //   //   axios
  //   //     .get("https://jsonplaceholder.typicode.com/todos")
  //   //     .then((res) => res.data),
  //   queryFn: fetchTodos,
  // });

  const { data: todos, error, isLoading } = useTodos();

  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  // if (error) return <p>{error}</p>;
  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="list-group">
      {/* {data?.map((todo) => ( */}
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
