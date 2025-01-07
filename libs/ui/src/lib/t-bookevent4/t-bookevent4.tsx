// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import EventImage from './Event.jpg'; // Import the image file
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Groups2Icon from '@mui/icons-material/Groups2';
// import SellIcon from '@mui/icons-material/Sell';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { TBookevent3 } from '../t-bookevent3';

// const Container = styled.div`
//   width: 100%;
//   background: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   font-family: Arial, sans-serif;
//   padding: 16px;
//   overflow: hidden;
// `;

// const Image = styled.div`
//   height: 400px;
//   border-radius: 8px;
//   background: url(${EventImage}) no-repeat center center/cover;
//   position: relative;
// `;

// const OverlayText = styled.div`
//   position: absolute;
//   bottom: 0;
//   background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
//   color: white;
//   width: 100%;
//   padding: 8px;
//   font-size: 14px;
// `;

// const EventDetails = styled.div`
//   margin-top: 16px;
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   margin: 0;
// `;

// const InfoRow = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 8px;
//   font-size: 14px;
//   color: #555;

//   & svg {
//     margin-right: 8px;
//   }
// `;

// const Price = styled.div`
//   display: flex;
//   align-items: center;
//   color: red;
//   font-weight: bold;
//   margin-top: 8px;

//   & svg {
//     color: red;
//     margin-right: 8px;
//   }
// `;

// const AboutSection = styled.div`
//   margin-top: 16px;
//   position: relative;
// `;

// const AboutText = styled.p`
//   margin: 0;
//   font-size: 14px;
//   color: #333;
//   display: flex;
//   align-items: center;

//   & h2 {
//     font-weight: bold;
//     margin: 0;
//     margin-right: 8px; /* Adds some space between the title and the line */
//   }
// `;

// const HorizontalLine = styled.div`
//   height: 1px;
//   flex-grow: 1; /* Makes the line take the remaining space */
//   background: linear-gradient(to right, #ddd, #aaa);
// `;

// const ReadMore = styled.span`
//   display: flex;
//   align-items: center;
//   color: #F1414F;
//   font-weight: bold;
//   cursor: pointer;
//   justify-content: flex-end;

//   & svg {
//     margin-right: 8px;
//   }
// `;

// const Countdown = styled.div`
//   display: flex;
//   justify-content: space-around;
//   background: linear-gradient(to bottom, #1C2B4C, #D7E1F8);
//   padding: 12px;
//   border-radius: 8px;
//   margin-top: 16px;
//   font-size: 14px;
//   font-weight: bold;
//   height: 35%;
//   color: white;
// `;

// const CountdownItem = styled.div`
//   text-align: center;
//   background-color: #C4C4C4; /* Gray background for the digits */
//   padding: 5;
//   border-radius: 4px;
//   margin: 0 4px;
// `;

// const BookNowButton = styled.button`
//   margin-top: 16px;
//   width: 100%;
//   padding: 12px;
//   background: red;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   font-size: 16px;
//   cursor: pointer;
//   font-weight: bold;
// `;

// interface CountdownTimerProps {
//   endTime: string; // End time in ISO format
// }

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const targetTime = new Date(endTime).getTime();
//       const timeDifference = targetTime - now;

//       if (timeDifference > 0) {
//         setTimeLeft({
//           days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
//           minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
//           seconds: Math.floor((timeDifference / 1000) % 60),
//         });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         clearInterval(timerInterval); // Stop timer when time is up
//       }
//     };

//     const timerInterval = setInterval(updateTimer, 1000);

//     updateTimer(); // Initialize immediately

//     return () => clearInterval(timerInterval); // Cleanup on unmount
//   }, [endTime]);

//   return (
//     <Countdown>
//       <div style={{ color: 'black' }}><CountdownItem>{timeLeft.days}</CountdownItem><div style={{ color: 'white' }}> Days</div></div>
//       <div style={{ color: 'black' }}><CountdownItem>{timeLeft.hours}</CountdownItem><div style={{ color: 'white' }}> Hours</div></div>
//       <div style={{ color: 'black' }}> <CountdownItem>{timeLeft.minutes}</CountdownItem><div style={{ color: 'white' }}> Minutes</div></div>
//       <div style={{ color: 'black' }}><CountdownItem>{timeLeft.seconds}</CountdownItem><div style={{ color: 'white' }}> Seconds</div></div>
//     </Countdown>
//   );
// };

