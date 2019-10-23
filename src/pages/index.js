import React from "react"
import { Link } from "gatsby"
import wg from '../images/wg.png'
import rpg from '../images/rpg.jpg'
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
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








const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero-image_mobile"></div>
    <div className="hero-image hero-image_container">
      <h1 className="hero-image hero-image_text hero-image_text_heading">Hi, I'm <span className= "hero-image_text_span">Jacob Morris</span>.</h1>
      <p className="hero-image hero-image_text hero-image_text_p">I'm a freelance webdeveloper in Eagle Mountain, Utah. I specialize in <span className= "hero-image_text_span">JavaScript</span> and <span className= "hero-image_text_span">web design</span>, but have experience ranging from database creation to code migration.</p>
      <p className="hero-image hero-image_text hero-image_text_p">You'll find my portfolio down below. I love colaborating with brilliant people, so if you're interested in working together you can find my contact information by clicking the link below.</p>


      <Link to="/contact"><button className="hero-image hero-image_text hero-image_text_button">Contact Me</button></Link>
    </div>
    <a name="portfolio"></a>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <a href="https://glimmeroflightstudios.com/" target='blank'><img src={glim} alt="" width='100%'/></a>
            <h2 style={{color:'white'}}>Glimmer of Light Studios</h2>
          </div>
          <div className="col-lg-3">
            <a href="https://monicajohanson.netlify.com/" target='blank'><img src={Mon} alt="" width='100%'/></a>
            <h2 style={{color:'white'}}>Monica Johanson Photography</h2>
          </div>
          <div className="col-lg-3">
            <a href='https://rebecca-alexander-piano-studio.com/' target='blank'><img src={Bec} alt="" width='100%'/></a>
            <h2 style={{color:'white'}}>Rebecca Alexander Piano Studio</h2>
          </div>
          <div className="col-lg-3">
            <a href="https://beardeddetailer.netlify.com" target='blank'><img src={Beard} alt="" width='100%'/></a>
            <h2 style={{color:'white'}}>The Bearded Detailer</h2>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-3">
            <a href="https://groundsforcofee.netlify.com/" target='blank'><img src={Cof} alt="" width='100%'/></a>
            <h2 style={{color:'white'}}>Grounds For Coffee</h2>
          </div>
          <div className="col-lg-3">
            <a href="https://tatuappv2.herokuapp.com/" target='blank'><img src={Tat} alt="" width='100%'/></a>
            <h2 style={{color:'white'}}>Tatu</h2>
          </div>
        </div>


      </div>



  </Layout>
)

export default IndexPage
