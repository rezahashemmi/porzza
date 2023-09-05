import { useContext } from 'react';
import MainContext from '../../context';
import { Box, Fab } from '@mui/material';
import { MenuRounded } from '@mui/icons-material';

const DrawerButton = () => {
  const { setDrawerOpen } = useContext(MainContext);

  return (
    <Box
      sx={{
        position: 'absolute',
        display: {
          xs: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
        },
      }}
    >
      <Fab
        aria-label='Sidebar'
        size='small'
        onClick={() => setDrawerOpen(true)}
        sx={{
          m: 2,
          backgroundColor: 'warning.main',
          color: 'info.main',

          '&:hover': {
            backgroundColor: 'warning.main',
            color: 'info.main',
            transform: 'scale(1.1)',
          },
        }}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerButton;
