import React, { useRef, useState } from "react";

function UseRef() {
  const [color, setColor] = useState("");

  const inputRef = useRef(null);

  const onClick = () => {
    let value = inputRef.current.value;
    console.log("--------------", value);
    // you can set new value on button click
    inputRef.current.value = "";
  };
  const changeData = (e) => {
    console.log("e.target.value", e.target.value);
    setColor(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        defaultValue="test"
        placeholder="name"
        onChange={(e) => changeData(e)}
      />

      <input
        type="text"
        defaultValue="test"
        placeholder="name"
        ref={inputRef}
      />
      <button onClick={onClick}>Change Value</button>
    </div>
  );
}

export default UseRef;
