// Your WolframAlpha App ID
const APP_ID = "J967PJ7U44";

async function solve(input) {
  const url =
    "https://api.wolframalpha.com/v1/result" +
    `?appid=${encodeURIComponent(APP_ID)}` +
    `&i=${encodeURIComponent(input)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`WolframAlpha API error: ${response.status}`);
    }

    return await response.text();
  } catch (err) {
    console.error(err);
    return "Error getting result.";
  }
}

const submitBtn = document.getElementById("submitBtn");
const mathInput = document.getElementById("mathInput");
const resultDisplay = document.getElementById("resultDisplay");

submitBtn.addEventListener("click", async () => {
  const input = mathInput.value.trim();

  if (!input) {
    resultDisplay.value = "Please enter a math problem.";
    return;
  }

  resultDisplay.value = "Solving...";

  const result = await solve(input);

  resultDisplay.value = result;
});
