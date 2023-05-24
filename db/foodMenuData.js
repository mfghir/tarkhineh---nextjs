const foodMenuData = [
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood1.png',
    name: 'کوفته برنجی',
    ingredient: 'برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز',
    discount: '%۳۵',
    discountPrice: '۱۸۰٬۰۰۰',
    price: '۱۴۵٬۰۰۰',
    star: '5',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood2.png',
    name: 'کشک بادمجان',
    ingredient: 'بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز',
    discount: '',
    discountPrice: '',
    price: '۹۵٬۰۰۰',
    star: '5',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood3.png',
    name: 'میرزا قاسمی',
    ingredient: 'بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی',
    discount: '%۱۰',
    discountPrice: '۱۶۵٬۰۰۰',
    price: '۱۴۲٬۵۰۰',
    star: '5',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood4.png',
    name: 'باقلاقاتوق',
    ingredient: 'پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ',
    discount: '%۳۰',
    discountPrice: '۲۰۵٬۰۰۰',
    price: '۱۸۰٬۰۰۰',
    star: '4',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood5.png',
    name: 'فلافل',
    ingredient: 'نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی',
    discount: '',
    discountPrice: '',
    price: '۸۰٬۰۰۰',
    star: '3',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood6.png',
    name: 'کله جوش',
    ingredient: 'کشک، گردو، پیاز، نعناع خشک',
    discount: '%۵',
    discountPrice: '۲۱۰٬۰۰۰',
    price: '۲۰۳٬۰۰۰',
    star: '4',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood7.png',
    name: 'بورانی بادمجان',
    ingredient: 'بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو',
    discount: '%۲۲',
    discountPrice: '۱۷۰٬۰۰۰',
    price: '۱۴۸٬۰۰۰',
    star: '5',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood8.png',
    name: 'بادمجان شکم‌پر',
    ingredient: 'بادمجان، پیاز، گوجه فرنگی	، سبزی خشک',
    discount: '%۱۸',
    discountPrice: '۱۵۰٬۰۰۰',
    price: '۱۳۶٬۰۰۰',
    star: '4',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood9.png',
    name: 'دلمه برگ کلم',
    ingredient: 'کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر	رب',
    discount: '%۸',
    discountPrice: '۲۲۰٬۰۰۰',
    price: '۲۰۹٬۰۰۰',
    star: '5',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood10.png',
    name: 'دلمه برگ مو',
    ingredient: 'پیاز، برنج، لپه، سبزی دلمه، سرکه',
    discount: '',
    discountPrice: '',
    price: '۱۹۵٬۰۰۰',
    star: '2',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood11.png',
    name: 'کوکو سبزی',
    ingredient: 'تخم مرغ، گردو، سیر، آرد، روغن مایع	سبزی کوکویی',
    discount: '%۱۰',
    discountPrice: '۳۰۰٬۰۰۰',
    price: '۲۷۰٬۰۰۰',
    star: '5',
  },
  {
    type: 'iranianFood',
    img: '/images/iranianFood/iranianFood12.png',
    name: 'کوکو سیب‌زمینی و عدس',
    ingredient: 'عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری',
    discount: '%۲۰',
    discountPrice: '۱۳۵٬۰۰۰',
    price: '۱۰۵٬۰۰۰',
    star: '1',
  },
  // ------------------------------------------------------------- nonIranianFood
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  {
    type: 'nonIranianFood',
    img: '/images/nonIranianFood/nonIranianFood1.png',
    name: 'پاستا سبزیجات',
    ingredient: 'پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده',
    discount: '%۲۰',
    discountPrice: '۱۷۵٬۰۰۰',
    price: '۱۴۰٬۰۰۰',
    star: '5',
  },
  {
    type: 'nonIranianFood',
    img: '/images/nonIranianFood/nonIranianFood2.png',
    name: 'پاستا بلونز',
    ingredient:
      'اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون',
    discount: '%۱۲',
    discountPrice: '۱۷۰٬۰۰۰',
    price: '۱۶۰٬۰۰۰ ',
    star: '4',
  },
  {
    type: 'nonIranianFood',
    img: '/images/nonIranianFood/nonIranianFood3.png',
    name: 'راتاتویی',
    ingredient:
      'بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان',
    discount: '%۴۵',
    discountPrice: '۱۸۰٬۰۰۰',
    price: '۹۵٬۰۰۰',
    star: '4',
  },
  {
    type: 'nonIranianFood',
    img: '/images/nonIranianFood/nonIranianFood4.png',
    name: 'لازانیا',
    ingredient:
      'لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان',
    discount: '',
    discountPrice: '',
    price: '۱۵۰٬۰۰۰ ',
    star: '5',
  },
  {
    type: 'nonIranianFood',
    img: '/images/nonIranianFood/nonIranianFood5.png',
    name: 'سوشی',
    ingredient:
      'جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا',
    discount: '%۱۵',
    discountPrice: '۱۰۰٬۰۰۰',
    price: '۸۵٬۰۰۰',
    star: '4',
  },
  {
    type: 'nonIranianFood',
    img: '/images/nonIranianFood/nonIranianFood6.png',
    name: 'پاکورا سبزیجات',
    ingredient: 'گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده',
    discount: '%۸',
    discountPrice: '۱۲۵٬۰۰۰',
    price: '۱۱۰٬۰۰۰ ',
    star: '4',
  },

  {
    type: 'nonIranianFood',
    img: '/images/nonIranianFood/nonIranianFood7.png',
    name: 'کالزونه اسفناج',
    ingredient:
      'اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون',
    discount: '%۱۷',
    discountPrice: '۱۹۰٬۰۰۰',
    price: '۱۷۷٬۰۰۰ ',
    star: '5',
  },
  {
    type: 'nonIranianFood',
    img: '/images/nonIranianFood/nonIranianFood8.png',
    name: 'پالاک پنیر ',
    ingredient: 'پنیر، اسفناج، گوجه، پیاز، سیر ',
    discount: '%۱۵',
    discountPrice: '۲۰۰٬۰۰۰',
    price: '۱۸۰٬۰۰۰ ',
    star: '4',
  },
  // ------------------------------------------------------------- pizza
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------

  {
    type: 'pizza',
    img: '/images/pizza/pizza1.png',
    name: 'پیتزا روکولا',
    ingredient:
      'اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند ',
    discount: '%۱۲',
    discountPrice: '۱۹۵٬۰۰۰',
    price: '۱۸۸٬۰۰۰ ',
    star: '5',
  },
  {
    type: 'pizza',
    img: '/images/pizza/pizza2.png',
    name: 'پیتزا بادمجان و زیتون',
    ingredient:
      'بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی',
    discount: '',
    discountPrice: '',
    price: '۱۵۰٬۰۰۰ ',
    star: '4',
  },
  {
    type: 'pizza',
    img: '/images/pizza/pizza3.png',
    name: 'پیتزا سبزیجات و خامه',
    ingredient:
      'نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده',
    discount: '%۲۱',
    discountPrice: '۲۱۰٬۰۰۰',
    price: '۱۸۵٬۰۰۰ ',
    star: '4',
  },
  {
    type: 'pizza',
    img: '/images/pizza/pizza4.png',
    name: 'پیتزا قارچ',
    ingredient:
      'قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی',
    discount: '%۲۵',
    discountPrice: '۲۱۵٬۰۰۰',
    price: '۱۷۵٬۰۰۰',
    star: '3',
  },
  {
    type: 'pizza',
    img: '/images/pizza/pizza5.png',
    name: 'پیتزا پپرونی',
    ingredient:
      'تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی ',
    discount: '',
    discountPrice: '',
    price: '۱۰۰٬۰۰۰',
    star: '4',
  },
  {
    type: 'pizza',
    img: '/images/pizza/pizza6.png',
    name: 'پیتزا اسفناج',
    ingredient: 'اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ',
    discount: '%۱۰',
    discountPrice: '۲۸۰٬۰۰۰',
    price: '۲۵۲٬۰۰۰',
    star: '5',
  },

  {
    type: 'pizza',
    img: '/images/pizza/pizza7.png',
    name: 'پیتزا مارگاریتا',
    ingredient: 'گوجه فرنگی، ریحان، سیر، پنیر پیتزا',
    discount: '%۱۳',
    discountPrice: '۱۶۵٬۰۰۰',
    price: '۱۴۷٬۰۰۰',
    star: '2',
  },
  {
    type: 'pizza',
    img: '/images/pizza/pizza8.png',
    name: 'پیتزا پنیر',
    ingredient:
      'نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون',
    discount: '%۱۶',
    discountPrice: '۱۲۵٬۰۰۰',
    price: '۱۰۵٬۰۰۰ ',
    star: '3',
  },

  // ------------------------------------------------------------- sandwich
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------

  {
    type: 'sandwich',
    img: '/images/sandwich/sandwich1.png',
    name: 'ساندویچ کتلت مخصوص',
    ingredient:
      'سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون',
    discount: '%۱۸',
    discountPrice: '۲۳۰٬۰۰۰',
    price: '۲۰۵٬۰۰۰',
    star: '5',
  },
  {
    type: 'sandwich',
    img: '/images/sandwich/sandwich2.png',
    name: 'ساندویچ سوسیس کوکتل',
    ingredient: 'سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی',
    discount: '%۳۵',
    discountPrice: '۲۰۵٬۰۰۰',
    price: '۱۶۵٬۰۰۰',
    star: '4',
  },
  {
    type: 'sandwich',
    img: '/images/sandwich/sandwich3.png',
    name: 'ساندویچ کتلت کدو سبز',
    ingredient: 'کدو سبز، هویج، سیب زمینی، پیاز',
    discount: '',
    discountPrice: '',
    price: '۱۴۵٬۰۰۰',
    star: '5',
  },
  {
    type: 'sandwich',
    img: '/images/sandwich/sandwich4.png',
    name: 'پنینی اسفناج',
    ingredient:
      ' قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز',
    discount: '%۱۵',
    discountPrice: '۲۱۰٬۰۰۰',
    price: '۱۹۰٬۰۰۰',
    star: '3',
  },
];

export default foodMenuData;
