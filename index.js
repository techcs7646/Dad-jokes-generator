document.getElementById("jokeBtn").addEventListener("click", generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com/", config);
  const data = await response.json();

  document.getElementById("joke").innerHTML = data.joke;
}
