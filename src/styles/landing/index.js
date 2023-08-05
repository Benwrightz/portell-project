import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "../theme";
import { Typography, Button } from "@mui/material";

export const LandingContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  //justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  background: Colors.black,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    //alignItems: "center",
  },
}));

export const LandingContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 600,
  padding: "30px",
}));

export const LandingImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "500px",
  padding: "30px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    marginBottom: "50px",
  },
}));

export const LandingDescription = styled(Typography)(({ theme }) => ({
  color: Colors.white,
  textAlign: "center",
  lineHeight: 1.5,
  //fontFamily: "Space Grotesk",
  fontFamily: "Times",
  fontSize: "0.8125rem",

  marginBottom: "3em",
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.5,
    marginBottom: "2em",
  },
}));

export const LandingText = styled(Typography)(({ theme }) => ({
  color: Colors.secondary,
  fontFamily: "Space Grotesk",
  fontSize: "2rem",
  textTransform: "uppercase",
  letterSpacing: "2px",
  fontWeight: "bold",
  marginBottom: "2em",
  textAlign: "center",
}));
