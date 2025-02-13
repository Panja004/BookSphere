import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../assets/data.jsx";

const Footer = () => {
  return (
    <footer className="mb-4">
      <div className="rounded-tr-3xl rounded-tl-3xl pt-12 xl:pt-20 pb-8">
        <h3 className="h3">Discover books that ignite your imagination</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
          ducimus iste?
        </p>
        <hr className="my-8 bg-slate-900/30 h-[2px]" />
        {/* container */}
        <div className="flex justify-between flex-wrap gap-2">
          <div className="max-w-sm">
            {/* logo */}
            <Link to={"/"} className="flex-1 flex items-center justify-start">
              <img
                src={logo}
                alt="BookSphere logo"
                height={36}
                width={36}
                className="hidden sm:flex mr-2"
              />
              <h4 className="bold-24">BookSphere</h4>
            </Link>
            <p className="py-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              recusandae voluptatibus excepturi nostrum cum delectus repellat?
            </p>
            <div className="flexBetween pl-3 h-[4rem] bg-primary w-full max-w-[295px] rounded-full ring-1 ring-slate-500/5 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none"
              />
              <button className="btn-secondaryOne relative right-[68px] h-[4rem]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-8">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (
                    <Link to="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    to="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>
                    <p className="bold-15">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <a
                      href={link.link} // Using the 'link' property for the social media URL
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.id}
                      className="text-xl"
                    >
                      {link.icon}
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
      </div>
      {/* copyrights */}
      <p className="text-white bg-tertiary medium-14 py-2 px-8 rounded flexBetween">
        <span>2025 BookSphere</span>
        <span>All rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
