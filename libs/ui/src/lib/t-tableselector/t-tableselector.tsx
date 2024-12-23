import React, { useState } from 'react';
import { Box } from '@mui/material';

interface TTableSelectorProps {
  className?: string; // Custom className for additional styling
  sx?: object; // Inline styles for MUI's Box component
}

export function TTableSelector({
  className = '',
  sx = {},
}: TTableSelectorProps) {
  const [selectedTable, setSelectedTable] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelect = (table: string) => {
    setSelectedTable(table);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <Box className={`z-50 w-fit h-fit ${className}`} sx={sx}>
      <div className="flex items-center justify-center text-red-500">
        {/* Dropdown */}
        <h1 className="font-semibold text-black mr-2">Table No.</h1>
        <div className="ml-2 relative">
          <div
            tabIndex={0}
            className="w-fit sm:px-2 px-3 py-2 text-[12px] sm:text-sm font-medium border border-red-500 rounded cursor-pointer text-red-500 focus:outline-none focus:border-red-500"
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
