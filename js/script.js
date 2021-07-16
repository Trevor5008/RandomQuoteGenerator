/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
   {
      quote: "Give me a museum and I'll fill it.",
      source: "Pablo Picasso"
  },
  {
      quote: "Never interrupt your enemy when he is making a mistake.",
      source: "Napoleon Bonaparte"
  },
  {
      quote: "If you can count your money, you don't have a billion dollars.",
      source: "J. Paul Getty"
  },
  {
      quote: "This book fills a much-needed gap.",
      source: "Moses Hadas in a review"
  },
  {
      quote: "Some cause happiness wherever they go; others, whenever they go.",
      source: "Oscar Wilde"
  },
  {
      quote: "I have never killed anyone, but I have read some obituary notices with great satisfaction.",
      source: "Clarence Darrow"
  },
  {
      quote: "I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.",
      source: "Ludwig Wittgenstein"
  },
  {
      quote: "Whenever I climb I am followed by a dog called 'Ego'.",
      source: "Friedrich Nietzsche"
  },
  {
      quote: "He is one of those people who would be enormously improved by death.",
      source: "H. H. Munro"
  },
  {
      quote: "Give me chastity and continence, but not yet.",
      source: "Saint Augustine"
  }
];

/***
 * `getRandomQuote` function
***/
const getRandomQuote = (arr) => {
   const idx = Math.floor(Math.random() * arr.length);
   return arr[idx];
}

/***
 * `printQuote` function
***/
const printQuote =()=> {
   const quote = getRandomQuote(quotes);
   document.querySelector('p.quote').innerText = quote.quote;
   document.querySelector('p.source').innerText = quote.source;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);