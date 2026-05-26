const input = document.getElementById("mathInput");
const button = document.getElementById("submitBtn");
const output = document.getElementById("resultDisplay");

// Replace with your real WolframAlpha App ID
const APP_ID = "J967PJ7U44";

async function solveInput() {
  const query = input.value.trim();

  if (!query) return;

  output.value = "Loading...";

  try {
    const url =
      `https://api.wolframalpha.com/v1/result?i=${encodeURIComponent(query)}&appid=${APP_ID}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("No result");
    }

    const result = await response.text();

    output.value = "= " + result;

  } catch (error) {
    console.error(error);
    output.value = "Error";
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
