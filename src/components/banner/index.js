import {
  Box,
  Button,
  Grid,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerImage } from "../../styles/banner";
import { Colors } from "../../styles/theme";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/portell1.jpg" />
    </BannerContainer>
  );
}
