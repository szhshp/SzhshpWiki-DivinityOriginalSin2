import { createTheme } from "@mui/material/styles";
import {
  primaryColor,
  secondaryColor,
} from "styles/colors";

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

const overrideMusicPlayerSVGColor = {
  color: "white",
  "& svg": {
    color: "white!important",
    "&:hover": {
      color: secondaryColor,
    },
  },
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
  typography: {
    ...globalFontStyle,
    caption: {
      fontSize: "0.8rem",
      color: "#9a9a9a",
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: "#b78b26",
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
