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
import { reviewGalleryData } from '../../constants/LandingPageData';
import { TButton } from '@tap-n-taste/ui';

export default function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<{
    mediaURL: string;
    type: string;
  } | null>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

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
            sx={{
              cursor: 'pointer',
              position: 'relative',
              // overflow: 'hidden',
              overflowX: 'hidden',
              overflowY: 'hidden',
              borderRadius: '16px',
            }}
          >
            {item.type === 'img' ? (
              <Box
                component="img"
                src={item.mediaURL}
                alt={`Gallery Item ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                }}
              />
            ) : (
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey.900',
                  borderRadius: '16px',
                  position: 'relative',
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
        className={{ root: 'hover:bg-none w-full mx-auto', text: 'capitalize' }}
        sx={{ color: 'red' }}
      />

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
        fullScreen={isMobile}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            boxShadow: 'none',
            borderRadius: isMobile ? '0' : '16px',
          },
        }}
      >
        {selectedMedia && (
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              px: 2,
            }}
          >
            <IconButton
              onClick={() => setSelectedMedia(null)}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <Close sx={{ color: 'white' }} />
            </IconButton>

            {selectedMedia.type === 'img' ? (
              <Box
                component="img"
                src={selectedMedia.mediaURL}
                alt="Selected media"
                sx={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  borderRadius: '16px',
                  objectFit: 'contain',
                }}
              />
            ) : (
              <Box
                component="video"
                src={selectedMedia.mediaURL}
                controls
                sx={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  borderRadius: '16px',
                }}
              />
            )}
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
