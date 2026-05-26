const input = document.getElementById("mathInput");
const button = document.getElementById("submitBtn");
const output = document.getElementById("resultDisplay");

// Your WolframAlpha App ID
const APP_ID = "J967PJ7U44";

async function solveInput() {
  const query = input.value.trim();

  if (!query) return;

  output.value = "Loading...";

  try {

    // Short Answers API endpoint
    const url =
      `https://api.wolframalpha.com/v1/result?appid=${APP_ID}&i=${encodeURIComponent(query)}`;

    const response = await fetch(url);

    // Get plain text result
    const text = await response.text();

    console.log(text);

    if (!response.ok) {
      output.value = "No result";
      return;
    }

    output.value = "= " + text;

  } catch (err) {
    console.error(err);
    output.value = "Connection error";
  }
}

// Button click
button.addEventListener("click", solveInput);

// Enter key
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    solveInput();
  }
});
