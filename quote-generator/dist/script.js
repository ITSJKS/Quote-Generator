const quote = document.getElementById('text');
const author = document.getElementById('author');
const newquote = document.getElementById('new-quote');
const url = "https://api.quotable.io/random";
let getData = () => {
  fetch(url).
  then(data => data.json()).
  then(item => {
    text.innerText = item.content;
    author.innerText = item.author;
  });
};
window.addEventListener("load", getData);
newquote.addEventListener("click", getData);