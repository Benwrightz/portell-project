import { Box, List, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors, DrawerWidth } from "../theme";

export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppbarLogo = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "155px",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "120px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "60px",
  },
}));

export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 10,
  left: DrawerWidth,
  zIndex: 1999,
}));
