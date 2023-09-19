import { Box, Container, Typography, Link } from "@mui/material";
import { Colors } from "../../styles/theme";

export default function CopyRight() {
  return (
    <Box
      sx={{
        backgroundColor: Colors.white,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color={Colors.black} align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://instagram.com/portellpl/">
            Portell
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}
