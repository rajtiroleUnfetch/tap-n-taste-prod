import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { TButton, TFooter } from '@tap-n-taste/ui';
import ProfilePic from '../../../assets/Group.png';

const ProfilePage = () => {
  const [userName, setUserName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '450px',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {/* Back Button */}
        <Box
          sx={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <ArrowBackIosIcon sx={{ fontSize: '20px', color: 'black', marginRight: '5px' }} />
          <h3
            style={{
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              color: 'black',
            }}
          >
            Profile
          </h3>
        </Box>

        {/* Profile Image */}
        <img
          src={ProfilePic}
          alt="Profile"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginTop: '90px',
            marginBottom: '50px',
          }}
        />

        {/* Name Input */}
        <TextField
          label="Enter your name"
          variant="outlined"
          value={userName}
          onChange={handleNameChange}
          sx={{
            width: '80%',
            marginBottom: '10px',
            fontFamily: 'Poppins, sans-serif',
          }}
        />

        <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 500 }}>
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

        {/* List Buttons */}
        <Box sx={{ width: '100%', marginTop: '20px' }}>
        <Button
            fullWidth
            sx={{
              textAlign: 'left',
              fontFamily: 'Poppins, sans-serif',
              borderRadius: '20px',
              fontSize: '14px',
              color: 'black',
              padding: '15px 0',
              justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '15px',
              backgroundColor: '#f1f1f1',
              '&:hover': { backgroundColor: '#FFE2E4' },
              
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
              justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '15px',
              backgroundColor: '#f1f1f1',
              marginTop: '10px',
              '&:hover': { backgroundColor: '#FFE2E4' },
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
              justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '15px',
              backgroundColor: '#f1f1f1',
              '&:hover': { backgroundColor: '#FFE2E4' },
              marginTop: '10px',
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
              backgroundColor: '#f1f1f1',
              justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: '15px',
              '&:hover': { backgroundColor: '#FFE2E4' },
              marginTop: '10px',
            }}
          >
            <QuestionMarkOutlinedIcon sx={{ color: 'red', marginRight: '10px' }} />
            Help
          </Button>
        </Box>

        {/* Logout Button */}
        <TButton
          text="LOGOUT"
          className={{ root: 'hover:bg-red-100', text: 'capitalize' }}
          sx={{
            color: 'white',
            width: '100%',
            backgroundColor: 'red',
            padding: '13px 0',
            borderRadius: '10px',
            fontWeight: 500,
            fontSize: '14px',
            marginTop: '20px',
          }}
        />

        {/* Footer */}
        <Box sx={{ width: '100%', backgroundColor: 'white', marginTop: '20px' }}>
          <TFooter />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
