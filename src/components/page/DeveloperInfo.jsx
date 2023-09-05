import { Typography } from '@mui/material';
import { KeyboardArrowLeftRounded } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Info = ({ children }) => {
  const theme = useTheme();

  return (
    <Typography
      variant='body1'
      textAlign='left'
      color={theme.palette.mode === 'light' ? 'primary.main' : 'secondary.main'}
      sx={{ mb: 2 }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{ verticalAlign: 'bottom', color: 'error.main' }}
      />
    </Typography>
  );
};

const DeveloperInfo = () => {
  return (
    <>
      <Info>نام: رضا هاشمی</Info>
      <Info>reza.hashemmi@gmail.com :ایمیل</Info>
      <Info>تلفن: 09112187579</Info>
    </>
  );
};

export default DeveloperInfo;
