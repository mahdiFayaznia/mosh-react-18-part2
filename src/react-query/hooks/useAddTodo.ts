import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Todo>("/todos");

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient(); // access to queryClient

  // useMutation: <data that get from back-end, error, data that send to back-end, context>

  // const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    // mutationFn: (todo: Todo) =>
    //   axios
    //     .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
    //     .then((res) => res.data),

    mutationFn: apiClient.post,

    onMutate: (newTodo: Todo) => {
      // const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      // queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
      //   newTodo,
      //   ...(todos || []),
      // ]);
      // queryClient.setQueryData<Todo[]>(["todos"], (todos = []) => [
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      // if (ref.current) ref.current.value = ""; // empty the input after add
      onAdd();

      return { previousTodos };
    },

    // onSuccess: (object that get from back-end, object that send to back-end)
    onSuccess: (savedTodo, newTodo) => {
      console.log("savedTodo", savedTodo);

      // APPROACH 1: Invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"], // invalidate all query with todos key
      // });

      // APPROACH 2: Updating the data in the cache
      // queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
      //   savedTodo,
      //   ...(todos || []),
      // ]);

      // replace the todo that in UI to todo that in back-end
      // queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      // queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
