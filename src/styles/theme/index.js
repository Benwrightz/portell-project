import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

export const DrawerWidth = 250;

export const Colors = {
  primary: "#796d5d",
  secondary: "#ad9d85",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warnings: "#FFC107",
  dark: "#010101",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  ////////////////////////
  //Grays
  ///////////////////////
  dim_grey: "#696969",
  dove_grey: "#d5d5d5",
  body_bg: "#121212",
  light_grey: "rgba(230,230,230,)",
  ////////////////////////
  ///Solid colors
  //////////////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MyButton: {
      styleOverrides: {
        root: {
          color: Colors.secondary,
        },
        primary: {
          backgroundColor: Colors.primary,
          "&:hover": {
            background: lighten(0.05, Colors.secondary),
          },
        },
        secondary: {
          backgroundColor: Colors.secondary,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 250,
          background: Colors.dark,
          color: Colors.white,
          borderRadius: "0px 100px 0px 0px",
          borderRight: `1px solid ${Colors.secondary}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.primary),
        },
      },
    },
  },
});

export default theme;
