import React, { useState } from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";

const quotes = [
  {
    author: "Buddha",
    text: "All that we are is the result of what we have thought",
    color: "#f44336"
  },
  {
    author: "Albert Einstein",
    text: "I have no special talent. I am only passionately curious.",
    color: "#e91e63"
  },
  {
    author: "Mother Teresa",
    text: "If you judge people, you have no time to love them",
    color: "#673ab7"
  },
  {
    author: "William Shakespeare ",
    text: "Wisely, and slow. They stumble that run fast",
    color: "#3f51b5"
  },
  {
    author: "Coco Chanel",
    text: "The most courageous act is still to think for yourself. Aloud.",
    color: "#2196f3"
  },
  {
    author: "Steve Jobs",
    text: "Stay hungry, stay foolish.",
    color: "#03a9f4"
  },
  {
    author: "Ralph Waldo Emerson",
    text: "A great man is always willing to be little",
    color: "#00bcd4"
  }
];

const App = () => {
  const randomIndex = () => Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[randomIndex()]);
  const getRandomQuote = () => {
    let currentIndex = randomIndex();
    let currentQuote = quotes[currentIndex];

    if (currentQuote !== quote) {
      setQuote(currentQuote);
    } else if (currentIndex === quotes.length - 1) {
      setQuote(quotes[currentIndex - 1]);
    } else {
      setQuote(quotes[currentIndex + 1]);
    }
  };
  return (
    <div className="App" style={{ background: quote.color }}>
      <QuoteBox getQuote={getRandomQuote} quote={quote} />
    </div>
  );
};

export default App;
