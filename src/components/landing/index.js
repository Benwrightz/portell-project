import React from "react";
import {
  Box,
  Typography,
  Fade,
  Grow,
  Slide,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import {
  LandingContainer,
  LandingContent,
  LandingDescription,
  LandingImage,
  LandingText,
} from "../../styles/landing";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";

export default function LandingPage() {
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
    setTimeout(() => setContentVisible(true), 500);
    setTimeout(() => setImageVisible(true), 700); // Delay the image slide-in a bit after the content
  }, []);
  return (
    <LandingContainer>
      <Grow in={contentVisible} onEnter={handleContentEnter} timeout={1500}>
        <LandingContent>
          <LandingText variant="h2">
            Discover the Portell Experience
          </LandingText>

          <LandingDescription variant="body2">
            Elevate your moments of celebration, create unforgettable memories
            with loved ones, and savor the joy of life with Portell Wine.
            Whether it's a quiet evening at home, a grand occasion, or a
            spontaneous gathering of friends, Portell will elevate your
            experience to extraordinary heights. Explore our exceptional
            collection of Portell wines and embrace the true essence of
            elegance. With each bottle uncorked, let the magic of Portell
            transport you to a world of refined tastes and unforgettable
            experiences.
          </LandingDescription>
          <LandingText
            variant="body2"
            sx={{
              marginBottom: "2em",
              color: Colors.secondary,
              fontSize: matches ? "0.5rem " : "0.7rem",
            }}
          >
            Are you ready to uncork the journey? Discover Portell Wine today!
          </LandingText>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" color="primary" size="medium">
              Explore Our Wines
            </Button>
            <IconButton color="primary" aria-label="Instagram" sx={{ ml: 1 }}>
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
      {/* Content goes here */}
    </LandingContainer>
  );
}
