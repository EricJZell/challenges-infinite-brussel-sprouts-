// YOUR CODE GOES HERE
var link = $('.more-sprouts');
var ul = $('.tweets');
var page = 1;
link.click(function() {
  event.preventDefault();
  page ++;
  $.get("/tweets.json?page=" + page, function(tweets) {
    for (var i = 0; i < tweets.length; i++){
      $('ul.tweets').append( "<li class='tweet'><div class='body'>" + tweets[i]["text"] + "</div><div class='user'>" + tweets[i]["username"] + "</div></li>" );
    }
  });
});
