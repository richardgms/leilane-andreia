'use client';
import { createTheme } from '@mui/material/styles';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
      color: '#1A1A1A',
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
      color: '#1A1A1A',
    },
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 600,
    },
    h4: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 500,
    },
    button: {
      fontFamily: inter.style.fontFamily,
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#1A1A1A', // Preto Profundo
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D4AF37', // Dourado Metálico
      contrastText: '#1A1A1A',
    },
    background: {
      default: '#F5F5F0', // Off-white/Creme suave
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px', // Levemente arredondado
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          backgroundColor: '#1A1A1A',
          color: '#D4AF37', // Texto dourado no botão preto
          border: '1px solid #1A1A1A',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        outlinedPrimary: {
          borderColor: '#1A1A1A',
          color: '#1A1A1A',
          '&:hover': {
            backgroundColor: 'rgba(26, 26, 26, 0.04)',
            borderColor: '#1A1A1A',
          },
        },
        containedSecondary: {
          backgroundColor: '#D4AF37',
          color: '#1A1A1A',
          '&:hover': {
            backgroundColor: '#C5A059',
          }
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        }
      }
    }
  },
});

export default theme;
