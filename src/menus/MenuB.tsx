import { Folder, NoteAdd } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";

export default function Menu() { // TODO: Refactor these menus to use the same component, fix deprecated list item attribs
  const location = useLocation();
  const path = location.pathname;
  return (
    <List>
      <ListItem
        component={Link}
        to="/create-note"
        button
        key={"1"}
        selected={"/create-note" === path}
      >
        <ListItemIcon>
          <NoteAdd />
        </ListItemIcon>
        <ListItemText primary={"New Note"} />
      </ListItem>

      <ListItem
        component={Link}
        to="/view-notes"
        button
        key={"2"}
        selected={"/view-notes" === path}
      >
        <ListItemIcon>
          <Folder />
        </ListItemIcon>
        <ListItemText primary={"View Notes"} />
      </ListItem>
    </List>
  );
}
