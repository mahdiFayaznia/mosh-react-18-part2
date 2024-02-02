import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  // page: number; // remove for useInfiniteQuery
  pageSize: number;
}

// const usePosts = (userId: number | undefined) => {
const usePosts = (query: PostQuery) => {
  // const fetchPosts = () =>
  const fetchPosts = ({ pageParam = 1 }) =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        // params: { userId },
        params: {
          // _start: (query.page - 1) * query.pageSize,
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  // return useQuery<Post[], Error>({
  return useInfiniteQuery<Post[], Error>({
    // queryKey: ["posts"],
    // queryKey: userId ? ["users", userId, "posts"] : ["posts"], // like URL: /users/1/posts (1 is userId)
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000, // 1m
    keepPreviousData: true, // improve UX in pagination
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePosts;
