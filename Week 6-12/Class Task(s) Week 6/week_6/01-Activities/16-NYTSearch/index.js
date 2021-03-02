var apiKey = "ViDGWGKn6Nvaqa9zQM30j3Ws12espMFg";
var query = $("#searchterm").text();
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + apiKey;

$("#submitButton").on("click", function () {
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response){
            
            var results = response.response.docs[0].abstract;
            var articleDiv = $("<div>");
            var p = $("<p>").text(results);
            console.log(response.response.docs[0].abstract);
            articleDiv.append(p);
            $("body").append(articleDiv);
        })

});
