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
      source: "Pablo Picasso",
      context: "arts"
  },
  {
      quote: "Never interrupt your enemy when he is making a mistake.",
      source: "Napoleon Bonaparte",
      year: 1879,
      context: "war, military"
  },
  {
      quote: "If you can count your money, you don't have a billion dollars.",
      source: "J. Paul Getty",
      context: "business, economics"
  },
  {
      quote: "This book fills a much-needed gap.",
      source: "Moses Hadas in a review",
      context: "literature"
  },
  {
      quote: "Some cause happiness wherever they go; others, whenever they go.",
      source: "Oscar Wilde",
      context: "humor"
  },
  {
      quote: "I have never killed anyone, but I have read some obituary notices with great satisfaction.",
      source: "Clarence Darrow",
      year: 1932,
      citation: "The Story of My Life",
      context: "humor"
  },
  {
      quote: "I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.",
      source: "Ludwig Wittgenstein",
      context: "philosophy"
  },
  {
      quote: "Whenever I climb I am followed by a dog called 'Ego'.",
      source: "Friedrich Nietzsche",
      context: "philosophy"
  },
  {
      quote: "He is one of those people who would be enormously improved by death.",
      source: "H. H. Munro",
      year: 1914,
      citation: "The Feast of Nemesis",
      context: "humor"
  },
  {
      quote: "Give me chastity and continence, but not yet.",
      source: "Saint Augustine",
      year: '384',
      context: "history, religion"
  }
];

/***
 * `getRandomQuote` function
 * s/create a random num, and use that num to 
 * return a random obj from the quotes array
***/
const randomizer = (length) => Math.floor(Math.random() * length); 
const getRandomQuote = (quotesArr) => {
 // save random index value to a variable
   const idx = randomizer(quotes.length);
 // output the object at the random index
   return quotesArr[idx];
}

const getRandomColor = () => {
   let red = randomizer(255);
   let green = randomizer(255);
   let blue = randomizer(255);
   let sum = red + green + blue;
   // if the random color is too bright, we'll shift the text contrast
   if (sum > 500) {
      document.querySelector('body').style.color = 'currentColor';
      document.getElementById('load-quote').style.color = 'currentColor'
   } else {
      document.querySelector('body').style.color = 'white';
      document.getElementById('load-quote').style.color = 'currentColor'
   }
   return `rgb(${red}, ${blue}, ${green})`;
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
   // adding two line breaks to space content
   html += `<br><br><span class="context">${quote.context}</span></p>`;
   document.getElementById('quote-box').innerHTML = html;
   document.querySelector('body').style.backgroundColor = getRandomColor();
   
}

// quote s/refresh every 10 seconds (10000ms)
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);