import React from "react"
import { Link } from "gatsby"
import posed from 'react-pose';


import Layout from "../components/layout"
import SEO from "../components/seo"

import './resume.css'

import logo from '../images/favicon.png'




const About = () => (
  <Layout>
    <SEO title="About" />

    <div className="cm">
        GETTING TO KNOW ME
    </div>
    <div className="wt">// GETTING TO KNOW ALL ABOUT ME</div>
    <div className="con">
    <p>
    Based in Eagle Mountain, UT, I am passionate about web development and collaborative work. I started creating websites for fun on my own, and soon sought to make it a career. As a recent graduate of the University of Utah’s Coding Bootcamp (2019), I am versatile in a number of languages and libraries, particularly JavaScript and React. With a growth-based mindset and a desire to keep learning, I know how to solve problems patiently by adapting new approaches to specific scenarios.</p>
    <p>
Web development requires a combination of technical knowledge, communication skills, and creativity. I excel at all of them. Strategic leadership and mediation are two of the skills that make me a prized addition to any team.</p>

    </div>
  </Layout>
)

export default About
