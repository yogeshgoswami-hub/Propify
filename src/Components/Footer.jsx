import React from "react";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col  md:flex-row justify-between items-start">
        <div className="text-white w-full md:w-1/3 mb-8 md:mb-0 ">
          <a href="#Header">
            <h1 className="text-3xl  text-white font-serif">
              <span className="text-5xl">P</span>ropify
            </h1>
          </a>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            quidem sint magnam modi eos rerum.
          </p>
        </div>

        <div className="w-full md:w-1/5 md:mb-0">
          <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold mb-4 text-white">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, article and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto"
            />
            <button className="py-2 px-4 text-white rounded bg-blue-500 cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div> 

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2026 © Yogesh 💯🔥 All Rights Reserved 🛑
      </div>
    </div>
  );
};

export default Footer;
