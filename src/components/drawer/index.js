import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { drawerOpen, setDrawerOpen } = useUIContext();
  const { t } = useTranslation();
  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.white),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton component={Link} to="/">
            <ListItemText>{t("appbar.home")}</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton component={Link} to="/AboutUs">
            <ListItemText>{t("appbar.about")} </ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton component={Link} to="/OurWines">
            <ListItemText> {t("appbar.wines")}</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton component={Link} to="/ContactUs">
            <ListItemText>{t("appbar.contact")}</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <Link to="https://www.instagram.com/portellpl/" target="_blank">
              <ListItemIcon sx={{ color: Colors.white }}>
                <InstagramIcon />
              </ListItemIcon>
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
