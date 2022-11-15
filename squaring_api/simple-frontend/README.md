# Simple API Frontend

## Description

This repo is designed to be a simple frontend that takes in a number from the user. It then sends a request to the specified API in `index.js` using that number, and presents the response to the user.

Currently, this repo is expecting an API response from the url
`http://127.0.0.1:8000/square/${number}`

This is your 'localhost' (a web server running locally, on the same computer that you're sending the request from), `http://127.0.0.1:8000`, at the route `square/<number>`, where the user enters a number and it is sent in the request. Your web server must be _on_ in order for this frontend to receive a response.

This url can be updated to send a request to any other API instead on `line 12` of file `index.js`.


## How to Use

Fork and clone this repo to your computer to have your own version that you can track and push edits of.

Open `index.html` in your browser (right-click from your finder/file viewer and choose 'Open With', then pick your browser of choice).

Make sure that your web server is running code that has a route at this url expecting a number (this is the _backend_ of your project. Instructions for this part of the code are beyond the scope of this frontend repo).

Enter a number into the form on the browser. That number squared should appear below the form.
