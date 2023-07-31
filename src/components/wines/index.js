import { Box, Button, Container, Grid } from "@mui/material";
import { wines } from "../../data";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleWine from "./singleWine";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = wines.map((wine) => (
    <Grid
      item
      key={wine.id}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <SingleWine wine={wine} matches={matches} />
    </Grid>
  ));
  return (
    <Container>
      <Grid
        className="Test"
        container
        spacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
