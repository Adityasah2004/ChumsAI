import React, { useState } from "react";
import CircularJSON from 'circular-json';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Button,
  Modal,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  TextInput,
  Label,
  Checkbox
} from "flowbite-react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import logo from '../assets/logoDark.png';

function Head() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const onCloseModal = () => {
    setOpenModal(false);
    setEmail('');
  };
  const str = CircularJSON.stringify(obj);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        email,
        password,
      };
      const response = await fetch('/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Sending email and password to the backend
      });

      if (response.ok) {
        // Successful login
        navigate('/dashboard');
      } else {
        // Failed login - handle different scenarios
        const responseData = await response.json();
        if (responseData.error === 'invalid_credentials') {
          // Incorrect credentials
          alert('Incorrect email or password');
        } else if (responseData.error === 'user_not_found') {
          // User not found
          alert('User not found');
        } else {
          // Other errors
          alert('Login failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or exceptions
      alert('An error occurred. Please try again later.');
    }
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
          <Button gradientDuoTone="purpleToBlue" onClick={() => setOpenModal(true)}>
            LOGIN <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavLink to="/Home" className="text-white" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/About" className="text-white" activeclassname="active">
            About
          </NavLink>
          <NavLink to="/WhyUs" className="text-white" activeclassname="active">
            Why us
          </NavLink>
          <NavLink to="/Blogs" className="text-white" activeclassname="active">
            Blogs
          </NavLink>
          <NavLink to="/Contact" className="text-white" activeclassname="active">
            Contact
          </NavLink>
        </NavbarCollapse>
      </Navbar>
      
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
      <div className="flex justify-start m-2">
          <HiOutlineArrowLeft
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            size={24}
            onClick={onCloseModal}
          />
        </div>
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Log In</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full text-center">
              <Button onClick={handleSubmit}>Log in</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Head;
