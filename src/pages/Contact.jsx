import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Slide, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ContactForm } from '../components/page/';

const Contact = ({ pageTitle }) => {
  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <>
      <Box sx={{ height: '100vh', pt: 15 }}>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <Box>
          <Grid container>
            <Slide
              direction='up'
              in={loading}
              style={{
                transitionDelay: loading ? '200ms' : '0ms',
              }}
            >
              <Grid
                xs={8}
                md={8}
                sx={{
                  m: '0 auto',
                }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      theme.palette.mode === 'light'
                        ? 'secondary.main'
                        : 'primary.main',
                    p: 2,
                    borderWidth: 2,
                    borderColor: 'success.main',
                    borderStyle: 'solid',
                    borderRadius: 2,
                  }}
                >
                  <Box>
                    <ContactForm />
                  </Box>
                </Box>
              </Grid>
            </Slide>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
