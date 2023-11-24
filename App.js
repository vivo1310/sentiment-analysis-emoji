// App.js
import React from "react";
import SentimentForm from "./components/SentimentForm";
import "./App.css"; // Import App component styles

const App = () => {
  return (
    <div className="App">
      <h1>Sentiment Analysis with Emoji</h1>
      <SentimentForm />
    </div>
  );
};

export default App;
