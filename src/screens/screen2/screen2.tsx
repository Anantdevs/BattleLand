// import { motion } from "framer-motion";
// import { useState } from "react";

import Server from "./server";

function Screen2() {
  return (
    <div className="scroll-snap relative h-screen w-full">
      <div
        className={`absolute inset-0 bg-[url(bg_boat.jpg)] bg-repeat-y bg-cover `}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#112235] to-transparent">
        <Server />
      </div>
    </div>
  );
}

export default Screen2;
