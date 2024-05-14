import React from 'react';
import './common.css'; // Import your common.css file
import { Navbar } from 'react-bootstrap'; // Assuming you're using Bootstrap for Navbar
import redbackLogo from './redback op.jpeg'; // Import your image

class OurMission extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img src={redbackLogo} className='top-image' alt='UnityConnect logo' height='200' />
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
        <div id="feedback" className="feedback-section">
          <h2>Feedback</h2>
          <p>We value your feedback! Let us know how we can improve our services:</p>
          <form action="/submit-feedback" method="post">
            <textarea name="feedback" rows="4" cols="50" placeholder="Enter your feedback here..."></textarea><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default OurMission;
