"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

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
      <div
        className="
          text-2xl font-bold -tracking-tighter
          cursor-pointer
        "
        onClick={() => router.push("/")}
      >
        Logo
      </div>
    </>
  );
};

export default Logo;
