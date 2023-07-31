import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarLogo } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile() {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppbarContainer
      sx={{
        background: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
      }}
    >
      <IconButton
        sx={{ marginRight: "auto" }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <AppbarLogo src="/images/appbar/logo.png" />
      <IconButton sx={{ marginLeft: "auto" }}>
        <SearchIcon onClick={() => setShowSearchBox(true)} />
      </IconButton>
    </AppbarContainer>
  );
}
