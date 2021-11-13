import { Grid, makeStyles, Typography } from "@material-ui/core";
import "@fontsource/poppins";
import { FaQuoteLeft } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "#000000",
        padding: "2rem",
        fontFamily: "poppins",
    }
}))

function Intro() {

    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            {/* <Grid item xs={12} style={{ display: "flex",justifyContent: "center", padding: "10px"}}>
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
 */}

            <FaQuoteLeft fontSize='30px' />
            <Grid item xs={12} style={{
                display: "flex", justifyContent: "center", padding: "10px"
            }}>
                <Typography variant="h5" align="center" style={{ opacity: '68%' }}>
                    I believe in empowering communities and be an impact for good, dedicated to
                    contributing to the community and fostering tech culture.
                </Typography>
            </Grid>
        </Grid>
    );

}

export { Intro };