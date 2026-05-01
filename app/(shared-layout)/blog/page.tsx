import React, { Suspense } from "react";
import { useBlog } from "./hooks/useBlog";
import LoadBlogList from "./components/LoadBlogList";

const Blog = () => {
  return (
    <div className="py-12">
      <div className="text-center pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Blog
        </h1>
        <p className="pt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Insights , thoughts and trends from our team !
        </p>
      </div>
      <LoadBlogList />
    </div>
  );
};

export default Blog;
