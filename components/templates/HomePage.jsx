import {
  ArrowLeft2,
  Diagram,
  HomeWifi,
  MenuBoard,
  SearchNormal1,
  User,
} from "iconsax-react";
import Image from "next/image";
import React from "react";
import HeaderSlider from "../pages/home/HeaderSlider";

const HomePage = () => {
  return (
    <div>
      <HeaderSlider />

      {/* ---------------    menu cards */}
      <section className="w-full p-5 lg:px-[109px] flex justify-center items-center flex-col flex-wrap">
        <div className="relative mb-6 w-full text-gray-800 lg:hidden">
          <input
            type="text"
            placeholder="جستجو"
            className="w-full h-8 border border-gray-400 px-4 py-2 absolute rounded placeholder:text-gray-800 caption-sm"
          />
          <SearchNormal1 className="absolute top-2 left-4 w-4 h-4" />
        </div>

        <h6 className="text-gray-800 lg:hidden mb-3 mt-6">منوی رستوران</h6>
        <h4 className="text-gray-800 hidden lg:block mb-8">منوی رستوران</h4>

        <ul className="mt-16 grid grid-cols-1 gap-y-16 gap-x-4 xs-p:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          <li className="border rounded-lg w-[152px] h-[81px]  xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative">
            <Image
              src="/images/menu1.png"
              alt="menu1"
              width={240}
              height={240}
              className="w-[102px] h-[100px] xl:w-60 xl:h-60 absolute -top-[60%]"
            />
            <button className="bg-primary caption-md rounded-md text-white w-[71px] h-8 p-2 absolute top-[80%]">
              غذای اصلی
            </button>
          </li>

          <li className="border rounded-lg w-[152px] h-[81px]  xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative">
            <Image
              src="/images/menu2.png"
              alt="menu1"
              width={240}
              height={240}
              className="w-[102px] h-[100px] xl:w-60 xl:h-60 absolute -top-[60%]"
            />
            <button className="bg-primary caption-md rounded-md text-white w-[71px] h-8 p-2 absolute top-[80%]">
              پیش غذا
            </button>
          </li>

          <li className="border rounded-lg w-[152px] h-[81px]  xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative">
            <Image
              src="/images/menu3.png"
              alt="menu1"
              width={240}
              height={240}
              className="w-[102px] h-[100px] xl:w-60 xl:h-60 absolute -top-[60%]"
            />
            <button className="bg-primary caption-md rounded-md text-white w-[71px] h-8 p-2 absolute top-[80%]">
              دسر
            </button>
          </li>

          <li className="border rounded-lg w-[152px] h-[81px]  xl:w-72 xl:h-[180px] border-primary flex flex-col justify-center items-center relative">
            <Image
              src="/images/menu4.png"
              alt="menu1"
              width={240}
              height={240}
              className="w-[102px] h-[100px] xl:w-60 xl:h-60 absolute -top-[60%]"
            />
            <button className="bg-primary caption-md rounded-md text-white w-[71px] h-8 p-2 absolute top-[80%]">
              نوشیدنی
            </button>
          </li>
        </ul>
      </section>

      {/* ---------------    Introduction */}
      <section className="bg-[url('/images/intro-phone.png')] lg:bg-[url('/images/intro-desktop.png')] bg-cover h-[339px] lg:h-[390px] px-5 lg:px-[80px] py-4 lg:py-12 text-white mt-10 md:flex md:justify-between">
        {/* <Image src="/images/intro-phone.png" alt="intro-phone" width={360} height={339} /> */}

        <div className="md:w-[45%]">
          <p className="overlay-lg lg:hidden">رستوران‌های زنجیره‌ای ترخینه</p>
          <h4 className="overlay-lg hidden lg:block">
            رستوران‌های زنجیره‌ای ترخینه
          </h4>
          <p className="caption-sm my-2 lg:body-lg font-normal">
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>

          <div className="flex justify-end items-center mt-2 lg:mt-4">
            <div></div>
            <button className="caption-md py-1 lg:py-2 lg rounded border border-white w-[152px] lg:w-[184px] lg:flex justify-center items-center ">
              اطلاعات بیشتر <ArrowLeft2 className="hidden lg:flex mr-2" />{" "}
            </button>
          </div>
        </div>

        <ul className="mt-6 md:mt-0 text-white flex justify-between items-center flex-wrap md:w-[45%]">
          <li className="flex justify-center items-center flex-col w-1/2 mb-4 lg:mb-7">
            <User className="lg:w-8 lg:h-8" />
            <span className="caption-md mt-1 lg:body-lg">
              پرسنلی مجرب و حرفه‌ای
            </span>
          </li>

          <li className="flex justify-center items-center flex-col w-1/2 mb-4 lg:mb-7">
            <Diagram className="lg:w-8 lg:h-8" />
            <span className="caption-md mt-1 lg:body-lg">
              کیفیت بالای غذاها
            </span>
          </li>

          <li className="flex justify-center items-center flex-col w-1/2">
            <HomeWifi className="lg:w-8 lg:h-8" />
            <span className="caption-md mt-1 lg:body-lg">
              محیطی دلنشین و آرام
            </span>
          </li>

          <li className="flex justify-center items-center flex-col w-1/2">
            <MenuBoard className="lg:w-8 lg:h-8" />
            <span className="caption-md mt-1 lg:body-lg">منوی متنوع</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
