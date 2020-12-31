import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Button } from "@material-ui/core";
import { SidebarRegister } from "./Component/SidebarRegister";
import { Register } from "./Pages/Register";
import { UserDetailsPage } from "./Pages/UserDetailsPage";

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

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className="App">
      <h1>App</h1> 
       <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
        >
          register
        </Button>
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
      </div> */
    </div>
  );
}
