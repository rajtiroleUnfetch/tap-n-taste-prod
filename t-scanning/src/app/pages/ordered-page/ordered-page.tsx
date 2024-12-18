import React from "react";
//import BurgerItem from "./BurgerItem"; // Import the burger component
//import Navbar from "./Navbar"; // Import the bottom navbar component
import SearchIcon from "../../../assets/mynaui_search.png";
import { TCustomCard, TFooter } from '@tap-n-taste/ui'; // Path for search icon image

const OrderComplete: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Main Box */}
      <div
        style={{
          backgroundColor: "#ffffff",
          width: "90%",
          maxWidth: "450px",
          borderRadius: "12px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "16px",
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
          <button
            style={{
              flex: 1,
              margin: "0 5px",
              padding: "8px 0",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#ff4c61",
              color: "#fff",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Active
          </button>
          <button
            style={{
              flex: 1,
              margin: "0 5px",
              padding: "8px 0",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#e6e6e6",
              color: "#000",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Completed
          </button>
          <button
            style={{
              flex: 1,
              margin: "0 5px",
              padding: "8px 0",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#e6e6e6",
              color: "#000",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            All
          </button>
        </div>

        {/* Search Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
            padding: "8px",
            margin: "12px 0",
          }}
        >
          <img src={SearchIcon} alt="Search" style={{ width: "18px", marginRight: "8px" }} />
          <h4 style={{ margin: 0, fontSize: "14px", color: "#9e9e9e" }}>
            Search by Dish or Restaurant
          </h4>
        </div>

        {/* Active Orders */}
        <div>
          <h4 style={{ fontSize: "16px", margin: "12px 0", color: "#000" }}>
            Active Orders{" "}
            <span style={{ color: "#ff4c61" }}>(id: 7465hbndfg7)</span>{" "}
            <span style={{ color: "#ff4c61" }}>In Progress</span>
          </h4>
          <div>
            <TCustomCard />
            
          </div>

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
              Time left to cancel{" "}
              <span style={{ color: "#ff4c61" }}>59 secs</span>
            </p>
          </div>
        </div>

        {/* Completed Orders */}
        <div>
          <h4 style={{ fontSize: "16px", margin: "12px 0", color: "#000" }}>
            Completed Orders{" "}
            <span style={{ color: "#ff4c61" }}>(id: 7465hbndfg7)</span>{" "}
            <span style={{ color: "#ff4c61" }}>Order Completed</span>
          </h4>
          <div>
            <TCustomCard />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div style={{ marginTop: "16px" }}>
        <TFooter />
      </div>
    </div>
  );
};

export default OrderComplete;
