import React, { useRef, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export function TSubmit() {
  const [otp, setOtp] = useState(Array(6).fill("")); // Array for 6 input boxes
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only keep the last character entered
    setOtp(newOtp);

    // Move to the next input if the input isn't empty and another box exists
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    alert(`Submitted OTP: ${otp.join("")}`); // Alert the OTP for demonstration
  };

  return (
    <Box className="flex flex-col items-center gap-4">
      {/* Title */}
      <Typography variant="h6" className="font-bold text-gray-800">
        Enter OTP
      </Typography>

      {/* OTP Input Fields */}
      <Box className="flex gap-2">
        {otp.map((value, index) => (
          <TextField
            key={index}
            variant="outlined"
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-[45px] h-[50px] text-center text-xl font-bold border-2 border-red-500 rounded-md focus:border-red-700"
            inputProps={{
              maxLength: 1,
              className: "text-center", // Center text inside input
            }}
            inputRef={(el) => (inputRefs.current[index] = el!)}
          />
        ))}
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="error"
        className="mt-4 w-40 h-12 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}
