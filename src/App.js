import logo from './logo.svg';
import './App.css';

import {BrowserRouter , Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return(
    
    <BrowserRouter>
  
<div className="App">
  <h1>Rounting Example</h1>
  <Link to="/">Home</Link>
  &nbsp;
  <Link to="/about">About</Link>
  &nbsp;
  <Link to="/contact">Contact</Link>
</div>
<Routes>
  <Route path="/" element={<Home/>} ></Route>
  <Route path="/about" element={<About/>} ></Route>

  <Route path="/Contact" element={<Contact/>} ></Route>

</Routes>

<div>footer part</div>
</BrowserRouter>
  );
  
}

export default App;
