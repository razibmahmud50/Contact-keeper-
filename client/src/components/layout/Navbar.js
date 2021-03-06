import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Navbar = ({title, icon}) => {
    return (
        <div class="navbar bg-primary">
           <h1>
               <i class={icon}/>{title}
            </h1> 
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}
Navbar.propTypes ={
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
}
Navbar.defaultProps ={
    title: 'Contact Keeper',
    icon:'fas fa-id-card-alt'
}
export default Navbar
