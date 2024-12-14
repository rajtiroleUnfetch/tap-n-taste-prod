// import styled from "styled-components";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// // Styled-component for the wrapper
// const StyledTOrderplaced = styled.div`
//   background-color: white; /* Overall background remains white */
//   text-align: center;
//   padding: 20px;
//   height: 50vh; /* Full viewport height */
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end; /* Position items at the bottom */
// `;

// // Styled-component for the icon wrapper
// const IconWrapper = styled.div`
//   background-color: white; /* Icon background becomes white */
//   border: 2px solid #FFFFFF; /* Border becomes white */
//   border-radius: 50%;
//   width: 100px; /* Increased width */
//   height: 100px; /* Increased height */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0 auto 16px;
// `;

// // Styled-component for the icon
// const StyledIcon = styled(CheckCircleIcon)`
//   font-size: 80px !important; /* Increased font-size for larger icon */
//   color: #f1414f !important; /* Checkmark remains red */
// `;

// // Styled text with Poppins font
// const StyledText = styled.h2`
//   color: #f1414f;
//   margin: 0;
//   font-weight: 500;
//   font-family: 'Poppins', sans-serif;
// `;

// export function TOrderplaced() {
//   return (
//     <StyledTOrderplaced>
//       <IconWrapper>
//         <StyledIcon />
//       </IconWrapper>
//       <StyledText>Order Successfully</StyledText>
//       <StyledText>Placed!</StyledText>
//     </StyledTOrderplaced>
//   );
// }

// export default TOrderplaced;
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Defining the type for the props
interface TOrderplacedProps {
  mainText: string;
  subText: string;
}

// Styled-component for the wrapper
const StyledTOrderplaced = styled.div`
  background-color: white; /* Overall background remains white */
  text-align: center;
  padding: 20px;
  height: 50vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Position items at the bottom */
`;

// Styled-component for the icon wrapper
const IconWrapper = styled.div`
  background-color: white; /* Icon background becomes white */
  border: 2px solid #FFFFFF; /* Border becomes white */
  border-radius: 50%;
  width: 100px; /* Increased width */
  height: 100px; /* Increased height */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
`;

// Styled-component for the icon
const StyledIcon = styled(CheckCircleIcon)`
  font-size: 80px !important; /* Increased font-size for larger icon */
  color: #f1414f !important; /* Checkmark remains red */
`;

// Styled text with Poppins font
const StyledText = styled.h2`
  color: #f1414f;
  margin: 0;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
`;

export function TOrderplaced({ mainText, subText }: TOrderplacedProps) {
  return (
    <StyledTOrderplaced>
      <IconWrapper>
        <StyledIcon />
      </IconWrapper>
      <StyledText>{mainText}</StyledText>
      <StyledText>{subText}</StyledText>
    </StyledTOrderplaced>
  );
}

export default TOrderplaced;
