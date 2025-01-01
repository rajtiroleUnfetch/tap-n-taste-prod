'use client';

import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Dialog,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import { PlayCircle, Close } from '@mui/icons-material';
import { TButton } from '@tap-n-taste/ui';
import { reviewGalleryData } from '../app/constants/LandingPageData';

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<{
    mediaURL: string;
    type: string;
  } | null>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleClose = () => {
    setSelectedMedia(null);
  };

  return (
    <Box
      className="px-2 sm:px-4 py-8 sm:py-10 mx-auto"
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb={4}
        sx={{ fontFamily: 'Poppins, sans-serif' }}
      >
        Photo Gallery
      </Typography>

      {/* Gallery Grid */}
      <Grid container spacing={3} className="mb-12">
        {reviewGalleryData.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            onClick={() => setSelectedMedia(item)}
            className="cursor-pointer relative overflow-hidden"
            sx={{
              borderRadius: '16px',
            }}
          >
            {item.type === 'img' ? (
              <Box
                component="img"
                src={item.mediaURL}
                alt={`Gallery Item ${index + 1}`}
                sx={{
                  borderRadius: '16px',
                }}
                className="w-full h-[200px] object-cover"
              />
            ) : (
              <Box
                className="w-full h-[200px] flex items-center justify-center relative"
                sx={{
                  backgroundColor: 'grey.900',
                  borderRadius: '16px',
                }}
              >
                <PlayCircle sx={{ fontSize: 48, color: 'white' }} />
              </Box>
            )}
          </Grid>
        ))}
      </Grid>

      <TButton
        text="View All"
        className={{
          root: 'bg-white hover:bg-none w-full mx-auto',
          text: 'capitalize',
        }}
        sx={{ color: 'red' }}
      />

      {/* Dialog for Preview */}
      <Dialog
        open={!!selectedMedia}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
          },
        }}
      >
        {selectedMedia && (
          <Box
            className="rounded-2xl flex justify-center items-center relative w-full"
            sx={{
              borderRadius: '12px',
              height: isMobile ? '300px' : '500px',
            }}
          >
            {selectedMedia.type === 'img' && (
              <IconButton
                onClick={handleClose}
                disableRipple
                sx={{
                  position: 'absolute',
                  top: '4%',
                  right: '10%',
                  background: 'white',
                  padding: '2px',
                  color: 'black',
                  '&:hover': {
                    background: 'white',
                  },
                }}
              >
                <Close />
              </IconButton>
            )}
            {selectedMedia.type === 'img' ? (
              <Box
                component="img"
                src={selectedMedia.mediaURL}
                alt="Selected Media"
                className="rounded-2xl"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            ) : selectedMedia.type === 'video' &&
              selectedMedia.mediaURL.includes('youtube.com') ? (
              <Box
                component="iframe"
                src={selectedMedia.mediaURL.replace('watch?v=', 'embed/')} // Convert YouTube link to embed format
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  backgroundColor: 'black',
                  border: 0,
                }}
              />
            ) : (
              <Box
                component="video"
                src={selectedMedia?.mediaURL || ''}
                controls
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                  backgroundColor: 'black',
                }}
              />
            )}
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
