import { signUpSchema } from "@/app/schemas/auth";
import { authClient } from "@/lib/authClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition } from "react";

export const useSignUp = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition()

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof signUpSchema>) {
    const { email, name, password } = data

    startTransition(async () => {
      await authClient.signUp.email({
        email,
        name,
        password,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed up successfully");
            router.push("/");
          },
          onError: (error) => {
            toast.error(error?.error?.message);
          }
        }
      })
    })

  }

  return {
    form,
    onSubmit,
    isPending
  };
};
