
var changetext = setTimeout(newtext, 200);

var newRandomWords = setTimeout(randomword, 100);

var number = 4;

var randomwords = ["Awddwqded", "Subdwdwqtr", "efdwqdwqjnj"];

var randomword = randomwords[Math.floor(Math.random() * randomwords.length)]

console.log(number + 6);

function newtext() {
    newRandomWords;
    document.querySelector("span.randomword").textContent = randomword;
    changetext;
}

console.log(newtext);