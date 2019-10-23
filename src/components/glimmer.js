import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import wg from '../images/Glimmer.png'



export default function MediaCard() {


  return (
    <div  style={{height:'25vw', width: '25vw',backgroundColor: '#20686a'}}>


        <div style={{backgroundColor: '#20686a', color: "white"}}>
          <Typography gutterBottom variant="h5" component="h2">
          <img src={wg} alt="site" style={{width:'100%'}}/>
            Glimmer of Light Studios

          </Typography>
        </div>

      <CardActions style={{backgroundColor: 'white'}}>

          <a className='joba' href='https://glimmeroflightstudios.com/'>View Site</a>


      </CardActions>
    </div>
  );
}
