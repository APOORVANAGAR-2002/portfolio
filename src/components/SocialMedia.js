import { makeStyles } from "@material-ui/core";
import { pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[700],
        width: theme.spacing(5),
        height: theme.spacing(5),
    },

}));

export default function SocialMedia() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar className={classes.pink}>
                <a href="https://twitter.com/nagar248" target="_blank" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <TwitterIcon />
                </a>
            </Avatar>
            <Avatar className={classes.pink}>
                <a href="https://github.com/APOORVANAGAR-2002" target="_blank" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <GitHubIcon />
                </a>
            </Avatar>
            <Avatar className={classes.pink}>
                <a href="https://www.linkedin.com/in/apoorva-nagar-251b9318b/" target="_blank" style={{
                    textDecoration: "none",
                    color: "inherit"
                }}>
                    <LinkedInIcon />
                </a>
            </Avatar>
        </div>
    );
}