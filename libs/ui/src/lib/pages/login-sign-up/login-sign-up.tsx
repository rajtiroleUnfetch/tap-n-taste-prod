import profileIcon from "../../../assets/profile-icon.png";
import googleIcon from "../../../assets/devicon_google.svg"
import { Box, Typography, useTheme } from "@mui/material";
import { TButton, TInput } from "@tap-n-taste/ui";

interface Props {
  type: string;
}

export function LoginSignUp({ type }: Props) {

  return (
    <Box className="w-full h-screen flex items-center justify-center">
      <Box
        className="w-full sm:w-[60%] md:w-[50%] lg:w-[20%] flex flex-col items-center gap-6 px-10 sm:px-5 md:px-2">
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
            }
          }}
        >
          {type}
        </Typography>
        <TInput placeHolderText="Enter Your Name" />
        <TInput placeHolderText="Enter Your Mobile Number" />
        <TButton
        className="font-semibold"
          text={type === "login" ? "Login" : "SignUp"} />
        <TButton
          backgroundColor="#EDEDED"
          icon={googleIcon}
          text={type === "login" ? "Login with Google" : "Sign Up with Google"}
          sx={{
            color: "black",
            boxShadow: "none"
          }}
          className="font-semibold"
        />
        <TButton
          backgroundColor="#ffff"
          text={type === "login" ? "Login" : "Sign Up"}
          sx={{
            color: "#F1414F",
            boxShadow:"none"
          }}
          className="font-semibold underline"
        />
      </Box>
    </Box>
  );
}

export default LoginSignUp;



// import profileIcon from "../../../assets/profile-icon.png";
// import { Box, Typography } from "@mui/material";
// import { TButton, TInput } from "@tap-n-taste/ui";

// interface Props {
//   type: string;
// }

// export function LoginSignUp({ type }: Props) {
//   return (
//     <Box className="flex items-center justify-center h-screen w-full bg-gray-50 border-2">
//       <Box className="flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-[60%] md:max-w-[40%] lg:max-w-[30%] bg-white p-6 rounded-md shadow-lg">
//         {/* Profile Icon */}
//         <img
//           src={profileIcon}
//           alt="Profile Icon"
//           className="w-20 h-20 object-contain mb-4"
//         />

//         {/* Title */}
//         <Typography className="capitalize font-bold text-xl sm:text-2xl mb-4">
//           {type}
//         </Typography>

//         {/* Inputs */}
//         <TInput placeHolderText="Enter Your Name" />
//         <div className="h-4" /> {/* Spacing between inputs */}
//         <TInput placeHolderText="Enter Your Mobile Number" />

//         {/* Button */}
//         <div className="h-6" /> {/* Spacing before button */}
//         <TButton text={type === "login" ? "Login" : "Sign Up"} />
//       </Box>
//     </Box>
//   );
// }

// export default LoginSignUp;
