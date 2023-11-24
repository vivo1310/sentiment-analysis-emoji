// SentimentForm.js
import React, { useState } from "react";
import "./SentimentForm.css"; // Import SentimentForm component styles

const SentimentForm = () => {
  const [inputText, setInputText] = useState("");
  const [sentimentResult, setSentimentResult] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://asia-southeast1-sentiment-analysis-emoji.cloudfunctions.net/sentimentAnalysis",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: inputText,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error analyzing sentiment");
      }

      const result = await response.json();

      // Update the state with sentiment analysis results
      setSentimentResult(result);
    } catch (error) {
      console.error("Error:", error);
      // Handle errors
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {" "}
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Eg. I love this shirt"
      />
      <button type="submit">
        <strong>Submit</strong>
      </button>
      {sentimentResult && (
        <table className="sentiment-table">
          <tr>
            <th>Sentiment Score</th>
            <td>{sentimentResult.sentimentScore}</td>
          </tr>
          <tr>
            <th>Emoji</th>
            <td>{sentimentResult.emoji}</td>
          </tr>
        </table>
      )}
    </form>
  );
};

export default SentimentForm;
