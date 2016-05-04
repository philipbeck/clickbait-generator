//all kinds of arrays go here
//for the subject of most articles
var nouns = ["cat gifs", "wedding photos", "dank memes", "legal highs",
"teens", "life hacks", "cysts being popped"];
//sometimes articles want more description
var adjectives = ["cool", "rad", "horrifying", "soothing"];

$(document).ready(function(){
  //main method for the button
  $("#generator-button").click(function(){
    $("#clickbait-title").text(generateTitle());
  });
});


function generateTitle(){
  //variable for random number the number 0 will change as I do more varieties of bait
  //might weight it for certain kinds to be more common in the future
  var i = parseInt(Math.random() * 0,10);
  if(i == 0){
    return listBait();
  }
}

//the standard variety of clickbait
function listBait(){
  var title = "";

  title = title + parseInt(((Math.random() * 45) + 5) , 10);
  //decide whether to have an adjective as well
  if(Math.random() < 0.7){
    title = title + " " + getWord(adjectives);
  }
  title = title + " " + getWord(nouns);
  return title;
}

//gets a String at random out of an array
function getWord(list){
  return list[parseInt(Math.random() * (list.length), 10)];
}
