import { Box } from '@mui/material';
import { SocialMediaIcon } from './';
import { socialMediaLight, socialMediaDark } from '../../data/socialMedia';
import { useTheme } from '@mui/material/styles';

const SocialMediaBar = () => {
  const theme = useTheme();
  const data =
    theme.palette.mode === 'light' ? socialMediaLight : socialMediaDark;
  return (
    <Box sx={{ my: 1 }}>
      {data.map((item, index) => (
        <SocialMediaIcon
          key={index}
          name={item.name}
          address={item.address}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </Box>
  );
};

export default SocialMediaBar;
