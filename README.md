# sentiment-analysis-emoji
Using Google Natural Language API to map sentiment to emojis. 


# Architecture Overview

## Diagram
WIP

## Workflow

1. User inputs text in the web interface and submits it.
2. The frontend sends the user input directly to the Google Cloud Function.
3. The Google Cloud Function is triggered and interacts with the Google Cloud Natural Language API to perform sentiment analysis on the input text.
4. The Natural Language API returns sentiment scores and entities mentioned in the text to the Google Cloud Function.
5. The Google Cloud Function processes the results, maps sentiment scores to emojis, and sends the results (including sentiment scores and emojis) directly back to the frontend.
6. The frontend displays the sentiment analysis results, including the original text, sentiment score, and associated emoji.

This architecture leverages the serverless nature of Google Cloud Functions, eliminating the need for a dedicated backend server and making the sentiment analysis process more scalable and cost-effective.

## Components

1. **Frontend (Web Interface):**
   - This is the user interface where users input text for sentiment analysis.
   - Built using React, HTML, CSS, and JavaScript.
   - Sends user input to the Google Cloud Function for analysis.
   - Displays the sentiment analysis results, including the sentiment score, and associated emoji.

2. **Google Cloud Function:**
   - Receives user input directly from the frontend.
   - Triggers sentiment analysis using Google Cloud Natural Language API.
   - Processes the analysis results and maps sentiment scores to emojis.
   - Returns the sentiment analysis results, including sentiment scores and emojis, directly to the frontend.

3. **Google Cloud Natural Language API:**
   - Performs sentiment analysis on the provided text.
   - Based on the sentiment scores received from the Natural Language API, the Google Cloud Function maps sentiment to emojis (e.g., 😄 for positive, 😐 for neutral, 😢 for negative).
   - The emojis are included in the sentiment analysis results returned to the frontend.
  
4. **Google Cloud Storage:**
   - Hosts the React static website, allowing access to public

# Future consideration
  - As of now, the code is not auto deployed when there's changes (no CI/CD yet). So maybe I'll add a continuous deployment using Google Cloud Build.
  - I'm considering hooking up Google Cloud CDN to serve static files faster as well

# Live website
### 🔗 Source code - [GitHub](https://github.com/vivo1310/sentiment-analysis-emoji/)
### 🔗 Try it out here! - [Live Production](https://storage.googleapis.com/sentiment-analysis-emoji/index.html)

