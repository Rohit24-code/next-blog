import { loginSchema } from "@/app/schemas/auth"
import { authClient } from "@/lib/authClient"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { useTransition } from "react";

export const useLogin = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const handleSubmit = (data: z.infer<typeof loginSchema>) => {
        const { email, password } = data
        startTransition(async () => {
            await authClient.signIn.email({
                email,
                password,
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Logged in successfully");
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
        handleSubmit,
        isPending
    }
}

export default useLogin;