import React from 'react';
import './common.css'; // Import your common.css file
import { Navbar } from 'react-bootstrap'; // Assuming you're using Bootstrap for Navbar

const OurMission = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg"> {/* React Bootstrap Navbar */}
        <Navbar.Brand href="/">
          <img src={require('./redback op.jpeg')} className='top-image' alt='UnityConnect logo' height='200' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a href='html copy.html' className='nav-link'>Homepage</a>
            </li>
            <li className='nav-item'>
              <a href='OurServices copy.html' className='nav-link'>Our Mission</a>
            </li>
            <li className='nav-item'>
              <a href='healthStatus.html' className='nav-link'>Health Status</a>
            </li>
            <li className='nav-item'>
              <a href='exploreFeatures.html' className='nav-link'>Explore features</a>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
      <div className='container'>
        <h1>Our Mission</h1>
        {/* Your mission content goes here */}
      </div>
    </div>
  );
};

export default OurMission;
