import React from "react";
import {
  Box,
  Grow,
  Slide,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import {
  LandingCaption,
  LandingContainer,
  LandingContent,
  LandingDescription,
  LandingImage,
  LandingText,
} from "../../styles/landing";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [contentVisible, setContentVisible] = React.useState(false);
  const [imageVisible, setImageVisible] = React.useState(false);

  // Function to toggle the visibility state of LandingContent and LandingImage
  const handleContentEnter = () => {
    setContentVisible(true);
  };

  const handleImageEnter = () => {
    setImageVisible(true);
  };

  React.useEffect(() => {
    // Set the visibility state to true after a short delay (you can adjust the delay as needed)
    setTimeout(() => setContentVisible(true), 1600);
    setTimeout(() => setImageVisible(true), 500); // Delay the image slide-in a bit after the content
  }, []);
  return (
    <LandingContainer>
      <Grow in={contentVisible} onEnter={handleContentEnter} timeout={1500}>
        <LandingContent>
          <LandingText variant="h2">{t("landing.text")}</LandingText>

          <LandingDescription variant="body2">
            {t("landing.description")}
          </LandingDescription>
          <LandingCaption
            variant="body2"
            sx={{
              marginBottom: "2em",
              color: Colors.secondary,
              fontSize: matches ? "0.5rem " : "0.7rem",
            }}
          >
            {t("landing.caption")}
          </LandingCaption>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/Ourwines">
              <Button variant="contained" color="primary" size="medium">
                {t("landing.button")}
              </Button>
            </Link>
            <IconButton
              color="primary"
              aria-label="Instagram"
              sx={{ ml: 1 }}
              href="https://www.instagram.com/portellpl/"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </LandingContent>
      </Grow>
      <Slide
        direction="up"
        in={imageVisible}
        onEnter={handleImageEnter}
        timeout={1500}
      >
        <LandingImage src="/images/landing/bottle2.png" />
      </Slide>
    </LandingContainer>
  );
}
