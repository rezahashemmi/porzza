import { IconButton } from '@mui/material';

const SocialMediaIcon = ({ name, address, icon, color }) => {
  return (
    <>
      <IconButton aria-label={name} sx={{ color: `${color}` }} disableRipple>
        <a
          href={address}
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: 'inherit' }}
        >
          {icon}
        </a>
      </IconButton>
    </>
  );
};

export default SocialMediaIcon;
