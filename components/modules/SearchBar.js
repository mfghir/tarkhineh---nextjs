import { SearchNormal1 } from 'iconsax-react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '@/redux/searchTermSlice';
import { useRouter } from 'next/router';

const SearchBar = () => {

  const dispatch = useDispatch();
const router = useRouter()

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
router.push("/search")
  };


  return (
    // <section className='px-5 mt-4 mb-6 flex'>
    <div className='relative  w-full text-gray-800'>
      <input
        type='text'
        placeholder='جستجو'
        className='w-full h-8 border border-gray-400 focus:border-primary outline-none px-4 py-2 absolute rounded placeholder:text-gray-800 caption-sm'
        onChange={handleSearch}
      />
      <SearchNormal1 className='absolute top-2 left-4 w-4 h-4' />
    </div>
    // </section>
  );
};

export default SearchBar;
