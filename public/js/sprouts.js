// YOUR CODE GOES HERE
var link = $('.more-sprouts');
var ul = $('.tweets');
var nextPage = 2;
$(window).scroll(function() {
   if($(window).scrollTop() + window.innerHeight == $(document).height()) {
     $.get("/tweets.json?page=" + nextPage, function(tweets) {
       if ( tweets.length > 0 ){
         nextPage ++;
       }
       for (var i = 0; i < tweets.length; i++){
         $('ul.tweets').append( "<li class='tweet'><div class='body'>" + tweets[i]["text"] + "</div><div class='user'>" + tweets[i]["username"] + "</div></li>" );
       }
     });
   }
});
