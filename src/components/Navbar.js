import React from "react";

const Navbar = () => {
  const Navlink = (props) => {
    return (
      <div>
        <a className="mx-5 title-font text-2xl text-gray-700" href={props.href}>
          {props.tag}
        </a>
      </div>
    );
  };

  return (
    <div className="w-full fixed py-2 z-50 bg-gray-100 shadow-md flex justify-end items-center">
        <div className="ml-10 mr-auto flex wrap items-center">
          <h1 className="pl-5 title-font text-3xl text-gray-700">Rami passed the breath test</h1>
        </div>

        <Navlink tag="Home" href="/" />
        <Navlink tag="BAC Calculator" href="/calculator" />
        <Navlink tag="Drinking Games" href="/games" />
        
        <div className="mr-10">
        </div>
    </div>
  );
};

export default Navbar;
