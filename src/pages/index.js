import React from "react"
import { Link } from "gatsby"
import wg from '../images/wg.png'
import rpg from '../images/rpg.jpg'
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import Header from '../components/header.js'
import SEO from "../components/seo"
import './index.css'
import Card from '../components/card'
import Rpgc from '../components/rpgc'
import Triviac from '../components/triviac'
import Officec from '../components/officec'
import Weatherc from '../components/weatherc'
import Calcc from '../components/calcc'
import Pomoc from '../components/pomoc'
import Ticc from '../components/ticc'
import Simonc from '../components/simonc'
import Rockc from '../components/rockc'
import Eventc from '../components/eventc'
import Liri from '../components/liri'
import Glimmer from '../components/glimmer'
import Monica from '../components/monica'
import glim from '../images/Glimmer.png'
import Mon from '../images/Monica.png'
import Bec from '../images/Becca.png'
import Beard from '../images/Bearded.png'
import Cof from '../images/Coffee.png'
import Tat from '../images/Tatu.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import me from '../images/B&W sample.jpg'
import { useState, useEffect } from 'react';
import glim1 from '../images/Glimmer 1 (3).png'
import mon1 from '../images/Monica 1.png'
import bec1 from '../images/Becca 1 (1).png'
import beard1 from '../images/Bearded 1 (2).png'
import cof1 from '../images/Coffee 1 (2).png'
import tat1 from '../images/Tatu 1 (2).png'





function IndexPage(){
  const [isShown, setIsShown] = useState({isShown: false});
  const [mon, setMon] = useState({mon: false});
  const [bec, setBec] = useState({bec: false});
  const [beard, setBeard] = useState({beard: false});
  const [cof, setCof] = useState({cof: false});
  const [tat, setTat] = useState({tat: false});
  useEffect(() => {
    setIsShown(false);
    setMon(false);
    setBec(false);
    setBeard(false);
    setCof(false);
    setTat(false);
  }, []);

return(
  <Layout>
    <SEO title="Home" />
    <div className="paint"></div>
    <div className="flexcon">
      <div className="hero-image hero-image_container">
      <h1 className="hero-image hero-image_text hero-image_text_heading">Hi, I'm <span className= "hero-image_text_span">Jacob Morris</span>.</h1>
      <p className="hero-image hero-image_text hero-image_text_p">I'm a freelance webdeveloper in Eagle Mountain, Utah.</p>
      <p className="hero-image hero-image_text hero-image_text_p">You'll find my portfolio down below. I love colaborating with brilliant people, so if you're interested in working together you can find my contact information by clicking the link below.</p>


      <Link to="/contact"><button className="hero-image hero-image_text hero-image_text_button">Contact Me</button></Link>

    </div>
      <div className="img"></div>
    </div>
    <a id="portfolio"></a>
    <div className="c1">
        MY RECENT WORK
    </div>


      <div className="container-fluid">


          <div className="flexer">
            <a href="https://glimmeroflightstudios.com/" target='blank'><img onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)} src={isShown? glim: glim1 } alt="" width='350px'/></a>
            <div className="imgTextG">
            <h2  style={{color:'white'}}>Glimmer of Light Studios</h2>
            Website Creation
            </div>
          </div>
          <div className="flexer">
            <a href="https://monicajohanson.netlify.com/" target='blank'><img onMouseEnter={() => setMon(true)}
        onMouseLeave={() => setMon(false)} src={mon? Mon: mon1 } alt="" width='350px%'/></a>
            <div className="imgTextO">
            <h2 style={{color:'white'}}>Monica Johanson Photography</h2>
            Website Creation
          </div>
          </div>
          <div className="flexer">
            <a href='https://rebecca-alexander-piano-studio.com/' target='blank'><img onMouseEnter={() => setBec(true)}
        onMouseLeave={() => setBec(false)} src={bec? Bec: bec1 }  width='350px'/></a>
            <div className="imgTextP">
            <h2 style={{color:'white'}}>Rebecca Alexander Piano Studio</h2>
            Website Creation
          </div></div>
          <div className="flexer">
            <a href="https://beardeddetailer.netlify.com" target='blank'><img onMouseEnter={() => setBeard(true)}
        onMouseLeave={() => setBeard(false)} src={beard? Beard: beard1 }  alt="" width='350px'/></a>
            <div className="imgTextO">
            <h2 style={{color:'white'}}>The Bearded Detailer</h2>
            Website Creation
           </div>
        </div>


        <div className="flexer">
            <a href="https://groundsforcofee.netlify.com/" target='blank'><img onMouseEnter={() => setCof(true)}
        onMouseLeave={() => setCof(false)} src={cof? Cof: cof1 } alt="" width='350px'/></a>
            <div className="imgTextP">
            <h2 style={{color:'white'}}>Grounds For Coffee</h2>
            Website Creation
          </div> </div>
          <div className="flexer">
            <a href="https://tatuappv2.herokuapp.com/" target='blank'><img onMouseEnter={() => setTat(true)}
        onMouseLeave={() => setTat(false)} src={tat? Tat: tat1 } alt="" width='350px'/></a>
            <div className="imgTextG">
            <h2 style={{color:'white'}}>Tatu</h2>
            Website Creation
          </div>
        </div>
        </div>
        <div className="butcontainer">
        <Link to="/contact" className='butcontainer'><button className="hero-image hero-image_text hero-image_text_button_bottom">Contact Me</button></Link>



      </div>



  </Layout>
)
}
export default IndexPage
