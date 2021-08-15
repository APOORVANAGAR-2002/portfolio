import React, { useState } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Carousel from '../components/carousel/Carousel1';
import { Grid, createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import CodeForCauseLogo from "../images/CodeForCauseLogo.jpg";
import CodeChefLogo from "../images/CodeChefLogo.png";
import Carousel1 from '../components/carousel/Carousel1';
import Carousel2 from '../components/carousel/Carousel2';


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
    avatar: {
        backgroundColor: red[500],
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
    }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Volunteer() {
    const classes = useStyles();

    return (
        <Grid container style={{ minHeight: "100vh", display: "flex", justifyContent: "center" }}>
            <Grid container style={{ padding: "10px" }}>
                <Grid item xs={12} >
                    <ThemeProvider theme={theme} >
                        <Typography style={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: '900',
                            color: 'rgba(0, 0, 0, 0.2)',
                            lineHeight: '1px',
                            paddingTop: "50px",
                            marginLeft: "10px",
                            textAlign: 'center'
                        }} variant="h2">COMMUNITY</Typography>
                        <Typography style={{
                            fontFamily: 'comfortaa',
                            fontWeight: '500',
                            color: "#000000",
                            marginLeft: "10px",
                            textAlign: "center"
                        }} variant="h4">Volunteering</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

            <Grid container style={{ padding: "10px", }}>
                <Grid item xs={12} sm={6} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Card className={classes.root}>
                        <CardHeader
                            style={{ background: "#000000" }}
                            avatar={
                                <Avatar alt="CodeForCause" src={CodeForCauseLogo} />
                            }
                            title={<Typography className={classes.subColor}><b>Code For Cause</b></Typography>}
                            subheader={<Typography className={classes.subColor}>Campus Ambassador</Typography>}
                        />
                        <CardMedia>
                            <Carousel1 />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="subtitle1">Sep 2020 - Aug 2021</Typography>
                            <Typography variant="body2" >
                                It has been a quite few months since being a part of this community. We routinely
                                conduct sessions and webinars for fellow college mates.
                            </Typography>
                        </CardContent>
                        {/* <CardActions disableSpacing >
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded1,
                                })}
                                onClick={() => {
                                    set
                                }}
                                aria-expanded={expanded1}
                                aria-label="show more"
                                style={{ margin: "auto" }}

                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>

                        <Collapse in={expanded1} timeout="auto" unmountOnExit>
                            <CardContent style={{ color: "#ffffff", background: "#000000" }}>
                                <Typography variant="body2" >
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                        </Collapse> */}

                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Card className={classes.root}>
                        <CardHeader
                            style={{ background: "#000000" }}
                            avatar={
                                <Avatar aria-label="CodeChef MUST" src={CodeChefLogo}>
                                    C
                                </Avatar>
                            }
                            title={<Typography className={classes.subColor}><b>CodeChef MUST</b></Typography>}
                            subheader={<Typography className={classes.subColor}>Executive Member</Typography>}
                        />
                        <CardMedia>
                            <Carousel2 />
                        </CardMedia>

                        <CardContent>
                            <Typography variant="subtitle1">Nov 2020 - Present</Typography>
                            <Typography variant="body2" >
                                It has been a quite few months since being a part of this community. We routinely
                                conduct sessions and webinars for fellow college mates.
                            </Typography>
                        </CardContent>

                        {/* <CardActions disableSpacing >
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded2,
                                })}
                                onClick={handleExpandClick2}
                                aria-expanded={expanded2}
                                aria-label="show more"
                                style={{ margin: "auto" }}

                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>

                        <Collapse in={expanded2} timeout="auto" unmountOnExit>
                            <CardContent style={{ color: "#ffffff", background: "#000000" }}>
                                <Typography variant="body2" >
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                        </Collapse> */}
                    </Card>
                </Grid>


            </Grid>

        </Grid>
    );
}

export { Volunteer };