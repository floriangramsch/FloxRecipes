import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9900ff', // lilaton
      // main: '#1976d2', // Blauton
    },
    secondary: {
      main: '#dc004e', // Rotton
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
