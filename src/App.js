
import './App.css';
import About from './components/About';
import Bottom from './components/Bootom';
import Contact from './components/Contact';

import Main from './components/Main';
import Navbar from './components/Navbar';
import Services from './components/Services';
import WhatWeDo from './components/WhatWeDo';
import WhoWeAre from './components/WhoWeAre';
import Customers from './components/Customers';
//npm runbuild
//npmrun deploy

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <WhatWeDo/>
      <WhoWeAre/>
      <Services/>
      <Customers/>
      <Contact/>
      <Bottom/>
    </div>
  );
}

export default App;
