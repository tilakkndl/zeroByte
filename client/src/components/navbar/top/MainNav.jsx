import { Link } from 'react-router-dom';

import Logo from '../Logo';
import NavMenu from '../NavMenu';
import Search from '../Search';

const MainNav = ({ menu, search, secondary, signIn, signUp }) => {
  return (
    <div className="flex flex-row justify-between items-center gap-4">
      {menu && (
        <div className="sm:hidden">
          <NavMenu />
        </div>
      )}
      <Logo />
      <div className="flex-1 flex items-center gap-4 justify-end">
        {search && <Search />}
        {!secondary && (
          <ul className="hidden md:flex gap-3 ">
            <Link to={'/signIn'}>
              <li className="text-lg hover-slider">Sign In</li>
            </Link>
            <Link to={'/signUp'}>
              <li className="text-lg hover-slider">Sign Up</li>
            </Link>
          </ul>
        )}
        {signIn && (
          <ul className="flex gap-3 ">
            <li className="text-base text-text-secondary-color">
              <b>New User ?</b>
            </li>
            <Link to={'/signUp'}>
              <li className="text-lg hover-slider">Sign Up</li>
            </Link>
          </ul>
        )}
        {signUp && (
          <ul className="flex gap-3 ">
            <li className="text-base text-text-secondary-color">
              <b>Already Registered ?</b>
            </li>
            <Link to={'/signIn'}>
              <li className="text-lg hover-slider">Sign In</li>
            </Link>
          </ul>
        )}
        {menu && (
          <div className="hidden sm:block">
            <NavMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainNav;
