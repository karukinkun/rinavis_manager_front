/*
 * Mui（Material-Ui ver5）テーマカスタマイズ定義
 */
import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";
declare module "@mui/material/styles" {
  interface Palette {
    baseSecondary: Palette["primary"];
  }

  interface PaletteOptions {
    baseSecondary?: PaletteOptions["primary"];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#025492",
      contrastText: "#FFF",
    },
    baseSecondary: {
      main: "#25242C",
      contrastText: "#FFF",
    },
    text: {
      primary: "#34395e",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
        fullWidth: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
    MuiDataGrid: {
      defaultProps: {
        autoHeight: true,
        disableColumnMenu: true,
        hideSortIcons: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "10px",
          overflow: "hidden",
          border: "none",
          paddingTop: 0,
        },
        main: {
          border: "1px solid rgba(224, 224, 224, 1)",
          backgroundColor: "#FFF",
        },
        columnHeader: {
          backgroundColor: "#25242C",
          color: "#FFF",
        },
        footerContainer: {
          backgroundColor: "inherit",
        },
        editInputCell: {
          backgroundColor: "#CCC",
        },
        cellEditable: {
          backgroundColor: "#CCC",
        },
      },
    },
  },
  typography: {
    fontFamily: ['"Noto Sans JP"', "sans-serif"].join(","),
    htmlFontSize: 16,
  },
});
