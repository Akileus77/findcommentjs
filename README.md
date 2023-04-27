# What it does
This program displays the 100 comments below a given YouTube video link.

# Usage
Generate a YouTube API key from the Google API Console. Then, in the code:

    const youtube = google.youtube({
    version: 'v3',
    auth: 'YOUR-API-KEY',  // Replace with your own API key
    });
    
Replace the string corresponding to `auth` with your API key. After installing Node.js (if not already installed), navigate to the directory where the code is downloaded and install the required packages by running:

    npm install
    node index.js
   
Run the code by typing `node index.js` and enter the video ID when prompted in the console:

    Enter the video ID: YOUR ID IS HERE

Then, enter the text you want to search for:

    Enter the search text: Something

If the desired comment is found, all information will be displayed in the terminal.

# Customization
To display more than 100 comments, increase the `maxResults` number in the code.
