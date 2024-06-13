import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul>
              <li className="mb-2">
                <a href="https://t.me/ncglx">About</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/dake_me">Jobs</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/mrbqble">For the Record</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-bold mb-4">Communities</h4>
            <ul>
              <li className="mb-2">
                <a href="https://t.me/ncglx">For Artists</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/mrbqble">Developers</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/dake_me">Advertising</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/ncglx">Investors</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/dake_me">Vendors</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-bold mb-4">Useful links</h4>
            <ul>
              <li className="mb-2">
                <a href="https://t.me/mrbqble">Support</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/ncglx">Free Mobile App</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-white font-bold mb-4">Spotify Plans</h4>
            <ul>
              <li className="mb-2">
                <a href="https://t.me/dake_me">Premium Individual</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/mrbqble">Premium Duo</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/ncglx">Premium Family</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/mrbqble">Premium Student</a>
              </li>
              <li className="mb-2">
                <a href="https://t.me/dake_me">Spotify Free</a>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center md:justify-start mt-4 md:mt-0">
            <a href="https://t.me/ncglx" className="text-gray-400 mx-2">
              <FaInstagram size={24} />
            </a>
            <a href="https://t.me/mrbqble" className="text-gray-400 mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="https://t.me/dake_me" className="text-gray-400 mx-2">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          © 2024 mrbqble & tuple
        </div>
      </div>
    </footer>
  );
};
