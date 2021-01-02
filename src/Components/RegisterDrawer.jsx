import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Button } from "@material-ui/core";
import { SidebarRegister } from "./SidebarRegister";

const drawerWidth = "472px";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  }
}));

export default function RegisterDrawer({setOpenDrawer, open}) {
  const classes = useStyles();
  
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <div>
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <SidebarRegister handleDrawerClose={handleDrawerClose} />
        </Drawer>
      </div>
    </div>
  );
}
