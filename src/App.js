import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'

function App() {
  return (
    <div className="App">
      <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Portfolio/>
        {/* <Services/> */}
        {/* <Testimonial/> */}
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
