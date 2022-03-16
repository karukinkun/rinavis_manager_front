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
    error: {
      main: "#d32f2f",
      light: "#f4d0cf",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        outlinedPrimary: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
        fullWidth: true,
        autoComplete: "off",
        InputProps: {
          startAdornment: <></>,
          endAdornment: <></>,
        },
      },
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          paddingTop: "6px !important",
          paddingBottom: "4px !important",
        },
      },
    },
    MuiGrid: {
      defaultProps: {
        columnSpacing: 2,
        rowSpacing: 2,
      },
    },
    MuiDataGrid: {
      defaultProps: {
        autoHeight: true,
        disableColumnMenu: true,
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
      },
    },
  },
  typography: {
    fontFamily: ['"Noto Sans JP"', "sans-serif"].join(","),
    htmlFontSize: 16,
  },
});
