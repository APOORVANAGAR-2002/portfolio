import { createMuiTheme, Grid, makeStyles, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { DiCss3, DiGit, DiHtml5, DiJavascript1, DiPython, DiReact, DiGithubBadge, DiBootstrap, DiVisualstudio } from "react-icons/di";
import { SiNextDotJs } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import Tilt from 'react-parallax-tilt';
import '@fontsource/comfortaa';
import "@fontsource/montserrat";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    background: '#ffffff',
    padding: "100px 20px",
    overflowX: 'hidden',
  },
  heading: {
    textAlign: 'center',
    fontFamily: "comfortaa",
    color: '#00A8E8',
  },
  icons: {
    border: "2px dashed #000000",
    borderRadius: '20px',
    textAlign: 'center',
    margin: '0.5%',

  }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function Skills() {

  const classes = useStyles();

  return (

    <Grid container style={{ padding: "2%" }}>

      <Grid container style={{ padding: "10px" }}>
        <Grid item xs={12} >
          <ThemeProvider theme={theme} >
            <Typography align='center' style={{
              fontFamily: 'roboto',
              fontWeight: '700',
              color: "#000000",
              paddingTop: "20px"
            }} variant="h2">Skills</Typography>
            <Typography align='center' variant="h5" style={{ opacity: '68%' }}>Known tech-stacks</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container style={{ justifyContent: "center", padding: "4%" }}>

        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <DiPython fontSize="80px" color="#006E69" />
          </Tilt>
        </Grid>


        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <DiReact fontSize="80px" color="#000000" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <DiHtml5 fontSize="80px" color="#006E69" />
          </Tilt>
        </Grid>


        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <DiCss3 fontSize="80px" color="#000000" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <DiJavascript1 fontSize="80px" color="#006E69" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2}className={classes.icons}>
          <Tilt glareEnable>
            <DiGit fontSize="80px" color="#000000" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <DiGithubBadge fontSize="80px" color="#006E69" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <DiBootstrap fontSize="80px" color="#000000" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <SiNextDotJs fontSize="70px" color="#006E69" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <DiVisualstudio fontSize="80px" color="#000000" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} className={classes.icons}>
          <Tilt glareEnable>
            <FiFigma fontSize="80px" color="#006E69" />
          </Tilt>
        </Grid>

      </Grid>

    </Grid>
  )
}

export { Skills };