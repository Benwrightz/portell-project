import { Box } from "@mui/material";
import { Wine, WineImage } from "../../styles/wines";
import WineMeta from "./wineMeta";

export default function SingleWine({ wine, matches }) {
  return (
    <Wine>
      <WineImage src={wine.image} />
      <WineMeta wine={wine} matches={matches} />
    </Wine>
  );
}
