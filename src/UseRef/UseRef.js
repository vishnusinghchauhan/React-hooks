import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  const onClick = () => {
    let value = inputRef.current.value;
    console.log("--------------", value);
    // you can set new value on button click
    inputRef.current.value = value;
  };
  return (
    <div>
      <input
        type="text"
        defaultValue="test"
        placeholder="Ex..."
        ref={inputRef}
      />
      <button onClick={onClick}>Change Value</button>
    </div>
  );
}

export default UseRef;
