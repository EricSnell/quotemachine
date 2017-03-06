$(document).ready(() => {

  /*=== VARIABLES ===*/
  let quote
  let author


  /*=== FUNCTIONS ===*/
  function getQuote() {

    // AJAX GET request to Random Famous Quotes API
    $.ajax({
      type: 'GET',
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      headers: {
        'X-Mashape-Key': 'wvnbZUbsBNmshdccL6zREcXMC6iNp1xFfihjsnXHXLVLHbTHKA',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    })

    // When result is returned, parse the JSON string (object) and display quote
    .done((result) => {
      const res = JSON.parse(result)

      $('.quote-text').fadeOut(function() {
        $(this).text(res.quote).fadeIn(1000)
      })

      $('.author-text').fadeOut(function() {
        let that = this
        setTimeout(function() {
          $(that).text('- ' + res.author).fadeIn(1000)
        }, 1500)
      })

    })

    // Handle's any error with request
    .fail((error) => {
      console.log("Error: ", error)
    })
  }

  // Opens Twitter window to share the quote
  function tweetQuote() {
    const tweetText = $(".quote-text").text()
    const tweetMovie = $(".author-text").text()

    window.open("http://twitter.com/home?status=" + '"' + tweetText + '"' + ' ' + tweetMovie, "_blank")
  }


  /*=== EVENT HANDLERS ===*/
  $(".tweet-button").click(() => {
    tweetQuote()
  })

  $(".next-button").click(() => {
    getQuote()
  })


  /*=== PAGE LOAD ===*/
  getQuote()
})
