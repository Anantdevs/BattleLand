import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NavItems() {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState([false, -1]);

  const handleHover = (index) => {
    setIsHovered([true, index]);
  };

  const handleMouseLeave = () => {
    setIsHovered([false, -1]);
  };
  const imgs = [
    "bg1.jpeg",
    "bg2.jpeg",
    "bg3.jpeg",
    "bg4.jpeg",
    "bg5.jpeg",
    "bg5.jpeg",
  ];
  const content = [
    "battlefield v",
    "battlefield 1",
    "battlefield 4",
    "battlefield hardline",
    "career",
    "watch",
    "news",
  ];
  const handleItemClick = (index) => {
    const path = `/s1`;
    navigate(path);
  };
  return (
    <div className="flex flex-col  justify-center items-center h-full w-full gap-2 ">
      {imgs.map((img, index) => (
        <div
          key={index}
          className="nav-item relative h-[8.0%] w-[45%] bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleItemClick(index)}
        >
          <div
            className="absolute h-[50%] w-fit top-[30%] left-[150%] bg-black"
            style={{
              display: `${
                isHovered[0] == true && index == isHovered[1] ? "" : "none"
              }`,
            }}
          >
            <div className="flex justify-center items-center text-white h-full w-fit text-[6.8px] uppercase px-2 py-3 overflow-hidden">
              {content[index]}
            </div>
          </div>
          <div
            className="absolute h-[100%] w-[10%] top-[0%] left-[-60%] bg-orange-500"
            style={{
              display: `${
                isHovered[0] == true && index == isHovered[1] ? "" : "none"
              }`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default NavItems;
