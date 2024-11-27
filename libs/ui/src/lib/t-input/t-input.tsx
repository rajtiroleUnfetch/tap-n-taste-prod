import { OutlinedInput, SxProps, Theme } from '@mui/material';

interface Props {
  placeHolderText: string;
  styles?: SxProps<Theme>; // Optional sx prop for custom styles
  classNames?: string;  // Optional className prop for additional Tailwind or custom classes
}

export function TInput({  placeHolderText, styles, classNames }: Props) {
  return (
    <OutlinedInput
      placeholder={placeHolderText}
       className={classNames} // Pass className if provided
      sx={{
        width:"100%",
        outline: "none", // Remove external outline
        backgroundColor: "#F0F0F0", // Set background color
        '& .MuiOutlinedInput-input': {
          color: "#757575", // Default text color inside input
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: "none", // Remove the black outline
        },
        '&:focus-within .MuiOutlinedInput-notchedOutline': {
          border: "2px solid #F1414F", // Set border color to red on focus
        },
        ...styles, // Merge with custom styles
      }}
    />
  );
}

export default TInput;
