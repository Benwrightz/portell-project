import { useEffect, Suspense } from "react";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";
import { Container } from "@mui/material";
import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material";
import Appbar from "./components/appbar";
import Slider from "./components/slider";
import Body from "./components/body";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";

import MyWines from "./components/mywines";
import LandingPage from "./components/landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function Loading() {
  return <>Loading...</>;
}
function NotFound() {
  return <div>404 - Not Found</div>;
}

function App() {
  useEffect(() => {
    document.title = "Portell Wine | Cava";
  }, []);
  const [locale, setLocale] = useState(i18n.language);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <Suspense fallback={<Loading />}>
            <Container maxWidth="xl" sx={{ background: "#fff" }}>
              <UIProvider>
                <Appbar />
                <Slider />
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/AboutUs" element={<Body />} />
                  <Route path="/OurWines" element={<MyWines />} />
                  <Route path="/ContactUs" element={<Footer />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <AppDrawer />
              </UIProvider>
            </Container>
          </Suspense>
        </LocaleContext.Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
