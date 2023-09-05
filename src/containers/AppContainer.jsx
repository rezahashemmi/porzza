import { useState, useEffect } from 'react';
import MainLayout from '../templates/layouts/MainLayout';
import SwipeableViews from 'react-swipeable-views';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainContext from '../context/';
import SidebarContainer from './SidebarContainer';
import { DrawerButton } from '../components/drawer/';
import { Pages, Page } from '../components/page/';
import { About, Comments, Contact, Home, Resume, Works } from '../pages/';

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const prefersLightMode = useMediaQuery('(prefers-color-scheme:light)');
  let pageTitle = '';

  useEffect(() => {
    setMode(prefersLightMode ? 'light' : 'dark');
  }, []);

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(() => {
    if (isSmUp) {
      setDrawerOpen(false);
    }
  }, [isSmUp]);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        pageTitle,
        handleThemeChange,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer />
        <DrawerButton />
        <Pages>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0}>
              <Home pageTitle='Porza | خانه' />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About pageTitle='Porza | درباره‌ی من' />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume pageTitle='Porza | رزومه‌ی من' />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Works pageTitle='Porza | نمونه کارهای من' />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments pageTitle='Porza | نظرات شما' />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact pageTitle='Porza | تماس با من' />
            </Page>
          </SwipeableViews>
        </Pages>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
