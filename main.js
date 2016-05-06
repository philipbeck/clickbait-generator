//all kinds of arrays go here
//for the subject of most articles
var nouns = ["cat gifs", "wedding photos", "dank memes", "legal highs",
"teens", "life hacks", "cysts being popped", "underaged children", "4chan posts",
"local mums", "halal slaughterhouses", "skinny bitches", "perfectly timed photos",
"white girls", "dictators", "youths", "jazz musicians", "acid victims",
"crooners", "feet", "goats", "novelty joints", "memes", "lol cats", "youtube sensations",
"ghost stories", "revealing dresses", "Nicolas Cage gifs", "dwarves of Erebor",
"slags", "lads", "communists", "sandwich fillings", "bad trips", "holidays in south east asia",
"rudeboys", "mail order brides", "doctors", "dildos", "inflatable Magaret Thatcher dolls",
"sex dolls", "clown outfits", "child celebrities who grew up to become ugly", "body builders",
"garlic bread memes", "porcelin dolls", "film spoilers", "lesser known superheros"];
//singular nouns for different kinds of title
var noun = ["local mum", "thirteen year old boy", "sixty year old grandmother", "neighbour",
"genious toddler", "quadruple amputee", "porn star", "bride to be", "politcian",
"local vicar", "elderly war veteran", "teen mum", "man with breast cancer"];
//singular celebrity names
var celebrity = ["Justin Beiber", "Nicholas Cage", "Donald Trump", "Nickelback",
"Bernie Sanders", "Osama bin Laden", "Kanye West", "Brian Blessed", "Rolf Harris",
"Alan Carr"];
//doing things
var verb = ["makes millions on the internet", "defies doctors", "amazes the internet",
"amazes everyone at wedding"];
//sometimes articles want more description
var adjectives = ["cool", "radical", "horrifying", "soothing", "sexy", "arousing",
"unholy", "fergalicious", "sick", "drole", "suave", "yucky", "raging", "postulating", "bombastic",
"politically-correct", "cracking", "cute", "amazing", "cute", "lucky", "dench", "creepy",
"ravishing"];
//stuff for the end of most articles
//endings that don't need anything adding
var plainEnd = ["that will blow your mind", "that will make you feel sick",
"that will add four inches to your dick", "that will make you slim", "that will disgust you",
"that doctors hate", "that mum's love", "which will make you FEEL", "that only 90s kids will remember"];
//endings with a noun in them
var nounEnd = ["that will change the way you think of %s", "to stop you from looking at %s",
"that will ruin your late night sessions of masturbating over %s", "that will make you lose your faith in %s"];
//endings of things that someone does
var doingEnd = ["with this simple trick", "from home on the internet",
 "without even leaving the house", "fully clothed"];

var doingNounEnd = ["with nothing but some old %s", "with a webcam and a pair of %s"];


$(document).ready(function(){
  $("#clickbait-title").html(generateTitle());
  $(".copyable-bait").text($("#clickbait-title").text());

  //main method for the button
  $(".generate").click(function(){
    $("#clickbait-title").html(generateTitle());
    $(".copyable-bait").html($("#clickbait-title").text());
  });

  var clipboard = new Clipboard(".copy-to-clipboard");

  clipboard.on('success', function(e) {
      alert("Copied tasty click bait! Enjoy");

      e.clearSelection();
  });

  clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });

});



function generateTitle(){
  var title;
  //variable for random number the number 0 will change as I do more varieties of bait
  //might weight it for certain kinds to be more common in the future
  //the 10 in parse int somehow makes the parseInt better somehow
  var i = Math.random() * 2;
  if(i <= 1.2){
    title = generateListBait();
  }
  else if(i <= 2){
    title = generateTemptingBait();
  }

  //happpens quite rarely because random caps is stressful
  if(Math.random() < 0.25){
    title = randomlyCapitalise(title);
  }
  //random exclaimation marks are more common
  if(Math.random() < 0.6){
    title = randomlyAppendPunctuation(title);
  }
  //1 in 25 change to add link to never gonna give you up
  if(Math.random() < 0.04){
    title = "<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" target=\"_blank\">" + title + "</a>";
  }

  return title;
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
    var i = Math.random();
    i *= 2;
    if(i <= 1){
      title = title + " " + getPlainEnd();
    }
    else if(i <= 2){
      title = title + " " + getNounEnd();
    }
    //puts an especially thing at the end
    if(Math.random() < 0.3){
      title = title + ", especially number " + parseInt(Math.random() * size, 10) + "!";
    }
  }
  return title;
}

//the kind with something you want
function generateTemptingBait(){
  var title = "";
  var i = Math.random();
  //quite rare to get an adjective becuase adjectives on a lot of these ones will
  //seam weird
  if(i < 0.3){
    title = title + getWord(adjectives) + " ";
  }
  title = title + getWord(noun);
  title = title + " " + getWord(verb);
  i = Math.random();
  i *= 2;
  if(i <= 1){
    title = title + " " + getDoingEnd();
  }
  else if(i <= 2){
    title = title + " " + getDoingNounEnd();
  }
  return title;
}

//generates an endings for the article like "that will blow your mind!" etc
function getPlainEnd(){
  return getWord(plainEnd);
}

function getNounEnd(){
  return getWord(nounEnd).replace("%s", getWordFromMultipleLists([nouns, celebrity]));
}

function getDoingEnd(){
  return getWord(doingEnd);
}

function getDoingNounEnd(){
  return getWord(doingNounEnd).replace("%s", getWord(nouns));
}
//gets a String at random out of an array
function getWord(list){
  return list[parseInt(Math.random() * (list.length), 10)];
}

//takes a list of lists
function getWordFromMultipleLists(list){
  var bigList = [];
  for (var i = 0; i < list.length; i++){
    bigList = bigList.concat(list[i]);
  }
  return getWord(bigList);
}

//randomly capitalises words
function randomlyCapitalise(str) {

    var splitStr = str.split(" ");
    //randomly generate how capitalised
    var density = Math.random();
    for(var i = 0; i < splitStr.length; i++) {
        if(Math.random() < density) {
            splitStr[i] = splitStr[i].toUpperCase();
        }
    }

    return splitStr.join(" ");

}

//adds exclamation marks
function randomlyAppendPunctuation(str) {
      // use same randomisation
      var i = Math.floor(Math.random() * 4) + 1;

      for(var j = 0; j < i; j++) {

          str = str.concat("!");

      }

    return str;
}
