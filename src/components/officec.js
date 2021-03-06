import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import wg from '../images/office.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: '25%',
  },
  media: {
    height: 135,
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
          title="Office Giphy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Office Giphy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          An app designed to help find Gifs of my favorite TV show.<br/><br/>

Technologies used: JavaScript, HTML, CSS, REST API's.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

          <a className='joba' href='https://jacobugath.github.io/Giphy/'>Go TO DEPLOYED APP</a>
      </CardActions>
    </Card>
  );
}
