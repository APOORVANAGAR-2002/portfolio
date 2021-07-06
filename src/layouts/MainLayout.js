import { AppBar, Drawer, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import SideDrawer from "../components/SideDrawer";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: 'transparent',
        boxShadow: "none"
    },
    menuIcon: {
        color: "#EAE0D5"
    }
}));

function MainLayout() {

  const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar >
                    <IconButton onClick={function () {
                        setDrawerOpen(!drawerOpen);
                    }} edge="start" aria-label="menu">
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <SideDrawer setDrawerOpen={setDrawerOpen} />
            </Drawer>
        </div>
    )

}

export { MainLayout };

