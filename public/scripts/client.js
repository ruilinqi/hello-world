/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const createTweetElement = function(tweetData) {
    const $tweet = $(`
        <article class="tweet">
          <header class="tweet-header">
          <div class="tweet-header-left">
          <img class="tweet-img" src="${tweetData.user.avatars}" alt="/images/profile-tweet.png">
          <h3 class="avatar-name">${tweetData.user.name}</h3>
          </div>
          <div class="tweet-header-right">
            <p class="tweet-handle">${tweetData.user.handle}</p>
          </div>
          </header>
          <section class="tweet-content">
            <p class="tweet-text">${tweetData.content.text}</p>

          </section>
          <footer class="tweet-footer">
            <p> ${timeago.format(tweetData.created_at)} </p>
            <div class="reactions">
              <a href=""><i class="fas fa-flag"></i></a>
              <a href=""><i class="fas fa-retweet"></i></a>
              <a href=""><i class="fas fa-heart"></i></a>
            </div> 
          </footer>
        </article>`);
    return $tweet;
  };


// Test / driver code (temporary)
//console.log(tweetData.user.avatars);
//console.log('tweet', $tweet); // to see what it looks like
//$(`#tweets-container`).append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

  // Render each tweet
  const renderTweets = function(tweetArr) {
    var $tweets = $('#tweets-container').empty();
    // loops through tweets
    for (let tweet of tweetArr) {
      // calls createTweetElement for each tweet
      const createdTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $tweets.prepend(createdTweet);
    }
  };
 
  // Get new tweets from /tweets, and load it
  const loadTweets = function() {
    $.ajax({
      method: "GET",
      url: '/tweets',
      data: $(this).serialize(),
      success: function(result) {
        renderTweets(result);
        // let tweetsFinal = renderTweets(result);
        // $('#tweet-container').append(tweetsFinal);
      }
    });
  };
  
  // Submit the form
  $(".new-tweet form").submit(function(event) {  
    event.preventDefault();
  
    $.ajax({
      method: "POST",
      url: '/tweets',
      data: $(this).serialize(), // Turns a set of form data into a query string
      success: function (data) {
        loadTweets(data);
        // Reset the text box and counter
        $('.new-tweet form')[0].reset();
        $('.counter').text(140);
      }
    });
    
  });
  loadTweets();   
});