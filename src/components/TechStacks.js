import { Grid, makeStyles } from "@material-ui/core";
import { blue } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(4),
        },
        flexDirection: 'row',
        justifyContent: 'center',
    },
    pink: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[1000],
        width: theme.spacing(20),
        height: theme.spacing(20),
        
    },

}));

export default function TechStacks() {

    const classes = useStyles();

    return (
        <Grid xs={12} container className={classes.root}>
            <Grid item>
                <Avatar className={classes.pink}>
                    <DiBootstrap size={100} />
                </Avatar>
            </Grid>

            <Grid item>
                <Avatar className={classes.pink}>
                    <DiCss3 size={100} />
                </Avatar>
            </Grid>

            <Grid item>
                <Avatar className={classes.pink}>
                    <DiGit size={100} />
                </Avatar>
            </Grid>

            <Grid item>
                <Avatar className={classes.pink}>
                    <DiJsBadge size={100} />
                </Avatar>
            </Grid>

            <Grid item>
                <Avatar className={classes.pink}>
                    <DiJava size={100} />
                </Avatar>
            </Grid>

            <Grid item>
                <Avatar className={classes.pink}>
                    <DiReact size={100} />
                </Avatar>
            </Grid>

            <Grid item>
                <Avatar className={classes.pink}>
                    <DiPython size={100} />
                </Avatar>
            </Grid>

            <Grid item>
                <Avatar className={classes.pink}>
                    <DiHtml5 size={100} />
                </Avatar>
            </Grid>

        </Grid>
    );
}