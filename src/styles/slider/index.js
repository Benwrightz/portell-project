import { Typography, styled } from "@mui/material";
import { Colors } from "../theme";
import { Box } from "@mui/material";
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/montez";

export const SliderContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "8px 0px 2px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 0px 2px 0px",
  overflow: "hidden",
  background: Colors.dark,
}));

export const SliderMessage = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montez", "cursive"',
  fontWeight: 400,
  lineHeight: 1.5,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  color: Colors.secondary,
  fontSize: "1rem",
}));
