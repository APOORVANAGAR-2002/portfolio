import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import WorkIcon from '@material-ui/icons/Work';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router";
import "@fontsource/poppins";
import { FaHandsHelping } from "react-icons/fa";
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 240,
        height: '97vh',
        backgroundColor: "#000000",
        color: '#EAE0D5',
        fontFamily: 'Poppins',
        display: 'flex',
        flexDirection: 'column',
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

                <ListItem button className={classes.listItem } onClick={() => {
                    history.push("/");
                    setDrawerOpen(false);
                }}>
                    <ListItemIcon>
                        <HomeIcon style={{ color: '#EAE0D5', padding: '10px' }} />
                    </ListItemIcon>
                    <ListItemText variant="h6" style={{ color: '#EAE0D5' }}>Home</ListItemText>
                </ListItem>


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
                    history.push("/projects");
                    setDrawerOpen(false);
                }} >
                    <ListItemIcon>
                        <WorkIcon style={{ color: '#EAE0D5', padding: '10px' }} />
                    </ListItemIcon>
                    <ListItemText variant="h6" style={{ color: '#EAE0D5' }}>Projects</ListItemText>
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

