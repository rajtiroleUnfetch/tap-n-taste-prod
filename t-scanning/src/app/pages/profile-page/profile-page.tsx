import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { TButton, TFooter } from '@tap-n-taste/ui'; 
import { TextField } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



import ProfilePic from '../../../assets/Group.png'; // Import your profile image 
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined'; 
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'; 
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined'; 

const ProfilePage = () => {
  const [userName, setUserName] = useState('');  // State for dynamic user name

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);  // Update name based on input
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh', // Full viewport height
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
        backgroundColor: 'white', // #f1f1f1 background for the entire page
      }}
    >
      <Box
        sx={{
          height: '100vh',
          width: '100%', // Make the box responsive
          maxWidth: '450px', // Limit the width
          backgroundColor: 'white', // White background for the main box
          padding: '20px',
          //borderRadius: '10px', // Rounded corners for the box
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for a soft appearance
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
     <div
  style={{
    position: 'absolute', // Position the container absolutely
    top: '10px', // Distance from the top
    left: '750px', // Distance from the left
    display: 'flex',
    alignItems: 'center', // Properly align icon and text horizontally
    padding: '0', // Remove extra padding
    cursor: 'pointer', // Makes the back button interactive
  }}
>
  <ArrowBackIosIcon
    sx={{
      fontSize: '20px',
      color: 'black',
      marginRight: '5px', // Add spacing between icon and text
    }}
  />
  <h3
    style={{
      margin: '0', // Remove any default margin
      fontFamily: 'Poppins,  sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      color: 'black',
    }}
  >
    Profile
  </h3>
</div>

  
    
  

        {/* Profile Image */}
        <img
          src={ProfilePic}
          alt="Profile"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginTop: '90px', // Add gap from top
            marginBottom: '100px', // Gap below the image
          }}
        />

        {/* Name Input and Display */}
        <TextField
          label="Enter your name"
          variant="outlined"
          value={userName}
          onChange={handleNameChange}
          sx={{
            width: '80%',
            marginBottom: '0px',
            marginTop: '-80px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
          }}
        />

        {/* Displaying Name Dynamically */}
        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', color: '#000',marginTop: '5px', marginBottom: '10px', fontWeight: 500 }}>
          {userName || 'Your Name'}
        </h2>

        {/* Edit Profile Button */}
        <TButton
          text="Edit profile"
          className={{ root: 'hover:bg-gray-100', text: 'capitalize' }}
          sx={{
            color: '#F1414F',
            border: '1px solid #F1414F',
            fontFamily: 'Poppins, sans-serif',
            padding: '4px 10px',
            fontSize: '14px',
            fontWeight: 500,
          }}
        />

<Box sx={{ width: '110%', marginTop: '10px', textAlign: 'left' }}>
  <Box sx={{ backgroundColor: 'white', borderRadius: '10px', marginBottom: '10px', padding: '20px' }}>
    <Button
      fullWidth
      sx={{
        textAlign: 'left',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: '20px',
        fontSize: '14px',
        color: 'black',
        padding: '15px 0',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '15px',
        marginBottom: '20px',
        fontWeight: 500,
        backgroundColor: '#f1f1f1',
        '&:hover': {
          backgroundColor: '#FFE2E4',
        },
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: '10px' }}>
        <path fill="red" d="M14.8 8L16 9.2L9.2 16L8 14.8zM4 4h16c1.11 0 2 .89 2 2v4a2 2 0 1 0 0 4v4c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2V6a2 2 0 0 1 2-2m0 2v2.54a3.994 3.994 0 0 1 0 6.92V18h16v-2.54a3.994 3.994 0 0 1 0-6.92V6zm5.5 2c.83 0 1.5.67 1.5 1.5S10.33 11 9.5 11S8 10.33 8 9.5S8.67 8 9.5 8m5 5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5" />
      </svg>
      Coupons
    </Button>
    <Button
      fullWidth
      sx={{
        textAlign: 'left',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: '20px',
        fontSize: '14px',
        color: 'black',
        padding: '15px 0',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '15px',
        marginBottom: '20px',
        fontWeight: 500,
        backgroundColor: '#f1f1f1',
        '&:hover': {
          backgroundColor: '#FFE2E4',
        },
      }}
    >
      <ReorderOutlinedIcon sx={{ color: 'red', marginRight: '10px' }} />
      Orders
    </Button>
    <Button
      fullWidth
      sx={{
        textAlign: 'left',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: '20px',
        fontSize: '14px',
        color: 'black',
        padding: '15px 0',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '15px',
        marginBottom: '20px',
        fontWeight: 500,
        backgroundColor: '#f1f1f1',
        '&:hover': {
          backgroundColor: '#FFE2E4',
        },
      }}
    >
      <NotificationsOutlinedIcon sx={{ color: 'red', marginRight: '10px' }} />
      Notifications
    </Button>
    <Button
      fullWidth
      sx={{
        textAlign: 'left',
        fontFamily: 'Poppins, sans-serif',
        borderRadius: '20px',
        fontSize: '14px',
        color: 'black',
        padding: '15px 0',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '15px',
        marginBottom: '0px',
        fontWeight: 500,
        backgroundColor: '#f1f1f1',
        '&:hover': {
          backgroundColor: '#FFE2E4',
        },
      }}
    >
      <QuestionMarkOutlinedIcon sx={{ color: 'red', marginRight: '10px' }} />
      HELP
    </Button>
  </Box>
</Box>



        {/* Logout Button */}
        <TButton
          text="LOGOUT"
          className={{ root: 'hover:bg-red-100', text: 'capitalize', }}
          sx={{
            color: 'white',
            width: '100%',
            backgroundColor: 'red',
            padding: '13px 0',
            borderRadius: '10px',
            fontWeight: 500,
            fontSize: '14px',
            fontStyle: 'normal',
            fontFamily: 'Poppins, sans-serif',
            marginBottom: '0px',
            marginTop: '0px'
          }}
        />

        {/* Bottom Navbar Section */}
        <Box
  sx={{
    width: '100%',
    backgroundColor: 'white', // Adjust to your desired background color
    padding: '13px 0',
    borderRadius: '10px',
    marginTop: '20px',
  }}
>
  <TFooter />
</Box>
      </Box>
    </Box>
   
  );
};

export default ProfilePage;
