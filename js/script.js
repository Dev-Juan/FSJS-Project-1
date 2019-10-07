/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/* Treehouse FSJS project 1        
      by: Juan Rivera */


      // Array of quotes
let quotes = [
  {
      quote:"To tell you the truth, I never thought of myself as much of a success.",
      source: 'Stan Lee',
      tag: '#inspirational'
  },
  {
      quote: "I'm always trying to tackle subjects that tax me and make me think. That’s the key to staying young at heart. The brain has to be exercised the same as the rest of the body.",
      source: 'Clint Eastwood',
      tag: '#inspirational'
  },
  {
      quote: "Success? I don’t know what that word means. I’m happy. But success, that goes back to what in somebody’s eyes success means. For me, success is inner peace. That’s a good day for me.",
      source: 'Denzel Washington',
      tag: '#inspirational'
  },
  {
      quote: "I don't have friends. I got family.",
      source: 'Vin Diesel',
      citation: 'Furious 7',
      year: 2015,
      tag: '#moviequote'
  },
  {
      quote: "Stop chasing the money and start chasing the passion.",
      source: 'Tony Hsieh',
      tag: '#inspirational'
  },
];
//console.log(quotes);

//Getting the random quote with this function 
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  let randomQuote = quotes[randomNumber]
  return randomQuote;
}

//Getting random RGB colors with this function.

function randomColors() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + r + "," + g + "," + b + ")";
  document.body.style.backgroundColor = bgColor;
}
// printQuote function to display quotes

function printQuote() {
  let finalQuote = getRandomQuote();
  randomColors();
  let message = '';
  message += '<p class="quote">' + finalQuote.quote + '</p>';
  message += '<p class="source">' + finalQuote.source + '<br>'; 
  // Using if statements to add citation, year, and tags if they are present in the array of objects.
  if (finalQuote.citation) {
      message += '<span class="citation">' + finalQuote.citation + '</span>';
}
  if (finalQuote.year) {
    message += '<span class="year">' + finalQuote.year + '</span><br>';
}
  if (finalQuote.tag){
    message += '<span class="tag">' + finalQuote.tag + ' </span>';
  }
    message += '</p>';
    //targeting the div
    document.getElementById("quote-box").innerHTML = message;
    return message;
}

printQuote();
//For the button to show another quote and also the setInterval() that i set to change to a new quote and new background color every 20 seconds. 
setInterval(printQuote, 20000);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// End of Project 1




