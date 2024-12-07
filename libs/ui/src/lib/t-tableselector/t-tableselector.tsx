import React, { useState } from "react";
import { Box } from "@mui/material";

export function TTableSelector() {
  const [selectedTable, setSelectedTable] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelect = (table: string) => {
    setSelectedTable(table);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <Box className="absolute sm:top-[35%] top-[40%] sm:left-[10%] left-[12%]">
      <div className="flex items-center justify-center text-red-500 w-[200px] sm:w-">
        {/* Label */}
        <p className="w-[55%] font-semibold mr-2 hidden sm:block">Table No.</p>

        {/* Dropdown */}
        <div className="relative w-full">
          <div
            tabIndex={0}
            className="w-fit px-[2px] sm:px-3 sm:py-2 text-[12px] sm:text-sm font-medium border border-red-500 rounded cursor-pointer text-red-500 focus:outline-none focus:border-red-500"
            onClick={handleDropdownToggle}
          >
            {selectedTable || "Select a table"}
          </div>

          {/* Dropdown List */}
          {isDropdownOpen && (
            <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded shadow max-h-[100px] overflow-y-auto z-10">
              {["B1", "B2", "B3", "B4", "B5", "B6"].map((table) => (
                <li
                  key={table}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-red-500 hover:text-white ${
                    selectedTable === table ? "bg-red-500 text-white" : ""
                  }`}
                  onClick={() => handleSelect(table)}
                >
                  {table}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Box>
  );
}

export default TTableSelector;
