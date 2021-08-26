let fetchButton = document.getElementById("fetchBut");
let refreshButton = document.getElementById("refreshBut");


fetchButton.addEventListener("click",fetchAPI);
refreshButton.addEventListener("click",fetchAPI)

function fetchAPI(){
fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote/")
    .then(data => data.json())
    .then(d => showQuote(d))
	.catch(err => showError(err));
}

function showQuote (quoteObj){
	const quoteH1 = document.getElementById("quote");
	let refreshButton = document.getElementById("refreshBut");
	let fetchButton = document.getElementById("fetchBut");
	quoteH1.innerHTML  = quoteObj.starWarsQuote;
	refreshButton.classList.remove("disabled");
	quoteH1.classList.remove("disabled");
	fetchButton.classList.add("disabledButton")
	fetchButton.removeEventListener("click",fetchAPI);
};

function showError(err){
	const quoteH1 = document.getElementById("quote");
	let tagDiv = document.getElementById("quote");
	quoteH1.innerHTML  = "Sorry, we couldn't access the API"
	quoteH1.classList.remove("disabled");
}


