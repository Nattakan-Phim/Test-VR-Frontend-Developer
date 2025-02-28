import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  children: React.ReactNode;
}

const SideBar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  children,
}) => {
  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar */}
      <div
        className={`w-64 h-full fixed transition-transform duration-300 ease-in-out transform rounded-r-2xl bg-gray-400 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end px-5">
          {isOpen ? (
            <Button
              onClick={toggleSidebar}
            >
            Close
            </Button>
          ) : (
            <div className="p-7"></div>
          )}
        </div>

        {/* Logo */}
        <div>
          <h1
            className={`text-lg font-bold text-center p-5`}
          >
            <Link href={"/"}>LOGO</Link>
          </h1>
        </div>
        {/* Sidebar item*/}
        <div className="">
          <div className="p-4">
            <h2
              className={`text-lg font-bold`}
            >
              Sidebar
            </h2>
            <ul
              className={`m-2 flex flex-col gap-4`}
            >
              <Link
                href={"/#"}
                className="flex items-center gap-2 hover:border-2 rounded-xl hover:border-gray-400"
              >
                Dashboard
              </Link>
              <Link
                href={"/#"}
                className="flex items-center gap-2 hover:border-2 rounded-xl hover:border-gray-400"
              >
                Document
              </Link>
              <Link
                href={"/#"}
                className="flex items-center gap-2 hover:border-2 rounded-xl hover:border-gray-400"
              >
                management
              </Link>
              <Link
                href={"/#"}
                className="flex items-center gap-2 hover:border-2 rounded-xl hover:border-gray-400"
              >
                about
              </Link>
            </ul>
          </div>
          <div className="p-4">
            <h2
              className={`text-lg font-bold`}
            >
              Sidebar
            </h2>
            <ul
              className={`m-2 flex flex-col gap-2`}
            >
              <Link
                href={"/#"}
                className="flex items-center gap-2 hover:border-2 rounded-xl hover:border-gray-400"
              >
                About
              </Link>
              <Link
                href={"/#"}
                className="flex items-center gap-2 hover:border-2 rounded-xl hover:border-gray-400"
              >
                Setting
              </Link>
              <Link
                href={"/#"}
                className="flex items-center gap-2 hover:border-2 rounded-xl hover:border-gray-400"
              >
                Logout
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isOpen ? "ml-64" : "ml-0"
        }  `}
      >
        {children}
      </div>
    </div>
  );
};

export default SideBar;
