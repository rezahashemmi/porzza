import { ThemeProvider } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import Grid from '@mui/material/Unstable_Grid2';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { lightTheme, darkTheme } from '../themes';
const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children, mode }) => {
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Grid
            container
            sx={{
              height: '100vh',
              backgroundColor:
                theme.palette.mode === 'light'
                  ? 'secondary.main'
                  : 'primary.main',
            }}
          >
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