// const TBookevent4: React.FC = () => {
//   const [showMore, setShowMore] = useState(false);
//   const [showEvent3, setShowEvent3] = useState(false); // Added state for showing TBookevent3

//   if (showEvent3) {
//     return <TBookevent3 />; // Render TBookevent3 when the state is true
//   }

//   return (
//     <Container>
//       <Image>
//         <OverlayText>
//           Join us for an unforgettable Event featuring exciting activities, great food, and a memorable experience.
//         </OverlayText>
//       </Image>
//       <EventDetails>
//         <Title>Event Name</Title>
//         <InfoRow>
//           <CalendarTodayIcon /> Sept 28, 3:24 PM
//         </InfoRow>
//         <InfoRow>
//           <Groups2Icon /> Age limit - 21 yrs+
//         </InfoRow>
//         <InfoRow>
//           <HourglassBottomIcon /> 3 Hours
//         </InfoRow>
//         <InfoRow>
//           <LocationOnIcon /> Door 8-9/2, Rushikonda, Visakhapatnam
//         </InfoRow>
//         <Price>
//           <SellIcon /> ₹250 onwards
//         </Price>
//       </EventDetails>
//       <AboutSection>
//         <AboutText>
//           <h2>About the Event</h2>
//           <HorizontalLine />
//         </AboutText>
//         <AboutText>
//           Join us for an unforgettable experience featuring exciting activities and gourmet dining.
//         </AboutText>
//         {!showMore && (
//           <ReadMore onClick={() => setShowMore(true)}>
//             <KeyboardArrowUpIcon style={{ color: '#F1414F' }} />
//             Read Event Highlights
//           </ReadMore>
//         )}
//         {showMore && (
//           <AboutText>
//             Highlights include live music, unique attractions, and premium dining options. Don’t miss this one-of-a-kind event!
//           </AboutText>
//         )}
//       </AboutSection>
//       <CountdownTimer endTime="2025-01-10T00:00:00Z" /> {/* Pass the end time in ISO format */}
//       <AboutText>
//         <h2>Event highlights</h2>
//         <HorizontalLine />
//       </AboutText>
//       <AboutText>
//         Join us for an unforgettable experience featuring exciting activities and gourmet dining.
//       </AboutText>
//       <BookNowButton onClick={() => setShowEvent3(true)}>
//         Book Now
//       </BookNowButton>
//     </Container>
//   );
// };

// export { TBookevent4 };
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EventImage from './Event.jpg'; // Import the image file
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Groups2Icon from '@mui/icons-material/Groups2';
import SellIcon from '@mui/icons-material/Sell';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TBookevent3 } from '../t-bookevent3';

// Styled components (same as before)
const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  padding: 16px;
  overflow: hidden;
`;

const Image = styled.div`
  height: 400px;
  border-radius: 8px;
  background: url(${EventImage}) no-repeat center center/cover;
  position: relative;
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  width: 100%;
  padding: 8px;
  font-size: 14px;
