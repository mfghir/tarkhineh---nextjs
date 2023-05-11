import {
  ArrowDown2,
  HambergerMenu,
  SearchNormal1,
  ShoppingCart,
  User,
} from "iconsax-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <section className="w-full flex justify-between items-center flex-nowrap p-5 md:grid md:grid-cols-3 lg:flex px-20 py-8">
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

      <ul className="hidden lg:flex justify-between items-center">
        <li>
          <h5 className="text-primary">صفحه اصلی</h5>
        </li>

        <li className="dropdown inline-block relative z-20 mr-6">
          <div className="flex justify-center items-center cursor-pointer">
            <span className=" body-xl hover:header-5 text-gray-700  border-primary duration-300 hover:pb-1">
              شعبه
            </span>
            <ArrowDown2 size="16" className="mr-1 duration-300" />
          </div>

          <ul className="dropdown-menu absolute pt-2 bg-transparent hidden w-36 body-sm ">
            <li className="bg-white  border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-tr rounded-tl dropdown-menu-shadow">
              <a href="#">اکباتان</a>
            </li>
            <li className="bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap">
              <a href="#">چالوس</a>
            </li>
            <li className="bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap">
              <a href="#">اقدسیه</a>
            </li>
            <li className="bg-white hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-br rounded-bl">
              <a href="#">ونک</a>
            </li>
          </ul>
        </li>

        <li className="dropdown inline-block relative z-20 mr-6">
          <div className="flex justify-center items-center cursor-pointer">
            <span className=" body-xl hover:header-5 text-gray-700  border-primary duration-300 hover:pb-1">
              منو
            </span>
            <ArrowDown2 size="16" className="mr-1 duration-300" />
          </div>

          <ul className="dropdown-menu absolute pt-2 bg-transparent hidden w-36 body-sm rounded">
            <li className="bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-tr rounded-tl dropdown-menu-shadow ">
              <a href="#">غذای اصلی</a>
            </li>
            <li className="bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap">
              <a href="#">پیش غذا</a>
            </li>
            <li className="bg-white border border-b border-gray-100 hover:bg-tint-100 p-2 block whitespace-no-wrap">
              <a href="#">دسر</a>
            </li>
            <li className="bg-white hover:bg-tint-100 p-2 block whitespace-no-wrap rounded-br rounded-bl">
              <a href="#">نوشیدنی</a>
            </li>
          </ul>
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
          <SearchNormal1 />
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
