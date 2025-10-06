import { useState } from "react";

function ColorBox() {
  const [color, setColor] = useState("gray");
  
  function changeColor() {
    // random color
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
  }
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          border: "1px solid black",
        }}
      ></div>
        <button className="btn btn-primary" onClick={changeColor}>Change Color</button>
    
    </div>
  );
}
export default ColorBox;
