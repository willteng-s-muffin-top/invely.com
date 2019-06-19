import React from 'react';
import { Link } from 'gatsby';

// TODO: Need to change logo
import logo from '../img/logo.svg'; 


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  // toggleHamburger = () => {
  //   // toggle the active boolean in the state
  //   this.setState(
  //     {
  //       active: !this.state.active,
  //     },
  //     // after state has been updated,
  //     () => {
  //       // set the class in state for the navbar accordingly
  //       this.state.active
  //         ? this.setState({
  //             navBarActiveClass: 'is-active',
  //           })
  //         : this.setState({
  //             navBarActiveClass: '',
  //           })
  //     }
  //   )
  // }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        {/* The Logo goes here */}
        <Link to="/" className="navbar-item logo" title="Logo">
          {/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}
          모모의 블로그
        </Link>
        <div className="navbar-menu">
          <Link className="navbar-item" to="/products">
            Products
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
            
            {/* Hamburger menu */}
            {/* <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div> */}

      </nav>
    )
  }
}

export default Navbar
