import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import "@fontsource/poppins";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#000000",
        color: "#ffffff",
        padding: "100px 10px 100px 10px",
        fontFamily: "poppins"
    }
}))

function Intro() {

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} style={{ display: "flex",justifyContent: "center", padding: "10px"}}>
                <Typography component="div">
                    <Box fontStyle="italic" fontSize="h6.fontSize">
                        <FormatQuoteIcon fontSize='large' />Nothing liberates our greatness like the desire to help, the desire to serve.
                    </Box>
                </Typography>
                <Typography variant="subtitle2">
                    <Box fontStyle="italic">
                    <br /><br />-- Marianne Williamson
                    </Box>
                </Typography>
            </Grid>

            <Grid item xs={12} style={{display: "flex", justifyContent: "center", padding: "10px"}}>
                <Typography variant="h6" style={{ textAlign: "center", fontWeight: "100" }}>
                    I believe in empowering communities and be an impact for good, dedicated to
                    contributing to the community and fostering tech culture.
                </Typography>
            </Grid>
        </Grid>
    );
    
}

export { Intro };