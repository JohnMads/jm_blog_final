# jm_blog_final

Welcome to my first blog site! The site displays 3 different blogs posts as well as news stories coming from TechCrunch. The site will update the latest new stories by using AJAX. This will update every 5 seconds. The blog site makes use of axios (HTTP client) for the AJAX calls as well as React Dom Router to route to different components.

The following are a list of dependencies that are needed for specific functionality on the site and may be installed using "npm install": "dependencies": { "axios": "^0.18.0", "dom": "0.0.3", "newsapi": "^2.4.0", "react": "^16.8.6", "react-dom": "^16.8.6", "react-router-dom": "^5.0.0", "react-scripts": "2.1.8", "router": "^1.3.3" }

Once the repo is downloaded, you must run "npm init" from root the directory. After all dependencies are installed, it is required to use my API key in order to retrieve the news articles from the Google News API. The API key must be added to this line of code found in the News.js component within the componentDidMount() function:

axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=INSERT_API_KEY_HERE")

The final step will be to run command "npm start", from the root directory of the project, to load the app.

Enjoy!
