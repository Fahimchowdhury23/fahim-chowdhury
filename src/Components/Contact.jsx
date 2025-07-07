import React, { useState } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { GoCopy } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(""), 1500);
    });
  };

  const email = "fahim.dev23@gmail.com";
  const phone = "+8801974247395";

  return (
    <div className="pt-10 text-center text-secondary">
      <a className="px-3 py-1 font-semibold transition-colors duration-100 bg-secondary text-primary rounded-lg">
        Contact
      </a>

      <h2 className="text-3xl md:text-4xl font-extrabold py-3">Get in Touch</h2>

      <p>
        Wanna work together? Just shoot me a dm{" "}
        <a
          className="hover:underline text-blue-500"
          target="_blank"
          href="https://www.linkedin.com/in/md-fahim-chowdhoury"
        >
          with a direct question on LinkedIn
        </a>{" "}
        and I'll respond ASAP.
      </p>
      <p>Or,</p>

      <div>
        Feel free to hit me up on :{/* For WhatsApp */}
        <div className="flex justify-center items-center pt-2 gap-1 relative">
          <FaSquareWhatsapp className="text-green-500" size={22} /> WhatsApp:{" "}
          <span className="font-medium">{phone}</span>
          <button
            onClick={() => handleCopy(phone)}
            className="text-sm rounded-sm p-0.5 hover:bg-secondary/20 transition-all flex items-center transform duration-300 cursor-pointer"
          >
            {copiedText === phone ? (
              <IoMdCheckmark size={18} className="inline-block mr-1" />
            ) : (
              <GoCopy size={18} className="inline-block mr-1" />
            )}
          </button>
          {copiedText === phone && (
            <div className="absolute -right-2 -top-5 md:right-30 bg-secondary text-primary -translate-x-1/2 px-2 py-1 text-xs rounded shadow transition-all duration-300 transform">
              Copied!
            </div>
          )}
        </div>
        {/* For Gmail */}
        <div className="flex text-sm md:text-base justify-center items-center pt-2 gap-1 relative">
          <MdOutlineMail className="text-red-500" size={22} /> Gmail:{" "}
          <span className="font-medium">{email}</span>
          <button
            onClick={() => handleCopy(email)}
            className="text-sm rounded-sm p-0.5 hover:bg-secondary/20 transition-all flex items-center transform duration-300 cursor-pointer"
          >
            {copiedText === email ? (
              <IoMdCheckmark size={18} className="inline-block mr-1" />
            ) : (
              <GoCopy size={18} className="inline-block mr-1" />
            )}
          </button>
          {copiedText === email && (
            <div className="absolute -right-9 -top-5 md:right-18 bg-secondary text-primary -translate-x-1/2 px-2 py-1 text-xs rounded shadow transition-all duration-300 transform">
              Copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
