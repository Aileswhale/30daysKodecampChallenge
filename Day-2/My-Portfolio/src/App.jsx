import NavBar from "./component/navBar/NavBar"
import Intro from "./component/Intro/intro"
import About from "./component/About/about";
import Portfolio from "./component/Portfolio/portfolio";
import Contact from "./component/contact/contact";
const App = () => {
  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App
