import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Grid, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import CodeForCauseLogo from "../images/CodeForCauseLogo.jpg";
import CodeChefLogo from "../images/CodeChefLogo.png";
import Carousel1 from '../components/carousel/Carousel1';
import Carousel2 from '../components/carousel/Carousel2';
import GDSCLogo from '../images/GDSC Logo.png';
import Carousel3 from '../components/carousel/Carousel3';
import "typeface-roboto";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        // height: 500,
        background: "#000000",
        color: "#ffffff",
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    subColor: {
        color: '#ffffff'
    },
    subHeader: {
        color: '#ffffff',
        fontWeight: 'light'
    }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Volunteer() {
    const classes = useStyles();

    return (
        <Grid container style={{ minHeight: "100vh", display: "flex", justifyContent: "center", padding: '2%' }}>
            <Grid container style={{ padding: "10px"}}>
                <Grid item xs={12} >
                    <ThemeProvider theme={theme} >
                        <Typography align='center' style={{
                            fontFamily: 'roboto',
                            fontWeight: '700',
                            color: "#000000",
                            paddingTop: "20px",
                            letterSpacing: '5px'
                        }} variant="h2">COMMUNITY</Typography>
                        <Typography align='center' variant="h5" style={{ opacity: '68%' }}>Volunteering</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

            <Grid container style={{
                padding: "10px",
                justifyContent: 'center'
            }}>
                <Grid item style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Card className={classes.root}>
                        <CardHeader
                            style={{ background: "#000000" }}
                            avatar={
                                <Avatar alt="CodeForCause" src={CodeForCauseLogo} />
                            }
                            title={<Typography className={classes.subColor}><b>Code For Cause</b></Typography>}
                            subheader={<Typography variant="subtitle2" className={classes.subHeader}>Campus Ambassador</Typography>}
                        />
                        <CardMedia>
                            <Carousel1 />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="subtitle1">Sep 2020 - Aug 2021</Typography>
                            <Typography variant="body2">
                                Delivered multiple sessions teaching DSA, tools like Git & GitHub and organising monthly empowerment series receiving participation of more than 30 students across all events.                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Card className={classes.root}>
                        <CardHeader
                            style={{ background: "#000000" }}
                            avatar={
                                <Avatar aria-label="CodeChef MUST" src={CodeChefLogo}>
                                    C
                                </Avatar>
                            }
                            title={<Typography className={classes.subColor}><b>CodeChef MUST</b></Typography>}
                            subheader={<Typography variant="subtitle2" className={classes.subHeader}>Executive Member</Typography>}
                        />
                        <CardMedia>
                            <Carousel2 />
                        </CardMedia>

                        <CardContent>
                            <Typography variant="subtitle1">Nov 2020 - Present</Typography>
                            <Typography variant="body2" >
                                Delivered sessions teaching Competitive Programming topics in Code Chef MUST initiatives of
                                ‘Kaizen’ and ‘Incipience’ receiving participation of over 40 students.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Card className={classes.root}>
                        <CardHeader
                            style={{ background: "#000000" }}
                            avatar={
                                <Avatar alt="CodeForCause" src={GDSCLogo} />
                            }
                            title={<Typography className={classes.subColor}><b>Google Developer Student Clubs</b></Typography>}
                            subheader={<Typography variant="subtitle2" className={classes.subHeader}>GDSC Lead</Typography>}
                        />
                        <CardMedia>
                            <Carousel3 />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="subtitle1">July 2020 - Present</Typography>
                            <Typography variant="body2" >
                                GDSC's are university-based community groups for students, intended to be a platform for students to learn and collaborate as they solve problems around
                                them with the help of technology.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>


            </Grid>

        </Grid>
    );
}

export { Volunteer };