"use client"
import LinkComponent from "@/components/common/LinkComponent";
import { NAVBARLINKS, SIGNUPLINKS } from "@/constants/navbar";
import { NavbarTypes } from "@/Types/constantTypes";
import Link from "next/link";
import LightDarkMode from "../common/LightDarkMode";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/authClient";
import { buttonVariants } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const router = useRouter();

  return (
    <div className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">
            Next <span className="text-blue-400">Pro</span>
          </h1>
        </Link>

        {/* links */}
        <div className="flex items-center gap-2">
          {NAVBARLINKS?.map((item: NavbarTypes) => {
            return <LinkComponent item={item} />;
          })}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {isLoading ? null : (
          <>
            {isAuthenticated ? (
              <button
                className={buttonVariants({ variant: "outline" })}
                onClick={() => authClient.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      toast.success("Sign out successfully");
                      router.push("/");
                    },
                    onError: (error) => {
                      toast.error(error?.error?.message);
                    }
                  }
                })}
              >
                Log Out
              </button>
            ) : (
              SIGNUPLINKS.map((item: NavbarTypes) => (
                <LinkComponent key={item.name} item={item} />
              ))
            )}
          </>
        )}

        <LightDarkMode />
      </div>
    </div>
  );
};

export default Navbar;
