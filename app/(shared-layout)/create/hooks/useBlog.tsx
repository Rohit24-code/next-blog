import { useForm } from "react-hook-form";
import { PostSchemaType, postSchema } from "@/app/schemas/blog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { createBlogAction } from "@/app/action";

export const useBlog = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const mutation = useMutation(api.posts.createPost);

  const form = useForm<PostSchemaType>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
      image: undefined,
    },
  });

  function onSubmit(data: PostSchemaType) {
    startTransition(async () => {
      try {
        await createBlogAction(data);

        toast.success("Post created successfully");
      } catch (err) {
        toast.error("Something went wrong");
      }
    });
  }

  return { form, isPending, onSubmit };
};
