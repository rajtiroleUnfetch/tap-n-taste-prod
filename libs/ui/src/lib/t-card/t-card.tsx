import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';

const styles = {
  container: {
    width: 225,
    height: 148,
    background: '#d9d9d9',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px',
    fontFamily: 'Poppins',
    flexShrink:"0"
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
  textBox: {
    position: 'absolute',
    bottom: 0,
    fontWeight: '400',
    paddingX: '10px',
    paddingY: '5px',
  },
  primaryText: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '32px',
    fontFamily: 'Poppins, sans-serif',
  },
  secondaryText: {
    color: 'white',
    fontSize: '20px',
    fontFamily: 'Poppins, sans-serif',
  },
};

type Props = {
  primeText: string;
  secText: string;
  imgURL: string;
};

export function TCard({ primeText, secText, imgURL }: Props) {
  return (
    <Card
      sx={{
        ...styles.container,
        backgroundImage: `url(${imgURL})`,
      }}
    >
      <CardActionArea sx={styles.contentArea}>
        <Box sx={styles.gradientBox}></Box>
        <Box sx={styles.textBox}>
          <Typography variant="h3" component="div" sx={styles.primaryText}>
            {primeText}
          </Typography>
          <Typography variant="body1" sx={styles.secondaryText}>
            {secText}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default TCard;
