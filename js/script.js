$(document).ready(() => {
  // VARIABLES
  let quote;
  let author;
  let image;

  // FUNCTIONS
  const getQuote = () => {
    // AJAX GET request to quote generating API
    console.log('getQuote function called');
    $.ajax({
      type: 'GET',
      url: 'http://quotes.rest/qod.json?category=inspire'
    })
    .done((result) => {
      quote = result.contents.quotes[0].quote;
      author = result.contents.quotes[0].author;
      image = result.contents.quotes[0].background;
      $(".quote-text").text(quote);
      $(".author-text").text("-" + author);
      $("body").css("background-image", "url('" + image + "')");
    })
    .fail((error) => {
      console.log(error);
    });
  };

  const tweetQuote = () => {
    // AJAX POST request to tweet quote
    $.ajax({
      type: 'POST',
      url: 'https://api.twitter.com/1.1/statuses/update.json',
      status: quote
    });
  };

  // EVENT HANDLERS
  $(".tweet-button").click(() => {
    tweetQuote();
  });

  $(".next-button").click(() => {
    console.log('button clicked');
    getQuote();
  });

  getQuote();
});
