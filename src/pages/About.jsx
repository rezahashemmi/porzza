import { Helmet } from 'react-helmet-async';
import {
  CustomDivider,
  CustomAvatar,
  CountingChip,
  DeveloperInfo,
  Skills,
} from '../components/page/';
import {
  SelfImprovementRounded,
  SettingsEthernetRounded,
} from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';
import avatar from '../assets/avatar.jpg';
import { Box } from '@mui/material';

const About = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <CustomDivider
        color='error'
        text='من کی‌ام؟'
        icon={<SettingsEthernetRounded />}
      />
      <Grid container>
        <Grid
          xs={0}
          sm={0}
          md={3}
          lg={3}
          xl={3}
          sx={{
            px: 3,
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
            },
          }}
        >
          <CustomAvatar source={avatar} size='250px' />
        </Grid>
        <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
          <Box>
            <Grid container>
              <Grid xs={8} sm={8} md={8} lg={8} xl={8}>
                <DeveloperInfo />
              </Grid>
              <Grid xs={4} sm={4} md={4} lg={4} xl={4}>
                <CountingChip />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <CustomDivider
        color='info'
        text='چه مهارتهایی دارم؟'
        icon={<SelfImprovementRounded />}
      />
      <Grid container>
        <Grid xs={12} sx={{ px: 3 }}>
          <Skills />
        </Grid>
      </Grid>
    </>
  );
};

export default About;
