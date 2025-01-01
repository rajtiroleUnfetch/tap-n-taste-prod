import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface MenuItemCardProps {
  image: string;
  heading: string;
  description: string;
  price: number;
  onEdit?: () => void; // Make onEdit optional
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  image,
  heading,
  description,
  price,
  onEdit,
}) => {
  return (
    <Card className="menu-item-card">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={image} alt={heading} className="menu-item-image" />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography variant="h6">{heading}</Typography>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="h6" color="primary">
              ${price.toFixed(2)}
            </Typography>
            {onEdit && (
              <IconButton onClick={onEdit} color="primary">
                <EditIcon />
              </IconButton>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MenuItemCard;
