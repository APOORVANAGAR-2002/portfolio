import { makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ProjectBg from "../images/projectBg.png";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 280,
        borderRadius: "10px",
        padding: "10px"
    }
}));

export default function VolunteerCard() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="../images/projectBg.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Code For Cause
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                
            </CardActions> */}
        </Card>
    );
}