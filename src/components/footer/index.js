import {
  Grid,
  Typography,
  useMediaQuery,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  FooterContact,
  FooterContainer,
  FooterTitle,
} from "../../styles/footer";
import { Colors } from "../../styles/theme";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "@fontsource/space-grotesk";

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ padding: "1.875rem 1.875rem", background: "#000" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={6} md={12} lg={12}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography
            variant="caption2"
            sx={{
              fontFamily: "Space Grotesk",
              fontSize: "0.8125rem",
              color: Colors.white,
              lineHeight: 1.5,
              //letterSpacing: 1.25,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quod natus cumque commodi expedita sed deserunt vel alias saepe at
            fugit soluta numquam repellat accusantium qui dolores, iste minus
            asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Doloribus saepe cupiditate numquam magni aliquid veritatis
            quidem dolorem sunt molestias eaque mollitia, odio veniam quod
            deserunt, atque aut libero omnis. Quod.
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              //justifyContent: matches ? "flex-start" : "center",
              //flexDirection: "row",
              flexDirection: matches ? "column" : "row",
              // alignItems: matches ? "center" : "flex-start",
              alignItems: matches ? "flex-start" : "center",
              //width: "5em",
            }}
          >
            <Box>
              <CallIcon
                sx={{ ml: 4, fontSize: "small", color: Colors.white }}
              />
              <FooterContact variant="body2">+48 500 822 260</FooterContact>
              <FooterContact variant="body2">+48 579 145 662</FooterContact>
            </Box>
            <Box>
              <LocationOnIcon
                sx={{ ml: 4, fontSize: "small", color: Colors.white }}
              />
              <FooterContact variant="body2">ul. Długa 29</FooterContact>
              <FooterContact variant="body2">00-238 Warszawa</FooterContact>
            </Box>

            <Box>
              <EmailIcon
                sx={{ ml: 4, fontSize: "small", color: Colors.white }}
              />
              <FooterContact variant="body2">
                Needed.Portell@gmail.com
              </FooterContact>
              <FooterContact variant="body2">IG: portellpl</FooterContact>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3 }}>
        <Chip
          label="Copyright ©2023 All rights reserved"
          sx={{
            fontFamily: "Space Grotesk",
            fontSize: "9px",
            color: Colors.white,
            backgroundColor: Colors.dark,
          }}
        />
      </Divider>

      <Divider>
        <Chip
          label="This template is made with 🤍 by Benjamin "
          sx={{
            fontFamily: "Space Grotesk",
            fontSize: "9px",
            mt: 1,
            color: Colors.white,
            backgroundColor: Colors.dark,
          }}
        />
      </Divider>
    </Box>
  );
}
