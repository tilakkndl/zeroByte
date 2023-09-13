import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      {/* <Image
        onClick={() => router.push("/")}
        alt="logo"
        className="hidden lg:block cursor-pointer"
        height="100"
        width="100"
        src="/images/logo.png"
      />
      <Image
        onClick={() => router.push("/")}
        alt="logo"
        className="lg:hidden cursor-pointer"
        height="100"
        width="33"
        src="/images/mobile-logo.png"
      /> */}
      <Link to={'/'}>
        <div
          className="
            text-2xl font-bold -tracking-tighter
            cursor-pointer hidden md:block
          "
        >
          AmbuConnect
        </div>
        <div
          className="
            text-2xl font-bold -tracking-tighter
            cursor-pointer md:hidden
          "
        >
          AC
        </div>
      </Link>
    </>
  );
};

export default Logo;
