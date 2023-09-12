import Container from '../Container';
import Logo from '../navbar/Logo';
import Search from '../navbar/Search';
import NavMenu from '../navbar/NavMenu';
import Categories from '../navbar/Categories';

const Navbar = () => {
  return (
    <nav className="w-full z-10 shadow-sm bg-[#c53434] text-white">
      <div className="py-4">
        <Container className="flex">
          <div className="flex flex-row justify-between items-center gap-4">
            {/* ----- */}
            <div className="sm:hidden">
              <NavMenu />
            </div>

            <Logo />

            <div
              className="
                flex-1 flex items-center gap-4 justify-end
              "
            >
              <Search />
              <ul className="hidden md:flex gap-3 ">
                <li
                  className="
                    cursor-pointer text-lg 
                    after:block after:content-[''] after:border-b-[3px] 
                    after:h-2 after:border-b-[#becbd0] after:scale-x-0 
                    after:transition after:duration-500 hover:after:scale-x-100
                    after:origin-[0%_50%]
                    hover:text-primary-color
                  "
                  // onClick={() => router.push('/signin')}
                >
                  Sign In
                </li>
                <li
                  className="
                    cursor-pointer text-lg
                    after:block after:content-[''] after:border-b-[3px] 
                    after:h-2 after:border-b-[#becbd0] after:scale-x-0 
                    after:transition after:duration-500 hover:after:scale-x-100
                    after:origin-[0%_50%]
                    hover:text-primary-color
                "
                  // onClick={() => router.push('/signup')}
                >
                  Sign Up
                </li>
              </ul>
              <div className="hidden sm:block">
                <NavMenu />
              </div>
            </div>
            {/* ----- */}
          </div>
        </Container>
      </div>
      <Categories />
      <Container>
        <h2
          className="
          text-lg sm:text-xl md:text-2xl font-bold -tracking-tighter pb-4
        "
        >
          AmbuConnect: Real-Time Ambulance Locator and Dispatch Service
        </h2>
        <h5
          className="
            text-xs sm:text-sm md:text-base -tracking-tight 
            pb-16 max-w-[1080px]
          "
        >
          Welcome to Ambulance Locator, your trusted platform to quickly locate
          and dispatch ambulances to emergencies. We connect you with the
          nearest ambulance services to ensure timely assistance during critical
          moments.
        </h5>
      </Container>
    </nav>
  );
};

export default Navbar;
