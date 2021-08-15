import { Button, Grid, makeStyles, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@material-ui/core";
import ProfileImage from "../components/ProfileImage";
import ProfileContent from "../components/ProfileContent";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/comfortaa';
import "@fontsource/montserrat";
import "@fontsource/poppins";
import SocialMedia from "../components/SocialMedia";
import ApoorvaNagar from "../images/Apoorva Nagar.png";
import { Skills } from "./Skills";
import { useState } from "react";
import { BiRadioCircleMarked } from "react-icons/bi";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        background: '#00A8E8',
        overflowX: 'hidden!important',
        // paddingBottom: "50px"
    },
    heading: {
        textAlign: 'center',
        fontFamily: "comfortaa",
        color: '#ffffff',
    },
    image: {
        // width: "250px",
        // borderRadius: "50%",
        // border: "10px solid #000000"

        width: "200px",
        borderRadius: "50%",
        border: "5px solid #000000"
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

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    return (
        // <Grid container spacing={5} >
        //     <Grid container className={classes.root}>

        //         <Grid item xs={12} style={{textAlign: "center", paddingTop:"80px"}}>
        //             <ThemeProvider theme={theme}>
        //                 <Typography style={{
        //                     fontFamily: 'Montserrat',
        //                     fontStyle: 'normal',
        //                     fontWeight: '900',
        //                     color: 'rgba(255, 255, 255, 0.2)',
        //                     lineHeight: '1px',
        //                 }} variant="h1">ABOUT</Typography>
        //                 <Typography style={{
        //                     fontFamily: 'comfortaa',
        //                     fontWeight: '500',
        //                     color: "#ffffff"
        //                 }} variant="h3">Hi, It’s me :)</Typography>
        //             </ThemeProvider>
        //         </Grid>

        //         {/* <Grid item sm={4} xs={12}>
        //             <img src={ApoorvaNagar} className={classes.image} alt="profile pic" />
        //         </Grid>

        //         <Grid item sm={8} xs={12}>
        //             <ThemeProvider theme={theme}>


        //                 <Typography variant="body1" style={{ fontFamily: 'Poppins' }} >
        //                     Hi, I am Apoorva Nagar. A Sophomore pursuing B.Tech in Computer Science. I am an Open-Source Enthusiast and a budding front-end developer.
        //                     <br />Wanna connect? Here are my social media handles.
        //                 </Typography>
        //             </ThemeProvider>
        //             <SocialMedia />
        //         </Grid> */}


        //     </Grid>
        // </Grid>

        <Grid conatiner id="about" className={classes.root} >

            <Grid container style={{ padding: "10px", textAlign: "center" }}>
                <Grid item xs={12} >
                    <ThemeProvider theme={theme} >
                        <Typography style={{
                            fontFamily: 'Montserrat',
                            // fontStyle: 'normal',
                            fontWeight: '900',
                            color: 'rgba(255, 255, 255)',
                            lineHeight: '60px',
                            paddingTop: "50px",
                            letterSpacing: "15px"
                            // marginLeft: "10px"
                            // color: "#ffffff",
                            // textShadow:
                            //     "3px 3px 0 #000000",
                            // textShadow: "-1px -1px 0 rgba(255, 255, 255, 0.1), 1px -1px 0 rgba(255, 255, 255, 0.1)"
                        }} variant="h1">ABOUT</Typography>

                        <Typography style={{
                            fontFamily: 'comfortaa',
                            fontWeight: '500',
                            color: "#ffffff",
                            marginLeft: "10px",
                            WebkitTextStroke: "0.5px #ffffff",
                        }} variant="h4">Hi, It’s me :)</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>


            <Grid container >
                <Grid item xs={12} sm={8} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    textAlign: "left"
                }}>
                    <ThemeProvider theme={theme}>

                        <Typography variant="body2" style={{ fontFamily: 'Poppins' }}>
                            Hi, I am <b>Apoorva Nagar.</b>
                            <br />
                            I am an undergraduate pre-final year student pursuing a bachelor's degree
                            in Computer Science and Engineering. I have an interest in web development,
                            particularly in the front-end. I am familiar with few programming languages
                            and frameworks like C, Python, JavaScript, BootStrap etc.
                            <br />
                            Apart from these,I also relish exploring other domains such as virtual reality and machine learning.
                            As a part of various student programs, I like empowering tech cultures amongst my
                            peers.
                            <br />
                            Besides these, I adore painting as my hobby.
                            <br />
                            {/* <ul>
                                <li>Campus ambassador for CodeForCause</li>
                                <li>Executive team member for CodeChef college chapter MUST.</li>
                            </ul> */}
                            <br />
                            <b>Wanna connect? </b>Here are my social media handles.
                            <SocialMedia />
                        </Typography>
                    </ThemeProvider>
                </Grid>


                <Grid item xs={12} sm={4} style={{
                    // padding: "30px",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center"
                    textAlign: "center",
                    padding: "40px",

                }}>
                    <img src={ApoorvaNagar} className={classes.image} alt="avatar" />
                </Grid>
            </Grid>

            <Grid container style={{ padding: "10px" }}>
                <Grid item xs={12} >
                    <ThemeProvider theme={theme} >
                        <Typography style={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            color: 'rgba(255, 255, 255, 0.2)',
                            lineHeight: '30px',
                            letterSpacing: "5px",
                            paddingTop: "50px",
                            marginLeft: "10px"
                        }} variant="h2">ACADEMICS</Typography>

                        <Typography style={{
                            fontFamily: 'comfortaa',
                            fontWeight: '500',
                            color: "#ffffff",
                            marginLeft: "10px"
                        }} variant="h4">Education</Typography>
                    </ThemeProvider>
                </Grid>

                <Grid item xs={12} >
                    <div className={classes.stepper} >
                        <Stepper orientation="vertical" style={{ background: '#00A8E8', color: '#ffffff' }}>
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

    )
}

export { About };