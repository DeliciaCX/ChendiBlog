import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
          <Intro/>
          <Blog/>
          <Contact/>
      </div>
        Hello
    </div>
  );
}

export default App;
