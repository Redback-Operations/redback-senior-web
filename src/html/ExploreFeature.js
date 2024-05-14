import React from 'react';
import './styles.css'; // Import your styles.css file
import healthMonitoringImage from './healthmonitoring.jpeg'; // Import images
import medicationReminderImage from './medication reminder.jpeg';

class ExploreFeatures extends React.Component {
  toggleFeature = (id) => {
    const toggleInner = document.getElementById(id).querySelector('.toggle-inner');
    toggleInner.classList.toggle('toggle-on');
    toggleInner.classList.toggle('toggle-off');
    const toggleText = document.getElementById(id).querySelector('.toggle-text');
    toggleText.textContent = toggleInner.classList.contains('toggle-on') ? 'On' : 'Off';
  };

  render() {
    return (
      <div className="container">
        <h1>Explore Features</h1>
        <div className="feature" id="fall-detection">
          <h2>Fall Detection</h2>
          <p>Our fall detection feature utilizes advanced sensors to detect falls and automatically alert emergency contacts.</p>
          <div className="toggle" onClick={() => this.toggleFeature('fall-detection')}>
            <div className="toggle-inner toggle-off"></div>
            <div className="toggle-text">Off</div>
          </div>
        </div>
        <div className="feature" id="emergency-alert">
          <h2>Emergency Alert System</h2>
          <p>With our emergency alert system, you can quickly notify pre-set contacts in case of emergencies with just a tap.</p>
          <div className="toggle" onClick={() => this.toggleFeature('emergency-alert')}>
            <div className="toggle-inner toggle-off"></div>
            <div className="toggle-text">Off</div>
          </div>
        </div>
        <div className="feature">
          <h2>Health Monitoring</h2>
          <div className="visual">
            <img src={healthMonitoringImage} alt="Health Monitoring Icon" />
            <p>Stay on top of your health with our comprehensive health monitoring system, which tracks vital signs and alerts you to any irregularities.</p>
          </div>
          <p><strong>Vital Signs Tracked:</strong> Heart rate, blood pressure, temperature, and oxygen saturation.</p>
        </div>
        <div className="feature">
          <h2>Medication Reminders</h2>
          <div className="visual">
            <img src={medicationReminderImage} alt="Medication Reminders Icon" />
            <p>Never miss a dose again with our medication reminder feature, which sends timely reminders to take your medications.</p>
          </div>
          <p><strong>Medicines:</strong> Aspirin (morning), Insulin (afternoon), Statin (evening).</p>
        </div>
      </div>
    );
  }
}

export default ExploreFeatures;
