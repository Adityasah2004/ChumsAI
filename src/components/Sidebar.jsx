import { Sidebar } from "flowbite-react";
import {
  HiAdjustments,
  HiChartPie,
  HiHome,
  HiInbox,
  HiPlus,
  HiViewBoards,
} from "react-icons/hi";
import logo from "../assets/logo.jpg";

function Side() {
  return (
    <Sidebar
      aria-label="Sidebar"
      className="bg-opacity-70 h-screen w-64 fixed left-0 top-0 bottom-0 flex flex-col"
    >
      <Sidebar.Logo
        href="to"
        img={logo}
        imgAlt="logo"
        className="text-black p-4"
      >
        ChumsAI
      </Sidebar.Logo>
      <Sidebar.Items className="text-left  justify-between ">
        <Sidebar.ItemGroup className="flex flex-col">
          <Sidebar.Item href="#" icon={HiHome} className="sidebar-item">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiPlus} className="sidebar-item">
            Create
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} className="sidebar-item">
            Inbox
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className="mt-4 flex flex-col">
          {" "}
          {/* Add margin-top to create space */}
          <Sidebar.Item href="#" icon={HiChartPie} className="sidebar-item">
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} className="sidebar-item">
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiAdjustments} className="sidebar-item">
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Side;
