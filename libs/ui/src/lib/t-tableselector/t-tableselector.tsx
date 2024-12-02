// // import React, { useState } from "react";
// // import styled from "styled-components";

// // // Styled wrapper for TTableSelector
// // const StyledTTableSelector = styled.div`
// //   font-family: "Poppins", sans-serif;
// // `;

// // // Additional styles for the modal
// // const ModalContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   padding: 20px;
// //   background-color: #fff;
// //   border-radius: 10px;
// //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //   width: 300px;
// // `;

// // const ModalTitle = styled.h2`
// //   font-size: 18px;
// //   color: #333;
// //   margin-bottom: 15px;
// // `;

// // const Dropdown = styled.select`
// //   width: 100%;
// //   padding: 10px;
// //   font-size: 16px;
// //   border: 1px solid #ccc;
// //   border-radius: 5px;
// //   outline: none;
// //   font-family: "Poppins", sans-serif;

// //   &:focus {
// //     border-color: #F1414F; /* Change border color on focus */
// //     color: white; /* Change font color of dropdown options */
// //   }

// //   option:focus {
// //     background-color: #F1414F; /* Change background color of option when focused */
// //     color: white; /* Change text color when option is focused */
// //   }
// // `;

// // const DropdownOption = styled.option`
// //   font-size: 16px;
// //   color: #000000; /* Default font color for options */
// //   font-family: "Poppins", sans-serif; /* Use Poppins font */
// //   background-color: #fff; /* Default background color */

// //   &:hover {
// //     background-color: #F1414F; /* Change background color on hover */
// //     color: white; /* Optional: Change font color on hover */
// //   }
// // `;

// // export function TTableSelector() {
// //   const [selectedTable, setSelectedTable] = useState("");

// //   // Define the event type explicitly
// //   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// //     setSelectedTable(event.target.value);
// //   };

// //   return (
// //     <StyledTTableSelector>
// //       <ModalContainer>
// //         <ModalTitle>Select your Table Number</ModalTitle>
// //         <Dropdown value={selectedTable} onChange={handleChange}>
// //           <DropdownOption value="" disabled>
// //             Select a table
// //           </DropdownOption>
// //           {["B1", "B2", "B3", "B4", "B5", "B6"].map((table) => (
// //             <DropdownOption key={table} value={table}>
// //               {table}
// //             </DropdownOption>
// //           ))}
// //         </Dropdown>
// //       </ModalContainer>
// //     </StyledTTableSelector>
// //   );
// // }

// // export default TTableSelector;
// import React, { useState } from "react";
// import styled from "styled-components";

// // Styled wrapper for TTableSelector
// const StyledTTableSelector = styled.div`
//   font-family: "Poppins", sans-serif;
// `;

// // Additional styles for the modal
// const ModalContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 300px;
// `;

// const ModalTitle = styled.h2`
//   font-size: 18px;
//   color: #333;
//   margin-bottom: 15px;
// `;

// const DropdownWrapper = styled.div`
//   width: 100%;
//   position: relative;

// `;

// const DropdownButton = styled.div`
//   width: 100%;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-family: "Poppins", sans-serif;
//   cursor: pointer;
//   background-color: #fff;
//   color: #000;
//   height:40px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   &:focus {
//     border-color: #E0E0E0; /* Change border color on focus */
//     outline: none;
//   }
// `;

// const DropdownList = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   list-style-type: none;
//   max-height: 100px;
//   overflow-y: auto;
//   z-index: 10;
// `;

// const DropdownItem = styled.li`
//   padding: 10px;
//   font-size: 16px;
//   color: #000;
//   cursor: pointer;

//   &:hover {
//     background-color: #F1414F; /* Change background color on hover */
//     color: white;
//   }

//   &.selected {
//     background-color: #F1414F; /* Red background for selected item */
//     color: white;
//   }
// `;

// export function TTableSelector() {
//   const [selectedTable, setSelectedTable] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

//   const handleSelect = (table: string) => {
//     setSelectedTable(table);
//     setIsDropdownOpen(false); // Close dropdown after selection
//   };

//   return (
//     <StyledTTableSelector>
//       <ModalContainer>
//         <ModalTitle>Select your Table Number</ModalTitle>
//         <DropdownWrapper>
//           <DropdownButton tabIndex={0} onClick={handleDropdownToggle}>
//             {selectedTable}
//           </DropdownButton>
//           {isDropdownOpen && (
//             <DropdownList>
//               {["B1", "B2", "B3", "B4", "B5", "B6"].map((table) => (
//                 <DropdownItem
//                   key={table}
//                   className={selectedTable === table ? "selected" : ""}
//                   onClick={() => handleSelect(table)}
//                 >
//                   {table}
//                 </DropdownItem>
//               ))}
//             </DropdownList>
//           )}
//         </DropdownWrapper>
//       </ModalContainer>
//     </StyledTTableSelector>
//   );
// }

// export default TTableSelector;
import { Box } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled wrapper for TTableSelector
const StyledTTableSelector = styled.div`
  font-family: 'Poppins', sans-serif;
`;

// Additional styles for the modal
const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12%;
  left: 10%;
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
  width: fit-content;
  padding: 10px;
  font-size: 14px;
  border: 1px solid red;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  color: red;

  &:focus {
    border-color: red; /* Change border color on focus */
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
  const [selectedTable, setSelectedTable] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelect = (table: string) => {
    setSelectedTable(table);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <Box className="absolute top-[35%] left-[10%]">
      <ModalContainer className="text-red-500 w-[200px]">
        <p className="w-[55%] font-semibold mr-2">Table No.</p>
        <DropdownWrapper className="">
          <DropdownButton tabIndex={0} onClick={handleDropdownToggle}>
            {selectedTable || 'Select a table'}
          </DropdownButton>
          {isDropdownOpen && (
            <DropdownList>
              {['B1', 'B2', 'B3', 'B4', 'B5', 'B6'].map((table) => (
                <DropdownItem
                  key={table}
                  className={selectedTable === table ? 'selected' : ''}
                  onClick={() => handleSelect(table)}
                >
                  {table}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </DropdownWrapper>
      </ModalContainer>
    </Box>
  );
}

export default TTableSelector;
