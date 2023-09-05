import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import TextTransition, { presets } from 'react-text-transition';
import { RandomReveal } from 'react-random-reveal';
import { Helmet } from 'react-helmet-async';
import { persian } from '../data/persian';
import { useTheme } from '@mui/material/styles';

const Home = ({ pageTitle }) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const strings = ['یه توسعه دهنده', 'یه فریلنسر', 'یه جویای نام'];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Typography
        variant='h1'
        sx={{ fontWeight: '700', direction: 'ltr' }}
        color='error.main'
      >
        <RandomReveal
          isPlaying
          duration={3}
          characters='سیدرضا هاشمی'
          characterSet={persian}
        />
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <TextTransition springConfig={presets.molasses}>
          <Typography
            variant='h3'
            color={
              theme.palette.mode === 'light' ? 'primary.main' : 'secondary.main'
            }
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
      </Box>
    </Box>
  );
};

export default Home;
