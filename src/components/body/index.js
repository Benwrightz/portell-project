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

export default function Body() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
          Message from Portell
        </Typography>
        <BodyTitle variant="h5">A New Generation of Winemakers</BodyTitle>
        <BodyDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          repellat autem vitae temporibus aut, beatae alias dignissimos delectus
          laudantium nihil dolores, officia molestiae natus id accusantium nulla
          sunt eius aliquam! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Alias, ipsam perferendis laboriosam dolorem facilis quaerat
          voluptatem vero ex distinctio ratione amet possimus voluptas quibusdam
          blanditiis soluta quod reiciendis vitae reprehenderit. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Architecto aut voluptates, eius
          officia doloremque a sit quidem unde nostrum deserunt laudantium nisi
          praesentium, assumenda quod voluptatum magni maiores. Dolore, quaerat.
        </BodyDescription>
      </BodyContent>
    </BodyContainer>
  );
}
