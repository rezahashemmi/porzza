import Slider from 'react-slick';
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import { comments } from '../../data/commentsData';
import { useTheme } from '@mui/material/styles';

const Comment = () => {
  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
  };
  const theme = useTheme();

  return (
    <Box
      component='div'
      sx={{
        mt: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Slider {...options}>
        {comments.map((user, index) => (
          <Box
            key={index}
            component='div'
            sx={{
              justifyContent: 'center',
              direction: 'ltr',
            }}
          >
            <Avatar
              src={user.avatar}
              variant='circular'
              sx={{
                height: 100,
                width: 100,
                m: '0 auto',
              }}
            />
            <Typography
              variant='body1'
              textAlign='center'
              color={
                theme.palette.mode === 'light'
                  ? 'primary.main'
                  : 'secondary.main'
              }
            >
              {user.fullName}
            </Typography>
            <Typography
              variant='body2'
              textAlign='center'
              color={
                theme.palette.mode === 'light'
                  ? 'primary.main'
                  : 'secondary.main'
              }
              sx={{ mb: 2 }}
            >
              {user.jobTitle}
            </Typography>
            <Card
              sx={{
                backgroundColor: 'warning.light',
                width: 1 / 2,
                m: '0 auto',
                borderRadius: 5,
              }}
            >
              <CardContent>
                <Typography
                  variant='body2'
                  textAlign='justify'
                  color='primary.main'
                >
                  {user.comment}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Comment;
