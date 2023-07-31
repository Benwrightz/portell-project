import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const FooterContainer = styled(Box)(({ theme }) => ({
  background: Colors.dark,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "#ad9d85",
}));

export const FooterMedia = styled(Box)(({ theme }) => ({
  display: "flex",
  "& > *": {
    marginRight: theme.spacing(1),
    color: "#ad9d85", // Social media links color
    textDecoration: "none",
    "&:hover": {
      color: "#fff", // Social media links color on hover
    },
  },
}));

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
  fontFamily: "Space Grotesk",
  fontSize: "16px",
  color: Colors.secondary,
  lineHeight: 1.5,
  fontWeight: "bold",
}));

export const FooterDescription = styled(Typography)(() => ({
  fontFamily: "Space Grotesk",
  fontSize: "12px",
}));

export const FooterContact = styled(Typography)(({ theme }) => ({
  fontFamily: "Space Grotesk",
  textAlign: "justify",
  fontSize: "0.625rem",
  color: Colors.secondary,
  lineHeight: 1.5,
  fontWeight: "light",
  fontStyle: "italic",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.585rem",
    lineHeight: 1.4,
  },
}));
