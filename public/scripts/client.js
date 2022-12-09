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
  
  // Click the Arrow button to display or hide the tweet form
  const arrowBtn = document.getElementById("arrow");
  arrowBtn.addEventListener("click", function() {
    if ($("#tweet-form").is(":hidden")) {
      $("#tweet-form").slideDown("fast");
    } else {
      $("#tweet-form").slideUp("fast");
    }
  });

  // Not display the error message at first
  function errorDisplay() {
    document.getElementById("error").style.display = "none";
  }
  errorDisplay();

  // Define function that slidedown error message, will call it later
  const showErrorEle = function(error) {
    $(".error-massage").text(error);
    $(".error-massage").slideDown("slow");
    // set time to slide up message after 5 seconds
    setTimeout(() => {
      $(".error-massage").slideUp("slow");
    }, 5000);
  };

  // Render each tweet
  const renderTweets = function(tweetArr) {
    const $tweets = $('#tweets-container').empty();
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
      }
    });
  };

  // Scroll to the top
  $("#top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });

  // Submit the form
  $(".new-tweet form").submit(function(event) {
    event.preventDefault(); // Prevent the default form submission behaviour

    // In case there's no input or characters number gets exceed, call showErrorEle
    let inputValue = $(".tweet-box").val();
    if (!inputValue) {
      showErrorEle("⚠️ No input. Please type words in the textbox.");
      return;
    } else if (inputValue.length > 140) {
      showErrorEle("⚠️ Please enter within 140 characters. Do not exceed the limited word count.");
      return;
    }

    $.ajax({
      method: "POST",
      url: '/tweets',
      data: $(this).serialize(), // Turns a set of form data into a query string
      success: function(data) {
        loadTweets(data);
        // Reset the text box and counter
        $('.new-tweet form')[0].reset();
        $('.counter').text(140);
      }
    });

  });
  loadTweets();
});