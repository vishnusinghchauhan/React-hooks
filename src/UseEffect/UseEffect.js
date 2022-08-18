import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
  const [data, setData] = useState("");
  const [apiValue, setApiValue] = useState(1);

  useEffect(() => {
    console.log("getting data for", apiValue);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${apiValue}`)
      .then((response) => {
        setData(response.data);
        console.log("API IS CALLED");
      });
  }, [apiValue]);

  return (
    <div>
      <h1>{data.title}</h1>
      <h1>Getting data fpr API {apiValue}</h1>
      <button
        onClick={() => {
          setApiValue(apiValue + 1);
        }}
      >
        Get Next API Data
      </button>
    </div>
  );
}

export default UseEffect;
