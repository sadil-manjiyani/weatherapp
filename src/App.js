// import logo from './logo.svg';
import './App.css';

import Temperature from './Temperature'
import Humidity from './Humidity'
import Wind from './Wind'
// import { render } from 'react-dom';
function App() {
  return (
    <div className="appWidth">
      <Temperature />
      {/* <Humidity /> */}
      {/* <Wind /> */}
    </div>
  );
}

export default App;
