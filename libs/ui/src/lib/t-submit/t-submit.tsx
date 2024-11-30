import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// Container to hold everything
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

// Label styling for "Enter OTP"
const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  color: #424242;
`;

// Styling for the OTP input container (flex row layout)
const OTPContainer = styled.div`
  display: flex;
  gap: 8px;
`;

// Individual OTP input field styling
const OTPInput = styled.input`
  width: 50px;
  height: 50px;
  border: 2px solid #e53935;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #000;
  outline: none;

  &:focus {
    border-color: #d32f2f;
  }
`;

// Additional styling for TSubmit wrapper
const StyledTSubmit = styled.div`
  color: pink;
`;

export function TSubmit() {
  const [otp, setOtp] = useState(Array(6).fill('')); // Array for 6 input boxes
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
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <StyledTSubmit>
      <Container>
        <Label>Enter OTP</Label>
        <OTPContainer>
          {otp.map((value, index) => (
            <OTPInput
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el!)}
            />
          ))}
        </OTPContainer>
      </Container>
    </StyledTSubmit>
  );
}

export default TSubmit;
