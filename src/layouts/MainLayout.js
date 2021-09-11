import { AppBar, Button, createMuiTheme, Drawer, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import SideDrawer from "../components/SideDrawer";
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import { FaHandsHelping } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
    appbarButtons: {
        marginLeft: 'auto'
    }
}));


function MainLayout() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();

    return (
        <div style={{flexGrow: 1}}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar >
                    <IconButton onClick={function () {
                        setDrawerOpen(!drawerOpen);
                    }} edge="start" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                    {/* <div className={classes.appbarButtons}>
                        <IconButton className={classes.menuButton} onClick={function () {
                            
                        }}>
                            <PersonIcon style={{color: '#EAE0D5'}} />
                        </IconButton>
                        <IconButton className={classes.menuButton}>
                            <BuildIcon style={{color: '#EAE0D5'}} />
                        </IconButton>
                        <IconButton className={classes.menuButton}>
                            <WorkIcon style={{color: '#EAE0D5'}} />
                        </IconButton>
                        <IconButton className={classes.menuButton}>
                            <FaHandsHelping style={{color: '#EAE0D5'}} />
                        </IconButton>
                    </div> */}
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

