import Topbar from "./components/topbar/Topbar";
import TopBar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Experience from  "./components/experience/Experience";
import Connect from "./components/connect/Connect";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>  
        <Experience/>
        <Connect/>
      </div>
    </div>
  );
}

export default App;
