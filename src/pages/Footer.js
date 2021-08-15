import { createMuiTheme, Grid, makeStyles, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import '@fontsource/comfortaa';
import "@fontsource/montserrat";
import SocialMedia from "../components/SocialMedia";
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: "linear-gradient(45deg, rgba(0, 0, 10, 0.60), rgba(10, 0, 0, 0.75)), url(/image/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center"
    },
    heading: {
        textAlign: 'center',
        fontFamily: "comfortaa",
        color: '#ffffff',
    },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Footer() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>

            <Grid container style={{ padding: "10px" }}>
                <Grid item xs={12} >
                    <ThemeProvider theme={theme} >
                        <Typography style={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            color: 'rgba(255, 255, 255)',
                            lineHeight: '60px',
                            letterSpacing: "7px",
                            paddingTop: "50px",
                            marginLeft: "10px",
                            textAlign: 'center'
                        }} variant="h1">SOCIALS</Typography>
                        <Typography style={{
                            fontFamily: 'comfortaa',
                            fontWeight: '500',
                            color: "#ffffff",
                            marginLeft: "10px",
                            textAlign: "center"
                        }} variant="h4">Reach out here..</Typography>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={12} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '80px'
                }}>
                    <SocialMedia />
                </Grid>

            </Grid>

            <Grid container>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <ThemeProvider>
                        <Typography variant="body1" style={{ color: "#ffffff" }}>Website made with <span ><FavoriteIcon style={{ fontSize: "15px" }} /></span> by Apoorva Nagar</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

        </Grid>
    )
}

export { Footer };