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
          padding: '20px 150px',
          fontSize: '80px',
        }}
        onClick={handleOpen}
      />

      {/* Modal for Cancel Order */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: 400,
            bgcolor: 'white',
            borderRadius: 2,
            boxShadow: 24,
            p: 3,
            textAlign: 'center',
            margin: 'auto',
            mt: 10,
          }}
        >
          <Box className="flex justify-end">
            <button
              style={{
                border: 'none',
                background: 'none',
                fontSize: '20px',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            >
              &times;
            </button>
          </Box>
          <Box>
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
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '18px',
                color: '#333',
                mb: 3,
              }}
            >
              Do you surely want to cancel the Order?
            </Typography>
            <Box className="flex justify-center gap-4">
              <TButton
                text="No, Keep It"
                className={{ root: 'hover:bg-gray-100', text: 'capitalize' }}
                sx={{
                  color: 'red',
                  backgroundColor: 'white',
                  border: '1px solid red',
                }}
                onClick={handleClose}
              />
              <TButton
                text="Yes, Cancel"
                className={{ root: 'hover:bg-red-200', text: 'capitalize' }}
                sx={{
                  color: 'white',
                  backgroundColor: 'red',
                }}
                onClick={() => {
                  alert('Order Cancelled');
                  handleClose();
                }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default OrderPage;
