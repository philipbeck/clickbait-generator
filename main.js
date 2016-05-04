//all kinds of arrays go here
//for the subject of most articles
var nouns = ["cat gifs", "wedding photos", "dank memes", "legal highs",
"teens", "life hacks", "cysts being popped", "underaged children", "4chan posts",
"local mums", "halal slaughterhouses", "skinny bitches", "perfectly timed photos",
"white girls", "dictators", "youths", "jazz musicians", "acid burn victims",
"crooners", "feet", "goats", "novelty joints"];
//sometimes articles want more description
var adjectives = ["cool", "radical", "horrifying", "soothing", "sexy", "arousing",
"unholy", "fergalicious", "sick", "drole"];
//stuff for the end of most articles
//endings that don't need anything adding
var plainEnd = ["that will blow your mind", "that will make you feel sick",
"that will add four inches to your dick", "that will make you slim"];
//endings with a noun in them
var nounEnd = ["that will change the way you think of %s", "to stop you from looking at %s"];

$(document).ready(function(){
  //main method for the button
  $("#generator-button").click(function(){
    $("#clickbait-title").text(generateTitle());
  });
});


function generateTitle(){
  //variable for random number the number 0 will change as I do more varieties of bait
  //might weight it for certain kinds to be more common in the future
  var i = parseInt(Math.random() * 1,10);
  if(i == 0){
    return generateListBait();
  }
}

//the standard variety of clickbait
function generateListBait(){
  var title = "";
  var size = parseInt(((Math.random() * 45) + 5) , 10);
  title = title + size;
  //decide whether to have an adjective as well most of them will do
  if(Math.random() < 0.7){
    title = title + " " + getWord(adjectives);
  }
  title = title + " " + getWord(nouns);
  if(Math.random() < 0.8){
    title = title + " " + getEnding();
  }
  return title;
}

//generates an ending for the article like "that will blow your mind!" etc
function getEnding(){
  var i = Math.random() * 2
  if(i <= 1){
    return getWord(plainEnd);
  }
  else if(i <= 2){
    return getWord(nounEnd).replace("%s", getWord(nouns));
  }
}

//gets a String at random out of an array
function getWord(list){
  return list[parseInt(Math.random() * (list.length), 10)];
}
