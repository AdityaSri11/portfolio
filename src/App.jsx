import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Experience from  "./components/experience/Experience";
import Connect from "./components/connect/Connect";
import Skills from "./components/skills/Skills";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>  
        <Experience/>
        <Skills/>
        <Connect/>
      </div>
    </div>
  );
}

export default App;
