"use client"

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import Container from "./Container";
import { navbarList } from "@/constant";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const { carts } = useAppSelector((state) => state.carts);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="border-b bg-bg-primary border-[#535861]">
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      <Container>
        <div className="flex justify-between py-2 px-5 items-center  shadow-sm">
          <div className="logo ">
            {/* <img className="w-[100px] h-[70px] object-fit" src={logo} alt="" /> */}
            <h1 className="text-xl text-white font-semibold">E-commerce</h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:block ">
            <ul className="lg:flex lg:gap-4 ">
              {navbarList?.map((nav, i) => (
                <li key={i}>
                  <Link href={nav.link} className="lg:ml-4 text-white">
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } lg:hidden transition-all duration-500 border-r z-50 border-gray-300/50 shadow-lg backdrop-blur-sm transform h-screen fixed w-[350px] bg-[#0c1117] text-black top-0 left-0`}
          >
            <button
              className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
              onClick={() => setOpen(false)}
            >
              <RxCross1 className="text-white" />
            </button>

            <ul className="flex  flex-col p-5 gap-5 text-[18px]">
              {navbarList?.map((nav, i) => (
                <li key={i}>
                  <Link href={nav.link} className="lg:ml-4 text-white">
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <Link href={"/carts"} className="relative cursor-pointer">
              <BsCart2 className=" text-4xl font-semibold text-white" />
              <div className="size-5  text-center text-sm font-bold bg-sky-100 top-0 right-0 rounded-full absolute text-sky-600">
                {/* {carts?.length} */}
              </div>
            </Link>

            <IoMdMenu
              className="text-[26px] cursor-pointer text-white lg:hidden ml-4"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;