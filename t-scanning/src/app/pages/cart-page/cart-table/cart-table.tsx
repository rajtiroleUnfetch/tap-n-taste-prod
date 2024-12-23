import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

const CartTable = () => {
  return (
    <Box
      className="w-full mt-11 bg-zinc-100 p-2 mb-10"
      sx={{
        borderRadius: 3,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Table className="w-full">
        <TableBody className="w-full">
          <TableRow>
            <TableCell>
              <Typography fontWeight="bold">Sub Total</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="bold">₹1500</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography color="text.secondary">Taxes & Fees</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="text.secondary">₹150</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography color="text.secondary">Service fee</Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="text.secondary">₹50</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography fontWeight="bold" fontSize="1.2rem">
                Total
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography fontWeight="bold" fontSize="1.2rem">
                ₹1700
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default CartTable;
