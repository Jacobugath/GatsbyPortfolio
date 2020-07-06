import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import './header.css'
const Header = ({ siteTitle }) => (
  <header className='head'>
    <div className="menu_brand">
          Jacob Morris // <span>Web Developer</span>
    </div>
    <ul className='links'>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/#portfolio'>portfolio</Link></li>
        <li> <Link  to='/about'>about</Link></li>
        <li><Link to='/resume'>resume</Link></li>
        <li> <Link to ='/contact'>contact </Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
