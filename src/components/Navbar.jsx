import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const backgroundColor = "bg-white";
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className=" flex flex-row justify-between p-4 md:px-32 px-5 bg-darkBackground text-white  ">
        <div className=" flex items-center">
          <h1
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer font-semibold text-xl   "
          >
            TripWithMe
          </h1>
        </div>
        <nav className=" hidden lg:flex flex-row gap-6 items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all"
          >
            Home
          </Link>
          <Link
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all"
          >
            Features
          </Link>
          <Link
            to="destination"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all"
          >
            Destination
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all"
          >
            Contact
          </Link>
        </nav>

        <div className=" hidden lg:flex flex-row gap-6 items-center">
          <h1 className="hover:text-brightColor transition-all cursor-pointer">
            Register
          </h1>
          <Button title="Login" backgroundColor={backgroundColor} />
        </div>

        <div className="lg:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-18 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all"
        >
          Home
        </Link>
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all"
        >
          Features
        </Link>
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all"
        >
          Destination
        </Link>
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all"
        >
          About
        </Link>
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all"
        >
          Contact
        </Link>
        <div className=" flex flex-col lg:hidden lg:flex-row gap-6 items-center">
          <h1 className="hover:text-brightColor transition-all cursor-pointer">
            Register
          </h1>
          <Button title="Login" backgroundColor={backgroundColor} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
