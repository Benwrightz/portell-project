import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";
import Slide from "@mui/material/Slide";

export default function LandingPage(options) {
  const [isEntered, setEntered] = useState(false);

  const handleEntered = () => {
    setEntered(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 500,
        backgroundColor: Colors.black,
      }}
    >
      <Typography sx={{ color: Colors.white }}>This is for portell</Typography>
      {/* Content goes here */}
    </Box>
  );
}
