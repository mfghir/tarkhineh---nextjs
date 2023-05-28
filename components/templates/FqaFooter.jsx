import fqaData from '@/db/fqaData';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import Image from 'next/image';
import React, { useState } from 'react';

const FqaFooter = () => {
  const tabs = [
    { id: 'tab1', label: 'سوالات متداول' },
    { id: 'tab2', label: 'قوانین ترخینه' },
    { id: 'tab3', label: 'حریم خصوصی' },
  ];
  const [activeTab, setActiveTab] = useState('tab1');

  const fqa = fqaData.filter(item => item.type === 'fqa');
  const law = fqaData.filter(item => item.type === 'law');
  const pv = fqaData.filter(item => item.type === 'pv');

  const [activeIndex, setActiveIndex] = useState(null);
  const onItemClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Image
        className='md:hidden w-full'
        src='/images/fqa-phone.png'
        alt='fqa-phone'
        width={360}
        height={176}
      />
      <Image
        className='hidden md:block'
        src='/images/fqa-desktop.png'
        alt='fqa-desktop'
        width={1440}
        height={336}
      />
      <section className=''>
        <nav className='bg-gray-300 px-5 lg:px-20 py-[6px] lg:py-3 flex justify-start'>
          <ul className='grid grid-cols-3 gap-x-4 lg:gap-x-8'>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={`caption-md lg:body-xl text-gray-700 flex justify-center items-center cursor-pointer
                ${
                  activeTab === tab.id
                    ? 'border-b-2 border-primary text-primary pb-1'
                    : ''
                }
                `}
                onClick={() => setActiveTab(tab.id)}>
                {tab.label}
              </li>
            ))}
          </ul>
        </nav>

        <div className='px-5 lg:px-20 py-6 '>
          {activeTab === 'tab1' && (
            <section className='border border-gray-400 rounded lg:rounded-lg'>
              {fqa.map((item, index) => (
                <div
                  key={index}
                  className='w-full px-4 py-2 lg:py-4 border-b border-gray-400 cursor-pointer'
                  onClick={() => onItemClick(index)}>
                  <p
                    className={`flex justify-between items-center duration-300 
                    ${activeIndex === index ? 'text-primary' : 'text-gray-800'}
                  `}>
                    <span className='caption-md lg:body-xl'>
                      {item.question}
                    </span>
                    {activeIndex === index ? (
                      <ArrowUp2 className='w-4 h-4 lg:w-8 lg:h-8' />
                    ) : (
                      <ArrowDown2 className='w-4 h-4 lg:w-8 lg:h-8' />
                    )}
                  </p>

                  {activeIndex === index && (
                    <p className='caption-sm lg:body-md text-gray-700 mt-2 lg:mt-4 px-3'>
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {activeTab === 'tab2' && (
            <section className='border border-gray-400 rounded lg:rounded-lg'>
              {law.map((item, index) => (
                <div
                  key={index}
                  className='w-full px-4 py-2 lg:py-4 border-b border-gray-400 cursor-pointer'
                  onClick={() => onItemClick(index)}>
                  <p
                    className={`flex justify-between items-center duration-300 
                    ${activeIndex === index ? 'text-primary' : 'text-gray-800'}
                  `}>
                    <span className='caption-md lg:body-xl'>
                      {item.question}
                    </span>
                    {activeIndex === index ? (
                      <ArrowUp2 className='w-4 h-4 lg:w-8 lg:h-8' />
                    ) : (
                      <ArrowDown2 className='w-4 h-4 lg:w-8 lg:h-8' />
                    )}
                  </p>

                  {activeIndex === index && (
                    <p className='caption-sm lg:body-md text-gray-700 mt-2 lg:mt-4 px-3'>
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {activeTab === 'tab3' && (
            <section className='border border-gray-400 rounded lg:rounded-lg'>
              {pv.map((item, index) => (
                <div
                  key={index}
                  className='w-full px-4 py-2 lg:py-4 border-b border-gray-400 cursor-pointer'
                  onClick={() => onItemClick(index)}>
                  <p
                    className={`flex justify-between items-center duration-300 
                    ${activeIndex === index ? 'text-primary' : 'text-gray-800'}
                  `}>
                    <span className='caption-md lg:body-xl'>
                      {item.question}
                    </span>
                    {activeIndex === index ? (
                      <ArrowUp2 className='w-4 h-4 lg:w-8 lg:h-8' />
                    ) : (
                      <ArrowDown2 className='w-4 h-4 lg:w-8 lg:h-8' />
                    )}
                  </p>

                  {activeIndex === index && (
                    <p className='caption-sm lg:body-md text-gray-700 mt-2 lg:mt-4 px-3'>
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}
        </div>
      </section>
    </>
  );
};

export default FqaFooter;
