import { SearchNormal1 } from 'iconsax-react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '@/redux/searchTermSlice';

import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchBar = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();


  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
    router.push({
      pathname: '/search',
      query: { q: searchTermLocal }
    });
  };

  const handleChange = (event) => {
    setSearchTermLocal(event.target.value);
  };

  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  
  return (
    // <section className='px-5 mt-4 mb-6 flex'>
    <form onSubmit={handleSearch}className='relative  w-full text-gray-800'>
      <input
        type='text'
        placeholder='جستجو'
        className='w-full h-8 border border-gray-400 focus:border-primary outline-none px-4 py-2 absolute rounded placeholder:text-gray-800 caption-sm'
        value={searchTermLocal}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      <button type='submit' className='absolute top-2 left-4' onClick={handleSearch}>
        <SearchNormal1 size='16' />
      </button>
    </form>
    // </section>
  );
};

export default SearchBar;
