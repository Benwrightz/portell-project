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
import { Wine } from "../../styles/wines";
import { MyWine, WineImage } from "../../styles/mywines";
import React from "react";

export const SlideTransition = React.forwardRef((props, ref) => (
  <Slide direction="down" {...props} ref={ref} />
));

const WineDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  //padding: theme.padding(4),
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
          <Typography sx={{ color: Colors.secondary }}>Wine Title</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: Colors.secondary }} />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <WineDetailWrapper flexDirection={matches ? "column" : "row"}>
          <MyWine sx={{ mr: 4 }}>
            <WineImage
              src={wine.image}
              sx={{ width: "200px", height: "auto", padding: "25px" }}
            />
          </MyWine>
          <WineDetailInfoWrapper>
            <Typography>{wine.name}</Typography>
            <Typography>{wine.Type}</Typography>
            <Typography>{wine.description}</Typography>
          </WineDetailInfoWrapper>
        </WineDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
