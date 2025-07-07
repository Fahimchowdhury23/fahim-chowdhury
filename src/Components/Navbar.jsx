import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const clickedTheme = localStorage.getItem("theme");

    clickedTheme && setTheme(clickedTheme); // in one line
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navLists = [
    { name: "Home", id: "home" },
    { name: "Myself", id: "myself" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <section className="fixed top-0 pt-2 md:pt-3 z-50">
      <nav className="inline-block hover:px-4 md:hover:px-6 transition-all duration-300 rounded-full border font-medium border-secondary bg-primary/10 backdrop-blur-2xl p-2 md:p-3">
        <ul className="flex gap-3">
          {navLists.map((nav, index) => (
            <li
              key={index}
              className="hover:scale-105 text-secondary text-sm md:text-base cursor-pointer hover:px-2.5 hover:bg-secondary/20 hover:rounded-box transition-all duration-300"
            >
              <NavLink to={{ pathname: "/", hash: `#${nav.id}` }}>
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="fixed bg-primary right-6 md:right-24 lg:right-10 btn border-2 border-secondary rounded-full p-2 w-12 h-12 md:w-14 md:h-14 bottom-6 lg:bottom-10 transition-all duration-300 cursor-pointer">
        <a onClick={toggleTheme}>
          {theme === "dark" ? (
            <div>
              {/* sun icon */}

              <svg
                className="swap-on w-10 h-10 md:w-11 md:h-11 fill-current transition-all duration-300 transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </div>
          ) : (
            <div>
              {/* moon icon */}

              <svg
                className="swap-off w-10 h-10 md:w-11 md:h-11 fill-current transition-all duration-300 transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </div>
          )}
        </a>
      </div>
    </section>
  );
};

export default Navbar;
