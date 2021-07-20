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
import ParallaxComp from "../components/ParallaxComp";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: "linear-gradient(45deg, rgba(0, 0, 10, 0.60), rgba(10, 0, 0, 0.75)), url(/image/background.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflowX: 'hidden',
        paddingBottom: "50px"
    },
    home: {
        padding: "20px"
    },
    heading: {
        fontFamily: "comfortaa",
        fontWeight: "500",
        color: '#EAE0D5',
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
                        <Typography className={classes.heading} variant="h5">Hi there..<span className="wave">👋🏻</span></Typography>
                        <Typography className={classes.heading} variant="h2">I'm Apoorva Nagar!!</Typography>
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
