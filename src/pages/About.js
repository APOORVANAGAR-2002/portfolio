import { Grid, makeStyles, Typography } from "@material-ui/core";
import ProfileImage from "../components/ProfileImage";
import ProfileContent from "../components/ProfileContent";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import '@fontsource/comfortaa';
import "@fontsource/montserrat";
import "@fontsource/poppins";
import SocialMedia from "../components/SocialMedia";
import ApoorvaNagar from "../images/Apoorva Nagar.png";
import { Skills } from "./Skills";

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#00A8E8',
        overflowX: 'hidden!important',
        paddingBottom: "50px"
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
    }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function About() {

    const classes = useStyles();

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
                                fontStyle: 'normal',
                                fontWeight: '900',
                                color: 'rgba(255, 255, 255, 0.2)',
                                lineHeight: '1px',
                                paddingTop: "50px",
                                marginLeft: "10px"
                            }} variant="h1">ABOUT</Typography>

                        <Typography style={{
                            fontFamily: 'comfortaa',
                            fontWeight: '500',
                            color: "#ffffff",
                            marginLeft: "10px"
                        }} variant="h3">Hi, It’s me :)</Typography>
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

                        <Typography  variant="body1" style={{ fontFamily: 'Poppins' }}>
                            Hi, I am <b>Apoorva Nagar.</b>
                            <br />
                            I am an undergraduate Sophomore pursuing bachelor's in Computer Science.
                            I am an Open-Source Enthusiast and a budding front-end developer.
                            <br />
                            I am a part of few communities such as:
                            <br />
                            <ul>
                                <li>Campus ambassador for CodeForCause</li>
                                <li>Executive team member for CodeChef college chapter MUST.</li>
                            </ul>
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
        </Grid>

    )
}

export { About };