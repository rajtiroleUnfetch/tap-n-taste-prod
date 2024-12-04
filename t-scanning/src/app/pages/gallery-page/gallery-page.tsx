import React from 'react';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { PlayCircle } from '@mui/icons-material';
import { TButton } from '@tap-n-taste/ui';
import { reviewGalleryData } from '../../constants/LandingPageData';

const GalleryPage = () => {
  return (
    <Box className="mt-10 mb-10">
      <Box className="flex justify-between items-center overflow-visible mb-4">
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          Photos and Videos
        </Typography>
        <TButton
          text="View All"
          className={{ root: 'hover:bg-none', text: 'capitalize' }}
          sx={{ color: 'red' }}
        />
      </Box>

      <ImageList
        sx={{
          width: '100%',
          height: 'auto',
          margin: 0,
          gap: '16px !important',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(200px, 1fr)) !important',
        }}
        gap={16}
      >
        {reviewGalleryData.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              overflow: 'hidden',
              borderRadius: '4px',
              boxShadow:
                '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
              transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
              '&:hover': {
                boxShadow:
                  '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
              },
              '& img': {
                borderRadius: '4px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              },
            }}
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-full object-cover aspect-square"
              loading="lazy"
            />

            {item.isVideo && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translate(-50%, -50%) scale(1.1)',
                  },
                }}
              >
                <PlayCircle sx={{ fontSize: 48, opacity: 0.9 }} />
              </Box>
            )}

            {item.extra && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  padding: '8px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {item.extra} more
              </Box>
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GalleryPage;
