import React from 'react';
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from 'flowbite-react';
import { FaDiscord, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Down() {
  return (
    <Footer container={false}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="#"
              src="src/assets/logo.jpg"
              alt="ChumsAI Logo"
              name="ChumsAI"
            />
          </div>
          <div className="text-left grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink href="#">Home</FooterLink>
                <FooterLink href="#">Services</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink href="#">Twitter</FooterLink>
                <FooterLink href="#">Facebook</FooterLink>
                <FooterLink href="#">LinkedIn</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="ChumsAI™" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={FaDiscord} />
            <FooterIcon href="#" icon={FaFacebook} />
            <FooterIcon href="#" icon={FaTwitter} />
            <FooterIcon href="#" icon={FaLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Down;
