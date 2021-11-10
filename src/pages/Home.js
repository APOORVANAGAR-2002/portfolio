import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
// import { About } from "./About";
import '@fontsource/comfortaa';
import { About } from "./About";
import { Skills } from "./Skills";
import { Project } from "./Project";
import { Volunteer } from "./Volunteer";
import { Footer } from "./Footer";
import { Intro } from "./Intro";
import "typeface-roboto";
// import ParallaxComp from "../components/ParallaxComp";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: "linear-gradient(45deg, rgba(0, 0, 10, 0.60), rgba(10, 0, 0, 0.75)), url(/image/bgImage.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflowX: 'hidden',
        paddingBottom: "50px"
    },
    home: {
        padding: "10%"
    },
    heading: {
        fontFamily: "roboto",
        fontWeight: "700",
        color: '#E5E5E5',
    },
    subHeading: {
        fontFamily: "roboto",
        fontWeight: "300",
        color: '#F2EBEB',
    }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function Home() {
    const classes = useStyles();

    return (

        <div id="home">
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.home}>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.heading} variant="h1">Hi there!</Typography>
                        <Typography className={classes.subHeading} variant="h4">I am Apoorva Nagar</Typography>
                    </ThemeProvider>

                </Grid>
            </Grid>
            <Intro />
            {/* <ParallaxComp imgsrc={About}></ParallaxComp> */}
            <About />
            <Skills />
            <Project />
            <Volunteer />
            <Footer />
        </div>




    );

}

export { Home };
