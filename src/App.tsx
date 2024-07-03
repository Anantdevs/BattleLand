import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItems from "./components/side_nav_items";
import Screen1 from "./screens/screen1/screen1";
import Screen2 from "./screens/screen2/screen2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  faPowerOff,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const horiz_nav = ["home", "store"];

  return (
    <Router>
      <div>
        <div>
          <nav
            className="cust-border text-white border-b-[0.1px] w-[95%] left-[7%] pt-[2%] fixed top-0 z-50"
            style={{
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="h-[50%] w-[10%] flex justify-center items-center flex-row gap-4 uppercase ">
              {horiz_nav.map((section, index) => (
                <a className="glow_effect link_effect " key={index}>
                  {section}
                </a>
              ))}
            </div>
          </nav>
          <nav
            className="text-white border-r-[0.1px] w-[5%] h-full fixed top-0 z-50 flex  flex-col pt-[5%]"
            style={{
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <NavItems />
            <div className="flex flex-col w-full h-[40%] justify-center items-center gap-8 pt-[10%]">
              <div className="h-[15.0%] w-[45%] flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className=" text-[#8d9baf]"
                />
              </div>
              <div className="h-[15.0%] w-[45%] flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className=" text-[#8d9baf]"
                />{" "}
              </div>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/s2" />} />

          <Route path="/s1" element={<Screen1 />} />
          <Route path="/s2" element={<Screen2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
