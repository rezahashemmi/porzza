import { Helmet } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2';
import { Work } from '../components/page/';
import { useState, useEffect } from 'react';

const Works = ({ pageTitle }) => {
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
      <Grid container sx={{ py: 2, direction: 'ltr' }}>
        <Work loading={{ loading }} />
      </Grid>
    </>
  );
};

export default Works;
