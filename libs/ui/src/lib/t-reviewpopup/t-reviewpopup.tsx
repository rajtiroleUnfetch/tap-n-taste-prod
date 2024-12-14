import React, { useState, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";  // Change to StarIcon
import { IconButton, Box, Typography, TextField, Button } from "@mui/material";

// Styled-components for the TReviewpopup
const StyledTReviewpopup = styled.div`
  color: pink;
`;

// Type definitions for props
interface RatingComponentProps {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}

// Rating Component with types
export const RatingComponent: React.FC<RatingComponentProps> = ({ rating, setRating }) => {
  const handleRating = (index: number) => {
    setRating(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      {/* Title: Rate Your Order */}
      <Typography variant="h5" mb={1} sx={{ color: "black", fontWeight: "bold" }}>
        Rate your Order
      </Typography>

      {/* Star Rating */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <IconButton
            key={index}
            onClick={() => handleRating(index)}
            sx={{
              backgroundColor: "transparent", // No background color change for the icon button
              borderRadius: "50%",
              padding: "5px",
              "&:hover": { backgroundColor: "transparent" }, // Remove hover effect background
            }}
          >
            <StarIcon
              sx={{
                fontSize: "2.5rem", // Increased size for prominence
                color: index <= rating ? "#F1414F" : "#D3D3D3", // Default color for unfilled stars
                "&:hover": { color: "#F1414F" }, // Change color on hover
              }}
            />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

// Main TReviewpopup Component
export function TReviewpopup() {
  const [rating, setRating] = useState<number>(0); // State for Rating
  const [review, setReview] = useState<string>(""); // State for Review Text

  const handleSubmit = () => {
    console.log("Rating Submitted:", rating);
    console.log("Review Submitted:", review);
    // Add functionality to submit the review (e.g., API call)
  };

  return (
    <StyledTReviewpopup>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        {/* Rating Component */}
        <RatingComponent rating={rating} setRating={setRating} />

        {/* Add Review Text */}
        <Typography variant="subtitle1" mb={1} sx={{ color: "black", fontWeight: "bold" }}>
          Add a Review
        </Typography>

        {/* Review Text Field with updated styling */}
        <TextField
          placeholder="Write your review..."
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            backgroundColor: "#E3E3E3", // Background color of review input box
            "& .MuiOutlinedInput-root": {
              border: "none", // Remove the border completely
              borderRadius: "8px", // Add border radius
            },
            "& .MuiInputBase-input": {
              color: "#000", // Text color inside the input box
            },
          }}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F1414F",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#D32F2F",
            },
          }}
          onClick={handleSubmit}
        >
          Submit Review
        </Button>
      </Box>
    </StyledTReviewpopup>
  );
}

export default TReviewpopup;
