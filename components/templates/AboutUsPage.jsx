import { Diagram, HomeWifi, MenuBoard, User } from 'iconsax-react';
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <section className=''>
      <Image
        className='md:hidden'
        src='/images/aboutus-phone.png'
        alt='aboutus-phone'
        width={360}
        height={176}
      />
      <Image
        className='hidden md:block'
        src='/images/aboutus-desktop.png'
        alt='aboutus-phone'
        width={1440}
        height={336}
      />

      <div className='py-4 lg:py-12 px-5 lg:px-20'>
        <p className='header-6 lg:header-4 text-gray-800'>درباره‌ما</p>

        <div className='mt-2 lg:mt-6 md:grid md:grid-cols-2 md:gap-x-6'>
          <Image
            className='md:hidden h-[120px] mr-2 mb-2 float-left [shape-outside:inset(100px 100px 100px 100px )]'
            src='/images/aboutus-text-phone.png'
            alt='aboutus-phone'
            width={152}
            height={120}
          />
          <p className='caption-sm lg:body-xl text-gray-700'>
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب
            رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در
            طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با
            نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است.
            ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای
            برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با
            کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه
            پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس
            به شما عزیزان می‌باشند. چشم انداز: در آینده‌ای نزدیک تالار پذیرایی
            شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما
            خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>

          <Image
            className='hidden md:block  h-auto'
            src='/images/aboutus-text-desktop.png'
            alt='aboutus-phone'
            width={600}
            height={492}
          />
        </div>
      </div>

      <ul className='mt-4 lg:mt-12 px-5 lg:px-20 py-3 lg:py-4 bg-gray-300 flex justify-between items-center'>
        <li className='flex justify-center items-center flex-col'>
          <User className='w-4 h-4 lg:w-8 lg:h-8' color='#353535' />
          <span className='caption-sm mt-1 lg:body-lg text-gray-700 text-center'>
            پرسنلی مجرب و حرفه‌ای
          </span>
        </li>

        <li className='flex justify-center items-center flex-col '>
          <Diagram className='w-4 h-4 lg:w-8 lg:h-8' color='#353535' />
          <span className='caption-sm mt-1 lg:body-lg text-gray-700 text-center'>
            کیفیت بالای غذاها
          </span>
        </li>

        <li className='flex justify-center items-center flex-col'>
          <HomeWifi className='w-4 h-4 lg:w-8 lg:h-8' color='#353535' />
          <span className='caption-sm mt-1 lg:body-lg text-gray-700 text-center'>
            محیطی دلنشین و آرام
          </span>
        </li>

        <li className='flex justify-center items-center flex-col'>
          <MenuBoard className='w-4 h-4 lg:w-8 lg:h-8' color='#353535' />
          <span className='caption-sm mt-1 lg:body-lg text-gray-700 text-center'>
            منوی متنوع
          </span>
        </li>
      </ul>
    </section>
  );
};

export default AboutUsPage;
