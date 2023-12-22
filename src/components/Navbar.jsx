import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

function component() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="#">
        <img src="src/assets/logo.jpg" className="mr-3 h-9 sm:h-12 rounded-full" alt="ChumsAI logo" />
        <span className="self-center whitespace-nowrap text-xl font-bold font-serif dark:text-white">ChumsAI</span>
      </NavbarBrand>
      <div className="flex md:order-2">
      <Button className="flex flex-wrap gap-2" gradientDuoTone="purpleToBlue">SIGN UP</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default component; 