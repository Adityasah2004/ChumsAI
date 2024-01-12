import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import {
  HiAdjustments,
  HiChartPie,
  HiHome,
  HiInbox,
  HiLogout,
  HiPlus,
  HiViewBoards,
} from "react-icons/hi";
import logo from "../assets/logoDark.png";

function Side() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-50 w-full bg-black border-b border-gray-700 dark:bg-black dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className={`inline-flex items-center p-2 text-sm text-gray-300 rounded-lg sm:hidden hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
                  isSidebarOpen ? "active" : ""
                }`}
                onClick={handleToggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8 me-3" alt="Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white dark:text-white">
                  ChumsAI
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <Dropdown
                    label=" "
                    className="bg-black"
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <span className="mr-8 text-white">
                        <img src="your_image_url" alt="Profile" />
                      </span>
                    )}
                  >
                    <Dropdown.Item className="text-gray-200 text-center">
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item className="text-gray-200 text-center">
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item className="text-gray-200 text-center">
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40  h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-black border-r border-gray-700 sm:translate-x-0 dark:bg-black dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 justify-between overflow-y-auto text-left  bg-black dark:bg-black">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <HiHome className="w-5 h-5 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-200 dark:group-hover:text-gray-900" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <HiPlus className="w-5 h-5 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-200 dark:group-hover:text-gray-900" />
                <span className="ms-3">Create Companion</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <HiViewBoards className="w-5 h-5 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-200 dark:group-hover:text-gray-900" />
                <span className="ms-3">Documentations</span>
              </a>
            </li>
          </ul>
          <hr
            className="my-4 border-t border-gray-700 dark:border-gray-700"
            style={{
              marginTop: "35rem",
            }}
          />
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <HiLogout className="w-5 h-5 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-200 dark:group-hover:text-gray-900" />
                <span className="ms-3">Log Out</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700 group"
              >
                <HiAdjustments className="w-5 h-5 text-gray-200 transition duration-75 dark:text-gray-400 group-hover:text-gray-200 dark:group-hover:text-gray-900" />
                <span className="ms-3">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Side;
