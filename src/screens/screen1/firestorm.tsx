import { useState } from "react";
import { motion } from "framer-motion";

function Firestorm() {
  const items = ["bg1.jpeg", "bg2.jpeg", "bg3.jpeg", "bg4.jpeg"];
  const captions = [
    "COMBAT VEHICLES",
    "OBJECTIVES",
    "REINFORCEMENT",
    "DESTRUCTION",
  ];

  const [imageCon, setImageIcon] = useState(-1);
  const [iconhover, setIconHover] = useState(false);
  const [indexIconHover, setindexIconHover] = useState(-1);

  return (
    <div className="scroll-snap relative h-screen w-full flex justify-center items-center">
      <div
        className={`absolute inset-0 ${
          imageCon === -1
            ? "bg-[url(bg2.jpeg)]"
            : `bg-[url(${items[imageCon]})]`
        }  bg-cover bg-center`}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#241813] to-transparent"></div>

      {items.map((item, index) => (
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
              right: `${62 - index * 11}%`,
            }}
          ></div>
          <div
            className="absolute h-[3.5%] w-[10.3%] bottom-[32%] bg-gradient-to-t from-black opacity-100"
            style={{ right: `${62.19 - index * 11}%` }}
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
            style={{ right: `${62.0 - index * 11}%` }}
          >
            <p className="text-white text-xs cursor-default">
              {captions[index]}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
//bg-gradient-to-t from-black opacity-10
export default Firestorm;
