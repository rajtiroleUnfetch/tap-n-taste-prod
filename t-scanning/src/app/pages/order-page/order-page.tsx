import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import { TButton } from '@tap-n-taste/ui';
import Cross from '../../../assets/cross.png';
import CloseIcon from '@mui/icons-material/Close';

const OrderPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="font-primary my-20 flex flex-col items-center justify-center">
      <h5
        style={{
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        Active Orders
      </h5>

      <TButton
        text="Cancel Order"
        className={{ root: 'hover:bg-red-100', text: 'capitalize' }}
        sx={{
          color: 'white',
          backgroundColor: 'red',
          padding: '8px 16px',
          fontSize: '14px',
          fontFamily: 'Poppins',  // Ensuring the font is Poppins
        }}
        onClick={handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            width: 325,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow:
              '0px 143px 57px rgba(0, 0, 0, 0.01), 0px 81px 48px rgba(0, 0, 0, 0.05), 0px 36px 36px rgba(0, 0, 0, 0.09), 0px 9px 20px rgba(0, 0, 0, 0.1)',
            p: 3,
            textAlign: 'center',
            margin: 'auto',
            position: 'relative',
            border: '1px solid #E3E3E3',
            fontFamily: 'Poppins',  // Ensuring the font is Poppins
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: 350,  // Adjust height to fit everything comfortably
          }}
        >
          {/* Close Icon in the top-right corner */}
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 2,  // Ensuring the icon cross is at the top-right corner
              cursor: 'pointer',
            }}
          />

          {/* Centered Cross Image */}
          <img
            src={Cross}
            alt="Cross"
            style={{
              width: '100px',  // Increased size of the cross image
              height: '100px',
              marginBottom: '20px',  // Adding space between the image and text
            }}
          />

          {/* Message below the Cross Image */}
          <p
            style={{
              
              fontFamily: 'Poppins',  // Ensuring the font is Poppins
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              textAlign: 'center',
              color: '#F1414F',
              marginBottom: '20px',  // Adding space between the message and buttons
            }}
          >
            Do you surely want to cancel 
            the Order?
          </p>

          {/* Buttons below the message */}
          <Box className="flex justify-center gap-4">
            <TButton
              text="No, Keep It"
              className={{ root: 'hover:bg-gray-100', text: 'capitalize' }}
              sx={{
                color: 'red',
                backgroundColor: 'white',
                border: '1.5px solid #F1414F',
                borderRadius: '12px',
                width: '120px',
                height: '46px',
                fontFamily: 'Poppins',  // Ensuring the font is Poppins
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
              }}
              onClick={handleClose}
            />
            <TButton
              text="Yes, Cancel"
              className={{ root: 'hover:bg-red-200', text: 'capitalize' }}
              sx={{
                color: 'white',
                backgroundColor: 'red',
                borderRadius: '12px',
                width: '120px',
                height: '46px',
                fontFamily: 'Poppins',  // Ensuring the font is Poppins
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
              }}
              onClick={() => {
                alert('Order Cancelled');
                handleClose();
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default OrderPage;
