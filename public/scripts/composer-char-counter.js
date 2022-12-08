$(document).ready(function() {
  // --- our code goes here ---
  console.log("document ready");
  let maxChar = 140;

  // count the characters in the textbox and turn text to red when extends 140
  $(".new-tweet textarea").on("input", function() {
    let remainingChar = maxChar - $(this).val().length;
    let counter = $('.counter');
    counter.text(remainingChar);
    counter = counter.val(); // Set value of an input field (counter) to counter
    if (counter >= 0) {
      $('.counter').css('color', 'black'); // change .counter's css
    } else {
      $('.counter').css('color', 'red'); // change .counter's css
    }
  });
});