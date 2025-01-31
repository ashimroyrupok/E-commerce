/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import Container from "./Container";
import { navbarList } from "@/constant";
import Link from "next/link";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useAppSelector } from "@/redux/hooks";

type TAccessToken = {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};
const Navbar = () => {
  const [open, setOpen] = useState(false);

  // user mail as a accessToken
  const user: TAccessToken | null = useAppSelector((state) => state.auth.user);
// console.log(user,"user")


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

          <div className="flex items-center justify-center gap-6">
            {/* avatar */}
            <Dropdown className=" text-black" placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button
              as={Link}
              className=" bg-bg-primary text-white border  "
              color="primary"
              href="/auth"
              variant="flat"
            >
              Sign Up
            </Button>

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
