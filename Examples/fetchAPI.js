//returns a promise

const fetch = require("node-fetch");

fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote/")
    .then(data => data.json())
    .then(d => console.log(d.starWarsQuote))
    .catch(err => console.log(err.message));
