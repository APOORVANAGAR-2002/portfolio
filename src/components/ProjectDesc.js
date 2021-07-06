import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "@fontsource/poppins";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "20px"
    },
    desc: {
        fontFamily: 'Poppins',
        color: "#ffffff"
    },
    button: {
        color: "#ffffff"
    }
}));

export default function ProjectDesc() {

    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
            <Typography variant="subtitle" className={classes.desc} gutterBottom>Illustration</Typography>  
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6" className={classes.desc}><b>Project Name</b></Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body1" className={classes.desc}>Even the all-powerful Pointing has no control about the blind texts
                it is an almost unorthographic life One day however a small line of blind text.
            </Typography>
            </Grid>
            <Button variant="outlined" color="primary">
                View Project
            </Button>
        </Grid>

    );
}