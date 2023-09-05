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
import { education } from '../../data/resumeData';
import { useTheme } from '@mui/material/styles';

const Educations = ({ loading }) => {
  const theme = useTheme();

  return (
    <>
      <Timeline
        position='left'
        sx={{
          direction: 'ltr',
        }}
      >
        {education.map((item, index) => (
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
                <TimelineDot variant='outlined' color='warning'>
                  <SchoolRounded color='warning' />
                </TimelineDot>
                {index !== 1 ? <TimelineConnector /> : null}
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
                  {item.major}
                </Typography>
                <Typography
                  variant='body2'
                  color={
                    theme.palette.mode === 'light'
                      ? 'primary.main'
                      : 'secondary.main'
                  }
                >
                  {item.certificate}
                </Typography>
                <Typography
                  variant='body2'
                  color={
                    theme.palette.mode === 'light'
                      ? 'primary.main'
                      : 'secondary.main'
                  }
                >
                  {item.place}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))}
      </Timeline>
    </>
  );
};

export default Educations;
