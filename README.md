# Infinite Brussels Sprouts
This is a mock twitter feed that loads additional tweets from the server using AJAX when the users has scrolled to the bottom
of the page. There are a large number (not quite infinite) of brussles sproutes-related tweets saved locally in a .CSV file. 
The page initially loads 10 tweets. When the user scrolls to the bottom, an AJAX get request retrieves the next 10 tweets. This
allows the user to continue to see tweets about brussels sprouts added without re-loading the page. It's exactly like twitter.

This is a Ruby Sinatra app. If you'd like to run the app, follow these steps:

* Clone the repository
* In the repositorys root directory in your terminal: ```$ruby server.rb```
* Visit http://localhost:4567/tweets


