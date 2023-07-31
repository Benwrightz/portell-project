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
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { drawerOpen, setDrawerOpen } = useUIContext();
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
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemIcon sx={{ color: Colors.white }}>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemIcon sx={{ color: Colors.white }}>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemIcon sx={{ color: Colors.white }}>
              <InstagramIcon />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
