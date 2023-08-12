import {
  Grid,
  Typography,
  useMediaQuery,
  Box,
  Chip,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FooterContact, FooterTitle } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "@fontsource/space-grotesk";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        padding: "1.875rem 1.875rem",
        background: "#000",
        height: "100vh",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={6} md={12} lg={12}>
          <FooterTitle variant="body1">{t("footer.title")}</FooterTitle>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Times",
              fontSize: "0.8125rem",
              color: Colors.white,
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            {t("footer.description")}
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: matches ? "column" : "row",
              alignItems: matches ? "flex-start" : "center",
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
      <Grid sx={{ backgroundColor: Colors.dark }}>
        <Divider sx={{ mt: 3 }}>
          <Chip
            label="Copyright ©2023 All rights reserved"
            sx={{
              fontFamily: "Times",
              fontSize: "9px",
              color: Colors.white,
              backgroundColor: Colors.dark,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Divider>

        <Divider>
          <Link
            to="https://profile.nabentech.com"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Chip
              label="This template is made with 🤍 by Benjamin "
              sx={{
                fontFamily: "Times",
                fontSize: "9px",
                mt: 1,
                color: Colors.white,
                backgroundColor: Colors.dark,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  color: Colors.secondary,
                },
              }}
            />
          </Link>
        </Divider>
      </Grid>
    </Box>
  );
}
