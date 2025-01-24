import React from "react";

const MainWindow = ({ isExpanded }) => {
  return (
    <div
      className={`transition-all duration-300 flex justify-center items-center ${
        isExpanded ? "ml-64 w-[calc(100%-12rem)]" : "ml-20 w-[calc(100%-5rem)]"
      } p-4`}
    >
      <div className="p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Main Content</h1>
        <p>
          This is the main content area. It adjusts based on the sidebar's
          expansion state. Add your components or content here.
        </p>
      </div>
    </div>
  );
};

export default MainWindow;
