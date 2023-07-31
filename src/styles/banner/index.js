import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  background: Colors.dark,
  backgroundSize: "cover",
  width: "100%",
  height: "100vh",
  display: "flex",
  opacity: 1,
  position: "relative",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
}));
