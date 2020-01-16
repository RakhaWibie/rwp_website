import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderSection from "./headerSection"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#525252`,
      marginBottom: `1.45rem`,
    }}
    className="navbar"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: '80%',
        padding: `1em`,
      }}
    >
      <Link to="/" className="header-logo">
      <div
        style={{
          color: 'white',
          display: 'inline-block'
        }}
      >
        
          rumpun<br/>wargi<br/>pasundan
        
      </div>
      </Link>
      <span
        style={{
          color: 'white',
          float: 'right',
          display: 'inline-block',
          height: '100%'
        }}
      >
        <HeaderSection text="home" linkTo="/"/>
        <HeaderSection text="about us" linkTo="/about-us/"/>
        <HeaderSection text="our mission" linkTo="/our-mission/"/>
        <HeaderSection text="what we do" linkTo="/what-we-do/"/>
        <HeaderSection text="our program" linkTo="/our-program/"/>
        <HeaderSection text="contact us" linkTo="/contact-us/"/>

      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
