import { Typography } from "@mui/material";
import { WineMetaWrapper } from "../../styles/wines";

export default function WineMeta({ wine, matches }) {
  return (
    <WineMetaWrapper>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={1.4}>
        {wine.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"} lineHeight={1.4}>
        {wine.Type}
      </Typography>
    </WineMetaWrapper>
  );
}
