import NavBar from "./component/navBar/NavBar"
import Intro from "./component/Intro/intro"
import About from "./component/About/about";
import Portfolio from "./component/Portfolio/portfolio";
import Contact from "./component/contact/contact";
import Footer from './component/Footer/footer'
import "./App.css"
const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      < Footer/>
    </div>
  );
}

export default App
