import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";

export async function useBlog() {
  const posts = await fetchQuery(api.posts.getBlogPosts);
  console.log(posts, "posts");
  return { data: posts };
}
