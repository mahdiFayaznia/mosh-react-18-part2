import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: { userId },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    // queryKey: ["posts"],
    queryKey: userId ? ["users", userId, "posts"] : ["posts"], // like URL: /users/1/posts (1 is userId)
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, // 1m
  });
};

export default usePosts;
