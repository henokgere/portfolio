import React from 'react';
import { SiReact, SiExpo, SiFlutter, SiFirebase } from 'react-icons/si';
import mobileImg from '/mobile.png';
import '../App.css';

const mobileFrameworks = [
  { name: 'React Native', icon: <SiReact color="#61dafb" size={36} /> },
  { name: 'Expo', icon: <SiExpo color="#000020" size={36} /> },
  { name: 'Flutter', icon: <SiFlutter color="#02569B" size={36} /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" size={36} /> },
];

const Mobile = ({ name }) => (
  <div className="mobile-sidebyside-bg">
    <div className="mobile-sidebyside">
      <img src={mobileImg} alt="Mobile showcase" className="mobile-img-side" />
      <div className="mobile-content-side">
        <h1>
          <span role="img" aria-label="mobile">📱</span> Mobile App Skills
        </h1>
        <h2>{name}</h2>
        <p className="mobile-intro">
          I build robust, scalable mobile apps using <b>React Native</b>, <b>Expo</b>, and <b>Flutter</b>.<br />
          My experience includes push notifications, SMS, and real-time features with <b>Firebase</b>.
        </p>
        <div className="mobile-frameworks">
          {mobileFrameworks.map(fw => (
            <div className="mobile-framework-icon" key={fw.name}>
              {fw.icon}
              <span>{fw.name}</span>
            </div>
          ))}
        </div>
        <div className="mobile-skills">
          <div>
            <h3>Production Apps</h3>
            <p>
              4+ large-scale apps launched, from UI/UX to deployment.
            </p>
          </div>
          <div>
            <h3>Cross-Platform</h3>
            <p>
              Seamless experiences on iOS & Android using modern frameworks.
            </p>
          </div>
          <div>
            <h3>Cloud & Notifications</h3>
            <p>
              Firebase for push, SMS, authentication, and real-time data.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Mobile;