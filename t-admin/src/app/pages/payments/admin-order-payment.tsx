import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Pagination,
} from '@mui/material';

const initialPaymentData = {
  served: [
    { id: '001', order: '#112', paymentId: '000123', totalItems: 4, amount: 2500, date: 'Sept 28, 3:24 PM' },
    { id: '002', order: '#113', paymentId: '000124', totalItems: 5, amount: 3000, date: 'Sept 28, 3:25 PM' },
    { id: '003', order: '#114', paymentId: '000125', totalItems: 3, amount: 1800, date: 'Sept 28, 3:26 PM' },
    { id: '001', order: '#112', paymentId: '000123', totalItems: 4, amount: 2500, date: 'Sept 28, 3:24 PM' },
    { id: '002', order: '#113', paymentId: '000124', totalItems: 5, amount: 3000, date: 'Sept 28, 3:25 PM' },
    { id: '003', order: '#114', paymentId: '000125', totalItems: 3, amount: 1800, date: 'Sept 28, 3:26 PM' },
    { id: '001', order: '#112', paymentId: '000123', totalItems: 4, amount: 2500, date: 'Sept 28, 3:24 PM' },
    { id: '002', order: '#113', paymentId: '000124', totalItems: 5, amount: 3000, date: 'Sept 28, 3:25 PM' },
    { id: '003', order: '#114', paymentId: '000125', totalItems: 3, amount: 1800, date: 'Sept 28, 3:26 PM' },
    { id: '001', order: '#112', paymentId: '000123', totalItems: 4, amount: 2500, date: 'Sept 28, 3:24 PM' },
    { id: '002', order: '#113', paymentId: '000124', totalItems: 5, amount: 3000, date: 'Sept 28, 3:25 PM' },
    { id: '003', order: '#114', paymentId: '000125', totalItems: 3, amount: 1800, date: 'Sept 28, 3:26 PM' },
    { id: '001', order: '#112', paymentId: '000123', totalItems: 4, amount: 2500, date: 'Sept 28, 3:24 PM' },
    { id: '002', order: '#113', paymentId: '000124', totalItems: 5, amount: 3000, date: 'Sept 28, 3:25 PM' },
    { id: '003', order: '#114', paymentId: '000125', totalItems: 3, amount: 1800, date: 'Sept 28, 3:26 PM' },
    { id: '001', order: '#112', paymentId: '000123', totalItems: 4, amount: 2500, date: 'Sept 28, 3:24 PM' },
    { id: '002', order: '#113', paymentId: '000124', totalItems: 5, amount: 3000, date: 'Sept 28, 3:25 PM' },
    { id: '003', order: '#114', paymentId: '000125', totalItems: 3, amount: 1800, date: 'Sept 28, 3:26 PM' },
    { id: '001', order: '#112', paymentId: '000123', totalItems: 4, amount: 2500, date: 'Sept 28, 3:24 PM' },
    { id: '002', order: '#113', paymentId: '000124', totalItems: 5, amount: 3000, date: 'Sept 28, 3:25 PM' },
    { id: '003', order: '#114', paymentId: '000125', totalItems: 3, amount: 1800, date: 'Sept 28, 3:26 PM' },
    // Add more served orders here
  ],
  pending: [
    { id: '101', order: '#211', paymentId: '000223', totalItems: 2, amount: 1200, date: 'Sept 28, 3:30 PM' },
    { id: '102', order: '#212', paymentId: '000224', totalItems: 6, amount: 4200, date: 'Sept 28, 3:31 PM' },
    { id: '103', order: '#213', paymentId: '000225', totalItems: 1, amount: 600, date: 'Sept 28, 3:32 PM' },
    // Add more pending orders here
  ],
};

const OrdersList = ({ orders }: { orders: any[] }) => (
  <Grid container spacing={2}>
    {orders.map((order) => (
      <Grid item xs={12} md={6} lg={4} key={order.id}>
        <Card className="flex flex-col">
          <CardContent>
            <Typography className='text-primary text-2xl font-bold'>
              <span>Order </span>{order.order}
            </Typography>
            <Typography variant="body2" style={{ color: '#9e9e9e' }}>
              Payment ID: {order.paymentId}
            </Typography>
            <Typography variant="body2" style={{ color: '#9e9e9e' }}>
              Total Items: {order.totalItems}
            </Typography>
            <Typography variant="h6">
              ₹{order.amount}
            </Typography>
            <Typography variant="caption">
              {order.date}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export const AdminPaymentPage = () => {
  const [servedPage, setServedPage] = useState(1);
  const [pendingPage, setPendingPage] = useState(1);
  const itemsPerPage = 4;

  const servedOrders = initialPaymentData.served.slice(
    (servedPage - 1) * itemsPerPage,
    servedPage * itemsPerPage
  );

  const pendingOrders = initialPaymentData.pending.slice(
    (pendingPage - 1) * itemsPerPage,
    pendingPage * itemsPerPage
  );

  return (
    <Box className="w-full mt-8 px-8 py-8 justify-between items-center">
      <Typography variant="h4" fontWeight="bold" style={{ marginBottom: '16px', color: '#000000' }}>
        Payments
      </Typography>

      {/* Served Orders Section */}
      <Box className="mb-8">
        <Typography variant="h6" fontWeight="bold" style={{ marginBottom: '16px', color: '#000000' }}>
          Served Orders
        </Typography>
        <OrdersList orders={servedOrders} />
        <Box className="mt-4 flex justify-end">
          <Pagination
            count={Math.ceil(initialPaymentData.served.length / itemsPerPage)}
            page={servedPage}
            onChange={(_, value) => setServedPage(value)}
          />
        </Box>
      </Box>

      {/* Pending Orders Section */}
      <Box>
        <Typography variant="h6" fontWeight="bold" style={{ marginBottom: '16px', color: '#000000' }}>
          Pending Orders
        </Typography>
        <OrdersList orders={pendingOrders} />
        <Box className="mt-4 flex justify-end">
          <Pagination
            count={Math.ceil(initialPaymentData.pending.length / itemsPerPage)}
            page={pendingPage}
            onChange={(_, value) => setPendingPage(value)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPaymentPage;