`;

const EventDetails = styled.div`
  margin-top: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  font-size: 14px;
  color: #555;

  & svg {
    margin-right: 8px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  color: red;
  font-weight: bold;
  margin-top: 8px;

  & svg {
    color: red;
    margin-right: 8px;
  }
`;

const AboutSection = styled.div`
  margin-top: 16px;
  position: relative;
`;

const AboutText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;

  & h2 {
    font-weight: bold;
    margin: 0;
    margin-right: 8px; /* Adds some space between the title and the line */
  }
`;

const HorizontalLine = styled.div`
  height: 1px;
  flex-grow: 1; /* Makes the line take the remaining space */
  background: linear-gradient(to right, #ddd, #aaa);
`;

const ReadMore = styled.span`
  display: flex;
  align-items: center;
  color: #F1414F;
  font-weight: bold;
  cursor: pointer;
  justify-content: flex-end;

  & svg {
    margin-right: 8px;
  }
`;

const Countdown = styled.div`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(to bottom, #1C2B4C, #D7E1F8);
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  height: 35%;
  color: white;
`;

const CountdownItem = styled.div`
  text-align: center;
  background-color: #C4C4C4; /* Gray background for the digits */
  padding: 5;
  border-radius: 4px;
  margin: 0 4px;
`;

const BookNowButton = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 12px;
  background: red;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
`;

// Define the interface for props
interface TBookevent4Props {
  eventName: string;
  eventDate: string;  // Date in string format
  location: string;
  ageLimit: string;
  duration: string;
  price: string;
  eventDescription: string;
  countdownEndTime: string; // ISO string
}

const CountdownTimer: React.FC<{ endTime: string }> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const targetTime = new Date(endTime).getTime();
      const timeDifference = targetTime - now;

      if (timeDifference > 0) {
        setTimeLeft({
          days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDifference / (1000 * 60)) % 60),
          seconds: Math.floor((timeDifference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timerInterval); // Stop timer when time is up
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer(); // Initialize immediately

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, [endTime]);

  return (
    <Countdown>
      <div style={{ color: 'black' }}><CountdownItem>{timeLeft.days}</CountdownItem><div style={{ color: 'white' }}> Days</div></div>
      <div style={{ color: 'black' }}><CountdownItem>{timeLeft.hours}</CountdownItem><div style={{ color: 'white' }}> Hours</div></div>
      <div style={{ color: 'black' }}> <CountdownItem>{timeLeft.minutes}</CountdownItem><div style={{ color: 'white' }}> Minutes</div></div>
      <div style={{ color: 'black' }}><CountdownItem>{timeLeft.seconds}</CountdownItem><div style={{ color: 'white' }}> Seconds</div></div>
    </Countdown>
  );
};

const TBookevent4: React.FC<TBookevent4Props> = ({
  eventName,
  eventDate,
  location,
  ageLimit,
  duration,
  price,
  eventDescription,
  countdownEndTime,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [showEvent3, setShowEvent3] = useState(false); // Added state for showing TBookevent3

  if (showEvent3) {
    return <TBookevent3 />; // Render TBookevent3 when the state is true
  }

  return (
    <Container>
      <Image>
        <OverlayText>
          {eventDescription}
        </OverlayText>
      </Image>
      <EventDetails>
        <Title>{eventName}</Title>
        <InfoRow>
          <CalendarTodayIcon /> {eventDate}
        </InfoRow>
        <InfoRow>
          <Groups2Icon /> Age limit - {ageLimit}
        </InfoRow>
        <InfoRow>
          <HourglassBottomIcon /> {duration}
        </InfoRow>
        <InfoRow>
          <LocationOnIcon /> {location}
        </InfoRow>
        <Price>
          <SellIcon /> {price}
        </Price>
      </EventDetails>
      <AboutSection>
        <AboutText>
          <h2>About the Event</h2>
          <HorizontalLine />
        </AboutText>
        <AboutText>
          {eventDescription}
        </AboutText>
        {!showMore && (
          <ReadMore onClick={() => setShowMore(true)}>
            <KeyboardArrowUpIcon style={{ color: '#F1414F' }} />
            Read Event Highlights
          </ReadMore>
        )}
        {showMore && (
          <AboutText>
            Highlights include live music, unique attractions, and premium dining options. Don’t miss this one-of-a-kind event!
          </AboutText>
        )}
      </AboutSection>
      <CountdownTimer endTime={countdownEndTime} /> {/* Pass the end time in ISO format */}
      <AboutText>
        <h2>Event highlights</h2>
        <HorizontalLine />
      </AboutText>
      <AboutText>
        {eventDescription}
      </AboutText>
      <BookNowButton onClick={() => setShowEvent3(true)}>
        Book Now
      </BookNowButton>
    </Container>
  );
};

export { TBookevent4 };
