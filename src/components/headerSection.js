import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeaderSection = ({text, linkTo}) => (
    <Link to={linkTo} className="header-section">
        <span>{text}</span>
    </Link>
)

HeaderSection.propTypes = {
    text: PropTypes.string,
    linkTo: PropTypes.string
}
  
HeaderSection.defaultProps = {
    text: ``,
    linkTo: `/`
}

export default HeaderSection;