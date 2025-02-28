import { Button } from "@mui/material";
import React from "react";

interface NavigationBarProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  toggleSidebar,
  isOpen,
}) => {
  return (
    <nav
      className={`mx-4 p-4 flex items-center justify-between rounded-xl bg-gray-400`}
    >
      {isOpen ? (
        <Button onClick={toggleSidebar} variant="contained" >Open</Button>
      ) : (
        <div className="p-5"></div>
      )}
      <h1> Navigation Bar</h1>
    </nav>
  );
};

export default NavigationBar;
