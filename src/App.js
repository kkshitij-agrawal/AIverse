import logo from "./logo.svg";
import "./App.css";
import headline from "./Assets/justonemoreproject.svg";
import mascot from "./Assets/mascot.png";
import blogsCover from "./Assets/blogscover.svg";
import appsCover from "./Assets/appBg.svg";
import arrowIcon from "./Assets/arrow.svg";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item big-item">
          <div className="openItem">
            <img src={arrowIcon} />
          </div>
          <div className="contentItem">
            <p>a designer, developer and AI trio ✨ </p>
            <img src={headline} />

            <p>
              taking on new challenges, riding the latest trends and building
              for the future 🚀
            </p>
          </div>
        </div>
        <div className="grid-item apps-item coverimg">
          <div className="openItem">
            <img src={arrowIcon} />
          </div>
          <div className="contentItem">
            <img src={appsCover} />
          </div>
        </div>
        <div className="grid-item blogs-item coverimg">
          <div className="openItem">
            <img src={arrowIcon} />
          </div>
          <div className="contentItem">
            <img src={blogsCover} />
          </div>
        </div>
        <div className="grid-item big-item3-1 "></div>
        <div className="grid-item"></div>
        <div className="grid-item mascot-item coverimg">
          <div className="contentItem">
            <img src={mascot} />
          </div>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}

export default App;
