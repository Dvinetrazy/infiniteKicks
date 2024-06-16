import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon  } from "@heroicons/react/24/outline";
import { useCart } from '@/pages';


export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const { getCartItemCount } = useCart(); // Ambil fungsi untuk mendapatkan jumlah item dalam keranjang


  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      // Jika dropdown sudah terbuka dan dihover kembali, biarkan terbuka
      return;
    }
    setActiveDropdown(index);
  };
  
  const handleDropdownClose = () => {
    // Tidak perlu melakukan apa pun di sini, biarkan dropdown tetap terbuka saat diarahkan ke children
  };
  

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-black lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      {routes.map(({ name, path, icon, href, target, children }, index) => (
        <Typography
        key={name}
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        {children ? (
          <div
            className="relative"
            onMouseEnter={() => handleDropdownToggle(index)}
            onMouseLeave={() => handleDropdownToggle(index)}
            onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing the dropdown
          >
            <Link to={path} className="cursor-pointer flex items-center gap-1 p-1 font-bold">
              {icon && React.createElement(icon, { className: "w-5 h-5 opacity-75 mr-1" })}
              {name}
            </Link>
            {activeDropdown === index && (
              <div
                className="absolute top-full bg-white mt-1 py-2 rounded-lg shadow-lg w-44"
                onMouseEnter={() => handleDropdownToggle(index)}
                onMouseLeave={() => handleDropdownToggle(null)} // Close dropdown only if cursor leaves dropdown area
                onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing the dropdown
                style={{ zIndex: 1000, left:'-50px' }}
              >
              {children.map((child) => (
              <Link
                key={child.name}
                to={child.path}
                className="block px-4 py-2 text-sm text-black flex items-center hover:bg-blue-50"
                onClick={handleDropdownClose}
              >
              {child.icon && (
                <span className="mr-2">
                  <img src={child.icon} alt={child.name} className="w-14 h-10" /> {/* Render gambar dengan path */}
                </span>
              )}
                <span>{child.name}</span>
              </Link>
            ))}

              </div>
            )}
          </div>
        ) : (
          <Link
            to={path}
            target={target}
            className="flex items-center gap-1 p-1 font-bold"
          >
            {icon && React.createElement(icon, { className: "w-5 h-5 opacity-75 mr-1" })}
            {name}
          </Link>
        )}
      </Typography>
      
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-1 w-full" style={{ background: "white", color: "black", Height:'10px'}}>
      <div className="container mx-auto flex items-center justify-between" style={{height:'15px', marginTop:'17px'}}>
        <Link to="/home">
          <Typography className="mr-4  cursor-pointer py-1.5 font-bold" color="inherit">
          <img src="/img/ic_logo.svg" height={154} width={154} alt="" />
          </Typography>
        </Link>
        <div className="hidden lg:flex">{navList}</div>

        <form className="hidden lg:flex items-center relative">
          <button className="absolute top-1/2 transform -translate-y-1/2 p-1" style={{left:'-110px'}}>
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              className="w-5 h-5 text-gray-700"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            className="items-center font-poppins input rounded-full pl-10 pr-3 py-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Search..."
            style={{width:'360px',height:'40px', fontSize:'14px', marginLeft:'-120px'} }
            fullWidth
            type="text"
          />
          <button type="reset" className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>

        <div className="hidden lg:flex gap-2 items-center" style={{marginLeft:'80px'}}>
          <a href="/cart" target="_blank" >
          <Link to="/cart" className="relative">
          <IconButton variant="text" size="sm" color="black">
            <ShoppingCartIcon className="h-6 w-6" />
          </IconButton>
          {/* Indikator jumlah item dalam keranjang */}
          {getCartItemCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-2">
              {getCartItemCount()}
            </span>
          )}
        </Link>
          </a>
          {React.cloneElement(action, { className: 'hidden lg:inline-block' })}
      </div>
      <IconButton
        variant="text"
        size="sm"
        color="white"
        className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
      </IconButton>
      </div>

      <MobileNav className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900" open={openNav}>
        <div className="container mx-auto">{navList}</div>
        <form className="form relative mt-4">
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1">
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              className="w-5 h-5 text-gray-700"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <input
            className="input rounded-full pl-10 pr-3 py-2 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md w-full"
            placeholder="Search..."
            required=""
            type="text"
          />
          <button type="reset" className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </form>
        {React.cloneElement(action, {
          className: "w-full block",
        })}
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Infinite Kicks",
  action: (
    <a target="_blank">
      <Button variant="gradient" size="sm" fullWidth>
        Logout
      </Button>
    </a>
  ),
};

Navbar.defaultProps = {
  brandName: 'Infinite Kicks',
  action: (
    <a target="_blank" href="/logout">
      <Button variant="gradient" size="sm" fullWidth>
        Logout
      </Button>
    </a>
  ),
};
export default Navbar;
