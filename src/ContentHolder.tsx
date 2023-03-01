import { styled } from "@mui/system";

const drawerWidth = 220;

const ContentHolder = styled("div")({
  width: "100%",
  marginTop: "5px",
  "@media screen and (min-width: 600px)": {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  }
});

export default ContentHolder;
