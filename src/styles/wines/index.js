import styled from "@emotion/styled";
import { Button, IconButton, Box } from "@mui/material";
import { slideInBottom, slideInRight } from "../../animation";
import { Colors } from "../theme";

export const Wine = styled(Box)(({ theme }) => ({
  background: Colors.black,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    //width: "300px",
    position: "relative",
  },
}));

export const WineImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  backgroundWidth: "400px",
  //maxWidth: "400px",
  maxHeight: "250px",
  background: Colors.black,
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    //width: "auto",
    padding: "24px",
    maxHeight: "200px",
  },
}));

export const WineActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const WineFavButton = styled(WineActionButton, {
  shouldForwardProp: (prop) => prop !== "isFav",
})(({ isFav, theme }) => ({
  color: isFav ? Colors.primary : Colors.light,
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    right: 0,
    top: 0,
  },
}));

export const WineAddToCart = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "300px",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const WineMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const WineActionsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
    animation:
      show &&
      `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
}));
