import React, { Suspense } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useBlog } from "../hooks/useBlog";
import LoadingSkelton from "./LoadingSkelton";

const LoadBlogList = async () => {
  const { data } = await useBlog();
  return (
    <Suspense fallback={<LoadingSkelton />}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((post: any) => {
          return (
            <Card key={post?._id} className="pt-0">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={
                    post?.imageUrl ||
                    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                  }
                  className="rounded-t-lg object-cover"
                  fill
                  alt="unsplash"
                />
              </div>
              <CardContent>
                <Link href={`/blog/${post?._id}`}>
                  <h1 className="text-2xl font-bold hover:text-primary">
                    {post?.title}
                  </h1>
                </Link>
                <p className="text-mutedforeground line-clamp-3">{post.body}</p>
              </CardContent>

              <CardFooter>
                <Link
                  className={buttonVariants({
                    className: "w-full",
                  })}
                  href={`/blog/${post._id}`}
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Suspense>
  );
};

export default LoadBlogList;
