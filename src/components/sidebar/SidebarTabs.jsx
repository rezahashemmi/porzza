import { tabsData } from '../../data/pagesData';
import { Tabs, Tab } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import MainContext from '../../context/';

const SidebarTabs = () => {
  const data = tabsData();
  const theme = useTheme();
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  return (
    <>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        scrollButtons='auto'
        allowScrollButtonsMobile
        value={pageNumber}
        onChange={handlePageNumber}
        indicatorColor='none'
        textColor='secondary'
        sx={{
          '.Mui-selected': {
            color:
              theme.palette.mode === 'light'
                ? 'primary.main'
                : 'secondary.main',
            background:
              theme.palette.mode === 'light'
                ? `linear-gradient(
                  66.5deg,
                  #dd0000 3.2%,
                  #bb0000 9.9%,
                  #dd0000 22.9%,
                  #bb0000 36.4%,
                  #dd0000 50.1%,
                  #bb0000 61.1%,
                  #dd0000 71.2%,
                  #bb0000 84.2%,
                  #dd0000 92.2%
                )`
                : `linear-gradient(
                  66.5deg,
                  #ffbe00 3.2%,
                  #e0a800 9.9%,
                  #ffbe00 22.9%,
                  #e0a800 36.4%,
                  #ffbe00 50.1%,
                  #e0a800 61.1%,
                  #ffbe00 71.2%,
                  #e0a800 84.2%,
                  #ffbe00 92.2%
                )`,
          },

          '& button:hover': {
            fontWeight: 700,
            color:
              theme.palette.mode === 'light' ? 'error.main' : 'warning.main',
          },

          '& button:hover.Mui-selected': {
            fontWeight: 500,
            color: 'secondary.main',
          },
        }}
      >
        {data.map((item, index) => (
          <Tab
            key={index}
            onClick={() => setDrawerOpen(false)}
            id={item.id}
            label={item.label}
            {...item}
            iconPosition='start'
            disableRipple
            sx={{
              minHeight: 25,
              minWidth: '80%',
              color:
                theme.palette.mode === 'light'
                  ? 'primary.main'
                  : 'secondary.main',
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default SidebarTabs;
