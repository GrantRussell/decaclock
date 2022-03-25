import { useState, useEffect } from 'react';
import './App.css';
import DigitalClock from './components/DigitalClock';
import DecaClock from './components/DecaClock';

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight);
appHeight();

function App() {
  const [time, setTime] = useState(new Date());
  const [newVersion, setNewVersion] = useState(true);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => { clearInterval(intervalId) };
    }, [setTime]);

  return (
    <div className="App">
      <div className="header-section">
        V1
        <label class="switch">
          <input type="checkbox" checked={newVersion} onClick={() => setNewVersion(!newVersion)}/>
          <span class="slider round"></span>
        </label>
        V2
      </div>
      <div className="time-measurement">1 decasecond = {newVersion ? '.864' : '1'} second{newVersion ? 's' : ''}</div>
      {newVersion && <div className="time-measurement">Days will end at the same time</div>}
      <div className="time-section">
        <DecaClock time={time} newVersion={newVersion} />
      </div>
      <div className="time-section">
        <DigitalClock time={time} newVersion={newVersion} />
      </div>
    </div>
  );
}

export default App;
