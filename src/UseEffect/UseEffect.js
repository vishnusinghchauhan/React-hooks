import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${count}`)
      .then((response) => {
        setData(response.data);
        console.log("API IS CALLED");
      });
  }, [count]);

  return (
    <div>
      <h1>{data.title}</h1>
      <h1>Getting data fpr API {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Get Next API Data
      </button>
    </div>
  );
}

export default UseEffect;
