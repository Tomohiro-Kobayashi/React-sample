import { Avatar, Drawer, List, Toolbar } from "@mui/material";
import { Stack } from "@mui/system";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import Divider from '@mui/material/Divider';

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width:sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
          boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.1)",
        },
        "@media screen and (max-width:768px)": {
          display:"none"
      }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{
          marginBottom: "20px"
        }}>
          
        <Stack
          sx={{width: "100%"}}
          direction="row"
          justifyContent="center"
        >
          <Avatar src={assets.images.logo} sx={{ width: 45, height: 45 }}/>
        </Stack>
        
        </Toolbar>
        <Divider />
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index}/>
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar;