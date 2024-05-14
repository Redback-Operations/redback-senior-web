import React from 'react';
import './styles.css'; // Import your styles.css file
import sleepIcon from './sleep.jpeg'; // Import images
import qualityIcon from './sleep quality.png';
import stagesIcon from './stages.jpeg';

class HealthDetails extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Health Status</h1>
        <div className="health-info">
          <h2>Heart Beat</h2>
          <div className="heart-rate-details">
            <p>Current Heart Rate: <strong>80 BPM</strong></p>
            <p>Normal Range: <strong>60 - 100 BPM</strong></p>
          </div>
        </div>
        <div className="health-info">
          <h2>Oxygen Level</h2>
          <div className="oxygen-level-circle">
            <div className="circle">
              <div className="inner-circle">
                <span className="percentage">75%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="health-info">
          <h2>Blood Pressure</h2>
          <div className="blood-pressure-bars">
            <div className="bar">
              <div className="progress" style={{ width: '70%' }}>120/80 mmHg</div>
            </div>
            <div className="bar">
              <div className="progress" style={{ width: '50%' }}>80/60 mmHg</div>
            </div>
          </div>
        </div>
        <div className="health-info">
          <h2>Sleep Tracking</h2>
          <div className="sleep-tracking">
            <ul>
              <li><img src={sleepIcon} alt="Sleep Icon" width="30" />Hours Slept: <strong>7 hours</strong></li>
              <li><img src={qualityIcon} alt="Quality Icon" width="30" />Sleep Quality: <strong>Good</strong></li>
              <li><img src={stagesIcon} alt="Stages Icon" width="30" />Sleep Stages: <strong>Deep Sleep, REM, Light Sleep</strong></li>
            </ul>
          </div>
        </div>

        {/* Stakeholder Details */}
        <div className="stakeholder-info">
          <h2>Stakeholder Details</h2>
          <p><strong>Name:</strong> aaryan</p>
          <p><strong>Email:</strong> aaryan@example.com</p>
          <p><strong>Phone:</strong> +1234567890</p>
          <p><strong>Address:</strong> 123 Street, melbourne, Australia</p>
        </div>
      </div>
    );
  }
}

export default HealthDetails;
