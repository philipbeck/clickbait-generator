//all kinds of arrays go here
var nouns = ["cat gifs", "wedding photos", "dank memes", "legal highs",
"teens", "life hacks"];

$(document).ready(function(){
  //main method for the button
  $("#generator-button").click(function(){
    $("#clickbait-title").text(generateTitle());
  });
});


function generateTitle(){
  //variable for random number the number 0 will change as I do more varieties of bait
  var i = parseInt(Math.random() * 0,10);
  if(i == 0){
    return baitList();
  }
}

function baitList(){
  var title = "";

  title = title + parseInt(((Math.random() * 45) + 5) , 10);
  title = title + " " + nouns[parseInt(Math.random() * (nouns.length), 10)];
  return title;
}
