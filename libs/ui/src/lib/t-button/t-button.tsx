

// import React from 'react';
// import styled from 'styled-components';

// const StyledTButton = styled.button<{ backgroundColor?: string }>`
//   background-color: ${(props) => props.backgroundColor || '#f44336'}; /* Default to red if no backgroundColor is provided */
//   color: #fff;
//   font-size: 1rem;
//   padding: 10px 16px;
//   border-radius: 8px;
//   max-width: 400px;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) =>
//       props.backgroundColor ? darken(0.1, props.backgroundColor) : '#d32f2f'}; /* Darken on hover */
//   }

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   // Responsive styles
//   @media (max-width: 600px) {
//     padding: 8px 12px;
//     font-size: 0.8rem;
//   }

//   @media (min-width: 600px) and (max-width: 960px) {
//     padding: 10px 16px;
//     font-size: 1rem;
//   }

//   @media (min-width: 960px) {
//     padding: 12px 20px;
//     font-size: 1.2rem;
//   }
// `;

// // Function to darken a color
// const darken = (amount: number, color: string) => {
//   const colorInt = parseInt(color.slice(1), 16);
//   const r = Math.max((colorInt >> 16) - amount, 0);
//   const g = Math.max(((colorInt >> 8) & 0x00ff) - amount, 0);
//   const b = Math.max((colorInt & 0x0000ff) - amount, 0);
//   return `#${(1 << 24) + (r << 16) + (g << 8) + b.toString(16).slice(1)}`;
// };

// interface TButtonProps {
//   icon?: React.ReactNode | string;
//   text: string;
//   onClick?: () => void;
//   iconPosition?: 'left' | 'right';
//   marginLeftRight?: string;
//   backgroundColor?: string;  // Custom background color
// }

// export function TButton({
//   icon,
//   text,
//   onClick,
//   iconPosition = 'left',
//   marginLeftRight = '16px',
//   backgroundColor,  // Custom background color passed in the props
// }: TButtonProps) {
//   return (
//     <StyledTButton
//       onClick={onClick}
//       style={{
//         marginLeft: marginLeftRight,
//         marginRight: marginLeftRight,
//       }}
//       backgroundColor={backgroundColor}  // Apply custom background color
//     >
//       {icon && iconPosition === 'left' && (
//         <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
//           {typeof icon === 'string' ? (
//             <img src={icon} alt="" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
//           ) : (
//             React.cloneElement(icon as React.ReactElement, { style: { color: 'white' } })
//           )}
//         </span>
//       )}
//       {text}
//       {icon && iconPosition === 'right' && (
//         <span style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
//           {typeof icon === 'string' ? (
//             <img src={icon} alt="" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
//           ) : (
//             React.cloneElement(icon as React.ReactElement, { style: { color: 'white' } })
//           )}
//         </span>
//       )}
//     </StyledTButton>
//   );
// }

// export default TButton;
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';

const StyledTButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || '#f44336'}; /* Default red background */
  color: #fff;
  font-size: 1rem;
  padding: 10px 16px;
  border-radius: 8px;
  width: 100%
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Ensures it takes up full width */

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor ? darken(0.1, props.backgroundColor) : '#d32f2f'}; /* Darken on hover */
  }

  // Responsive styles
  @media (max-width: 600px) {
    padding: 8px 12px;
    font-size: 0.8rem;
  }

  @media (min-width: 600px) and (max-width: 960px) {
    padding: 10px 16px;
    font-size: 1rem;
  }

  @media (min-width: 960px) {
    padding: 12px 20px;
    font-size: 1.2rem;
  }
`;

// Function to darken a color
const darken = (amount: number, color: string) => {
  const colorInt = parseInt(color.slice(1), 16);
  const r = Math.max((colorInt >> 16) - amount, 0);
  const g = Math.max(((colorInt >> 8) & 0x00ff) - amount, 0);
  const b = Math.max((colorInt & 0x0000ff) - amount, 0);
  return `#${(1 << 24) + (r << 16) + (g << 8) + b.toString(16).slice(1)}`;
};

interface TButtonProps {
  icon?: React.ReactNode | string;
  text: string;
  onClick?: () => void;
  iconPosition?: 'left' | 'right';
  marginLeftRight?: string;
  backgroundColor?: string;  // Custom background color
  sx?: React.CSSProperties; // Custom inline styles
  className?: string;       // Additional custom classes
}


export function TButton({
  icon,
  text,
  onClick,
  iconPosition = 'left',
  marginLeftRight = '16px',
  backgroundColor,  // Custom background color passed in the props
  sx,        // Inline styles
  className, // Custom classes
}: TButtonProps) {
  return (
    <StyledTButton
      onClick={onClick}
      style={{
        marginLeft: marginLeftRight,
        marginRight: marginLeftRight,
         ...sx, // Merge custom styles
      }}
      backgroundColor={backgroundColor}  // Apply custom background color
      className={clsx(className)} // Combine custom classes with clsx
    >
      {icon && iconPosition === 'left' && (
        <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
          ) : (
            React.cloneElement(icon as React.ReactElement, { style: { color: 'white' } })
          )}
        </span>
      )}
      {text}
      {icon && iconPosition === 'right' && (
        <span style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="" style={{ width: '20px', height: '20px', filter: 'invert(1)' }} />
          ) : (
            React.cloneElement(icon as React.ReactElement, { style: { color: 'white' } })
          )}
        </span>
      )}
    </StyledTButton>
  );
}

export default TButton;

