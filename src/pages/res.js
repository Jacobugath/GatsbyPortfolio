import React from "react"
import { Link } from "gatsby"
import posed from 'react-pose';


import Layout from "../components/layout"
import SEO from "../components/seo"

import './res.css'
import phone from '../images/imageedit_8_4069755369.png'
import mail from '../images/imageedit_13_6412281259.png'
import mouse from '../images/imageedit_15_2370668296.png'
import html from '../images/imageedit_17_8110152077.png'
import css from '../images/imageedit_19_8164593826.png'
import js from '../images/imageedit_21_3682257820.png'
import jquery from '../images/imageedit_25_6485069291.png'
import boostrap from '../images/imageedit_30_3725937779.png'
import react from '../images/imageedit_33_6976141840.png'
import git from '../images/imageedit_2_3882449941.png'




const res = () => (
  <Layout >
  <div className="white">
    <div className="flex1">
      <div className="sidebar">
        <div className="header">
        <div className="dot">JM <br></br><hr></hr></div>
        <div className="tittle">
        <h1>JACOB MORRIS</h1>
          <div className="wb">web developer</div>
        </div>


        </div>

        <h1 className='con1'>CONTACT</h1>
        <div className="icons">
        <div className="iflex">
        <div className="dot2">
        <img className='icon' src={phone}/></div> <p>(801) 824 - 5060</p>
        </div>
        <div className="vl"></div>
        <div className="iflex">
        <div className="dot2">
        <img className='icon' src={mail}/></div>
        <p>jacobthomasmorris@gmail.com</p>
        </div>
        <div className="vl"></div>


        <div className="iflex">
        <div className="dot2">
        <img className='icon' src={mouse}/></div>
        <p>https://jacobmorris.netlify.app/</p>
        </div>

        </div>
        <div className="hrflex">
        <hr></hr>
        </div>
        <h1 className='con'> PROFICIENCIES</h1>
        <div className="icons">
          <div className="iflex">
            <div className="dot2">
              <img className='icon' src={html}/>
            </div>
            <p>HTML5 and CSS3</p>
          </div>
          <div className="vl">
          </div>
          <div className="iflex">
            <div className="dot2">
              <img className='icon' src={jquery}/>
            </div>
            <p>JavaScript and jQuery</p>
          </div>
          <div className="vl"></div>
          <div className="iflex">
            <div className="dot2">
              <img className='icon' src={react}/>
            </div>
            <p>React.js and Gatsby</p>
          </div>
          <div className="vl"></div>
          <div className="iflex">
            <div className="dot2">
              <img className='icon' src={boostrap}/>
            </div>
            <p>Responsive Design and Boostrap</p>
          </div>
          <div className="vl"></div>
          <div className="iflex">
          <div className="dot2">
              <img className='icon' src={git}/>
          </div>
              <p>Git and Version Control</p>
              </div>
        </div>
      </div>
      <div className="content">

      </div>



    </div>

  </div>

  </Layout>
)

export default res
