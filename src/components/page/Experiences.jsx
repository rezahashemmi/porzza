import { Slide, Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from '@mui/lab';
import { SchoolRounded } from '@mui/icons-material';
import { experience } from '../../data/resumeData';
import { useTheme } from '@mui/material/styles';

const Experiences = ({ loading }) => {
  const theme = useTheme();

  return (
    <>
      <Timeline
        position='right'
        sx={{
          direction: 'ltr',
        }}
      >
        {experience.map((item, index) => (
          <Slide
            key={index}
            direction='up'
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : '0ms',
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant='outlined' color='success'>
                  <SchoolRounded color='success' />
                </TimelineDot>
                {index !== 3 ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  variant='caption'
                  color={
                    theme.palette.mode === 'light'
                      ? 'primary.main'
                      : 'secondary.main'
                  }
                >
                  {item.year}
                </Typography>
                <Typography
                  variant='body1'
                  color={
                    theme.palette.mode === 'light'
                      ? 'primary.main'
                      : 'secondary.main'
                  }
                >
                  {item.job}
                </Typography>
                <Typography
                  variant='body2'
                  color={
                    theme.palette.mode === 'light'
                      ? 'primary.main'
                      : 'secondary.main'
                  }
                >
                  {item.company}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};

export default Experiences;
