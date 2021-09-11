import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import WorkIcon from '@material-ui/icons/Work';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router";
import "@fontsource/poppins";
import { Typography } from "@material-ui/core";
import { FaHandsHelping } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 240,
        height: '97vh',
        backgroundColor: "#000000",
        color: '#EAE0D5',
        fontFamily: 'Poppins',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // overflowY: 'hidden!important',   
    },
    listItem: {
        
    }
}));

export default function SideDrawer({ setDrawerOpen }) {

    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <List component="nav" className={classes.root}>

                {/* <Typography variant="h5">Navbar</Typography> */}

                <ListItem button className={classes.listItem } onClick={() => {
                    history.push("/about");
                    setDrawerOpen(false);
                }}>
                    <ListItemIcon>
                        <AccountCircleIcon style={{ color: '#EAE0D5', padding: '10px' }} />
                    </ListItemIcon>
                    <ListItemText variant="h6" style={{ color: '#EAE0D5' }}>About</ListItemText>
                </ListItem>


                <ListItem button onClick={() => {
                    history.push("/work");
                    setDrawerOpen(false);
                }} >
                    <ListItemIcon>
                        <WorkIcon style={{ color: '#EAE0D5', padding: '10px' }} />
                    </ListItemIcon>
                    <ListItemText variant="h6" style={{ color: '#EAE0D5' }}>Work</ListItemText>
                </ListItem>

                <ListItem button onClick={() => {
                    history.push("/volunteer");
                    setDrawerOpen(false);
                }} >
                    <ListItemIcon>
                        <FaHandsHelping style={{color: '#EAE0D5', padding: '10px', fontSize: '25px'}} />
                    </ListItemIcon>
                    <ListItemText variant="h6" style={{ color: '#EAE0D5' }}>Volunteer</ListItemText>
                </ListItem>

            </List>
        </div>
    );
}

