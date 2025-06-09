
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../assets/logo.png";
import Nav from "./Nav";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");


  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
   <>
   <div className="fixed top-0 left-0 w-full z-50">
    <nav className=" flex justify-between items-center pl-3  pr-3 bg-white text-gray-800 shadow-md">
      <div className="text-xl font-bold">
        <img src={logo} className="h-13 w-46 p-2" alt="Logo" />
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
        <FiMenu />
      </button>

      {/* Sidebar for Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-800  shrink-0 transform ${menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden shadow-lg border-l`}>
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col gap-4 p-6  shrink-0">
          <li className="hover:text-orange-500">
            <Link to="/" className={` ${location.pathname == '/' ? 'text-orange-500' : ""}`} onClick={() => setMenuOpen(false)}>Home</Link>
          </li>

          <li className="hover:text-orange-500">
            <Link to="/about" className={` ${location.pathname == '/about' ? 'text-orange-500' : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/comitee" className={` ${location.pathname == '/comitee' ? 'text-orange-500' : ""}`} onClick={() => setMenuOpen(false)}>Editorial Board</Link>
          </li>

          {/* Dropdown */}
          <div className="relative">
            <li
              className="hover:text-blue-500 cursor-pointer flex items-center gap-2 transition-all duration-300"
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              For Author
              <FiChevronDown className={`transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
            </li>

            {mobileDropdownOpen && (
              <ul
                className="absolute left-0 mt-2 w-56 bg-white shadow-lg p-3 space-y-2 transition-opacity duration-300 
        border-2 border-linear-gradient(to right, red, blue, pink) 1 bg-clip-padding rounded-lg"
                style={{

                  borderWidth: "2px",
                  borderRadius: "10px",
                  borderStyle: "solid",
                  borderImage: "linear-gradient(to right, red, blue, pink) 1",
                  backgroundClip: "padding-box",
                }}
              >
                <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                  <Link to='/guide'>Author Guidelines</Link>
                </li>
                <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                  <Link to='/Topic'>Copyright Form</Link>
                </li>
                <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                  <Link to='/Topic'>Check Paper Status</Link>
                </li>
                <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                  <Link to='/Topic'>Peer Review Process</Link>
                </li>
                <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                  <a href="https://www.cureusjournals.com/users/sign_in" target="_blank" rel="noopener noreferrer">Model Manuscript</a>
                </li>

              </ul>
            )}
          </div>


          <li className="hover:text-orange-500">
            <Link to="/Imp" className={` ${location.pathname == '/Imp' ? 'text-orange-500' : ""}`} onClick={() => setMenuOpen(false)}>Issue</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/Venue" className={` ${location.pathname == '/Venue' ? 'text-orange-500' : ""}`} onClick={() => setMenuOpen(false)}>Editorial Board</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/registration" className={` ${location.pathname == '/registration' ? 'text-orange-500' : ""}`} onClick={() => setMenuOpen(false)}>Tools For Author</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/Contact" className={` ${location.pathname == '/Contact' ? 'text-orange-500' : ""}`} onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
           
        </ul>
       
      </div >

      {/* Desktop Menu */}
      < ul className="hidden md:flex gap-6 items-center  relative" >
        {/* <li className="hover:text-blue-500"><Link to="/" className={` ${location.pathname=='/'?'text-blue-500' : ""}`}>Home</Link></li> */}
        < li className="relative group" >
          <Link
            to="/"
            className={`hover:text-orange-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname == '/' ? 'text-blue-500' : ""}`}
          >
            Home
          </Link>
        </li >


        {/* <li className="hover:text-blue-500"><Link to="/about" className={` ${location.pathname=='/about'?'text-blue-500' : ""}`}>About</Link></li>
        <li className="hover:text-blue-500"><Link to="/comitee" className={` ${location.pathname=='/comitee'?'text-blue-500' : ""}`}>Committee</Link></li> */}
        < li className="relative group" >
          <Link
            to="/about"
            className={`hover:text-orange-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname == '/about' ? 'text-blue-500' : ""}`}
          >
            About
          </Link>
        </li >

        <li className="relative group">
          <Link
            to="/comitee"
            className={`hover:text-orange-500 relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname == '/comitee' ? 'text-blue-500' : ""}`}
          >
            Editorial Board
          </Link>
        </li>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="hover:text-orange-500 cursor-pointer flex items-center gap-2 transition-all duration-300"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            For Authors
            <FiChevronDown className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
          </button>

          {dropdownOpen && (
            <ul
              className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-3 space-y-2 transition-opacity duration-300 
          border-2 border-linear-gradient(to right, red, blue, pink) 1 bg-clip-padding"
              style={{

                borderWidth: "2px",
                borderRadius: "10px",
                borderStyle: "solid",
                borderImage: "linear-gradient(to right, red, blue, pink) 1",
                backgroundClip: "padding-box",
              }}
            >
              <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                <Link to="/guide">Author Guidelines</Link>
              </li>
              <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                <Link to="/Topic">Copyright From</Link>
              </li>
              <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                <Link to="https://www.cureusjournals.com/users/sign_in">Model Manuscript</Link>
              </li>
              <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                <Link to="/Topic">Check Paper Status</Link>
              </li>
              <li className="hover:bg-orange-100 rounded-md px-3 py-2 transition-colors">
                <Link to="/Topic">Peer Review Process</Link>
              </li>

            </ul>
          )}
        </div>


        <li className="hover:text-orange-500 relative group">
          <Link
            to="/Imp"
            className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname == '/Imp' ? 'text-blue-500' : ""}`}
          >
            Issue
          </Link>
        </li>

        <li className="hover:text-orange-500 relative group">
          <Link
            to="/Venue"
            className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname == '/Venue' ? 'text-blue-500' : ""}`}
          >
            Tools For Author
          </Link>
        </li>

        <li className="hover:text-orange-500 relative group">
          <Link
            to="/registration"
            className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname == '/registration' ? 'text-blue-500' : ""}`}
          >
            Blogs
          </Link>
        </li>

        <li className="hover:text-orange-500 relative group">
          <Link
            to="/Contact"
            className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-100 after:transition-all after:duration-300 group-hover:after:w-full ${location.pathname == '/Contact' ? 'text-blue-500' : ""}`}
          >
            Contact Us
          </Link>
        </li>
          
      </ul >
      
    </nav >
     <Nav/>
    </div>
   
   
   </>

  );
}

export default Navbar;