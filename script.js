script.js
let jokeText = document.getElementById("joke-text");
let btn = document.getElementById("btn");
let laughEmoji = document.getElementById("laugh");

const url =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

btn.addEventListener("click", function () {
  console.log("btn clicked");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.joke) {
        jokeText.textContent = data.joke;
        laughEmoji.textContent = "😂😂😂";
    } else {
        joke.textContent = "Joke Not Found. Try Again!";
      }
    })
    .catch((error) => {
      console.log("Error while fetching joke : ", error);
      jokeText.textContent = "Error while fetching a joke.";
    });
});