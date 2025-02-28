"use client"
import React, { useState } from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import SideBar from "./SideBar";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <NavigationBar toggleSidebar={toggleSidebar} isOpen={!isSidebarOpen}  />
        <main className="p-4">{children}</main>
        <Footer />
      </SideBar>
    </>
  );
};

export default ClientLayout;
