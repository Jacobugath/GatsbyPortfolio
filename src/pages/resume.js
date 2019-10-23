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


const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div className="page">
        <div className="flex">
            <div className="name">Jacob Morris</div>
            <div className="flex"><div className="address">3103 E Lookout Cir
            <br/>
            Eagle Mountain, UT 84005
            </div>
            <img src={logo} alt="logo" id='logo'/>
            </div>
        </div>

        <div className="objective">
            <div className='O'>Objective</div><br/>
            To advance my career with a leading organization that will utilize my foundational web development knowledge<br/>
            while also allowing me to develop further as a professional
        </div>

        <div className="sum">
            Proven talent for aligning project objectives with established and emerging technology paradigms to achieve maximum website impact with minimum resource expenditures. Growth-focused leader with expertise spanning application develop and launch, full stack web development, customer service, problem solving, strategic planning, team leadership, and client relations management. Exceptional web developer with keen interpersonal, communications, and resource allocation expertise.
        </div>

        <div className="pe">PROFESSIONAL EXPERIENCE</div>
        <div className="bstock">B-STOCK SOLUTIONS, SANDY, UT, Sep 2017 to Present<br></br>
        <span>MEDIATOR</span>
        <ul className='jobul'>
            <li>Demonstrated exception customer service representative skill wih led to a rapid promotion, answered the phone and guided callers through any problems they were having with submitting their orders</li>
            <li>Serve as key contributor in collaborating directly with big clients such as Costco and Home Depot.</li>
            <li>Optimized procedures throughout the office by using Keyboard Maestro and Liquid markup to automate repetitive tasks, significantly improving efficiency.</li>

        </ul>
    ALLIANCE BENEFIT GROUP ROCKY MOUNTAIN, SANDY, UT, March 2014 to Sep 2017<br></br>
    <span>CUSTOMER SERVICER MANAGER<br/> </span>
        <ul className='jobul'>
            <li>Achieved department manager status due to establishing success in customer service and dispute processing</li>
            <li>Developed and implemented efficient processes, progressing the company from experiencing over ten missed calls every day to zero missed calls per day; motivated other employees and changed the order in which the phone rang for different employees.</li>
            <li>Participated in key cross functional meeting to discuss goals and future growth for customer accounts.</li>
            <li>Created and implemented competitive customer service program which resulted in improved employee engagement and customer satisfaction scores.</li>
        </ul>
        </div>
        <div className="pe">SAMPLE APPLICATIONS BUILT</div>
        <div className="apps">
            TATU, 2019
            <ul className="jobul">
                <li>Conceptualized, designed, and launched an app with the purpose of assisting people to find tattoo artists who can create any given style of tattoos.</li>
                <li>Application was created using the MERN stack</li>
                <li><a className='joba' href="https://tatuappvw.herokuapp.com">Link to project.</a></li>
            </ul>
            EVENT DASH, 2019
            <ul className="jobul">
                <li>Developed an app built to aid the user schedule and share events with friends and family.</li>
                <li>Developed using Firebase and JavaScript</li>
                <li><a className='joba' href="https:chancy23.github.io/Event-Dash/">Link to project.</a></li>
            </ul>
        </div>
        <div className="pe">EDUCATION</div>
        <div className="ed">
            <u>FULL STACK WEB DEVELOPMENT BOOTCAMP, 2019<br></br></u>
            University of Utah, Sandy, UT<br/>
            An intensive 24-week long boot camp dedicated to designing and building web applications.
        </div>
        <div className="pe">AFFILIATIONS</div>
        <div className="ed">
            <u>Codewars.com</u>
            <ul className="jobul"><li>Regular participant on codewars.com. Codewars is an education community for computer programming. On the platform, software developers train on programming challenges known as kata, able to deal with complex language features and simple algorithms as represented by my rank on the site.</li></ul>
            <br/>
            <u>FreeCodeCamp</u>
            <ul className="jobul"><li>FreeCodeCamp is a non-profit organization that consists of an interactive learning web platform, intended to make learning web development accessible to anyone; earned certificates representing over 1000 hours of studying and coding; certificates include: Front-end Development, Responsive Web Design, and JavaScript Algorithms and Data Structures. </li></ul>
        </div>
        <div className="pe">TECHNICAL SKILLS</div>
        <div className="ed">
            Liquid Markup Templating, Wordpress, PHP, Node.Js, Express, JavaScript, jQuery, React.js, React Native, GIT, GitHub, MongoDB, MySQL, Firebase, HTML, CSS, Bootstrap, Media Queries, APIs, JSON, REST, AJAX, command line, computer science fundamentals
        </div>
        <div className="pe">ADDITIONAL INFORMATION</div>
        <div className="ed">
            <b>Languages:</b> English, Spanish<br/><br/>
            <b>Portfolio:</b> www.jacobthomasmorris.com<br/><br/>
            <b>GitHub:</b> https://github.com/Jacobugath <br/><br/>
            <b>LinkedIN:</b> https://linkedin.com/in/jacobthomasmorris/ <br/><br/>
            <b>Interests:</b> Programming, Reading, Writing Fiction, Singing, Chess, and Hiking
            <br/>
            <br/>

        </div>

    </div>
  </Layout>
)

export default Resume
