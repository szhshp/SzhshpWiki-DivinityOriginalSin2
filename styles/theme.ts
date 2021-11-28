import { createTheme } from "@mui/material/styles";
import { primaryColor, secondaryColor } from "styles/colors";

export const sidebarResponsiveBreakPoint = "md";

export const globalFontStyle = {
  fontFamily: `${[
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(",")}!important`,
};

export const globalLinkStyle = {
  cursor: "pointer",
  textDecoration: "none",
  color: primaryColor,
};

const defaultTheme = createTheme();

/**
 * @name theme
 * @description Reused theme object
 */
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        /* ----------------- Font Styles Start ----------------------- */
        "*": {
          ...globalFontStyle,
        },
        /* ----------------- Font Styles End ----------------------- */
        html: {
          fontSize: "16px",
          [defaultTheme.breakpoints.up("lg")]: {
            fontSize: "18px",
          },
        },
        a: globalLinkStyle,
        body: {
          fontSize: "1rem",
          margin: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: "#f04a3a",
    },
    warning: {
      main: "#fbb929",
    },
    text: {
      disabled: "#b6b5b5",
    },
  },
});

export default theme;
