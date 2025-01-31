import React from "react";
import { TbHomeFilled } from "react-icons/tb";
import { IoLibrary, IoMailOpen } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
  const navItems = [
    { to: "/", label: "Home", icon: <TbHomeFilled /> },
    { to: "/shop", label: "Shop", icon: <IoLibrary /> },
    {
      to: "mailto:anishpanj026@gmail.com",
      label: "Contact",
      icon: <IoMailOpen />,
    },
  ];

  return (
    <nav className={containerStyles}>
      {/* close button inside navbar */}
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className="text-xl self-end cursor-pointer relative left-8"
          />
          {/* logo */}
          <Link to={"/"} className="bold-24 mb-10">
            <h4 className="text-secondary">BookSphere</h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex relative top-1">
          {/* For "Contact" item use <a> tag instead of NavLink to ensure it works properly */}
          {to.startsWith("mailto") ? (
            <a
              onClick={menuOpened ? toggleMenu : undefined}
              href={to}
              className="flexCenter gap-x-2"
            >
              <span className="text-xl">{icon}</span>
              <span className="medium-16">{label}</span>
            </a>
          ) : (
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "active-link flexCenter gap-x-2"
                  : "flexCenter gap-x-2"
              }
            >
              <span className="text-xl">{icon}</span>
              <span className="medium-16">{label}</span>
            </NavLink>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
