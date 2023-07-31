import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarLogo, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import "@fontsource/montez";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop() {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer
      sx={{ background: "#fff", fontFamily: '"Montez", "cursive"' }}
    >
      <AppbarLogo src="/images/appbar/logo.png" />
      <MyList type="row" sx={{ fontFamily: '"Montez", "cursive"' }}>
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={() => setShowSearchBox(true)} />
          </ListItemIcon>
        </ListItemButton>
        <Actions />
      </MyList>
    </AppbarContainer>
  );
}
