'use client';

import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900',],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    background: {
      default: "#F6F7F9"
    },
    text:{
      primary: "#64748B"
    },
    primary: {
      main: "#605DFF",
    },
    secondary: {
      main: "#3584FC",
    },
    success: {
      main: "#25B003",
    },
    info: {
      main: "#0dcaf0",
    },
    warning: {
      main: "#ffc107",
    },
    error: {
      main: "#FF4023",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily, 
    fontSize: 12.3,
  },
});

export default theme;
