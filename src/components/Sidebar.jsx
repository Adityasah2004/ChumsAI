import { Sidebar } from 'flowbite-react';
import { HiAdjustments, HiChartPie, HiHome, HiInbox, HiPlus, HiSupport, HiViewBoards } from 'react-icons/hi';
import logo from '../assets/logo.jpg';

function Side() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={logo} imgAlt="Flowbite logo">
        ChumsAI
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiHome}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiPlus}>
            Create
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup className='mt-52'>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiAdjustments}>
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default Side;