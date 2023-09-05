import { Avatar, Box } from '@mui/material';
const CustomAvatar = ({ source, size }) => {
  return (
    <Box>
      <Avatar
        src={source}
        variant='rounded'
        alt='My Avatar'
        sx={{ height: size, width: size }}
      >
        Rez Hashemi
      </Avatar>
    </Box>
  );
};

export default CustomAvatar;
