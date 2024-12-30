import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex content-center justify-between p-3 font-semibold bg-yellow-500 text-violet-700">
      <div>WDM</div>
      <div>
        <Link className="p-3 hover:underline hover:bg-black hover:rounded-full hover:text-white" to={"/"}>Home</Link>
        <Link className="p-3 hover:underline hover:bg-black hover:rounded-full hover:text-white" to={"/about"}>About</Link>
        <Link className="p-3 hover:underline hover:bg-black hover:rounded-full hover:text-white" to={"/services"}>Services</Link>
        <Link className="p-3 hover:underline hover:bg-black hover:rounded-full hover:text-white" to={"/gallery"}>Gallery</Link>
        <Link className="p-3 hover:underline hover:bg-black hover:rounded-full hover:text-white" to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
