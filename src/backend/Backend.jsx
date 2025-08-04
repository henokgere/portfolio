import { FaNodeJs, FaDatabase, FaCloud, FaServer } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiPostman, SiDocker, SiSwagger } from 'react-icons/si';

export default function Backend() {
  return (
    <div className="backend-container">
      <h2>Backend Portfolio</h2>
      <p>I build robust, secure, and scalable server-side applications using modern backend technologies.</p>

      <div className="backend-skills">
        <div className="skill-card">
          <FaNodeJs className="icon" />
          <p>Node.js</p>
        </div>
        <div className="skill-card">
          <SiExpress className="icon" />
          <p>Express.js</p>
        </div>
        <div className="skill-card">
          <SiMongodb className="icon" />
          <p>MongoDB</p>
        </div>
        <div className="skill-card">
          <SiMysql className="icon" />
          <p>MySQL</p>
        </div>
        <div className="skill-card">
          <FaDatabase className="icon" />
          <p>Database Design</p>
        </div>
        <div className="skill-card">
          <SiPostman className="icon" />
          <p>Postman API Testing</p>
        </div>
        <div className="skill-card">
          <SiSwagger className="icon" />
          <p>Swagger Docs</p>
        </div>
        <div className="skill-card">
          <SiDocker className="icon" />
          <p>Docker</p>
        </div>
        <div className="skill-card">
          <FaCloud className="icon" />
          <p>Cloud Hosting</p>
        </div>
        <div className="skill-card">
          <FaServer className="icon" />
          <p>REST APIs</p>
        </div>
      </div>

      <p>Projects include authentication systems, RESTful APIs, admin panels, and scalable microservices.</p>
    </div>
  );
}
