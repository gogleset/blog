"use client";
import Link from "next/link";
import React from "react";
import PATH from "@/app/constant/path";

type TabsProps = {
  col?: boolean;
};

export const myDrawer3Close = () => {
  const checkbox = document.querySelector("#my-drawer-3") as HTMLInputElement;
  const { checked } = checkbox;
  if (checked) {
    checkbox.checked = false;
  }
};

const Tabs = ({ col }: TabsProps) => {
  return (
    <ul className={`flex ${col ? "flex-col" : ""} gap-3`}>
      <li
        className="self-center text-lg font-semibold whitespace-nowrap cursor-pointer"
        onClick={myDrawer3Close}
      >
        <Link href={PATH.ABOUT}>About</Link>
      </li>
    </ul>
  );
};

export default Tabs;
