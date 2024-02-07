import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import localStorageUtils from "../Hooks/localStorageUtils";
import {
  Button,
  Modal,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  TextInput,
  Label,
  Checkbox,
} from "flowbite-react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import CompanionList from "./CompanionCard";
import logo from "../assets/logoDark.png";

const Head = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [userId, setUserId] = useState(null);
  const history = useHistory();

  const onCloseModal = () => {
    setOpenModal(false);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
    setMode("login");
  };

  const handleModeChange = (newMode) => {
    // Clear form fields when switching modes
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setConfirmPassword("");
    setMode(newMode);
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    // history.push("/dashboard");
    const formData = {
      email,
      first_name: firstName,
      last_name: lastName,
      password,
    };

    if (mode === "signup" && password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }
    console.log("Request Payload:", formData);

    try {
      const response = await fetch(
        "http://localhost:8000/user/" +
          (mode === "login" ? "login" : "sign-up"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Log the entire response
      console.log("Response:", response);

      if (response.ok) {
        const responseData = await response.json();
        const accessToken = responseData.access_token;
        const userId = responseData.User_ID;

        localStorageUtils.setUserId(userId);
        localStorageUtils.setAccessToken(accessToken);

        console.log("User ID:", localStorage.getItem("userId"));
        console.log("Access Token:", localStorage.getItem("accessToken"));

        console.log("Login/Signup complete");
        history.push("/dashboard");
      } else if (response.status === 422) {
        // Unprocessable Entity - Validation errors
        const responseData = await response.json();

        // Assuming your server returns validation errors in a specific format
        if (responseData.errors) {
          console.log("Validation errors:", responseData.errors);
        } else {
          // Unexpected format of validation errors
          console.error(
            "Unexpected format of validation errors:",
            responseData
          );
          alert("Sign-up failed. Please try again.");
        }
      } else {
        // Other errors
        try {
          const responseData = await response.json();

          if (responseData.error === "invalid_credentials") {
            // Incorrect credentials
            alert("Incorrect email or password");
          } else if (responseData.error === "user_not_found") {
            // User not found
            alert("User not found");
          } else {
            // Other errors
            alert("Login/Signup failed. Please try again.");
          }
        } catch (error) {
          // Handle non-JSON response (e.g., unexpected server error)
          console.error("Error parsing JSON:", error);
          alert("Login/Signup failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors or exceptions
      alert("An error occurred. Please try again later.");
    }
  };

  const handleSubmitAndCloseModal = () => {
    handleSubmit();
    onCloseModal();
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
        <Link to="/">
          <NavbarBrand>
            <img
              src={logo}
              className="mr-3 h-9 sm:h-12 rounded-full"
              alt="ChumsAI logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-bold font-serif dark:text-white">
              ChumsAI
            </span>
          </NavbarBrand>
        </Link>
        <div className="flex md:order-2">
          <Button
            gradientDuoTone="purpleToBlue"
            onClick={() => setOpenModal(true)}
          >
            LOGIN <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <Link to="/" className="text-white" activeclassname="active">
            Home
          </Link>
          <Link to="/about" className="text-white" activeclassname="active">
            About
          </Link>
          <Link to="/whyus" className="text-white" activeclassname="active">
            Why us
          </Link>
          <Link to="/blogs" className="text-white" activeclassname="active">
            Blogs
          </Link>
          <Link to="/Contact" className="text-white" activeclassname="active">
            Contact
          </Link>
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
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {mode === "login" ? "Log In" : "Sign Up"}
            </h3>
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
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            {mode === "signup" && (
              <>
                <div className="flex justify-between">
                  <div className="w-1/2 pr-2">
                    <div className="mb-2 block">
                      <Label htmlFor="firstName" value="First Name" />
                    </div>
                    <TextInput
                      id="firstName"
                      placeholder="John"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="w-1/2 pl-2">
                    <div className="mb-2 block">
                      <Label htmlFor="lastName" value="Last Name" />
                    </div>
                    <TextInput
                      id="lastName"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="confirmPassword" value="Confirm Password" />
                  </div>
                  <TextInput
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                  />
                </div>
              </>
            )}
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full text-center">
              <Button onClick={handleSubmitAndCloseModal}>
                {mode === "login" ? "Log in" : "Sign up"}
              </Button>
              {userId && <CompanionList userId={userId} />}
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              {mode === "login" ? (
                <span>
                  Not registered?&nbsp;
                  <a
                    href="#"
                    className="text-cyan-700 hover:underline dark:text-cyan-500"
                    onClick={() => handleModeChange("signup")}
                  >
                    Create account
                  </a>
                </span>
              ) : (
                <span>
                  Already have an account?&nbsp;
                  <a
                    href="#"
                    className="text-cyan-700 hover:underline dark:text-cyan-500"
                    onClick={() => handleModeChange("login")}
                  >
                    Log in
                  </a>
                </span>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Head;
