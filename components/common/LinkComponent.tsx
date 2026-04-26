import { NavbarTypes } from "@/Types/constantTypes";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

type AppProps = {
  item: NavbarTypes;
};

const LinkComponent = ({ item }: AppProps) => {
  return (
    <Link
      className={item?.isButton ? buttonVariants(item?.buttonStyle) : ""}
      href={item?.path}
      key={item?.name}
    >
      {item.name}
    </Link>
  );
};

export default LinkComponent;
