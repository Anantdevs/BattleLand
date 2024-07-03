import React, { useEffect, useState } from "react";
import { faV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import your CSS file where you define styles

function VibratingIcon() {
  const [vibrating, setVibrating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVibrating(true);

      // Stop vibrations after 0.3 seconds (300ms)
      setTimeout(() => {
        setVibrating(false);
      }, 750); // Each vibration lasts for 0.3 seconds (300ms)

      // Repeat every 7 seconds (7000ms)
    }, 9000); // Initial delay before first vibration starts
    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, []);

  return (
    <div
      className={`icon ${
        vibrating ? "vibrate" : ""
      } absolute z-10 left-[50%] bottom-[5%]`}
    >
      <FontAwesomeIcon icon={faV} className="text-white text-5xl" />
    </div>
  );
}

export default VibratingIcon;
