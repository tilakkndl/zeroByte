import Container from "@/components/Container";
import Categories from "@/components/navbar/Categories";
import Logo from "@/components/navbar/Logo";
import Search from "@/components/navbar/Search";
import NavMenu from "@/components/navbar/NavMenu";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

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
                  onClick={() => router.push("/signin")}
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
                  onClick={() => router.push("/signup")}
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
          Unlock Endless Possibilities: Rent Anything, Anywhere!
        </h2>
        <h5
          className="
            text-xs sm:text-sm md:text-base font-semibold -tracking-tight pb-16
          "
        >
          Discover a Diverse Community of Renters and Providers, Making Renting
          Easier Than Ever
        </h5>
      </Container>
    </nav>
  );
};

export default Navbar;
