import React, { useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from '@material-tailwind/react';
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";
// import {
//   ChevronRightIcon,
//   ChevronDownIcon,
//   CubeTransparentIcon,
// } from "@heroicons/react/24/outline";
import Link from 'next/link';
import Image from 'next/image';

import {
  ArrowDown2,
  CallCalling,
  Home,
  MenuBoard,
  Profile2User,
} from 'iconsax-react';
import { useRouter } from 'next/router';

export default function MenuPhone({ showMenu }) {
  const [open, setOpen] = React.useState(0);
  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  const [close, setClose] = useState(false);
  const router = useRouter();

  return (
    <>
      {showMenu ? (
        <section
          className={`phoneMenu-bg z-30  w-full  top-0 right-0 h-screen transition-all 
          ${close ? 'hidden' : 'fixed'}
          `}
          // onClick={() => setClose(!close)}
        >
          <Card className='fixed top-0 right-0 h-screen w-64  z-50 rounded-none'>
            <div className='mb-2 flex items-center'>
              <Link href='/'>
                <Image
                  src='/images/menu-phone.png'
                  alt='menu-phone'
                  width={256}
                  height={94}
                />
              </Link>
            </div>

            <List className='py-2 px-4 rounded-none'>
              <Link href='/'>
                <ListItem
                  className={` hover:text-primary duration-300 flex justify-start items-center border-b border-gray-400 p-0 rounded-none pb-1 mb-2 ${
                    router.pathname === '/'
                      ? 'text-primary caption-md'
                      : 'text-gray-800 caption-sm'
                  }`}>
                  <Home size='16' className='ml-2' />
                  خانه
                </ListItem>
              </Link>

              <Accordion open={open === 1}>
                <ListItem
                  selected={open === 1}
                  className='p-0 rounded-none border-b border-gray-400 '>
                  <AccordionHeader
                    className='flex justify-start items-center hover:text-primary duration-300 p-0 border-none'
                    onClick={() => handleOpen(1)}>
                    <MenuBoard size='16' />

                    <Typography className='mr-1 caption-sm '>منو</Typography>
                  </AccordionHeader>

                  <ArrowDown2
                    size='16'
                    className={`mx-auto transition-transform 
                    ${open === 1 ? 'rotate-180' : ''}`}
                  />
                </ListItem>

                <AccordionBody className='p-0'>
                  <List className='p-0'>
                    <Link
                      href='/menu'
                      className={
                        router.pathname === '/menu'
                          ? 'text-primary caption-md '
                          : ''
                      }>
                      <ListItem className='caption-sm p-2'>غذای اصلی</ListItem>
                    </Link>

                    <ListItem className='caption-sm p-2'>پیش غذا</ListItem>
                    <ListItem className='caption-sm p-2'>دسر</ListItem>
                    <ListItem className='caption-sm p-2'>نوشیدنی</ListItem>
                  </List>
                </AccordionBody>
              </Accordion>

              <Accordion open={open === 2}>
                <ListItem
                  selected={open === 2}
                  className='p-0 rounded-none border-b border-gray-400 '>
                  <AccordionHeader
                    className='flex justify-start items-center hover:text-primary duration-300 p-0 border-none'
                    onClick={() => handleOpen(2)}>
                    <MenuBoard size='16' />

                    <Typography className='mr-1 caption-sm '>شعبه</Typography>
                  </AccordionHeader>

                  <ArrowDown2
                    size='16'
                    className={`mx-auto transition-transform 
                    ${open === 2 ? 'rotate-180' : ''}`}
                  />
                </ListItem>

                <AccordionBody className='p-0'>
                  <List className='p-0'>
                    <Link
                      href='/branch/ekbatan'
                      className={
                        router.pathname === '/branch/ekbatan'
                          ? 'text-primary caption-md '
                          : ''
                      }>
                      <ListItem className='caption-sm p-2'>اکباتان</ListItem>
                    </Link>

                    <ListItem className='caption-sm p-2'>چالوس</ListItem>
                    <ListItem className='caption-sm p-2'>اقدسیه</ListItem>
                    <ListItem className='caption-sm p-2'>ونک</ListItem>
                  </List>
                </AccordionBody>
              </Accordion>

              <Link
                href='/about-us'
                className={
                  router.pathname === '/about-us'
                    ? 'text-primary caption-md '
                    : 'text-gray-800 caption-sm'
                }>
                <ListItem className='hover:caption-md hover:text-primary duration-300 flex justify-start items-center border-b border-gray-400  p-0 rounded-none pb-1 mb-2 '>
                  <Profile2User size='16' className='ml-2' />
                  درباره ما
                </ListItem>
              </Link>

              <Link
                href='/contact'
                className={
                  router.pathname === '/contact'
                    ? 'text-primary caption-md '
                    : 'text-gray-800 caption-sm '
                }>
                <ListItem className='hover:caption-md hover:text-primary duration-300 flex justify-start items-center border-b border-gray-400  p-0 rounded-none pb-1'>
                  <CallCalling size='16' className='ml-2' />
                  تماس با ما
                </ListItem>
              </Link>
            </List>
          </Card>
        </section>
      ) : (
        ''
      )}
    </>
  );
}
