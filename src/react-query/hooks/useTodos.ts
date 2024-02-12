import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo>("/todos");

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  // const fetchTodos = () =>
  //   axios
  //     .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => res.data);

  return useQuery<Todo[], Error>({
    // queryKey: ["todos"],
    queryKey: CACHE_KEY_TODOS,
    // queryFn: fetchTodos,
    // queryFn: apiClient.getAll.bind(apiClient),
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, // 10s
  });
};

export default useTodos;
