import { ListItemText, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { AppbarContainer, AppbarLogo, MyList } from "../../styles/appbar";
import Actions from "./actions";
import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function AppbarDesktop() {
  const { t } = useTranslation();
  const [alignment, setAlignment] = React.useState("en");
  const [locale, setLocale] = React.useState(i18n.language);

  i18n.on("languageChanged", () => setLocale(i18n.language));

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
    i18n.changeLanguage(event.target.value);
  };
  const linkStyle = {
    textDecoration: "none",
    color: "#000",
    marginRight: "4rem",
  };

  return (
    <AppbarContainer sx={{ background: "#fff" }}>
      <Link to="/">
        <AppbarLogo src="/images/appbar/logo.png" />
      </Link>
      <MyList type="row">
        <Link to="/" style={linkStyle}>
          <ListItemText primary={t(`appbar.home`)} />
        </Link>
        <Link to="/AboutUs" style={linkStyle}>
          <ListItemText primary={t(`appbar.about`)} />
        </Link>
        <Link to="/OurWines" style={linkStyle}>
          <ListItemText primary={t(`appbar.wines`)} />
        </Link>
        <Link to="/ContactUs" style={linkStyle}>
          <ListItemText primary={t(`appbar.contact`)} />
        </Link>
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
        <Actions />
      </MyList>
    </AppbarContainer>
  );
}
