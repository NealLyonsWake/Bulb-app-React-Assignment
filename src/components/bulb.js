import { React, useState } from "react";

function Bulb() {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(!isOn);
  }

  return (
    <>
      <span>Light Status: {isOn ? "On" : "Off"}</span>
      <br />
      <br />
      <button onClick={toggle}>Toggle</button>
    </>
  );
}

export default Bulb;
