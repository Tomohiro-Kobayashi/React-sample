import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import colorConfigs from "../../configs/colorConfigs";
import { RouteType } from "../../routes/config"
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
type Props = {
    item: RouteType
    handleDrawerToggle?: () => void
}

const SidebarItemCollapse = (props: Props) => {

  const [open, setOpen] = useState(false);  

  const { appState } = useSelector((state: RootState) => state.appState)

  useEffect(() => {
    if (appState.includes(props.item.state)) {
      setOpen(true)
    }
  }, [appState, props.item]);
  
  return (
    props.item.sidebarProps ? (
        <>
        <ListItemButton
          onClick={() => (setOpen(!open))}
          sx={{
            "&: hover": {
                backgroundColor: colorConfigs.sidebar.hoverBg
            },
            paddingY:"12px",
            paddingX:"24px"
          }}
        >
        <ListItemIcon sx={{
            color: colorConfigs.sidebar.color
        }}>
          {props.item.sidebarProps.icon && props.item.sidebarProps.icon}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={
            <Typography>
                {props.item.sidebarProps.displayText}     
            </Typography>
          }        
        />
        {open ? <ExpandLessOutlinedIcon/> : <ExpandMoreOutlinedIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List>
            {props.item.child?.map((route, index) => (
            route.sidebarProps ? (
                route.child ? (
                <SidebarItemCollapse item={route} key={index} handleDrawerToggle={props.handleDrawerToggle}/>
                ) : (
                <SidebarItem item={route} key={index} handleDrawerToggle={props.handleDrawerToggle}/>
                )
            ) : null
            ))}
        </List>
      </Collapse>
        </>
    ) : null
  )
}

export default SidebarItemCollapse