import React from "react"
import { Link } from "gatsby"
import posed from 'react-pose';


import Layout from "../components/layout"
import SEO from "../components/seo"

import './resume.css'

import logo from '../images/favicon.png'

const Box = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});


const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="cm">
        CONTACT ME
    </div>
    <div className="wt">// LET'S WORK TOGETHER</div>
    <div className="con">I'd love to answer any questions you may have, or just say "Hi." The best way to contact me is through email:
    <br/>
    <br/>
    <b>jacobthomasmorris@gmail.com</b>


    </div>
  </Layout>
)

export default Contact
