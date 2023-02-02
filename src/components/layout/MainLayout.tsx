import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import Topbar from "../common/Topbar";
import SideBar from "../common/SideBar";
import Footer from "../common/Footer";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width : sizeConfigs.sidebar.width,
          flexShrink: 0,
          "@media screen and (max-width:768px)": {
          width: 0,
        },
        }}
      > 
        <SideBar />
      </Box>
      <Box
        component="main" 
        sx={{
          flexGrow: 1,

          width : `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroudColor: colorConfigs.mainBg,
          "@media screen and (max-width:768px)": {
            width: "100%",
          }
        }}   
      >
        <Toolbar />
        <Outlet />
      <Box component="nav"
      sx ={{
        position:"fixed",
        bottom:"0px;",
        "@media screen and (min-width:768px)": {
          display: "none",
        },     
      }}
      >
        <Footer />
      </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;