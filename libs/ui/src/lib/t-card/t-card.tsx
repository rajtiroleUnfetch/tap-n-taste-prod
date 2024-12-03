import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import clsx from 'clsx';

const styles = {
  container: {
    width: 325,
    height: 220,
    background: '#d9d9d9',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px',
    fontFamily: 'Poppins',
    flexShrink: '0',
  },
  contentArea: { height: '100%', position: 'relative' },
  gradientBox: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60%',
    background:
      'linear-gradient(180deg, rgba(10, 10, 12, 0) 0%, rgba(10, 10, 12, 0.6) 30%, rgba(225, 38, 38, 0.8) 80%)',
    backdropFilter: 'blur(4)',
    color: 'white',
    opacity: '60%',
  },
};

type Props = {
  imgURL: string;
  gradient: boolean;
  primeText?: string;
  secText?: string;
  className?: {
    root?: string; // Root card class
    gradientBox?: string; // Gradient Box class
    primeText?: string; // Primary text class
    secText?: string; // Secondary text class
  };
  sx?: {
    root?: object; // Inline styles for root
    gradientBox?: object; // Inline styles for gradient box
    primeText?: object; // Inline styles for primary text
    secText?: object; // Inline styles for secondary text
  };
};

export function TCard({
  primeText,
  secText,
  imgURL,
  gradient = true,
  className = {},
  sx = {},
}: Props) {
  const {
    root = '',
    gradientBox = '',
    primeText: primeTextClass = '',
    secText: secTextClass = '',
  } = className;

  const {
    root: rootStyles = {},
    gradientBox: gradientBoxStyles = {},
    primeText: primeTextStyles = {},
    secText: secTextStyles = {},
  } = sx;

  return (
    <Card
      className={clsx(root)} // Apply the root className
      sx={{
        ...styles.container,
        backgroundImage: `url(${imgURL})`,
        ...rootStyles,
      }}
    >
      <CardActionArea sx={styles.contentArea}>
        {gradient && (
          <Box
            className={clsx(
              'absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-red-800 to-transparent opacity-60',
              gradientBox // Custom gradient box class
            )}
            sx={gradientBoxStyles} // Inline styles for gradient box
          />
        )}

        <Box className="absolute bottom-0 font-semibold px-[10px] py-[5px]">
          {primeText && (
            <Typography
              className={clsx(
                '', // Default styles
                primeTextClass // Custom primary text class
              )}
              sx={{
                color: 'white',
                textTransform: 'uppercase',
                fontSize: '42px',
                fontFamily: 'Poppins, sans-serif',
                ...primeTextStyles, // Inline styles for primary text
              }}
            >
              {primeText}
            </Typography>
          )}
          {secText && (
            <Typography
              className={clsx(
                '', // Default styles
                secTextClass // Custom secondary text class
              )}
              sx={{
                color: 'white',
                fontSize: '30px',
                fontFamily: 'Poppins, sans-serif',
                ...secTextStyles, // Inline styles for secondary text
              }}
            >
              {secText}
            </Typography>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default TCard;
