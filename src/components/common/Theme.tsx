/*
 * Mui（Material-Ui ver5）テーマカスタマイズ定義
 */
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    baseSecondary: Palette['primary'];
  }

  interface PaletteOptions {
    baseSecondary?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#CC587A',
      contrastText: '#FFF',
    },
    baseSecondary: {
      main: '#303440',
      contrastText: '#FFF',
    },
  },
  typography: {
    fontFamily: ['"Noto Sans JP"', 'sans-serif'].join(','),
  },
});

