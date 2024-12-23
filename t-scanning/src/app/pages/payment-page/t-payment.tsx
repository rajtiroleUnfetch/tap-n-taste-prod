import React from 'react';
import styled from 'styled-components';

// Styled Components for Tpayment
const StyledTPayment = styled.div`
  color: #F1414F;
`;

// Styled Components for Payment
const PaymentContainer = styled.div`
  width: 90%; 
  max-width: 800px; /* Set a max-width to prevent it from getting too large */
  margin: 20px auto;
  font-family: Arial, sans-serif;

  /* Responsive styling */
  @media (max-width: 768px) {
    width: 95%; /* On smaller screens, increase the width */
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.6);
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderIdContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; /* Adjust this gap if needed */
`;

const OrderNumber = styled.span`
  font-size: 14px;
  color: #FFFFFF; /* White text */
  font-weight: bold;
  background-color: #F1414F; /* Red background */
  padding: 5px 10px; /* Add some padding for better appearance */
  border-radius: 8px; /* Rounded corners */
  display: inline-block; /* Ensures it takes width based on its content */
`;

const OrderDate = styled.span`
  font-size: 12px;
  color: black; /* Changed to black */
`;

const PaymentDetails = styled.div`
  font-size: 14px;
  color: #555;
  margin-top: 5px;
  font-weight: bold; /* Added bold font */
`;

const TotalAmount = styled.div`
  text-align: right;
  font-size: 14px;
  color: #e63946;
  font-weight: bold;
`;

// Order Item Component with props
interface OrderItemProps {
  order: {
    orderNumber: string;  // Add orderNumber as prop
    id: number;
    paymentId: string;
    totalItems: number;
    amount: number;
    date: string;
  };
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => (
  <OrderCard>
    <OrderHeader>
      <OrderIdContainer>
        <OrderNumber>{order.orderNumber}</OrderNumber> {/* Pass orderNumber as prop */}
        <span>Order#{order.id}</span>
      </OrderIdContainer>
      <OrderDate>{order.date}</OrderDate>
    </OrderHeader>
    <PaymentDetails>Payment id: {order.paymentId}</PaymentDetails>
    <PaymentDetails>Total Items: {order.totalItems}</PaymentDetails>
    <TotalAmount>₹ {order.amount}</TotalAmount>
  </OrderCard>
);

// Payment Component with props
interface PaymentProps {
  orders: Array<{
    orderNumber: string;  // Include orderNumber in the order object
    id: number;
    paymentId: string;
    totalItems: number;
    amount: number;
    date: string;
  }> ;
}

const Payment: React.FC<PaymentProps> = ({ orders }) => {
  return (
    <PaymentContainer>
      <SearchBar placeholder="Search by Date or Payment id" />
      <p className='text-black font-bold'>Served Orders</p>
      <OrderList>
        {orders.map((order, index) => (
          <OrderItem key={index} order={order} />
        ))}
      </OrderList>
    </PaymentContainer>
  );
};

// Tpayment Component
const Tpayment: React.FC = () => {
  // Orders data can now include the dynamic orderNumber
  const orders = [
    { orderNumber: 'B2', id: 112, paymentId: '000123', totalItems: 4, amount: 2500, date: 'Sept 28, 3:24PM' },
    { orderNumber: 'B3', id: 113, paymentId: '000124', totalItems: 3, amount: 1500, date: 'Sept 29, 2:15PM' },
    { orderNumber: 'B4', id: 114, paymentId: '000125', totalItems: 5, amount: 3000, date: 'Sept 30, 4:45PM' },
    { orderNumber: 'B5', id: 115, paymentId: '000126', totalItems: 2, amount: 1000, date: 'Oct 1, 12:30PM' },
  ];

  return (
    <StyledTPayment>
      <h1>Welcome to Tpayment!</h1>
      <Payment orders={orders} />
    </StyledTPayment>
  );
};

export default Tpayment;
