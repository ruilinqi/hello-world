# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This project is worked with HTML, CSS, JS, jQuery and AJAX front-end skills, and Node, Express back-end skills.

## Getting Started

1. Git clone the project `git clone git@github.com:ruilinqi/tweeter-app.git` on your own computer
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. Have fun!

## Final Product
Main Page on desktop/laptop or large size screen
!["Screenshot of main page"](https://github.com/ruilinqi/tweeter-app/blob/master/public/docs/main-page.png)

Main Page on mobile device or small size screen
!["Screenshot of tweet creatation of small screen"](https://github.com/ruilinqi/tweeter-app/blob/master/public/docs/create-tweet-small-screen.png)
!["Screenshot of tweet view page of small screen"](https://github.com/ruilinqi/tweeter-app/blob/master/public/docs/view-tweet-small-screen.png)

## Features
* Write and send tweet to in-memory database
  * Remaining enterable word count
  * Invalid tweets are not allowed (No empty input or exceed limited words count)
  * Warning slides down if there is invaild tweet
* Load tweets from database in reverse chronological order
* Load new tweets from user
* Elements have hover effects
* Responsive design
  * Different layout and design from different size screens
* Button response: Animate to show or hide the typing box
* Scroll to top

## What you can play

* Write your own tweet and post it!
  * You are not allowed to write an invalid tweet.
* Click the red arrow to display or hide the form box.
* View others' tweets. You can also find yours!
  * The tweet has shadow effects if you hover it!
* React to other people's tweets! Mark, retweet or like it!
* If you go down too far, don't forget to click the "Top" button to back to the top!

## Dependencies

- Express
- Node 5.10.x or above
