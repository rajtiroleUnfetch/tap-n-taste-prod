import { Box, Typography, Modal } from '@mui/material';
import { useState } from 'react';
import { TButton } from '@tap-n-taste/ui';
import '../../style.css';

const OrderPage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="my-20 flex flex-col items-center justify-center">
      {/* Centered Active Orders Title */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 'bold',
          mb: 4,
          textAlign: 'center',
        }}
      >
        Active Orders
      </Typography>

      {/* Centered Cancel Order Button */}
      <TButton
        text="Cancel Order"
        className={{ root: 'hover:bg-red-100', text: 'capitalize' }}
        sx={{
          color: 'white',
          backgroundColor: 'red',
          padding: '8px 16px',
          fontSize: '14px',
        }}
        onClick={handleOpen}
      />

      {/* Modal for Cancel Order */}
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
            width: 325,  // Width as per your original request
            height: 280,  // Reduced height to avoid too much space below
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: '0px 143px 57px rgba(0, 0, 0, 0.01), 0px 81px 48px rgba(0, 0, 0, 0.05), 0px 36px 36px rgba(0, 0, 0, 0.09), 0px 9px 20px rgba(0, 0, 0, 0.1)', // Combined boxShadow
            p: 3,
            textAlign: 'center',
            margin: 'auto',
            mt: 5, // Adjusted top margin to balance the modal's vertical position
            position: 'relative', // Center the modal content
            border: '1px solid #E3E3E3',  // Adding border from CSS
          }}
        >
          {/* Close Button (X) */}
          <Box className="flex justify-end">
            <button
              style={{
                border: 'none',
                background: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                position: 'absolute',
                left: '327px',
                top: '174px',
              }}
              onClick={handleClose}
            >
              &times;
            </button>
          </Box>

          {/* Cross Icon */}
          <Typography
            variant="h4"
            sx={{
              fontSize: '50px',
              color: 'red',
              mb: 2,
              textAlign: 'center',
            }}
          >
            ❌
          </Typography>

          {/* Cancellation Message */}
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '30px',
              textAlign: 'center',
              color: '#F1414F',
              marginBottom: '20px',  // Space below the message
              width: 'auto',
              margin: '0 auto',  // Ensure the message is centered
            }}
          >
            Do you surely want to cancel the Order?
          </Typography>

          {/* Action Buttons */}
          <Box className="flex justify-center gap-4">
            <TButton
              text="No, Keep It"
              className={{ root: 'hover:bg-gray-100', text: 'capitalize' }}
              sx={{
                color: 'red',
                backgroundColor: 'white',
                border: '1.5px solid #F1414F',
                borderRadius: '12px',
                width: '120px',  // Adjust button width
                height: '46px',  // Adjust button height
                fontFamily: 'Poppins',  // Same font family as the message
                fontWeight: 400,  // Same font weight as the message
                fontSize: '20px',  // Same font size as the message
                lineHeight: '30px',  // Same line height as the message
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
                width: '120px',  // Adjust button width
                height: '46px',  // Adjust button height
                fontFamily: 'Poppins',  // Same font family as the message
                fontWeight: 400,  // Same font weight as the message
                fontSize: '20px',  // Same font size as the message
                lineHeight: '30px',  // Same line height as the message
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
