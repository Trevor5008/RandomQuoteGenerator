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
      source: "Napoleon Bonaparte",
      year: 1879
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
      source: "Clarence Darrow",
      year: 1932,
      citation: "The Story of My Life"
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
      source: "H. H. Munro",
      year: 1914,
      citation: "The Feast of Nemesis"
  },
  {
      quote: "Give me chastity and continence, but not yet.",
      source: "Saint Augustine",
      year: '384'
  }
];

/***
 * `getRandomQuote` function
 * s/create a random num, and use that num to 
 * return a random obj from the quotes array
***/
const getRandomQuote = (quotesArr) => {
 // save random index value to a variable
   const idx = Math.floor(Math.random() * quotesArr.length);
 // output the object at the random index
   return quotesArr[idx];
}

/***
 * `printQuote` function
***/
const printQuote = () => {
 // invoke the getRandomQuote helper, and store as a variable
   const quote = getRandomQuote(quotes);
   let html = `
      <p class="quote">${quote.quote}</p>
      <p class="source">${quote.source}`;
   if (quote.citation) {
      html += `<span class="citation">${quote.citation}</span>`;
   }
   if (quote.year) {
      html += `<span class="year">${quote.year}</span>`;
   }
   html += '</p>';
   document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);