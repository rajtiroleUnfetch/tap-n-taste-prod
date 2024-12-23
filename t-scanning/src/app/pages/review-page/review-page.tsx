import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Button,
  Rating,
  SvgIcon,
} from '@mui/material';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { TButton } from '@tap-n-taste/ui';

// TypeScript types
type Review = {
  rating: number;
  date: string;
  text: string;
  user: string;
  images?: string[];
};

type ReviewCardProps = {
  review: Review;
};

type ReviewFormProps = {
  onSubmit: (data: { rating: number; review: string }) => void;
};

// Reusable ReviewCard Component
const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card className="!bg-[#FAFAFA] p-4 !rounded-lg !shadow-none">
      {/* Rating and Date */}
      <Box className="flex gap-5 items-center">
        <Box className="flex gap-1 items-center">
          <SvgIcon>
            <StarOutlinedIcon className="text-green-600 text-2xl" />
          </SvgIcon>
          <Typography variant="h6" className="text-green-600">
            {review.rating}
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" className="text-gray-500">
            Posted on {review.date}
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <CardContent className="flex justify-between">
        <Box>
          <Typography variant="body1" className="mb-2">
            {review.text}
          </Typography>
          <Typography variant="caption" className="text-gray-500">
            ~{review.user}
          </Typography>
        </Box>
        {/* Images */}
        {review.images && review.images.length > 0 && (
          <Box className="relative flex items-center">
            {/* First Image */}
            <CardMedia
              component="img"
              className="w-12 h-12 rounded object-cover"
              image={review.images[0]}
              alt="Review Image"
            />

            {/* Second Image and Overlay */}
            {review.images.length > 1 && (
              <Box className="relative ml-2 w-12 h-12">
                <CardMedia
                  component="img"
                  className="absolute w-full h-full rounded object-cover"
                  image={review.images[1]}
                  alt="Review Image"
                />
                <Box className="absolute inset-0 bg-black opacity-50 rounded flex justify-center items-center">
                  <Typography variant="body2" className="text-white">
                    +{review.images.length - 1}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

// Review List Component

const ReviewList: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const [showAll, setShowAll] = useState(false);
  const maxReviewsToShow = 3; // Adjust this number to control how many reviews are initially visible

  const reviewsToDisplay = showAll
    ? reviews
    : reviews.slice(0, maxReviewsToShow);

  return (
    <Box className="flex flex-col gap-4">
      {reviewsToDisplay.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
      {reviews.length > maxReviewsToShow && (
        <Button
          variant="text"
          color="error"
          className="mt-4 align-left"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show less' : 'See all Reviews'}
        </Button>
      )}
    </Box>
  );
};

// Review Form Component
const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = React.useState<number | null>(0);
  const [review, setReview] = React.useState<string>('');

  const handleSubmit = () => {
    if (rating && review) {
      onSubmit({ rating, review });
      setRating(0);
      setReview('');
    }
  };

  return (
    <Box className="mt-8 flex flex-col gap-4">
      <Typography variant="h6">Add your rating and review!</Typography>
      <Box className="flex items-center">
        <Rating
          name="rating"
          value={rating}
          onChange={(_, newValue) => setRating(newValue)}
          precision={0.5}
        />
      </Box>
      <Typography variant="caption" className="text-gray-500 block">
        Tap to add your rating
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        sx={{ backgroundColor: '#f5f5f5' }}
      />
      <TButton
        fullWidth
        variant="contained"
        color="error"
        className={{
          root: 'py-3 !rounded-lg !bg-[#F1414F] !text-white w-full',
        }}
        onClick={handleSubmit}
        text="Submit Review →"
        disabled={!rating || !review}
      ></TButton>
    </Box>
  );
};

// Main ReviewPage Component
const ReviewPage: React.FC = () => {
  const reviews: Review[] = [
    {
      rating: 4.5,
      date: '03 Aug, 2024',
      text: 'The food and ambiance is great here.',
      user: 'Amrutha Sinha',
      images: [
        'https://via.placeholder.com/50', // Replace with actual image URLs
        'https://via.placeholder.com/50',
      ],
    },
    {
      rating: 5,
      date: '04 Aug, 2024',
      text: 'Excellent service and quality!',
      user: 'John Doe',
      images: ['https://via.placeholder.com/50'],
    },
    {
      rating: 4.5,
      date: '03 Aug, 2024',
      text: 'The food and ambiance is great here.',
      user: 'Amrutha Sinha',
      images: [
        'https://via.placeholder.com/50', // Replace with actual image URLs
        'https://via.placeholder.com/50',
      ],
    },
    {
      rating: 5,
      date: '04 Aug, 2024',
      text: 'Excellent service and quality!',
      user: 'John Doe',
      images: ['https://via.placeholder.com/50'],
    },
    {
      rating: 4.5,
      date: '03 Aug, 2024',
      text: 'The food and ambiance is great here.',
      user: 'Amrutha Sinha',
      images: [
        'https://via.placeholder.com/50', // Replace with actual image URLs
        'https://via.placeholder.com/50',
      ],
    },
    {
      rating: 5,
      date: '04 Aug, 2024',
      text: 'Excellent service and quality!',
      user: 'John Doe',
      images: ['https://via.placeholder.com/50'],
    },
  ];

  const handleReviewSubmit = (data: { rating: number; review: string }) => {
    console.log('Review submitted:', data);
    // Handle review submission logic here
  };

  return (
    <Box className="mt-4">
      <Typography variant="h4" className="!mb-4 text-[#4D4D4D]">
        Reviews
      </Typography>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleReviewSubmit} />
    </Box>
  );
};

export default ReviewPage;
