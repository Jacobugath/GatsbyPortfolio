import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import wg from '../images/liri.png'

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
          title="Liri Bot"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Liri Bot
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A command line node app that takes in parameters and gives you back data..<br/><br/>

Technologies used: Node.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

          <a className='joba' href='https://github.com/Jacobugath/liri-node-app'>GO TO DEPLOYED Code</a>

      </CardActions>
    </Card>
  );
}
