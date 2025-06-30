import React from "react";

const Navbar = () => {
  return (
    <section className="flex fixed top-0 w-full mx-auto justify-center items-end pt-3">
      <nav className="inline-block hover:px-5 transition-all duration-300 rounded-full border font-medium border-black bg-white p-3">
        <ul className="flex gap-3">
          <li className="hover:scale-110 transition-all duration-300">
            <a href="/">Home</a>
          </li>

          <li className="hover:scale-110 transition-all duration-300">
            <a href="">Myself</a>
          </li>

          <li className="hover:scale-110 transition-all duration-300">
            <a href="">Projects</a>
          </li>

          <li className="hover:scale-110 transition-all duration-300">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
