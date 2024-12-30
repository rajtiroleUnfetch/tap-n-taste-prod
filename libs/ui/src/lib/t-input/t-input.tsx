import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

interface Props {
  label?: string; // Optional label for the input
  placeHolderText: string; // Placeholder for the input
  error?: boolean; // Indicates whether the input is in an error state
  helperText?: string; // Helper text to display below the input
  required?: boolean; // Whether the input is required
  tailwindClasses?: string; // Tailwind CSS classes for custom styling
  [key: string]: any; // Rest props for additional attributes
}

export const TInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      placeHolderText,
      error = false,
      helperText,
      required = false, // Default to false if not provided
      tailwindClasses = '', // Default to an empty string if not provided
      ...rest
    },
    ref // Accept the forwarded ref
  ) => {
    return (
      <div className={`w-full ${tailwindClasses}`}>
        {label && (
          <label className="block text-gray-700 font-medium mb-1">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <TextField
          placeholder={placeHolderText} // Set placeholder
          error={error} // Set error state
          helperText={helperText} // Display helper text
          variant="outlined"
          fullWidth
          inputRef={ref} // Pass the ref to the TextField
          {...rest} // Spread the rest props
        />
      </div>
    );
  }
);

export default TInput;
