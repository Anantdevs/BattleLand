import Battlefield from "./battlefield";
import TheCompany from "./company";
import Firestorm from "./firestorm";
import Multiplayer from "./multiplayer";
import Warstories from "./warstories";

import VibratingIcon from "../../components/vibrating_icon";

const sections = [Battlefield, Firestorm, Warstories, Multiplayer, TheCompany];
function Screen1() {
  return (
    <div>
      <div className="screens">
        {sections.map((Section, index) => (
          <div className="relative">
            {index != 4 ? <VibratingIcon /> : null}
            <Section key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Screen1;
