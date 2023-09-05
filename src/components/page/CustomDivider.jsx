import { Chip, Divider, Typography, Slide, Box } from '@mui/material';
import { useEffect, useState } from 'react';

const CustomDivider = ({ color, text, icon }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Box>
      <Slide
        direction='down'
        in={loading}
        style={{
          transitionDelay: loading ? '500ms' : '0ms',
        }}
      >
        <Divider
          sx={{
            textAlign: 'center',
            my: 2,
            '&::after,&::before': {
              borderColor: `${color}.main`,
            },
          }}
        >
          <Chip
            icon={icon}
            color={color}
            label={<Typography>{text}</Typography>}
            sx={{ p: 3, color: 'secondary.main' }}
          />
        </Divider>
      </Slide>
    </Box>
  );
};

export default CustomDivider;
