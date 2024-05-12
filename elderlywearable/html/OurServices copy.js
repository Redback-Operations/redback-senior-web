import React from 'react';
import './common.css'; // Import your common.css file
import redbackLogo from './redback op.jpeg'; // Import your image
import danielImage from './daniel.png';
import mayaImage from './maya.png';
import emilyImage from './emily.png';

class OurServices extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h1><a href="/"><img src={redbackLogo} className='top-image' alt='redback logo' height='200' /></a>Our services</h1>
        </div>
        <div className='topnav'>
          <a href='html copy.html'>Homepage</a>
          <a href='OurServices copy.html'>Our services</a>
          <a href='healthStatus.html'>Health Status</a>
          <a href='exploreFeatures.html'>Explore features</a>
        </div>
        <div className='content'>
          <div className="mission">
            <h1 className='mission-title'>Our Purpose</h1>
            <p>Our project's goal is to improve senior citizens' quality of life and overall well-being by utilising wearable technology. We hope to offer a comprehensive platform that enables seniors to keep an eye on their health, maintain communication with carers, and access important information and support through creative solutions and user-centric design..</p>
            <h2 className='mission-title'>How to use the product</h2>
            <p>There is user manual guide provvided with the product which will help the users to use the tech easily and if any queries the user can contact us by providing the feedback or through contact us option. Moreover, you can share your reports with your loved ones, friends or doctors by just adding them to your friend's list and after that you would see that there profile has been added to your friend's <list className="x"></list></p>
          </div>
          <section className="container">
            <div className="slider-wrapper">
              <div className="slider">
                <div className="slide" id="slide-1">
                  <img src={danielImage} alt="Daniel Lewis" />
                  <div className="slide-text">
                    <h2>Daniel Lewis</h2>
                    [Friend_1]
                  </div>
                </div>
                <div className="slide" id="slide-2">
                  <img src={mayaImage} alt="Maya Bennett" />
                  <div className="slide-text">
                    <h2>Maya Bennett</h2>
                    [Friend_2]
                  </div>
                </div>
                <div className="slide" id="slide-3">
                  <img src={emilyImage} alt="Daniel Rodriguez" />
                  <div className="slide-text">
                    <h2>Daniel Rodriguez</h2>
                    [Friend_3]
                  </div>
                </div>
              </div>
              <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
              </div>
            </div>
          </section>
        </div>
        <a href="#" className="back-to-top">
          <span className="material-icons">arrow_upward</span>
        </a>
        <div className='footer'>
          <div className='developers'>[DEVELOPER_1] and [DEVELOPER_2]</div>
          <div className='nav-links'>
            <a href="html copy.html">Home</a>
            <a href="OurServices copy.html">Our services</a>
            <a href="/page2A.html">Health Conditions Data</a>
            <a href="/page2B.html">Education Data</a>
            <a href="#help">Help</a>
          </div>
          <div className='year'>2023</div>
        </div>
      </div>
    );
  }
}

export default OurServices;
