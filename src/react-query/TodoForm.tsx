import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Todo } from "./hooks/useTodos";
import axios from "axios";

const TodoForm = () => {
  const queryClient = useQueryClient(); // access to queryClient

  // useMutation: <data that get from back-end, error, data that send to back-end>
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),

    // onSuccess: (object that get from back-end, object that send to back-end)
    onSuccess: (savedTodo, newTodo) => {
      console.log("savedTodo", savedTodo);

      // APPROACH 1: Invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"], // invalidate all query with todos key
      // });

      // APPROACH 2: Updating the data in the cache
      queryClient.setQueriesData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);

      if (ref.current) ref.current.value = ""; // empty the input after add
    },
  });

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="toast">
          <div className="alert alert-error">
            <span>{addTodo.error.message}</span>
          </div>
        </div>
      )}
      <form
        className="flex space-x-5 mb-5"
        onSubmit={(event) => {
          event.preventDefault();

          // check the existing of value in input
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <input
          ref={ref}
          type="text"
          className="input input-bordered w-full max-w-md"
        />
        <button className="btn btn-primary" disabled={addTodo.isLoading}>
          {addTodo.isLoading ? "Adding..." : "Add"}
        </button>
      </form>
    </>
  );
};

export default TodoForm;
