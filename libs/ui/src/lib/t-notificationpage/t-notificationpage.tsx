import styled from 'styled-components';
import {TNotificationBar,TNotificationItem } from '@tap-n-taste/ui';


const notifications = [
  { mainText: 'Your Reference ID', subText: 'Show your ID and make payment', imageSrc: 'https://i.pinimg.com/736x/55/d0/9f/55d09f3dc9dbc16a188298a1c53efc27.jpg' },
  { mainText: 'Your Order is Accepted!', subText: 'Grab the offer, get 50% OFF on Starters.', imageSrc: 'https://i.pinimg.com/736x/55/d0/9f/55d09f3dc9dbc16a188298a1c53efc27.jpg' },
  { mainText: '50% off', subText: 'Grab the offer get 50% OFF on Starters.',imageSrc: 'https://i.pinimg.com/736x/55/d0/9f/55d09f3dc9dbc16a188298a1c53efc27.jpg' },
  { mainText: '50% off', subText: 'Grab the offer get 50% OFF on Starters.', imageSrc: 'https://i.pinimg.com/736x/55/d0/9f/55d09f3dc9dbc16a188298a1c53efc27.jpg' },
  { mainText: 'Your Reference ID', subText: 'Show your ID and make payment',imageSrc: 'https://i.pinimg.com/736x/55/d0/9f/55d09f3dc9dbc16a188298a1c53efc27.jpg' },
  { mainText: '50% off', subText: 'Grab the offer get 50% OFF on Starters.', imageSrc: 'https://i.pinimg.com/736x/55/d0/9f/55d09f3dc9dbc16a188298a1c53efc27.jpg' },
];


const StyledTNotificationPage = styled.div`
  color: pink;
`;
export function TNotificationPage() {
  return (
    <StyledTNotificationPage>
      <TNotificationBar></TNotificationBar>
      <div>
      {notifications.map((notification, index) => (
        <TNotificationItem
          key={index}
          mainText={notification.mainText}
          subText={notification.subText}
          imageSrc={notification.imageSrc}
        />
      ))}
    </div>
    </StyledTNotificationPage>
  );
}

export default TNotificationPage;
