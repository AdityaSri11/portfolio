import Topbar from "./components/topbar/Topbar";
import TopBar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>  
      </div>
    </div>
  );
}

export default App;
