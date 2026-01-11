import "./App.css";
import { useTheme } from "./hooks/useTheme";
import Intro from "./components/Intro";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useTheme();

  return (
    <div className="text-gray-900 dark:bg-[#0b1220] dark:text-gray-100">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
