$(document).ready(() => {
  /*.........VARIABLES.........*/
  let quote;
  let author;


  /*.........FUNCTIONS.........*/
  const getQuote = () => {
    // AJAX GET request to quote generating API
    $.ajax({
      type: 'GET',
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      headers: {
        'X-Mashape-Key': 'wvnbZUbsBNmshdccL6zREcXMC6iNp1xFfihjsnXHXLVLHbTHKA',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    })
    .done((result) => {
      // Parse the JSON string (object)
      const res = JSON.parse(result);
      $(".quote-text").text(res.quote);
      $(".author-text").text("- " + res.author);
    })
    .fail((error) => {
      console.log("Error: ", error);
    });
  };

  const tweetQuote = () => {
    const tweetText = $(".quote-text").text();
    const tweetMovie = $(".author-text").text();

    window.open("http://twitter.com/home?status=" + '"' + tweetText + '"' + ' ' + tweetMovie, "_blank");
  };


  /*.........EVENT HANDLERS.........*/
  $(".tweet-button").click(() => {
    tweetQuote();
  });

  $(".next-button").click(() => {
    getQuote();
  });


  /*.........PAGE LOAD.........*/
  getQuote();
});
