import { Box } from '@mui/material';
import { SidebarHeader, SidebarTabs, SidebarFooter } from './';
import { useTheme } from '@mui/material/styles';

const SidebarContent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '100vh',
        background:
          theme.palette.mode === 'light'
            ? `linear-gradient(
              293.5deg,
              #fefefe 3.2%,
              #dcdcdc 9.9%,
              #fefefe 22.9%,
              #dcdcdc 36.4%,
              #fefefe 50.1%,
              #dcdcdc 61.1%,
              #fefefe 71.2%,
              #dcdcdc 84.2%,
              #fefefe 92.2%
            )`
            : `linear-gradient(
              293.5deg,
              #101010 3.2%,
              #010101 9.9%,
              #101010 22.9%,
              #010101 36.4%,
              #101010 50.1%,
              #010101 61.1%,
              #101010 71.2%,
              #010101 84.2%,
              #101010 92.2%
            );
            )`,
        borderRightColor:
          theme.palette.mode === 'light' ? 'error.main' : 'warning.main',
        borderRightWidth: '3px',
        borderRightStyle: 'solid',
      }}
    >
      <SidebarHeader />
      <SidebarTabs />
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
