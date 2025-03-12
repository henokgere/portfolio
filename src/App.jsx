import './App.css'
import Hacker from './hacker/Hacker'

function App() {

  return (
    <div style={{display: 'grid'}}>
        <div className="nav">
          <div></div>
          <a href="https://www.linkedin.com/in/henok-gebremedhin-74a3b3197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/henokgere"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.upwork.com/freelancers/~0191c6f167ad705df8?mp_source=share"><i class="fa-brands fa-upwork"></i></a>
          <a href="https://www.figma.com/files/team/1307218504960877386/recents-and-sharing?fuid=1285919460291721930"><i class="fa-brands fa-figma"></i></a>
          <a href="henok1234gere@gmail.com"><i class="fa-brands fa-email"></i></a>
        </div>
        <Hacker />
      <div className='footer'>
        <p>&copy; this is made by Henok G Nov 2024</p>
      </div>
    </div>
  )
}

export default App
