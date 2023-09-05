import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazir',
  },
  palette: {
    mode: 'light',
    primary: { main: '#101010' },
    secondary: { main: '#fefefe' },
    error: { main: '#dd0000' },
    info: { main: '#113a5d' },
    warning: { main: '#ffbe00' },
    success: { main: '#00943e' },
  },
});

export const darkTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazir',
  },
  palette: {
    mode: 'dark',
    primary: { main: '#101010' },
    secondary: { main: '#fefefe' },
    error: { main: '#dd0000' },
    info: { main: '#113a5d' },
    warning: { main: '#ffbe00' },
    success: { main: '#00943e' },
  },
});
