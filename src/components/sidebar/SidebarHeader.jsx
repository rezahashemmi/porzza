import { Box, Typography } from '@mui/material';
import { SocialMediaBar } from '../social/';
import { ThemeButton } from '../page';
import { useTheme } from '@mui/material/styles';

const SidebarHeader = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: 1,
        textAlign: 'center',
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
          xl: 'block',
        },
        color:
          theme.palette.mode === 'light' ? 'primary.main' : 'secondary.main',
      }}
    >
      <ThemeButton />
      <Typography variant='body1' sx={{ mt: 5 }}>
        سیدرضا هاشمی
      </Typography>
      <Typography variant='caption'>
        من یک توسعه دهنده‌ی جونیور هستم.
      </Typography>
      <SocialMediaBar />
    </Box>
  );
};

export default SidebarHeader;
