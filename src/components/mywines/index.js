import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme";
import IconButton from "@mui/material/IconButton";
import { WineCaption, WineName, WineImage } from "../../styles/mywines";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/useDialogModal";
import WineDetail from "../winedetail";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MyWines() {
  const [WineDetailDialog, showWineDetailDialog] = useDialogModal(WineDetail);
  const [selectedWine, setSelectedWine] = useState(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

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
        {t("portell", { returnObjects: true }).map((wine) => (
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
                <WineCaption variant="caption text">{wine.type} </WineCaption>
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
