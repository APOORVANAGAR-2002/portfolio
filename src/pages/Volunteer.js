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
import Carousel from '../components/Carousel';
import { Grid, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        // height: 500,
        background: "#00A8E8",
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
    }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Volunteer() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Grid container style={{ paddingBottom: "50px", justifyContent: "center" }}>
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
                <Grid item xs={12} sm={4} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    C
                                </Avatar>
                            }
                            title="Code For Cause"
                            subheader="Campus Ambassador"
                        />
                        <CardMedia>
                            <Carousel />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" >
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    C
                                </Avatar>
                            }
                            title="CodeChef MUST"
                            subheader="Exwcutive Member"
                        />
                        <CardMedia>
                            <Carousel />
                        </CardMedia>

                        <CardActions disableSpacing>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                // aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography variant="body2" >
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={4} style={{ padding: "10px", display: "flex", justifyContent: "center" }}>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    C
                                </Avatar>
                            }
                            title="Code For Cause"
                            subheader="Campus Ambassador"
                        />
                        <CardMedia>
                            <Carousel />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" >
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Grid>
    );
}

export { Volunteer };