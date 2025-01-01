import React from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const FooterPage: React.FC = () => {
  return (
    <footer className="bg-[#F3EFEF] py-10">
      <Box className="max-w-7xl mx-auto px-4">
        <Grid container spacing={4} className="mb-6">
          {/* Restaurant Name */}
          <Grid item xs={12} md={3} className="text-center md:text-left">
            <Typography variant="h4" className="font-bold">
              Restaurant Name
            </Typography>
            <Typography variant="body1" className="mt-2">
              Your tagline or description goes here.
            </Typography>
          </Grid>

          {/* Address */}
          <Grid item xs={12} md={3} className="text-center md:text-left">
            <Typography variant="h6" className="font-semibold">
              Visit Us
            </Typography>
            <Typography variant="body2" className="mt-2">
              123 Main Street, City, State, 12345
            </Typography>
          </Grid>

          {/* Facilities */}
          <Grid item xs={12} md={3} className="text-center md:text-left">
            <Typography variant="h6" className="font-semibold">
              Facilities
            </Typography>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Free Wi-Fi</li>
              <li>Outdoor Seating</li>
              <li>Delivery Service</li>
              <li>Vegetarian Options</li>
            </ul>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} md={3} className="text-center md:text-left">
            <Typography variant="h6" className="font-semibold">
              Follow Us
            </Typography>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <Twitter fontSize="large" />
              </IconButton>
              <IconButton color="inherit" href="https://youtube.com" target="_blank">
                <YouTube fontSize="large" />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <div className="text-center">
          <Typography variant="body2" className="text-sm">
            &copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.
          </Typography>
        </div>
      </Box>
    </footer>
  );
};

export default FooterPage;
