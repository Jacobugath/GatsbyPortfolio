import React from "react"
import { Link } from "gatsby"
import posed from 'react-pose';


import Layout from "../components/layout"
import SEO from "../components/seo"

import './resume.css'

import me from '../images/me.png'



const Contact = () => (

  <Layout>

    <SEO title="Contact" />
    <div id="about">
    <div className="paint2"></div>
    <div className="flexy">
    <div className="flexy1">
    <div id="me">
    <img src={me} alt="Jacob Morris" className="me"/>
    </div>
    </div>
    <div className="con">

    <div className="cm">
        CONTACT ME
    </div>

    I'd love to answer any questions you may have, or just say "Hi." The best way to contact me is through email:
    <br/>
    <br/>
    <b>jacobthomasmorris@gmail.com</b>


    </div>
    </div>
</div>
  </Layout>
)

export default Contact
