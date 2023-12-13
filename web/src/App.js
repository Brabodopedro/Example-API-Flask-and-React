import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { About } from './component/About';
import { Users } from './component/Users';
import { Navbar } from './component/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container p-2">
        <Routes>
          <Route path="/about" Component={About}/>
          <Route path="/" Component={Users}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
