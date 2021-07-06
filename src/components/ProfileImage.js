import { makeStyles } from "@material-ui/core";
import ApoorvaNagar from "../images/ApoorvaNagar.jpeg";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        height: '360px',
        borderRadius: "50%",
    }
}));

export default function ProfileImage() {

    const classes = useStyles();

    return (<img src={ApoorvaNagar} className={classes.root} alt="profile pic" />);
}