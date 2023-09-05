import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SidebarFooter = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        textAlign: 'center',
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
          xl: 'block',
        },
        mt: 1,
        color:
          theme.palette.mode === 'light' ? 'primary.main' : 'secondary.main',
      }}
    >
      <Typography variant='body2'>طراحی و توسعه در شهریور 1402</Typography>
    </Box>
  );
};

export default SidebarFooter;
