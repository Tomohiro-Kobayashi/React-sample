import { ListItemButton, ListItemIcon } from '@mui/material';
import React, {FC} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';
import { RootState } from '../../redux/store';
import { RouteType } from '../../routes/config';

type Props = {
    item: RouteType
    handleDrawerToggle?: () => void
};

const SidebarItem = (props: Props) => {

  const { appState } = useSelector((state: RootState) => state.appState)

  return (
    props.item.sidebarProps && props.item.path ? (
        <ListItemButton
          onClick={props.handleDrawerToggle}
          component={Link}
          to={props.item.path}
          sx={{
            "&: hover": {
                backgroundColor: colorConfigs.sidebar.hoverBg
            },
            backgroundColor: appState === props.item.state ? colorConfigs.sidebar.activeBg
            : "unset",
            paddingY:"12px",
            paddingX:"24px"
          }}
        >
        <ListItemIcon sx={{
            color: colorConfigs.sidebar.color
        }}>
          {props.item.sidebarProps.icon && props.item.sidebarProps.icon}
        </ListItemIcon>
        {props.item.sidebarProps.displayText}
      </ListItemButton>
    ) : null
  )
}

export default SidebarItem