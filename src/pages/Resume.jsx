import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2';
import { CustomDivider } from '../components/page';
import { HomeRepairServiceRounded, SchoolRounded } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { Experiences, Educations } from '../components/page/';

const Resume = ({ pageTitle }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => setLoading(false);
  });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Grid container>
        <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
          <CustomDivider
            color='success'
            text='تجربیات من'
            icon={<HomeRepairServiceRounded />}
          />
          <Experiences loading={loading} />
        </Grid>
        <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
          <CustomDivider
            color='warning'
            text='تحصیلات من'
            icon={<SchoolRounded />}
          />
          <Educations loading={loading} />
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
