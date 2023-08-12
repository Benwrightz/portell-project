import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BodyButton,
  BodyContainer,
  BodyContent,
  BodyDescription,
  BodyImage,
  BodyTitle,
} from "../../styles/body";
import { Colors } from "../../styles/theme";
import { useTranslation } from "react-i18next";

export default function Body() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();
  return (
    <BodyContainer>
      <BodyImage src="/images/body/body1.jpg" />
      <BodyContent>
        <Typography
          variant="subtitle2"
          sx={{
            color: Colors.secondary,
            fontFamily: "Space Grotesk",
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "bold",
          }}
        >
          {t("body.text")}
        </Typography>
        <BodyTitle variant="h5">{t("body.title")}</BodyTitle>
        <BodyDescription variant="body2">
          {t("body.description")}
        </BodyDescription>
      </BodyContent>
    </BodyContainer>
  );
}
