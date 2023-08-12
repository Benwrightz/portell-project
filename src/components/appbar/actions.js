import { ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

export default function Actions() {
  return (
    <MyList type="row" sx={{ justifyContent: "flex-end" }}>
      <Link to="https://www.instagram.com/portellpl/" target="_blank">
        <ListItemButton>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <InstagramIcon />
          </ListItemIcon>
        </ListItemButton>
      </Link>
    </MyList>
  );
}
