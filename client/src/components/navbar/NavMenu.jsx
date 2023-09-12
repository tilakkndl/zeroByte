import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

import MenuItem from '../navbar/MenuItem';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      <div className="flex flex-row items-center">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="border border-neutral-200 p-2 flex items-center justify-center rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu size={24} />
        </div>
      </div>

      <div
        className={`
            z-50 absolute sm:right-0 top-14 
            border-[1px] rounded-xl 
            shadow-md bg-white text-[#2F4858]
            w-[40vw] max-w-[380px] min-w-[180px]
            overflow-hidden text-sm
            transition duration-500 ease-in-out
            ${isOpen ? 'translate-y-0' : '-translate-y-80'}
          `}
      >
        <div className="flex flex-col cursor-pointer">
          <>
            <div className="md:hidden">
              <MenuItem
                // onClick={() => router.push('/signin')}
                label="Sign in"
              />
              <MenuItem
                // onClick={() => router.push('/signup')}
                label="Sign up"
              />
            </div>
            <hr />
            <MenuItem
              // onClick={() => router.push('/')}
              label="Home"
            />
            <MenuItem onClick={() => {}} label="Help" />
          </>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
