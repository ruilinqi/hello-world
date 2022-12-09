/* Arror animation */
$(document).ready(function() {
  function moveArrow() {
    var a;
    a = document.getElementById("arrow");
    a.innerHTML = "&#xf103;";
    setTimeout(function () {
        a.innerHTML = "&#xf107;";
      }, 1000);
  }
  moveArrow();
  setInterval(moveArrow, 2000);

});