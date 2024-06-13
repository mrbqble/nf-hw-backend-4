import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiAddBoxLine, RiCloseLine, RiHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import UsersActivity from "../UsersAcitvity";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${
        showSidebar ? "left-0" : "-left-full"
      } md:left-0 transition-all duration-300 z-50`}
    >
      <div className="md:hidden absolute right-4 top-4">
        <button
          className="text-2xl p-2 box-content"
          onClick={() => setShowSidebar(false)}
        >
          <RiCloseLine />
        </button>
      </div>
      <div>
        <div className="mb-8">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            width={130}
            height={130}
            alt="Spotify"
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <AiFillHome className="text-2xl" /> Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <HiMagnifyingGlass className="text-2xl" /> Search
              </Link>
            </li>
            <li className="mb-8">
              <Link
                to="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <BiLibrary className="text-2xl" /> Library
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <RiAddBoxLine className="text-2xl" /> Create a Playlist
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <RiHeartFill className="text-2xl" /> Favorite Songs
              </Link>
            </li>
          </ul>
        </nav>
        <UsersActivity />
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a
                href="https://www.spotify.com/kz-ru/legal/cookies-policy/"
                className="text-xs hover:underline"
              >
                Cookies
              </a>
            </li>
            <li>
              <a
                href="https://www.spotify.com/kz-ru/legal/privacy-policy/"
                className="text-xs hover:underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
