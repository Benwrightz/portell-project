import { Box, List, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BodyContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  background: Colors.dark,
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "0px 0px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BodyContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "500",
  maxHeight: "400",
  padding: "30px",
}));

export const BodyTitle = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  lineHeight: 1.5,
  fontSize: "40px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
}));

export const BodyDescription = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  textAlign: "justify",
  lineHeight: 1.5,
  fontFamily: "Space Grotesk",
  fontSize: "0.8125rem",

  marginBottom: "3em",
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.5,
    marginBottom: "1.5em",
  },
}));

export const BodyImage = styled("img")(({ theme }) => ({
  width: "500px",
  height: "400px",
  [theme.breakpoints.down("md")]: {
    width: "250px",
    height: "580px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "340px",
    height: "300px",
  },
}));

export const BodyButton = styled(Button)(({ theme }) => ({
  background: "none",
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: 5,
  // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  margin: theme.spacing(1),
  transition: "background 0.3s, color 0.3s",
  "&:hover": {
    background: `linear-gradient(45deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 90%)`,
    color: "#000",
  },
}));
