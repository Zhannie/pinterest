

function sendRequest() {

var username = document.getElementById('username'),
    site = "https://www.pinterest.com/" + username.value + "/feed.rss/";


var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + site + '"') + '&format=xml&callback=?';

// Request that YSQL string, and run a callback function.
$.getJSON(yql, function (data) {      

        var xmlDoc = $(data.results[0]);

        var title = $(xmlDoc).find('title');

        var liLink,
        ulItem;

        var title = $(xmlDoc).find('title');
          $.each(title, function(){
              var liTitle = $('<li></li>').text(this.textContent);

              $(liTitle).each(function(){
                $('#feed').append(liTitle);
              });    
          });

        var link = $(xmlDoc).find('guid');
          $.each(link, function() {
            var liLink = $('<li></li>').text(this.textContent);

            $(liLink).each(function(){
              $('#feed').append(liLink);
            });
          });

        var description = $(xmlDoc).find('description');
          $.each(description, function() {
            var liDesc = $('<li></li>').text(this.textContent);

            $(liDesc).each(function(){
              $('#feed').append(liDesc);
            });
          });



        });
        
};

