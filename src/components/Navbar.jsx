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
import logo from '/logo.svg';

function Component() {
  // Custom CSS
  const navbarCustomStyles = `
    .navbar-custom {
      position: fixed; 
      top: 0;
      left: 0;
      width: 100%;
      height: 60px; 
      background-color: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(4px); 
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
            className="flex flex-wrap gap-2"
            gradientDuoTone="purpleToBlue"
          >
            SIGN UP
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Why us</NavbarLink>
          <NavbarLink href="#">Blogs</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default Component;
