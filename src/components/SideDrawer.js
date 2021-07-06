import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import WorkIcon from '@material-ui/icons/Work';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import BuildIcon from '@material-ui/icons/Build';
import { useHistory } from "react-router";
import "@fontsource/poppins";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        Width: 260,
        backgroundColor: "#000000",
        color: '#EAE0D5',
        fontFamily: 'Poppins'
    },
}));

export default function SideDrawer({ setDrawerOpen }) {

    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">

                <Typography variant="h5">Navbar</Typography>

                <ListItem button onClick={() => {
                    history.push("/about");
                    setDrawerOpen(false);
                }}>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>


                <ListItem button onClick={() => {
                    history.push("/drafts");
                    setDrawerOpen(false);
                }} >
                    <ListItemIcon>
                        <BuildIcon />
                    </ListItemIcon>
                    <ListItemText primary="Skills" />
                </ListItem>



                <ListItem button onClick={() => {
                    history.push("/login");
                    setDrawerOpen(false);
                }} >
                    <ListItemIcon>
                        <WbIncandescentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItem>



                <ListItem button onClick={() => {
                    history.push("/login");
                    setDrawerOpen(false);
                }} >
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Volunteering" />
                </ListItem>

            </List>
        </div>
    );
}

