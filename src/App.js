import { useEffect } from "react";
import { Button, Container } from "@mui/material";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import Appbar from "./components/appbar";
import Wines from "./components/wines";
import Banner from "./components/banner";
import Slider from "./components/slider";
import Body from "./components/body";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
import Search from "./components/search";
import TitlebarBelowImageList from "./components/mywines";
import LandingPage from "./components/landing";
//import MyWines from "./components/mywines";

function App() {
  useEffect(() => {
    document.title = "Portell | Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <UIProvider>
          <Appbar />
          <Banner />
          <Slider />
          <Body />
          <TitlebarBelowImageList />
          <Footer />
          <LandingPage />
          <AppDrawer />
          <Search />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
