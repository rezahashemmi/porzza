import { useTheme } from '@mui/material/styles';
import { Box, Fab, Typography } from '@mui/material';
import { WbSunnyOutlined, NightlightOutlined } from '@mui/icons-material';
import MainContext from '../../context/';
import { useContext } from 'react';

const ThemeButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(MainContext);

  return (
    <Box
      sx={{
        position: 'absolute',
        display: {
          xs: 'none',
          md: 'block',
        },
      }}
    >
      <Fab
        aria-label='ThemeChanger'
        variant='extended'
        size='small'
        color={theme.palette.mode === 'light' ? 'error' : 'warning'}
        onClick={handleThemeChange}
        sx={{
          m: 1,
          color: 'secondary.main',
        }}
      >
        {theme.palette.mode === 'light' ? (
          <Typography variant='body2' sx={{ mr: 1 }}>
            تم روشن
          </Typography>
        ) : (
          <Typography variant='body2' sx={{ mr: 1 }}>
            تم تیره
          </Typography>
        )}
        {theme.palette.mode === 'light' ? (
          <WbSunnyOutlined />
        ) : (
          <NightlightOutlined />
        )}
      </Fab>
    </Box>
  );
};

export default ThemeButton;
