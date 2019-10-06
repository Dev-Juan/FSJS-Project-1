/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
      quote:"To tell you the truth, I never thought of myself as much of a success.",
      source: 'Stan Lee'
  },
  {
      quote: "I'm always trying to tackle subjects that tax me and make me think. That’s the key to staying young at heart. The brain has to be exercised the same as the rest of the body.",
      source: 'Clint Eastwood'
  },
  {
      quote: "Success? I don’t know what that word means. I’m happy. But success, that goes back to what in somebody’s eyes success means. For me, success is inner peace. That’s a good day for me.",
      source: 'Denzel Washington'
  },
  {
      quote: "I don't have friends. I got family.",
      source: 'Vin Diesel',
      citation: 'Furious 7',
      year: 2015
  },
  {
      quote: "Stop chasing the money and start chasing the passion.",
      source: 'Tony Hsieh'
  },
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  for (let i = 0; i < quotes.length; i++){
      let randomQuote = quotes[randomNumber];
      return randomQuote;
  }
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  let message = '';
  let finalQuote = getRandomQuote();
  message = "<p class='quotes'>" + finalQuote.quote + "</p>";
  message += "<p class='source'>" + finalQuote.source; 
  if (finalQuote.citation) {
      message += "<span class='citation'>" + finalQuote.citation + "</span>";
}
  if (finalQuote.year) {
    message += "<span class='year'>" + finalQuote.year + "</span>";
}
    message += "</p>";
    document.getElementById("quote-box").innerHTML = message;
    return message;
}

printQuote();

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.





