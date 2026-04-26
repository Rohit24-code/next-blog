import LinkComponent from "@/components/common/LinkComponent";
import { NAVBARLINKS, SIGNUPLINKS } from "@/constants/navbar";
import { NavbarTypes } from "@/Types/constantTypes";
import Link from "next/link";
import LightDarkMode from "../common/LightDarkMode";

const Navbar = () => {
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
        {SIGNUPLINKS?.map((item: NavbarTypes) => {
          return <LinkComponent item={item} />;
        })}

        <LightDarkMode />
      </div>
    </div>
  );
};

export default Navbar;
