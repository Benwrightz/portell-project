import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { wines } from "../../data";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { WineCaption, WineName, WineImage } from "../../styles/mywines";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import WineDetail from "../winedetail";
import { useState } from "react";

export default function TitlebarBelowImageList() {
  const [WineDetailDialog, showWineDetailDialog, closeWineDetailDialog] =
    useDialogModal(WineDetail);
  const [selectedWine, setSelectedWine] = useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenWineDetail = (wine) => {
    setSelectedWine(wine);
    showWineDetailDialog();
  };
  return (
    <>
      <ImageList
        sx={{
          width: "auto",
          height: 750,
        }}
        cols={matches ? 2 : 5}
      >
        {wines.map((wine) => (
          <ImageListItem
            key={wine.id}
            sx={{
              border: "2px solid #ad9d85",
              justifyContent: "center",
              alignItems: "center",
              background: Colors.black,
              borderRadius: "5px",
            }}
          >
            <WineImage
              src={`${wine.image}?w=248&fit=crop&auto=format`}
              srcSet={`${wine.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={wine.name}
              loading="lazy"
              style={{
                objectFit: "contain",
                width: matches ? "50px" : "80px",
                height: matches ? "180px" : "220px",
                display: "flex",
                flexGrow: 0,
              }}
            />
            <ImageListItemBar
              title={<WineName variant="subtitle1">{wine.name}</WineName>}
              subtitle={
                <WineCaption variant="caption text">{wine.Type} </WineCaption>
              }
              position="bottom"
              sx={{ color: Colors.white }}
              actionIcon={
                <IconButton
                  onClick={() => handleOpenWineDetail(wine)}
                  sx={{
                    color: Colors.secondary,
                  }}
                  aria-label={`info about ${wine.description}`}
                >
                  <FitScreenIcon
                    sx={{ fontSize: matches ? "1rem" : "1.2rem" }}
                  />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <WineDetailDialog wine={selectedWine} />
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
