import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  name: string;
  href: string;
  icon: IconType
}

export const ItemSidebar = ({ name, href, icon:Icon }: Props) => {
  return (
    <div className="cursor-pointer">
      <Link href={href} className="cursor-pointer flex items-center gap-2">
        <Icon className="text-white" size={30} />
        <p className="text-white hidden hover-sidebar:block transition-all duration-500 ease-in hover:text-blue-200">{name}</p>
      </Link>
    </div>
  );
};
