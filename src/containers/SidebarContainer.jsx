import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import { Sidebar } from '../components/sidebar';

const SidebarContainer = () => {
  const theme = useTheme();

  return (
    <Grid
      xs={0}
      sm={0}
      md={2}
      lg={2}
      xl={2}
      sx={{
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Sidebar />
    </Grid>
  );
};

export default SidebarContainer;
