"use client";

import Link from "next/link";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import Divider from "@mui/material/Divider";

import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky z-10 top-0 left-0 dark:bg-gray-950 bg-gray-100 w-full h-[70px] dark:text-gray-100 text-gray-950 font-semibold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full w-full">
          <div className="flex items-center">
            <Link href="/">Karan Joshi</Link>
          </div>
          <div className="flex justify-center items-center gap-8">
            <nav className="hidden md:flex">
              <ul className="flex justify-center items-center gap-8">
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="#experience">Experience</Link>
                </li>
                <li>
                  <Link href="#skills">Skills</Link>
                </li>
                <li>
                  <Link href="#projects">Project</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <Divider
              orientation="vertical"
              variant="fullWidth"
              flexItem
              className="dark:bg-gray-200 bg-gray-900 dark:bg-opacity-50"
            />
            <div className="flex items-center gap-8">
              {theme === "light" ? (
                <NightsStayIcon onClick={() => setTheme("dark")} />
              ) : (
                <LightModeIcon onClick={() => setTheme("light")} />
              )}{" "}
              <button className="bg-gray-900 dark:bg-gray-100 px-4 py-2 rounded-2xl text-gray-50 dark:text-gray-900">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
