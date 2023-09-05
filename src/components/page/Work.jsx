import { works } from '../../data/worksData';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Card,
  CardContent,
  Slide,
  Typography,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
} from '@mui/material';

const Work = ({ loading }) => {
  return (
    <>
      {works.map((work, index) => (
        <Grid
          key={index}
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={4}
          sx={{
            px: 2,
            mb: 1,
          }}
        >
          <Slide
            direction='up'
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : '0ms',
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: 'info.light',
              }}
            >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='200'
                  width='200'
                  image={work.image}
                  alt={work.title}
                />
                <CardContent>
                  <Typography
                    variant='body1'
                    textAlign='center'
                    color='secondary.main'
                    gutterBottom
                  >
                    {work.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={work.link}
                  size='small'
                  target='_blank'
                  color='secondary'
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default Work;
