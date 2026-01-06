import "./App.css";
import Intro from "./components/Intro";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  
  return (
    <>
    <link rel="icon" type="image/svg+xml" href="/circleMe.png" />
      <Header />
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
