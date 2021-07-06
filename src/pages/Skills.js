import { createMuiTheme, Grid, makeStyles, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { DiCss3, DiGit, DiHtml5, DiJavascript1, DiPython, DiReact, DiGithubBadge } from "react-icons/di";
import TechStacks from '../components/TechStacks';
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
  // icons: {
  //   border: "2px solid #000000"
  // }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function Skills() {

  const classes = useStyles();

  return (
    // <Grid container spacing={5} className={classes.root}>

    //     <Grid item xs={12} className={classes.heading}>
    //         <Typography style={{
    //             fontFamily: 'Montserrat',
    //             fontStyle: 'normal',
    //             fontWeight: '900',
    //             color: 'rgba(0, 168, 232, 0.2)',
    //             lineHeight: '1px'
    //         }} variant="h1">SKILLS</Typography>
    //         <Typography style={{
    //             fontFamily: 'comfortaa',
    //             fontWeight: '500'
    //         }} variant="h3">Known tech-stacks</Typography>
    //     </Grid>
    //     <Grid item>
    //         <TechStacks />
    //     </Grid>

    // </Grid>

    <Grid container style={{ justifyContent: "center", paddingBottom: "50px", background:"#000000" }}>

      <Grid container style={{ padding: "10px" }}>
        <Grid item xs={12} >
          <ThemeProvider theme={theme} >
            <Typography style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: '900',
              color: 'rgba(0, 168, 232, 0.2)',
              lineHeight: '1px',
              paddingTop: "50px",
              marginLeft: "10px",
              textAlign: 'center'
            }} variant="h1">SKILLS</Typography>
            <Typography style={{
              fontFamily: 'comfortaa',
              fontWeight: '500',
              color: "#00A8E8",
              marginLeft: "10px",
              textAlign: "center"
            }} variant="h3">Known tech-stacks</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container style={{ justifyContent: "center", textAlign: "center", padding: "10px" }}>

        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiPython fontSize="80px" color="#00A8E8" />
          </Tilt>

        </Grid>


        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiReact fontSize="80px" color="#ffffff"/>
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiHtml5 fontSize="80px" color="#00A8E8" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiCss3 fontSize="80px" color="#ffffff" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiJavascript1 fontSize="80px" color="#00A8E8" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiGit fontSize="80px" color="#ffffff" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiGithubBadge fontSize="80px" color="#00A8E8" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiGithubBadge fontSize="80px" color="#ffffff" />
          </Tilt>
        </Grid>

        <Grid item xs={4} sm={2} style={{
        }}>
          <Tilt glareEnable>
            <DiGithubBadge fontSize="80px" color="#00A8E8" />
          </Tilt>
        </Grid>

      </Grid>

    </Grid>
  )
}

export { Skills };