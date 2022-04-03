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
        // minHeight: '100vh',
        background: '#006E69',
        overflowX: 'hidden!important',
        padding: '2%'
    },
    heading: {
        fontFamily: 'roboto',
        fontWeight: '500',
        color: "#ffffff",
        paddingTop: "20px"
},
    image: {
        width: "200px",
        borderRadius: "15%",
        border: "2px solid #000000"
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

function getStepContent(step = 0) {
    switch (step) {
        case 0:
            return `Mody University of Science and Technology, Laxmangarh, Sikar, Raj.`;
        default:
            return `none`;
    }
}


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function About1() {

    const classes = useStyles();
    const steps = getSteps();

    return (
        <Grid container id="about" className={classes.root} >

            <Grid container style={{ textAlign: "center" }}>
                <Grid item xs={12} >
                    <ThemeProvider theme={theme} >
                        <Typography className={classes.heading} variant="h2">Hey there!!</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

            <Grid container style={{
                display: 'flex',
                flexDirection: 'column',
                // minHeight: "100vh"
            }}>
                <Grid container>
                    <Grid item xs={12} sm={8} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2%",
                    }}>
                        <ThemeProvider theme={theme}>
                            <Typography align="justify" variant="body1" style={{
                                fontFamily: 'roboto',
                                color: '#ffffff'
                            }}>
                                Hi, I am <b>Apoorva Nagar.</b>
                                <br />
                                I am an undergraduate pre-final year student pursuing a bachelor's degree
                                in Computer Science and Engineering. I have an interest in web development,
                                particularly in the front-end. I am familiar with few programming languages
                                and frameworks like C, Python, JavaScript, ReactJs, BootStrap, MaterialUI etc.
                                <br />
                                Apart from these,I also relish exploring other domains such as virtual reality and machine learning.
                                As a part of various student programs, I like empowering tech cultures amongst my
                                peers. I am currently serving as a lead for Google Developer Student Clubs MUST.
                                <br />
                                Besides these, I adore painting as my hobby.
                                <br />
                                <br />
                                <b>Wanna connect? </b>Here are my social media handles.
                                <SocialMedia />
                            </Typography>
                        </ThemeProvider>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{
                        textAlign: "center",
                        padding: "20px",
                    }}>
                        <img src={ApoorvaNagar} className={classes.image} alt="avatar" />
                    </Grid>
                </Grid>
                
                <Grid container style={{ padding: "10px" }}>
                    <Grid item xs={12} >
                        <ThemeProvider theme={theme} >
                            <Typography align="left" style={{
                                fontFamily: 'roboto',
                                fontWeight: '700',
                                color: 'rgba(255, 255, 255, 0.2)',
                                lineHeight: '30px',
                                letterSpacing: "5px",
                                paddingTop: "2%",
                                // marginLeft: "10px"
                            }} variant="h2">ACADEMICS</Typography>

                            <Typography style={{
                                fontFamily: 'roboto',
                                fontWeight: '500',
                                color: "#ffffff",
                                // marginLeft: "10px"
                            }} variant="h4">Education</Typography>
                        </ThemeProvider>
                    </Grid>

                    <Grid item xs={12} >
                        <div className={classes.stepper} >
                            <Stepper orientation="vertical" style={{ background: '#006E69', color: '#ffffff' }}>
                                {steps.map((label, index) => (
                                    <Step key={label} >
                                        <StepLabel icon={<BiRadioCircleMarked />} >
                                            <Typography style={{ color: "#ffffff" }}><b>{label}</b></Typography>
                                        </StepLabel>
                                        <StepContent>
                                            <Typography variant='body1'>{getStepContent(index)}</Typography>
                                            <Typography variant='subtitle2'>2019 - Present</Typography>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                        </div>
                    </Grid>
                </Grid>

            </Grid>

        </Grid>

    )
}

export { About1 };