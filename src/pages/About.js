import { Grid, makeStyles, Step, StepContent, StepLabel, Stepper, Typography } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/comfortaa';
import "@fontsource/montserrat";
import "@fontsource/poppins";
import SocialMedia from "../components/SocialMedia";
import ApoorvaNagar from "../images/Apoorva Nagar.png";
import { BiRadioCircleMarked } from "react-icons/bi";
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#E6D4E6',
        overflowX: 'hidden!important',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // minHeight: '100vh'
    },
    image: {
        // width: "250px",
        // borderRadius: "50%",
        // border: "10px solid #000000"
        width: "200px",
        borderRadius: "30px",
    },
    heading: {
        fontFamily: 'roboto',
        fontWeight: '500',
        color: "#006E69",
        paddingTop: "20px"
    },
    subHeading: {
        color: '#000000',
        opacity: '68%'
    },
    imageBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    stepper: {
        width: "100%",

    }
}));

function getSteps() {
    return ["Bachelor's of Computer Science and Engineering ", " "];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Mody University of Science and Technology, Laxmangarh, Sikar, Raj.`;
    }
}


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function About() {

    const classes = useStyles();
    const steps = getSteps();

    return (

        <Grid container id="about" className={classes.root} >
            {/* <Grid container style={{ textAlign: "center" }}>
                <Grid item xs={12} >
                    <ThemeProvider theme={theme} >
                        <Typography style={{
                            fontFamily: 'roboto',
                            fontWeight: '700',
                            color: "#006E69",
                            paddingTop: "20px"
                        }} variant="h2">It’s me</Typography>
                        <Typography variant="h5" style={{opacity: '68%'}}>Sub-heading</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
 */}
            <Grid container style={{
                    // display: 'flex',
                    // flexDirection: 'column',
                    // // minHeight: "100vh"
                padding: '5%'
            }}>
                <Grid item xs={12} sm={5} style={{
                        // padding: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        // padding: "2%",

                    }}>
                        <img src={ApoorvaNagar} className={classes.image} alt="avatar" />
                    </Grid>

                <Grid item xs={12} sm={7} >
                    <ThemeProvider theme={theme} >
                        <Typography style={{
                            fontFamily: 'roboto',
                            fontWeight: '700',
                            color: "#006E69",
                            paddingTop: "20px"
                        }} variant="h2">It’s me</Typography>
                            <Typography variant="h5" style={{ opacity: '68%' }}>Sub-heading</Typography>
                            <br />
                            <Typography variant="body1" style={{
                                fontFamily: 'roboto',
                                // display: 'flex',
                                // flexDirection: 'column',
                                // justifyContent: 'flex-start'
                            }}>
                                Hi, I am Apoorva Nagar.
                                <br />
                                I am an undergraduate pre-final year student pursuing a bachelor's degree
                                in Computer Science and Engineering. I have an interest in web development,
                                particularly in the front-end. I am familiar with few programming languages
                                and frameworks like C, Python, JavaScript, BootStrap etc.
                                <br />
                                Wanna connect? Here are my social media handles.
                                <SocialMedia />
                            </Typography>

                    </ThemeProvider>
                </Grid>

            
            </Grid>

        </Grid>

    )
}

export { About };