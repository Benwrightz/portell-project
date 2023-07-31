import { Box, List, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { IconButton } from "@mui/material";
import { slideInBottom, slideInRight } from "../../animation";

export const WineName = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  textAlign: "justify",
  fontFamily: "Space Grotesk",
  lineHeight: 1.5,
  fontSize: "0.8rem",
  fontWeight: "bold",
  fontStyle: "oblique",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
}));

export const WineCaption = styled(Typography)(({ theme }) => ({
  color: Colors.secondary,
  textAlign: "justify",
  fontFamily: "Space Grotesk",
  lineHeight: 1.5,
  fontWeight: "light",
  fontStyle: "oblique",
  fontSize: "0.578rem",

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6em",
  },
}));

export const WineImage = styled("img")(() => ({}));

export const MyWine = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));
