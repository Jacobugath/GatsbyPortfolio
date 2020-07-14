import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import menu from '../images/imageedit_5_5364596108.png'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass= this.toggleClass.bind(this);
    this.state = {
        active: false,
    };
}
componentDidMount() {
  try {
    this.AniLink = require("gatsby-plugin-transition-link/AniLink");
    this.TransitionLink = require("gatsby-plugin-transition-link");
    this.InternalProvider = require("gatsby-plugin-transition-link/context/InternalProvider");
    this.Component = require("materialize-css");
  } catch (e) {
    console.error(e);
  }
}
toggleClass() {
  const currentState = this.state.active;
  this.setState({ active: !currentState });
};
render(){
return(
  <header className='head'>
    <div className="menu_brand">
          Jacob Morris // <span>Web Developer</span>
    </div>
    <ul className='links'>

        <li><AniLink className='lin' activeClassName="active" paintDrip hex="#000000" to="/">home</AniLink></li>
        <li><Link className='lin' to='/#portfolio' activeclassName='active'>portfolio</Link></li>
        <li> <AniLink className='lin' activeClassName="active" paintDrip hex="#000000" to="/about">
  about </AniLink> </li>
        <li><AniLink className='lin' activeClassName="active" paintDrip hex="#000000" to="/resume">resume</AniLink></li>
        <li > <AniLink className='lin' activeClassName="active" paintDrip hex="#000000" to="/contact">contact</AniLink></li>

    </ul>
    <ul className={this.state.active ? 'menlinks' : 'menlinksoff'}>

        <li><Link onClick={this.toggleClass} className='mlin' to='/' activeClassName="active">home</Link></li>
        <li><Link onClick={this.toggleClass} className='mlin' to='/#portfolio' activeclassName='active'>portfolio</Link></li>
        <li> <Link onClick={this.toggleClass} className='mlin' to='/about' activeClassName="active">about</Link></li>
        <li><Link onClick={this.toggleClass} className='mlin' to='/resume' activeClassName="active">resume</Link></li>
        <li> <Link onClick={this.toggleClass} activeClassName="active" className='lin' to ='/contact' >contact</Link></li>

    </ul>
    <img onClick={this.toggleClass} className={this.state.active ? 'menoff' : 'men'} src={menu} alt="menu"/>
  </header>
)
}
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
