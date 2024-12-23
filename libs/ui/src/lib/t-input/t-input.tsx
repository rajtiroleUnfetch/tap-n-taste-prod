import { OutlinedInput, SxProps, Theme } from '@mui/material';

// Update TInput props type to accept 'name'
interface TInputProps {
  placeHolderText: string;
  name?: string; // Allow 'name' prop
  styles?: SxProps<Theme>; // Optional sx prop for custom styles
  value: string;
  classNames?: string; // Optional className prop for additional Tailwind or custom classes
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TInput({ placeHolderText, styles, classNames }: TInputProps) {
  return (
    <OutlinedInput
      placeholder={placeHolderText}
      className={classNames} // Pass className if provided
      sx={{
        width: '100%',
        borderRadius: '8px',
        outline: 'none', // Remove external outline
        backgroundColor: '#F0F0F0', // Set background color
        '& .MuiOutlinedInput-input': {
          color: '#757575', // Default text color inside input
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none', // Remove the black outline
        },
        '&:focus-within .MuiOutlinedInput-notchedOutline': {
          border: '2px solid #F1414F', // Set border color to red on focus
        },
        ...styles, // Merge with custom styles
      }}
    />
  );
}

export default TInput;
