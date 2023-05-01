import { HambergerMenu, ShoppingCart, User } from "iconsax-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <section className="w-full !flex justify-between items-center flex-nowrap p-5 !text-Primary">
      <HambergerMenu />

      <Image
        src="https://i.postimg.cc/WpJkBChc/Logo-phone.png"
        alt="Logo-phone"
        width={102}
        height={32}
      />

      <ul className="flex">
        <li className="p-1 rounded bg-Tint-1">
          <ShoppingCart  size="16"/>
        </li>
        <li>
          <User  size="16" />
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
