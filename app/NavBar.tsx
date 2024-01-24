import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";
import SignIn from "./components/SignIn";

const NavBar = () => {
  const { userId } = auth();

  return (
    <div className={styles.navbar}>
      <Link
        href={"/"}
        className="text-lg sm:text-xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto]"
      >
        FilmFlicker.
      </Link>
      <Menubar className="w-[90%] ml-[3rem] mr-3 hidden sm:inline-flex border-2">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/"}>Movies</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/anime"}>Anime</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/watchlist"}>My WatchList</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <div className="flex justify-end">
        <UserButton afterSignOutUrl="/" />
        {!userId && <SignIn />}
      </div>
    </div>
  );
};

export default NavBar;
