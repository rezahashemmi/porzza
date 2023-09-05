import { Divider, Chip, Badge, Box, LinearProgress } from '@mui/material';

const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Divider
        textAlign='right'
        sx={{
          mt: 1,
          '&::before, &::after': {
            borderColor: `${color}.main`,
          },
        }}
      >
        <Chip
          icon={<Box component='img' src={icon} sx={{ height: 20 }} />}
          color={color}
          label={name}
          sx={{
            color: 'primary.contrastText',
            p: 2,
          }}
        />
      </Divider>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: 35, mr: 2 }}>
          <Badge
            variant='standard'
            badgeContent={`${Math.round(value)}%`}
            color={color}
          />
        </Box>
        <Box sx={{ width: '100%', mt: 1 }}>
          <LinearProgress
            variant='determinate'
            value={value}
            color={color}
            sx={{ height: 5, borderRadius: 2 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
