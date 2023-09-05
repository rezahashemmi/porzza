import { Box, Chip, Typography, Tooltip } from '@mui/material';
import { projectsData } from '../../data/projectsData';
import CountUp from 'react-countup';

const CountingChip = () => {
  return (
    <>
      {projectsData.map((item, index) => (
        <Box key={index} sx={{ textAlign: 'center', mb: 1 }}>
          <Tooltip title={item.title} placement='left' arrow>
            <Chip
              sx={{ width: 0.7, color: 'secondary.main', py: 3 }}
              color={item.color}
              icon={item.icon}
              label={
                <Typography variant='body1'>
                  <CountUp start={0} end={item.count} duration={4} />
                </Typography>
              }
            />
          </Tooltip>
        </Box>
      ))}
    </>
  );
};

export default CountingChip;
