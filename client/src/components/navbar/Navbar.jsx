import Container from '../Container';
import Bottom from './bottom/Bottom';
import Categories from './middle/Categories';
import MainNav from './top/MainNav';

const Navbar = ({
  categories,
  bottom,
  menu,
  search,
  secondary,
  signIn,
  signUp,
}) => {
  return (
    <nav
      className={`
        w-full z-10 shadow-sm pt-4 pb-12
        ${
          secondary
            ? 'text-primary-color'
            : 'bg-primary-color text-text-primary-color'
        }
    `}
    >
      <Container>
        <MainNav
          menu={menu}
          search={search}
          secondary={secondary}
          signIn={signIn}
          signUp={signUp}
        />
        {categories && <Categories />}
        {bottom && <Bottom />}
      </Container>
    </nav>
  );
};

export default Navbar;
