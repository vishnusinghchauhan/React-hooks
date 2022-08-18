import React, { useState } from "react";

const UseState = () => {
  const [color, setColor] = useState("red");

  const [profile, setProfile] = useState({
    firstName: "Vishnu",
    lastName: "Chauhan",
    age: 29,
  });

  const setProfileData = (e) => {
    const { name, value } = e.target;
    setProfile((previousState) => {
      return { ...previousState, [name]: value };
    });
  };

  return (
    <div>
      {/* <h1>
        My favorite color is <span style={{ color: color }}>{color}</span>
      </h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("yellow")}>
        yellow
      </button>
      <button type="button" onClick={() => setColor("green")}>
        green
      </button> */}
      <hr />
      <input
        type="text"
        defaultValue={profile.firstName}
        name="firstName"
        onChange={(e) => setProfileData(e)}
        placeholder="Your Name"
      />
      <input
        type="text"
        name="lastName"
        defaultValue={profile.lastName}
        onChange={(e) => setProfileData(e)}
        placeholder="last Name"
      />
      <input
        type="number"
        defaultValue={profile.age}
        name="age"
        onChange={(e) => setProfileData(e)}
        placeholder="Your Age"
      />

      <p>firstName {profile.firstName}</p>
      <p>lastName {profile.lastName}</p>
      <p>age {profile.age}.</p>
      
    </div>
  );
};

export default UseState;
