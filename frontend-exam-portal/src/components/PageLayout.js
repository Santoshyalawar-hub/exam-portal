import React from "react";
import Navbar from "./Navbar"; // Assuming you have this component
import Sidebar from "./Sidebar"; // Assuming you have this component

const PageLayout = ({ children }) => {
  return (
    // 1. Use flex and set the full screen height on the main container
    <div className="flex h-screen bg-gray-100">
      
      {/* The Sidebar will now be static because it's a direct child of the flex container */}
      <Sidebar />

      {/* This div will contain the top navbar and the scrollable content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Your Navbar at the top of the main content area */}
        <Navbar />

        {/* 2. Make the main content area scrollable, independent of the sidebar and navbar */}
        <main className="flex-1 overflow-y-auto">
          <div className="page-content p-8"> {/* We can add padding here */}
            {children}
          </div>
        </main>

      </div>
    </div>
  );
};

export default PageLayout;