
import { useNavigate } from "react-router-dom";
import profileIcon from "../../../assets/profile-icon.png";
import googleIcon from "../../../assets/devicon_google.svg";
import { Box, Typography } from "@mui/material";
import { TButton, TInput } from "@tap-n-taste/ui";

interface Props {
  type: string;
}

export function LoginSignUp({ type }: Props) {
  const navigate = useNavigate(); // React Router's navigate function

  const handleOtpNavigation = () => {
    navigate("/otp"); // Navigate to the /otp route
  };

  return (
    <Box className="w-full h-screen flex items-center justify-center">
      <Box className="w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] flex flex-col items-center gap-6 px-10 sm:px-5 md:px-2">
        <img
          src={profileIcon}
          alt="Profile Icon"
          className="w-[200px]"
        />
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            fontSize: {
              xs: "1.5rem", // Smaller font on small screens
              sm: "2rem",   // Default size on medium screens
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
          text={type === "login" ? "Login with Google" : "Sign Up with Google"}
          className={{ root: "font-semibold !bg-[#EDEDED] w-full !rounded-xl !shadow-none gap-2 h-12", text: 'text-black' }}
        />
        <TButton
          backgroundColor="#ffff"
          text={type === "login" ? "Sign Up" : "Login"}
          className={{ root: "font-semibold bg-[#F1414F] !underline !shadow-none !text-[#F1414F]", text: '!text-[#F1414F]' }}
        />
      </Box>
    </Box>
  );
}

export default LoginSignUp;

