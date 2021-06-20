const express = require('express');
const app = express(); // initialize express
const path = require('path');

const hostname = '127.0.0.1';
const port = 5000;

// static files configuration
app.use('/public', express.static('public'));

// Respond for html tag as response
app.get('/', (request, response) => {
    response.send(`<h2>Welcome to Express JS</h2>`);
});

// Respond for a html page
app.get('/home', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
});

// for json response
let githubUser = {
    "login": "khan-aqib",
    "id": 4598155,
    "node_id": "MDQ6VXNlcjQ1OTgxNTU=",
    "avatar_url": "https://avatars.githubusercontent.com/u/4598155?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/khan-aqib",
    "html_url": "https://github.com/khan-aqib",
    "followers_url": "https://api.github.com/users/khan-aqib/followers",
    "following_url": "https://api.github.com/users/khan-aqib/following{/other_user}",
    "gists_url": "https://api.github.com/users/khan-aqib/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/khan-aqib/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/khan-aqib/subscriptions",
    "organizations_url": "https://api.github.com/users/khan-aqib/orgs",
    "repos_url": "https://api.github.com/users/khan-aqib/repos",
    "events_url": "https://api.github.com/users/khan-aqib/events{/privacy}",
    "received_events_url": "https://api.github.com/users/khan-aqib/received_events",
    "type": "User",
    "site_admin": false,
    "name": "khan Aqib",
    "company": "Union Group",
    "blog": "http://facebook.com/",
    "location": "United Arab Emirates",
    "email": null,
    "hireable": true,
    "bio": "A multilingual web Developer with an inherently strong business acumen and extensive sales leadership and business development experience. ",
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 5,
    "followers": 0,
    "following": 20,
    "created_at": "2013-06-03T07:09:58Z",
    "updated_at": "2021-06-17T08:57:30Z"
};
app.get('/user', (request, response) => {
    response.json(githubUser);
});

// for download a file from server
app.get('/file', (request, response) => {
    response.download(path.join(__dirname, 'mypresentation.txt'));
});

app.listen(port, hostname, () => {
    console.log(`Express Server is started at http://${hostname}:${port}`);
});