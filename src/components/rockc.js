import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import wg from '../images/Rock.png'

const useStyles = makeStyles({
  card: {
    maxWidth: '25%',
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={wg}
          title="Rock Paper Scissors"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Rock Paper Scissors
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A multi-player game played across the web.<br/><br/>

Technologies used: JavaScript, HTML, CSS, FireBase.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

          <a className='joba' href='https://jacobugath.github.io/RPS-Multiplayer/'>GO TO DEPLOYED APP</a>

      </CardActions>
    </Card>
  );
}
