import React from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
  };
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
            onClick={handleButtonClick}
          >
            LOGIN
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavLink to="/Home" className="text-white" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/About" className="text-white" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/WhyUs" className="text-white" activeClassName="active">
            Why us
          </NavLink>
          <NavLink to="/Blogs" className="text-white" activeClassName="active">
            Blogs
          </NavLink>
          <NavLink to="/Contact" className="text-white" activeClassName="active">
            Contact
          </NavLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default Component;