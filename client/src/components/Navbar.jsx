import React from "react";

const Navbar = () => {
  return (
    <div className="h-[10%] bg-[#D52323] flex justify-between items-center text-white w-full pr-20">
      <div className=" text-[3rem] font-bold mx-3">LOGO</div>
      <div className=" mx-3 w-[40%] flex justify-evenly items-center">
        <a href="#">Home</a>
        <a href="#">Settings</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a
          href="./components/Login.jsx"
          className="bg-[#1C0E0E] rounded-xl w-[100px] h-[40px] p-2 text-center"
        >
          Login
        </a>
        <a
          href="#"
          className="bg-white text-black rounded-xl w-[100px] h-[40px] p-2 text-center"
        >
          SignUp
        </a>
      </div>
    </div>
  );
};

export default Navbar;
