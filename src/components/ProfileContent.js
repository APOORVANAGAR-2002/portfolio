import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SocialMedia from "./SocialMedia";
import "@fontsource/poppins";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Poppins'
    }
}));

export default function ProfileContent() {

    const classes = useStyles();

    return (
        <div>
            <Typography variant="h6" className={classes.root} gutterBottom>
                Hi, I am Apoorva Nagar. A Sophomore pursuing B.Tech in Computer Science. I am an Open-Source Enthusiast and a budding front-end developer.
                <br />Wanna connect? Here are my social media handles.
            </Typography>
            <SocialMedia />
        </div>
    );
}