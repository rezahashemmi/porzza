import Grid from '@mui/material/Unstable_Grid2';

const Pages = ({ children }) => {
  return (
    <>
      <Grid xs={12} sm={12} md={10} lg={10} xl={10}>
        {children}
      </Grid>
    </>
  );
};

export default Pages;
