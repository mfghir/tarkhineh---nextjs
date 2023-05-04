import {
  ArrowDown2,
  HambergerMenu,
  SearchNormal1,
  ShoppingCart,
  User,
} from "iconsax-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <section className="w-full flex justify-between items-center flex-nowrap p-5">
      <HambergerMenu className="lg:hidden md:text-2xl" />

      <Image
        className="lg:hidden"
        src="/img/Logo-phone.png"
        alt="Logo-phone"
        width={102}
        height={32}
      />
      <Image
        className="hidden lg:block"
        src="/img/Logo-desktop.png"
        alt="Logo-desktop"
        width={155}
        height={51}
      />

      <ul className="hidden lg:flex justify-between items-center">
        <li>
          <h5 className="text-primary">صفحه اصلی</h5>
        </li>

        <li className="body-xl text-gray-700 flex justify-center items-center mr-6">
          شعبه
          <ArrowDown2 size="16" className="mr-1" />
        </li>

        <li className="body-xl text-gray-700 flex justify-center items-center mr-6">
          منو
          <ArrowDown2 size="16" className="mr-1" />
        </li>

        <li className="body-xl text-gray-700 flex justify-center items-center mr-6">
          اعطای نمایندگی
        </li>

        <li className="body-xl text-gray-700 flex justify-center items-center mr-6">
          درباره ما
        </li>

        <li className="body-xl text-gray-700 flex justify-center items-center mr-6">
          تماس با ما
        </li>
      </ul>

      

      <ul className="flex text-primary">
        <li className="hidden md:flex justify-center items-center p-1 md:p-2 rounded bg-tint-100">
          <SearchNormal1  />
        </li>
        <li className="flex justify-center items-center p-1 md:p-2 rounded bg-tint-100 ml-1 md:mx-2">
          <ShoppingCart className="w-4 h-4 md:w-6 md:h-6" />
        </li>
        <li className="flex justify-center items-center p-1 md:p-2 rounded bg-tint-100 ">
          <User className="w-4 h-4 md:w-6 md:h-6" />
        </li>
      </ul>
    </section>
  );
};

export default Navbar;