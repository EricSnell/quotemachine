$(document).ready(() => {
  // VARIABLES
  let quote;
  let author;

  // FUNCTIONS
  const getQuote = () => {
    // AJAX GET request to quote generating API
    $.ajax({
      type: 'GET',
      url: 'http://quotes.rest/qod.json?category=inspire'
    })
    .done((result) => {
      quote = result.contents.quotes[0].quote;
      author = result.contents.quotes[0].author;
      $(".quote-text").text(quote);
      $(".author-text").text("-" + author);
    })
    .fail((error) => {
      console.log("Error: ", error);
    });
  };

  const tweetQuote = () => {
    const tweetText = $(".quote-text").text();
    const
    window.open("http://twitter.com/home?status=" + '"' + tweetText + '"', "_blank");
  };

  // EVENT HANDLERS
  $(".tweet-button").click(() => {
    tweetQuote();
  });

  $(".next-button").click(() => {
    getQuote();
  });

  // WHEN PAGE INITIALLY LOADS
  getQuote();
});
