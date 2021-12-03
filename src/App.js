import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "💘": "Heart with Arrow",
  "💝": "Heart with Ribbon",
  "💖": "Sparkling Heart",
  "💗": "Growing Heart",
  "💓": "Beating Heart",
  "💞": "Revolving Hearts",
  "💕": "Two Hearts",
  "💟": "Heart Decoration",
  "❣️": "Heart Exclamation",
  "💔": "Broken Heart",
  "❤️‍🔥": "Heart on Fire",
  "❤️‍🩹": "Mending Heart"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "Red",
          color: "Black",
          borderRadius: "25px"
        }}
      >
        Play Emoji!!
      </h1>
      <input
        onChange={emojiInputHandler}
        style={{ width: "10rem", border: "3px solid ", height: "5vh" }}
      />
      <h2 style={{ color: "Red" }}>{meaning}</h2>
      <h3 style={{ color: "Black" }}>
        Hearts that we know, Click on them to know their meaning <span>👇</span>{" "}
      </h3>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
