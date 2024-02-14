import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  
} from "@/components/ui/navigation-menu"



interface NavbarProps {
  // Define any props your Navbar component might receive
}

const Navbar: React.FC<NavbarProps> = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className='relative container mx-auto p-6'>
      {/* Flex Container */}
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <div className='pt-4'>
          {/* Adjust the font size here */}
          <h1 className='fixed top-0 left-0 w-full p-4 text-xl p-8'> FlashCard Ai</h1>
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex ml-auto'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>SignUp</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <Link to="/" />
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className='hidden space-x-6 md:flex ml-auto'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/docs">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Login
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        </div>
        
        {/* Button */}
        

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white w-full left-0 right-0 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white w-full left-0 right-0 drop-shadow-md'
          }
        >
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
