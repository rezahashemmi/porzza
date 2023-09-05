import { useContext } from 'react';
import MainContext from '../../context';
import { Drawer } from '@mui/material';
import { SidebarContent } from '../sidebar/';

const SidebarDrawer = ({ value, handleChange }) => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);

  return (
    <Drawer
      open={drawerOpen} // Sidebar is open
      variant='temporary'
      onClose={() => setDrawerOpen(false)} // Close sidebar
      sx={{
        '& .MuiDrawer-paper': {
          width: 200,
        },
        display: {
          xs: 'block',
          sm: 'block',
          md: 'block',
          lg: 'none',
          xl: 'none',
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
};

export default SidebarDrawer;
