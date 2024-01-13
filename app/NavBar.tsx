"use client";

import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link
        href={"/"}
        className="text-lg sm:text-xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.orange.400),theme(colors.pink.300),theme(colors.purple.100),theme(colors.purple.400))] bg-[length:200%_auto]"
      >
        FilmFlicker.
      </Link>
      <Menubar className="w-[80%] ml-2 hidden sm:inline-flex border-2">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/"}>Home</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/anime"}>Anime</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link href={"/about"}>About</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default NavBar;
