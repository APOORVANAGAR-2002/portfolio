import { makeStyles } from "@material-ui/core";
import ProjectBg from "../images/projectBg.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        height: 'auto',
    }
}));

export default function ProjectImage() {

    const classes = useStyles();

    return (<img src={ProjectBg} className={classes.root} alt="profile pic" />);
}