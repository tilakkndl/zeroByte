import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <>
      <div
        className="
          rounded-full 
          w-[80%] md:w-[50%]
          shadow-sm hover:shadow-md transition cursor-pointer
          hidden sm:flex items-center justify-between
        "
      >
        <div className="w-full">
          <input
            type="text"
            className="
              w-full px-4 py-2 rounded-l-full text-sm md:text-lg text-black
            "
          />
        </div>
        <div
          className="
            p-2 md:px-4 md:py-3 
            rounded-r-full bg-[#6e121d] text-white
          "
        >
          <BiSearch size={20} />
        </div>
      </div>

      <div className="sm:hidden relative">
        <BiSearch
          size={20}
          className="cursor-pointer"
          onClick={() => setMobileSearch((prev) => !prev)}
        />
        <div
          className={`
            absolute top-6 right-0 z-50  
            transition duration-500 w-[90vw] 
            ${mobileSearch ? 'translate-y-0' : '-translate-y-36'}
          `}
        >
          <div
            className="
              rounded-full w-full
              shadow-sm hover:shadow-md transition cursor-pointer
              flex items-center justify-between
            "
          >
            <div className="w-full">
              <input
                type="text"
                className="w-full p-3 rounded-l-full text-sm md:text-lg text-black"
              />
            </div>
            <div className="p-3 rounded-r-full bg-[#6e121d] text-white">
              <BiSearch size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
