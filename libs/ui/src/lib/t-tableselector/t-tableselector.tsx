
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

export function TTableSelector() {
  const [selectedTable, setSelectedTable] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelect = (table: string) => {
    setSelectedTable(table);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <StyledTTableSelector>
      <ModalContainer>
        <ModalTitle>Select your Table Number</ModalTitle>
        <DropdownWrapper>
          <DropdownButton tabIndex={0} onClick={handleDropdownToggle}>
            {selectedTable || "Select a table"}
          </DropdownButton>
          {isDropdownOpen && (
            <DropdownList>
              {["B1", "B2", "B3", "B4", "B5", "B6"].map((table) => (
                <DropdownItem
                  key={table}
                  className={selectedTable === table ? "selected" : ""}
                  onClick={() => handleSelect(table)}
                >
                  {table}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </DropdownWrapper>
      </ModalContainer>
    </StyledTTableSelector>
  );
}

export default TTableSelector;

