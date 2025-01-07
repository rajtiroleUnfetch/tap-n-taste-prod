import React, { useState } from 'react';
import styled from 'styled-components';
import { TCounter } from '../t-counter';
import {TButton} from '../t-button'

const StyledTBookevent3 = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    font-weight: bold;
  }

  h2 {
    font-weight: bold;
    padding: 5px 0; /* Added padding for better spacing */
    color: #444;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  input, select {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }

  .ticket-section {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 10px;
  }

  .ticket-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .price {
    text-align: right;
    font-size: 18px;
    font-weight: bold;
    color: #d32f2f;
    margin-top: 10px;
  }

  .next-btn {
    margin-top: 20px;
    padding: 10px;
    background-color: #d32f2f;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
  }

  .next-btn:hover {
    background-color: #b71c1c;
  }
    .h2center{
    align:center;}
`;

export function TBookevent3() {
  const [groupTickets, setGroupTickets] = useState(2);
  const [singleTickets, setSingleTickets] = useState(2);
  const groupPrice = 500;
  const singlePrice = 125;
  const totalPrice = groupTickets * groupPrice + singleTickets * singlePrice;

  return (
    <StyledTBookevent3>
      <h1>Book Now</h1>
      <div className="form">
        <h2>First Name</h2>
        <input type="text" placeholder="First name" />
        <h2>Last Name</h2>
        <input type="text" placeholder="Last name" />
        <h2>Email Id</h2>
        <input type="email" placeholder="Email id" />
        <h2>Ticket type</h2>
        <select>
          <option value="VIP">VIP</option>
          <option value="Regular">Regular</option>
          <option value="Economy">Economy</option>
        </select>
        <div className="date-time">
          <h2>Date</h2>
          <input type="date" />
          <h2>Time</h2>
          <input type="time" />
        </div>
        <h2>Location</h2>

        <div className="location">
          <span>Door 8-9/2, Rushikonda, Visakhapatnam</span>
          <button>X</button>
        </div>
      </div>
      <h2 className='h2center'>Select Tickets</h2>
      <div className="ticket-section">
        <div className="ticket-row">
          <span><h3>Group Ticket</h3></span>
          {/* Group Ticket Counter */}
          <TCounter />
        </div>
        <div className="ticket-row">
          <span><h3>Single Ticket</h3></span>
          {/* Single Ticket Counter */}
          <TCounter />
        </div>
        <div>
        <span><h3>Total Price <h4 className="price">₹ {totalPrice}</h4></h3></span>
        </div>
      </div>

      
      <TButton
  text="Next"
  style={{ marginTop: '20px' }} // Debug using inline styles
  className={{
    root: '!bg-[#F1414F] text-white w-full flex items-center justify-center py-[10px]',
    text: '!text-white my-[8px]',
  }}
/>




    </StyledTBookevent3>
  );
}

export default TBookevent3;
