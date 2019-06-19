import React from 'react';
import Helmet from './Helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.scss';

const TemplateWrapper = ({ children }) => {
  return (
    <div className="layout-container">
      <Helmet />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
