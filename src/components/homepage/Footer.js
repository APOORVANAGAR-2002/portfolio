import { createMuiTheme, Grid, makeStyles, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
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
        color: '#ffffff'
    }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Footer() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>

            <Grid container style={{
                padding: "2%",
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Grid item xs={12} className={classes.image}>
                    <img src={Aavatar} width='140px' alt='avatar' />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.icons}>
                    <GitHubIcon />
                    <Typography variant='body2' className={classes.text}>@APOORVANAGAR-2002</Typography>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.icons}>
                    <TwitterIcon />
                    <Typography variant='body2' className={classes.text}>@nagar248</Typography>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.icons}>
                    <LinkedInIcon />
                    <Typography variant='body2' className={classes.text}>Apoorva Nagar</Typography>
                </Grid>
                <Grid item xs={12} sm={3} className={classes.icons}>
                    <SiGmail />
                    <Typography variant='body2' className={classes.text}>apoorvanagar2002@gmail.com</Typography>
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