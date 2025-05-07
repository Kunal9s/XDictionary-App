import React, { useState } from "react";

const Dictionary = () => {
  const [definition, setDefinition] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const data = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleClick = () => {
    const res = data.find(
      i => i.word.toLowerCase() === searchWord.toLowerCase()
    );
    if (res) {
       setDefinition(res.meaning);
    } else {
       setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>Dictionary App</h1>
      <span>
        <input
          type="text"
          placeholder="Search for a word"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </span>
      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
};

export default Dictionary;
