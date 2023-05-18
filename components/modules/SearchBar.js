import { SearchNormal1 } from 'iconsax-react';
import React from 'react';

const SearchBar = () => {
  return (
    <section className='px-5 mt-4 mb-6 flex'>
    <div className='relative  w-full text-gray-800 lg:hidden'>
      <input
        type='text'
        placeholder='جستجو'
        className='w-full h-8 border border-gray-400 px-4 py-2 absolute rounded placeholder:text-gray-800 caption-sm'
      />
      <SearchNormal1 className='absolute top-2 left-4 w-4 h-4' />
    </div>
    </section>
  );
};

export default SearchBar;
