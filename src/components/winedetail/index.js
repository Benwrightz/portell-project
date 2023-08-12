import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
  Slide,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { MyWine, WineCaption, WineImage } from "../../styles/mywines";
import React from "react";
import { useTranslation } from "react-i18next";

export const SlideTransition = React.forwardRef((props, ref) => (
  <Slide direction="down" {...props} ref={ref} />
));

const WineDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const WineDetailInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function WineDetail({ open, onClose, wine }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanant"
      open={open}
      fullScreen
    >
      <DialogTitle sx={{ background: Colors.black }}>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography sx={{ color: Colors.secondary }}>
            {t("wine.winedetail")}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: Colors.secondary }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ background: Colors.black }}>
        <WineDetailWrapper flexDirection={matches ? "column" : "row"}>
          <MyWine sx={{ mr: 4 }}>
            <WineImage
              src={wine.image}
              sx={{ width: "200px", height: "auto", padding: "25px" }}
            />
          </MyWine>
          <WineDetailInfoWrapper>
            <Typography
              variant="h2"
              sx={{
                padding: "10px",
                fontSize: matches ? "1.5rem" : "2rem",
                color: Colors.white,
                lineHeight: 1.5,
              }}
            >
              {wine.name}
            </Typography>
            <WineCaption
              variant="caption text"
              sx={{
                padding: "10px",
              }}
            >
              {wine.type}
            </WineCaption>
            <WineCaption
              variant="caption text"
              sx={{
                padding: "10px",
              }}
            >
              {wine.alcohol}
            </WineCaption>
            <WineCaption
              variant="caption text"
              sx={{
                padding: "10px",
              }}
            >
              {wine.variety}
            </WineCaption>
            <Typography
              variant="body2"
              sx={{
                padding: "10px",
                color: Colors.white,
                lineHeight: 1.5,
                textAlign: "justify",
                fontFamily: "Times",
              }}
            >
              {wine.description}
            </Typography>
          </WineDetailInfoWrapper>
        </WineDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
