import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import Topbar from "../common/Topbar";
import SideBar from "../common/SideBar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width : sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >


        
        <SideBar />
      </Box>
      <Box
        component="main" 
        sx={{
          flexGrow: 1,
          p :3,
          width : `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroudColor: colorConfigs.mainBg
        }}   
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;