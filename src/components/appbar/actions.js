import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Actions() {
  return (
    <MyList type="row">
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <InstagramIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TwitterIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
      <ListItemButton
        sx={{
          justifyContent: "center",
        }}
      >
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FacebookIcon />
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation="vertical" flexItem />
    </MyList>
  );
}
