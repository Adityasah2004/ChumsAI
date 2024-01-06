import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import logo from '../assets/logoDark.png';

function Component() {
  // Custom CSS
  const navbarCustomStyles = `
    .navbar-custom {
      position: fixed; 
      color: #ffffff;
      top: 0;
      left: 0;
      width: 100%;
      height: 60px; 
      background-color: rgba(50, 50, 50, 0.75);
      backdrop-filter: blur(6px); 
      z-index: 50;
    }
  `;

  return (
    <>
      <style>{navbarCustomStyles}</style>
      <Navbar className="navbar-custom">
        <NavbarBrand href="#">
          <img
            src={logo}
            className="mr-3 h-9 sm:h-12 rounded-full"
            alt="ChumsAI logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold font-serif dark:text-white">
            ChumsAI
          </span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button
            className="flex flex-wrap gap-2 mb-2"
            gradientDuoTone="purpleToBlue"
          >
            SIGN UP
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse >
          <NavbarLink href="#" className="text-white">
            Home
          </NavbarLink>
          <NavbarLink href="/About" className="text-white">About</NavbarLink>
          <NavbarLink href="/WhyUs" className="text-white">Why us</NavbarLink>
          <NavbarLink href="/Blogs" className="text-white">Blogs</NavbarLink>
          <NavbarLink href="/Contact" className="text-white">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default Component;