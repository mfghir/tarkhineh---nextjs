import {
  HambergerMenu,
  SearchNormal1,
  ShoppingCart,
  User,
} from "iconsax-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <section className="w-full flex justify-between items-center flex-nowrap p-5 text-Primary">
      <HambergerMenu className="lg:hidden md:text-2xl" />

      <Image
        className="lg:hidden"
        src="https://i.postimg.cc/WpJkBChc/Logo-phone.png"
        alt="Logo-phone"
        width={102}
        height={32}
      />
      <Image
        className="hidden lg:block"
        src="https://i.postimg.cc/90TwyRvQ/Logo-desktop.png"
        alt="Logo-desktop"
        width={155}
        height={51}
      />

      {/* <ul className="flex justify-between items-center">
        <li>
          <h5>صفحه اصلی</h5>
        </li>
      </ul> */}

      <ul className="flex">
        <li className="justify-center items-center p-1 rounded bg-Tint-1 ml-1 hidden md:flex ">
          <SearchNormal1 />
        </li>
        <li className="flex justify-center items-center  p-1 md:p-2 rounded bg-Tint-1 ml-1 md:mx-2">
          <ShoppingCart className="w-4 h-4 md:w-6 md:h-6" />
        </li>
        <li className="flex justify-center items-center  p-1 md:p-2 rounded bg-Tint-1 ">
          <User className="w-4 h-4 md:w-6 md:h-6" />
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
