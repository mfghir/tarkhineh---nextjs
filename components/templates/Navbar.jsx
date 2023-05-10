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
    <section className="w-full flex justify-between items-center flex-nowrap p-5 md:grid md:grid-cols-3 lg:flex">
      <HambergerMenu className="lg:hidden md:text-2xl text-primary" />

      <Image
        className="lg:hidden mx-auto"
        src="/images/Logo-phone.png"
        alt="Logo-phone"
        width={102}
        height={32}
      />
      <Image
        className="hidden lg:block"
        src="/images/Logo-desktop.png"
        alt="Logo-desktop"
        width={155}
        height={51}
      />

<div class="p-10">

{/* <div class="dropdown inline-block relative">
    <span class=" body-xl text-gray-700 flex justify-center items-center">
      شعبه
    <ArrowDown2 size="16" className="mr-1" />
      </span>

  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
    <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
    <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
    <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
  </ul>
</div> */}

<div className="dropdown inline-block relative">
    <span className=" body-xl text-gray-700 flex justify-center items-center">
      منو
    <ArrowDown2 size="16" className="mr-1" />
      </span>
      
  <ul className="dropdown-menu absolute hidden hover:dropdown-menu-shadow pt-1">
    <li className=""><a className="rounded-t border border-b border-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
    <li className=""><a className="border border-b border-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
    <li className=""><a className="rounded-b border border-b border-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
  </ul>
</div>

</div>


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

      

      <ul className="flex text-primary md:justify-end">
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