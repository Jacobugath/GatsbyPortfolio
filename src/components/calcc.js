import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import wg from '../images/calc.png'

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
          title="Javascript Calculator"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            JavaScript Calculator
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A simple calculator.<br/><br/>

Technologies used: JavaScript, HTML, CSS.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

          <a className='joba' href='https://codepen.io/jacob-t-morris/full/GdVpbg'>GO TO CODEPEN</a>

      </CardActions>
    </Card>
  );
}
