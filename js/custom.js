$(document).ready(function () {
  getQuote();
});

function getQuote() {
  $.ajax({
    url: "http://sadhguru-quotes.herokuapp.com/api/quotes/random",
    success: function (result) {
      $('.quote-add-api').prepend(result.tweet);
      $(".go-to-tweet").attr("href", result.url);
    }
  });
}