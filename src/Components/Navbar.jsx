import React from "react";

const Navbar = () => {
  return (
    <section className="flex fixed top-0 w-full mx-auto justify-center items-end pt-3">
      <nav className="inline-block rounded-full border font-medium border-black bg-white p-3">
        <ul className="flex gap-3">
          <li className="hover:scale-105 transition duration">
            <a href="/">Home</a>
          </li>

          <li className="hover:scale-105 transition duration">
            <a href="">Myself</a>
          </li>

          <li className="hover:scale-105 transition duration">
            <a href="">Projects</a>
          </li>

          <li className="hover:scale-105 transition duration">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
