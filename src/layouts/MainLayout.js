import { AppBar, Button, Drawer, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
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
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
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
                    }} edge="start" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                    {/* <Typography variant="h6" className={classes.title}>Navbar</Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Work</Button>
                    <Button color="inherit">Volunteer</Button> */}
                </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <SideDrawer setDrawerOpen={setDrawerOpen} />
            </Drawer>
        </div>
    )

}

export { MainLayout };

