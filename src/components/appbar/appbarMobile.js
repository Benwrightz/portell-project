import { IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { AppbarContainer, AppbarLogo } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import { useUIContext } from "../../context/ui";
import { Link } from "react-router-dom";
import React from "react";
import i18n from "../../i18n";

export default function AppbarMobile() {
  const { setDrawerOpen } = useUIContext();
  const [alignment, setAlignment] = React.useState("en");
  const [locale, setLocale] = React.useState(i18n.language);

  i18n.on("languageChanged", () => setLocale(i18n.language));

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      // Add your translation logic here based on the selected alignment
    }
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppbarContainer
      sx={{
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
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
      <div style={{ flex: 1, textAlign: "center" }}>
        <Link to="/">
          <AppbarLogo src="/images/appbar/logo.png" />
        </Link>
      </div>
      <ToggleButtonGroup
        color="success"
        size="small"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Language"
      >
        <ToggleButton value="en">EN</ToggleButton>
        <ToggleButton value="pl">PL</ToggleButton>
      </ToggleButtonGroup>
    </AppbarContainer>
  );
}
