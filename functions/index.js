const { LanguageServiceClient } = require("@google-cloud/language");
const functions = require("@google-cloud/functions-framework");

functions.http("sentimentAnalysis", async (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") {
    // Send response to OPTIONS requests
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  } else {
    try {
      const text = req.body.text;

      const languageServiceClient = new LanguageServiceClient();
      const document = {
        content: text,
        type: "PLAIN_TEXT",
      };

      const [result] = await languageServiceClient.analyzeSentiment({
        document,
      });
      const sentimentScore = result.documentSentiment.score;

      let emoji = "😐";
      if (sentimentScore > 0.2) {
        emoji = "😄";
      } else if (sentimentScore < -0.2) {
        emoji = "😢";
      }

      res.status(200).json({
        text,
        sentimentScore,
        emoji,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    }
  }
});
