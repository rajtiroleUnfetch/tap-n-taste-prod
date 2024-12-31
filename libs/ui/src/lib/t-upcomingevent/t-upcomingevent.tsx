
import styled from "styled-components";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { IoPricetag } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import eventimg from "./event.jpg"; // Ensure this path is correct

const StyledTUpcomingEvent = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 10px;
  box-sizing: border-box;

  .event-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    width: 45%;
    max-width: 350px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    text-align: center;
  }

  .event-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
    position: relative;
  }

  .event-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .event-details {
    font-size: 17px;
    color: #333;
    text-align: left;
    margin-top: 10px;
  }

  .event-actions {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    margin-top: 10px;
  }

  .icon {
    cursor: pointer;
    font-size: 20px;
  }

  .favorite-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 50%;
    padding: 5px;
    font-size: 24px;
    color: white;
    transition: all 0.3s ease;
    z-index: 2;
  }

  .delete-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 30px;
    border-radius: 50%;
    padding: 5px;
    color: white;
    z-index: 2;
  }

  .event-detail-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .event-detail-item .icon {
    margin-right: 8px;
  }

  .event-detail-item span {
    color: black;
  }

  .event-detail-item .io-pricetag + span {
    color: #F1414F;
  }

  .event-detail-item .io-pricetag {
    color: #F1414F;
  }

  .event-actions button {
    color: #F1414F;
  }

  .edit-button {
    width: auto;
    padding: 8px 16px;
    border: none;
    color: #F1414F;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    margin-left: auto;
  }

  @media (min-width: 1920px) {
    .event-card {
      max-width: 40%;
      padding: 24px;
      font-size: 18px;
    }

    .event-image {
      height: 300px;
    }

    .event-details {
      font-size: 18px;
    }

    .favorite-icon {
      font-size: 28px;
      top: 4%;
      right: 5%;
    }

    .delete-icon {
      font-size: 30px;
      top: 5%;
      right: 5%;
    }

    .event-actions button {
      font-size: 16px;
      padding: 10px 20px;
    }

    .edit-button {
      font-size: 16px;
      padding: 12px 24px;
    }
  }

  @media (min-width: 2560px) {
    .event-card {
      max-width: 30%;
      padding: 32px;
      font-size: 20px;
    }

    .event-image {
      height: 350px;
    }

    .event-details {
      font-size: 20px;
    }

    .favorite-icon {
      font-size: 32px;
      top: 4%;
      right: 4%;
    }

    .delete-icon {
      font-size: 34px;
      top: 4%;
      right: 4%;
    }

    .event-actions button {
      font-size: 18px;
      padding: 12px 24px;
    }

    .edit-button {
      font-size: 18px;
      padding: 14px 28px;
    }
  }

  @media (max-width: 3000px) {
    .event-card {
      max-width: 90%;
    }

    .event-image {
      height: 180px;
    }

    .favorite-icon {
      top: 11%;
      font-size: 20px;
      right: 10%;
    }

    .delete-icon {
      top: 35%;
      right: 10%;
    }

    .event-details {
      font-size: 12px;
    }

    .event-actions {
      flex-direction: flex;
      align-items: flex-end;
    }

    .edit-button {
      width: 100%;
      margin-top: 10px;
    }
  }

  @media (max-width: 480px) {
    .event-card {
      max-width: 95%;
    }

    .event-image {
      height: 150px;
    }

    .favorite-icon {
      top: 7%;
      font-size: 18px;
      right: 15px;
    }

    .delete-icon {
      top: 30%;
      right: 15px;
    }

    .event-details {
      font-size: 12px;
    }

    .event-actions {
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
      margin-top: 10px;
    }

    .edit-button {
      width: auto;
      padding: 8px 16px;
      border: none;
      color: #F1414F;
      cursor: pointer;
      font-size: 14px;
      border-radius: 4px;
      margin-left: auto;
    }
  }
`;

interface TUpcomingEventProps {
  eventName: string;
}

export function TUpcomingEvent({ eventName }: TUpcomingEventProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <StyledTUpcomingEvent>
      <div className="event-card">
        <img
          src={eventimg}
          alt="Event"
          className="event-image"
        />
        <div className="favorite-icon" onClick={toggleFavorite}>
          {isFavorite ? <FcLike /> : <FaRegHeart />}
        </div>
        <RiDeleteBin5Line className="delete-icon ri-delete-bin" />
        <span>Event: {eventName}</span>
        <div className="event-details">
          <div className="event-detail-item">
            <CiLocationOn className="icon ci-location-on" />
            <span>Mumbai, India</span>
          </div>
          <div className="event-detail-item">
            <SlCalender className="icon sl-calender" />
            <span>July 23, 2024</span>
          </div>
          <div className="event-detail-item">
            <IoPricetag className="icon io-pricetag" />
            <span>₹250</span>
          </div>
        </div>
        <div className="event-actions">
          <button className="edit-button">Edit</button>
        </div>
      </div>
    </StyledTUpcomingEvent>
  );
}
