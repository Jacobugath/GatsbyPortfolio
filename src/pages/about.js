import React from "react"
import { Link } from "gatsby"
import posed from 'react-pose';


import Layout from "../components/layout"
import SEO from "../components/seo"

import './resume.css'

import logo from '../images/favicon.png'
import me from '../images/IMG_0003.png'



const About = () => (
  <Layout >
    <div id="about">
    <SEO title="About" />
    <div className="flexy">
    <div className="flexy1">

      <div id="me">
      <img className='me' src={me} alt="Jacob Morris"/>
      </div>
      </div>

      <div className="con">

              <p>
            <div className="cm">
                  GETTING TO KNOW ME
            </div>
            Based in Taylorsville, UT, I am passionate about web development. I started creating websites for fun on my own, and soon sought to make it a career. As a recent graduate of the University of Utah’s Coding Bootcamp (2019), I am versatile in a number of languages and libraries, particularly JavaScript and React. With a growth-based mindset and a desire to keep learning, I know how to solve problems patiently by adapting new approaches to specific scenarios.</p>
            <p>
        Web development requires a combination of technical knowledge, communication skills, and creativity. I excel at all of them.</p>

      </div>
    </div>
    </div>
  </Layout>
)

export default About
