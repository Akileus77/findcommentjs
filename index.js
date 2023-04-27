import readline from 'readline';
import { google } from 'googleapis';
// Set up the YouTube Data API
const youtube = google.youtube({
  version: 'v3',
  auth: 'YOUR-API-KEY', // Replace with your own API key
});

  
// Create a readline interface to prompt the user for the video ID and search text
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for the video ID and search text
rl.question('Enter the video ID: ', (videoId) => {
  rl.question('Enter the search text: ', (searchText) => {
    rl.close();

    // Search for the comment
    youtube.commentThreads.list({
      part: 'snippet,replies',
      videoId: videoId,
      textFormat: 'plainText',
      searchTerms: searchText,
      maxResults: 100
    }, (err, response) => {
      if (err) {
        console.error('Error searching for comment:', err);
        return;
      }

      // Print the matching comments and their replies
      for (const item of response.data.items) {
        const comment = item.snippet.topLevelComment?.snippet.textDisplay;
        if (comment) {
          console.log(comment + "\n");

          // Print the replies to the comment
          if(item.replies){
            for (const reply of item.replies.comments) {
              console.log('--- ' + reply.snippet.authorDisplayName + ': ' + reply.snippet.textDisplay);
            }
          }
        }
      }
    });
  });
}); 
