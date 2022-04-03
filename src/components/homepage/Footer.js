import {  Grid, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import '@fontsource/comfortaa';
import "@fontsource/montserrat";
import Aavatar from '../../images/aavatar.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { SiGmail } from "react-icons/si";
import "typeface-roboto";



const useStyles = makeStyles((theme) => ({
    root: {
        background: '#006E69',
        color: '#CFCECE'
    },
    heading: {
        textAlign: 'center',
        fontFamily: "comfortaa",
        color: '#ffffff',
    },
    icons: {
        textAlign: 'center',
        padding: '1%',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1%'
    },
    text: {
        fontWeight: '200',
        color: '#ffffff',
        textDecoration: 'none',
        margin: '1rem'
    },
    links: {
        display: 'flex',
        justifyContent: 'left',
    },
    avatar: {
        textAlign: 'center'
    }
    
}));

function Footer() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>

            <Grid container style={{
                padding: "2%",
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Grid item xs={12} sm={6} className={classes.avatar}>
                    <img src={Aavatar} width='180px' alt='avatar' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.links}>
                        <GitHubIcon style={{ padding: '1rem' }} />
                        <a href="https://github.com/APOORVANAGAR-2002" target="_blank" rel="noreferrer" className={classes.text}>
                            @APOORVANAGAR-2002
                        </a>
                    </div>
                    <div className={classes.links}>
                        <TwitterIcon style={{ padding: '1rem' }} />
                        <a href="https://twitter.com/nagar248" target="_blank" rel="noreferrer" className={classes.text}>
                            @nagar248
                        </a>
                    </div>
                    <div className={classes.links}>
                        <LinkedInIcon style={{ padding: '1rem' }} />
                        <a href="https://www.linkedin.com/in/apoorva-nagar-251b9318b/" target="_blank" rel="noreferrer" className={classes.text}>
                            Apoorva Nagar
                        </a>
                    </div>
                    <div className={classes.links}>
                        <SiGmail style={{ padding: '1rem' }} />
                        <a href="mailto:apoorvanagar2002@gmail.com" target="_blank" rel="noreferrer" className={classes.text}>
                            apoorvanagar2002@gmail.com
                        </a>
                    </div>

                </Grid>
            </Grid>

            <Grid container style={{}}>
                <Grid item xs={12} style={{ textAlign: "center", background: '#02423F', padding: '1%' }}>
                    <ThemeProvider>
                        <Typography variant="body2" style={{ color: "#ffffff", fontFamily: 'roboto' }}>Website made with <span ><FavoriteIcon style={{ fontSize: "15px" }} /></span> by Apoorva Nagar</Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>

        </Grid>
    )
}

export { Footer };