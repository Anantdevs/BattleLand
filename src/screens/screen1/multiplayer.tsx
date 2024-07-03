import { motion } from "framer-motion";
import { useState } from "react";

function Multiplayer() {
  const items = ["bg1.jpeg", "bg2.jpeg", "bg3.jpeg", "bg4.jpeg"];
  const captions = ["teamwork", "fortifications", "an ever-evolving war"];

  const value = 53.4;

  const [imageCon, setImageIcon] = useState(-1);
  const [iconhover, setIconHover] = useState(false);
  const [indexIconHover, setindexIconHover] = useState(-1);
  return (
    <div className="scroll-snap relative h-screen w-full">
      <div
        className={`absolute inset-0 ${
          imageCon === -1
            ? "bg-[url(bg3.jpeg)]"
            : `bg-[url(${items[imageCon]})]`
        }  bg-cover bg-center`}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#374131] to-transparent">
        {items.map((item, index) =>
          index != 3 ? (
            <div
              onClick={() => setImageIcon(index)}
              onMouseEnter={() => {
                setIconHover(true);
                setindexIconHover(index);
              }}
              onMouseLeave={() => {
                setIconHover(false);
                setindexIconHover(-1);
              }}
            >
              <div
                key={index}
                className={`absolute h-[12.3%] w-[10.5%] bg-[url(${item})] bg-cover bg-center `}
                style={{
                  bottom: "32.0%",
                  right: `${value - index * 11}%`,
                }}
              ></div>
              <div
                className="absolute h-[3.5%] w-[10.3%] bottom-[32%] bg-gradient-to-t from-black opacity-100"
                style={{ right: `${value + 0.2 - index * 11}%` }}
              ></div>

              <motion.div
                initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                animate={{
                  backgroundColor: iconhover
                    ? index == indexIconHover
                      ? "rgba(255, 255, 255, 0.3)"
                      : "rgba(255, 255, 255,0)"
                    : "rgba(255, 255, 255,0)",
                }}
                className="absolute h-[5.5%] w-[10.5%] bottom-[32%]   flex justify-center items-center"
                style={{ right: `${value - index * 11}%` }}
              >
                <p className="text-white text-xs cursor-default uppercase">
                  {captions[index]}
                </p>
              </motion.div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Multiplayer;
