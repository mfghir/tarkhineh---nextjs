import { SearchNormal1 } from 'iconsax-react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '@/redux/searchTermSlice';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';





const SearchBar = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const searchTerm = useSelector(state => state.searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTermLocal.trim() !== '') {
      dispatch(setSearchTerm(searchTermLocal));
      router.push({
        pathname: '/search',
        query: { q: searchTermLocal }
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTermLocal(value);
    dispatch(setSearchTerm(value));
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };


  return (
    <form onSubmit={handleSearch} className='relative  w-full text-gray-800'>
      <input
        type='text'
        placeholder='جستجو'
        className={`w-full h-8 border ${!searchTermLocal  ?  'border-gray-400':'border-error'} focus:border-primary outline-none px-4 py-2 absolute rounded placeholder:text-gray-800 caption-sm`}        value={searchTermLocal || searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      <button type='submit' className='absolute top-2 left-4'>
        <SearchNormal1 size='16' />
      </button>
    </form>
  );
};

export default SearchBar;