import React from 'react';
import './styles.css'; // Import your styles.css file
import redbackLogo from './redback op.jpeg'; // Import your image
import auntyImage from './aunty.png';
import healthGapImage from './healthgap.png';
import exploreImage from './exploringthegap.png';
import feedbackImage from './feedback3.jpg';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>
            <img src={redbackLogo} className="top-image" alt="redback operation logo" height="200" />
            ELDERLY WEARABLE TECH SENSOR
          </h1>
        </div>

        <div className="topnav">
          <a href="html copy.html">Homepage</a>
          <a href="OurServices copy.html">Our services</a>
          <a href="healthStatus.html">Health status</a>
          <a href="exploreFeatures.html">Explore features</a>
        </div>

        <div className="content">
          <p>In an era where technology continually evolves to enhance lives, we delve into the innovative realm of wearable sensors specifically designed to cater to the unique needs of our elderly population. From monitoring health metrics to ensuring safety and providing independence, these wearable marvels are revolutionizing senior care. Join us on a journey through the latest advancements, benefits, and the promising future of this transformative technology. Our sensors are equipped with fall detection, location tracking, and emergency response features to ensure peace of mind for both seniors and their loved ones. Monitor vital signs such as heart rate, blood pressure, and activity levels in real-time, enabling proactive healthcare management.</p>
        </div>

        <div className="content-row">
          <a href="OurServices copy.html" className="section-link left-content">
            <div>
              <h2>Our services</h2>
              <img src={auntyImage} alt="Our services" />
            </div>
          </a>

          <a href="healthStatus.html" className="section-link right-content">
            <div>
              <h2>Health status</h2>
              <img src={healthGapImage} alt="Health Image" />
            </div>
          </a>
        </div>

        <div className="content-row">
          <a href="exploreFeatures.html" className="section-link">
            <div className="gap">
              <h2>Explore features</h2>
              <img src={exploreImage} alt="Gap Image" />
            </div>
          </a>

          <a href="feedback copy.html" className="section-link">
            <div className="gap">
              <h2>Feedback</h2>
              <img src={feedbackImage} alt="Gap Image" />
            </div>
          </a>
        </div>

        <div className="footer">
          <a href="html copy.html">Home</a>
          <a href="#referendum">Referendum</a>
          <a href="#contact">Contact</a>
          <a href="OurServices copy.html">Our Mission</a>
          <a href="#help">Help</a>
        </div>
      </div>
    );
  }
}

export default Homepage;
