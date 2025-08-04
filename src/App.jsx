import { useState } from 'react';
import './App.css'
import Hacker from './hacker/Hacker'
import Uiux from './ui/ux/Uiux';
import Frontend from './frontend/Frontend';
import Mobile from './mobile/Mobile';
import Backend from './backend/Backend';

function App() {
  const [activePage, setActivePage] = useState('Hacker'); 
  const renderComponent = () => {
    switch (activePage) {
      case 'Hacker':
        return <Hacker />;
      case 'Uiux':
        return <Uiux />;
      case 'Frontend':
        return <Frontend />;
      case 'Mobile app':
        return <Mobile />;
      case 'Backend':
        return <Backend />;
      default:
        return <Uiux />;
    }
  };
  return (
    <div style={{display: 'grid'}}>
        <div className="nav-links">
          <span className={`${activePage == 'Hacker'? 'active': ''}`} onClick={() => setActivePage('Hacker')}>Hacker</span>
          <span className={`${activePage == 'Uiux'? 'active': ''}`} onClick={() => setActivePage('Uiux')}>UI/UX</span>
          <span className={`${activePage == 'Frontend'? 'active': ''}`} onClick={() => setActivePage('Frontend')}>Frontend</span>
          <span className={`${activePage == 'Mobile app'? 'active': ''}`} onClick={() => setActivePage('Mobile app')}>Mobile app</span>
          <span className={`${activePage == 'Backend'? 'active': ''}`} onClick={() => setActivePage('Backend')}>Backend</span>
        </div>
        <div className="nav">
          <div></div>
          <a href="https://www.linkedin.com/in/henok-gebremedhin-74a3b3197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/henokgere"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.upwork.com/freelancers/~0191c6f167ad705df8?mp_source=share"><i class="fa-brands fa-upwork"></i></a>
          <a href="https://www.figma.com/files/team/1307218504960877386/recents-and-sharing?fuid=1285919460291721930"><i class="fa-brands fa-figma"></i></a>
          <a href="henok1234gere@gmail.com"><i class="fa-brands fa-email"></i></a>
        </div>
        {renderComponent()}
      <div className='footer'>
        <p>&copy; this is made by Henok G Nov 2024</p>
      </div>
    </div>
  )
}

export default App
