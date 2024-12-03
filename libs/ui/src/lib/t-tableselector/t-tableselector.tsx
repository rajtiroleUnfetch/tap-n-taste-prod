<<<<<<< HEAD

import React, { useState } from "react";
import styled from "styled-components";

// Styled wrapper for TTableSelector
const StyledTTableSelector = styled.div`
  font-family: "Poppins", sans-serif;
`;

// Additional styles for the modal
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
`;

const DropdownWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const DropdownButton = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  height: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #e0e0e0; /* Change border color on focus */
    outline: none;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style-type: none;
  max-height: 100px;
  overflow-y: auto;
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px;
  font-size: 16px;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: #f1414f; /* Change background color on hover */
    color: white;
  }

  &.selected {
    background-color: #f1414f; /* Red background for selected item */
    color: white;
  }
`;
=======
import { Box } from '@mui/material';
import React, { useState } from 'react';
>>>>>>> 0f1dbe0e4b2823e55841873e3ebcf13180ddf17e

export function TTableSelector() {
  const [selectedTable, setSelectedTable] = useState('');
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
            {selectedTable || 'Select a table'}
          </div>

          {/* Dropdown List */}
          {isDropdownOpen && (
            <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded shadow max-h-[100px] overflow-y-auto z-10">
              {['B1', 'B2', 'B3', 'B4', 'B5', 'B6'].map((table) => (
                <li
                  key={table}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-red-500 hover:text-white ${
                    selectedTable === table ? 'bg-red-500 text-white' : ''
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
