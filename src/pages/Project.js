import { createMuiTheme, Grid, Link, makeStyles, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import '@fontsource/comfortaa';
import "@fontsource/montserrat";
import "@fontsource/poppins";
import Image from "../images/projectBg.png";
import TicTacToe from "../images/TicTacToe.png";
import SnakeGame from "../images/SnakeGame.png";
import AccessoriesSim from "../images/AccessoriesSim.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: '#000000',
    padding: "20px",
    overflowX: 'hidden',
  },
  images: {
    width: '200px'
  }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Project() {

  const classes = useStyles();

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <Grid container id="projects" style={{ paddingBottom: "50px", background: '#000000', overflowX: "hidden!important" }}>

      <Grid container style={{ padding: "10px" }}>
        <Grid item xs={12} >
          <ThemeProvider theme={theme} >
          <Typography align='center' style={{
              fontFamily: 'roboto',
              fontWeight: '700',
              color: '#ffffff',
              paddingTop: "20px"
            }} variant="h2">Project</Typography>
            <Typography align='center' variant="h5" style={{ opacity: '68%', color: '#ffffff' }}>Sneek-peek to projects</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>


      <Grid container style={{ padding: "30px", fontFamily: "Poppins", color: "#ffffff", }}>
        <Grid item xs={12} sm={4} style={{ textAlign: "center"}} >
          <img src={AccessoriesSim} alt="bg Image" style={{ width: "200px" }} />
        </Grid>
        <Grid item xs={12} sm={8} style={{ padding: "10px"}}>
          <ThemeProvider>
          <Typography variant="overline">HTML5, CSS3, BootStrap4</Typography>
            <Typography variant="h6"><b>Accessories Simulator</b></Typography>
            <Typography variant="body1">
              Worked within a team of two and developed a web-based application using HTML5, CSS3 as front-end
              and flask as back-end. Incorporated technologies like machine learning and computer vision to help in
              real time trial of accessories and props for the user. Responsible for implementing front-end
            </Typography>
            <br />
            <Link href="https://github.com/APOORVANAGAR-2002/Headphones" target="_blank" variant="button" style={{
              color: "#006E69",
              border: "1px solid #006E69",
              textDecoration: "none",
              padding: "10px",
              borderRadius: "5px"
            }}>
              View Project
            </Link>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container direction="row-reverse" style={{ padding: "30px", fontFamily: "Poppins", color: "#ffffff" }}>
        <Grid item xs={12} sm={4} style={{ textAlign: "center",  }} >
          <img src={Image} alt="bg Image" style={{ width: "200px" }} />
        </Grid>
        <Grid item xs={12} sm={8} style={{ padding: "10px",  }}>
          <ThemeProvider>
            <Typography variant="overline">C language</Typography>
            <Typography variant="h6"><b>Cafeteria Management System</b></Typography>
            <Typography variant="body1">
              Worked within a team of three and designed a console-based management system for cafes/restaurants
              that outputs the total user bills. Incorporated file handling to store the customer data. Responsible
              for implementing file-handling.
            </Typography>
            <br />
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container  style={{ padding: "30px", fontFamily: "Poppins", color: "#ffffff", }}>
        <Grid item xs={12} sm={4} style={{ textAlign: "center",  }} >
          <img src={TicTacToe} alt="bg Image" style={{ width: "200px" }} />
        </Grid>
        <Grid item xs={12} sm={8} style={{ padding: "10px", }}>
          <ThemeProvider>
          <Typography variant="overline">ReactJS</Typography>
            <Typography variant="h6"><b>Tic Tac Toe</b></Typography>
            <Typography variant="body1">
              A simple web based 2 player Tic Tac Toe application built using React and Material-UI.
            </Typography>
            <br />
            <Link href="https://apoorvanagar-2002.github.io/game-called-tic-tac-toe/" target="_blank" variant="button" style={{
              color: "#006E69",
              border: "1px solid #006E69",
              textDecoration: "none",
              padding: "10px",
              borderRadius: "5px"
            }}>
              View Project
            </Link>
          </ThemeProvider>
        </Grid>
      </Grid>


      <Grid container  direction="row-reverse" style={{ padding: "30px", fontFamily: "Poppins", color: "#ffffff" }}>
        <Grid item xs={12} sm={4} style={{ textAlign: "center", }} >
          <img src={SnakeGame} alt="bg Image" className={classes.image} style={{ width: "200px" }} />
        </Grid>
        <Grid item xs={12} sm={8} style={{ padding: "10px" }}>
          <ThemeProvider>
          <Typography variant="overline">Java</Typography>
            <Typography variant="h6"><b>Snake Game</b></Typography>
            <Typography variant="body1">
              Worked within a team of five and developed a 2D Snake game using java as a part of the college PBL
              project.
            </Typography>
            <br />
          </ThemeProvider>
        </Grid>
      </Grid>

      </Grid>
  )
}

export { Project };