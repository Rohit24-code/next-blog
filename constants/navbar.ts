import { NavbarTypes } from "@/Types/constantTypes";

export const NAVBARLINKS: NavbarTypes[] = [
  {
    name: "HOME",
    path: "/",
    isButton: true,
    buttonStyle: { variant: "ghost" },
  },
  {
    name: "BLOG",
    path: "/blog",
    isButton: true,
    buttonStyle: { variant: "ghost" },
  },
  {
    name: "CREATE",
    path: "/create",
    isButton: true,
    buttonStyle: { variant: "ghost" },
  },
];

export const SIGNUPLINKS: NavbarTypes[] = [
  {
    name: "Sign up",
    path: "/auth/sign-up",
    isButton: true,
    buttonStyle: {},
  },
  {
    name: "Login",
    path: "/auth/login",
    isButton: true,
    buttonStyle: { variant: "outline" },
  },
];
