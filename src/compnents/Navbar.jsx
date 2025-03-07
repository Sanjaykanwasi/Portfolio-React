import React from "react";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { NAVIGATION_LINKS } from "../constants";

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to toggle mobile view
  const toggleMobileView = () => {
    setIsMobileView(!isMobileView);
  };

  // Function to handle Link Click
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const tagretElement = document.querySelector(href);
    if (tagretElement) {
      const offset = -85;
      const elementPosition = tagretElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileView(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl w-full px-6 items-center justify-between rounded-full border border-white/30 py-2 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="/">
                {" "}
                <span className="uppercase  whitespace-nowrap">
                  Sanjay Singh Kanwasi
                </span>
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-sm hover:text-stone-300 "
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <span className="pl-2 uppercase text-white">
                  {" "}
                  Sanjay Singh Kanwasi
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden "
                onClick={toggleMobileView}
                aria-label={isMobileView ? "Close Menu" : "Open Menu"}
              >
                {isMobileView ? (
                  <RiCloseLine className="m-2 h-6 w-5 " />
                ) : (
                  <RiMenu3Line className="m-2 h-6 w-5 " />
                )}
              </button>
            </div>
          </div>
          {isMobileView && (
            <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    className="block !text-white w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
