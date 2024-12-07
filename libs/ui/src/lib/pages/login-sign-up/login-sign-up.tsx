import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profileIcon from '../../../assets/profile-icon.png';
import googleIcon from '../../../assets/devicon_google.svg';
import { Box, Typography } from '@mui/material';
import { TButton, TInput } from '@tap-n-taste/ui';

interface Props {
  type: string;
}

export function LoginSignUp({ type }: Props) {
  const navigate = useNavigate(); // React Router's navigate function
  const { id } = useParams<{ id: string }>(); // Get the restaurant ID from the URL
  const [isLogin, setIsLogin] = useState(type === 'login'); // State to toggle between Login and Sign Up

  const handleOtpNavigation = () => {
    navigate('/otp'); // Navigate to the /otp route
  };

  const toggleLoginSignUp = () => {
    if (isLogin) {
      navigate(`/restaurants/${id}/sign-up`); // Navigate to Sign Up page
    } else {
      navigate(`/restaurants/${id}/login`); // Navigate to Login page
    }
    setIsLogin(!isLogin); // Toggle state
  };

  return (
    <Box className="w-full h-screen flex items-center justify-center">
      <Box className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex flex-col items-center gap-6 px-10 sm:px-5 md:px-2">
        <img src={profileIcon} alt="Profile Icon" className="w-[200px]" />
        <Typography
          sx={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
            fontSize: {
              xs: '1.5rem', // Smaller font on small screens
              sm: '2rem', // Default size on medium screens
            },
          }}
        >
          {type}
        </Typography>
        <TInput placeHolderText="Enter Your Name" />
        <TInput placeHolderText="Enter Your Mobile Number" />
        <TButton
          variant="contained"
          className={{ root: "font-semibold !bg-[#F1414F] w-full !rounded-xl !shadow-none h-12", text: 'text-white !font-bold' }}
          text={type === "login" ? "Login" : "SignUp"}
          onClick={handleOtpNavigation} // Navigate to /otp on click
        />
        <TButton
          variant="contained"
          icon={googleIcon}
          text={isLogin ? 'Login with Google' : 'Sign Up with Google'}
          className={{
            root: 'font-semibold !bg-[#EDEDED] w-full !rounded-xl !shadow-none gap-2 h-12',
            text: 'text-black',
          }}
        />
        {/* Toggle Button */}
        <TButton
          backgroundColor="#ffff"
          text={isLogin ? 'Sign Up' : 'Login'}
          onClick={toggleLoginSignUp} // Toggle between Login and Sign Up
          className={{
            root: 'font-semibold bg-[#F1414F] !underline !shadow-none !text-[#F1414F]',
            text: '!text-[#F1414F]',
          }}
        />
      </Box>
    </Box>
  );
}

export default LoginSignUp;
