import React, { useState, useEffect } from "react";
import { TCustomCard, TFooter } from '@tap-n-taste/ui';
import SearchIcon from "../../../assets/mynaui_search.png";
import { oneorderdata, OrderPageData } from "../../constants/orderpagedata";

const OrderComplete: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(59);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "16px",
        fontFamily: "Poppins, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Main Container */}
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "100%",
          maxWidth: "470px", // Adjusted for mobile-first design
          borderRadius: "12px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          boxSizing: "border-box",
          overflow: "hidden", // Prevent any overflowing content
        }}
      >
        {/* Top Heading */}
        <div style={{ marginBottom: "12px" }}>
          <h3 style={{ fontSize: "18px", margin: "0", color: "#000" }}>
            &lt; Orders
          </h3>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", margin: "12px 0" }}>
          {["Active", "Completed", "All"].map((label, index) => (
            <button
              key={index}
              style={{
                flex: 1,
                margin: "0 5px",
                padding: "6px 0",
                border: "none",
                borderRadius: "20px",
                backgroundColor: label === "All" ? "#ff4c61" : "#e6e6e6",
                color: "#fff",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "8px",
            margin: "12px 0",
            border: "1px solid #e6e6e6",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img src={SearchIcon} alt="Search" style={{ width: "18px", marginRight: "8px" }} />
          <h4 style={{ margin: 0, fontSize: "14px", color: "#9e9e9e" }}>
            Search by Dish or Restaurant
          </h4>
        </div>

        {/* Active Orders */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              margin: "12px 0",
              color: "#000",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap", // Prevent overflowing
            }}
          >
            Active Orders{" "}
            <span style={{ color: "#ff4c61" }}>(Id: 7465hbndfg7)</span>
            <span style={{ color: "#ff4c61", marginLeft: "auto" }}>In Progress</span>
          </h4>
          {OrderPageData.map((item, index) => (
            <TCustomCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              rating={item.rating}
              price={item.price}
              veg={false}
            />
          ))}

          {/* Cancel Button */}
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <button
              style={{
                backgroundColor: "#ff4c61",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "12px",
                fontSize: "16px",
                width: "100%",
                cursor: "pointer",
              }}
            >
              Cancel Order
            </button>
            <p style={{ marginTop: "8px", fontSize: "12px", color: "#000" }}>
              Time left to cancel:{" "}
              <span style={{ color: "#ff4c61" }}>{formatTime(timeLeft)}</span>
            </p>
          </div>
        </div>

        {/* Completed Orders */}
        <div>
          <h4
            style={{
              fontSize: "16px",
              margin: "12px 0",
              color: "#000",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap", // Prevent overflowing
            }}
          >
            Completed Orders{" "}
            <span style={{ color: "#ff4c61" }}>(Id: 7465hbndfg7)</span>
            <span style={{ color: "#ff4c61", marginLeft: "auto" }}>Order Completed</span>
          </h4>
          {oneorderdata.map((item, index) => (
            <TCustomCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              rating={item.rating}
              price={item.price}
              veg={false}
            />
          ))}
        </div>

        {/* Bottom Navbar */}
        <div style={{ marginTop: "16px" }}>
          <TFooter />
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
