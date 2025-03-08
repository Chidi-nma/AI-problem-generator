function displayProblem(response) {
  console.log("Problem generated");
  console.log(response.data.answer);
  new Typewriter("#problems", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateProblem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "61350a1ad6529158aboa62df0c4fb6t9";
  let prompt = `Generate ideas for solving real-life pressing and important problems related to ${instructionsInput.value} and step-by-step instructions on how to solve the problem and start a profitable business. I will give you a specific area or industry that I would like you to focus on; the ideas must be impacted by technology somehow.`;
  let context =
    "You are an experienced researcher and problem expert with many years of experience in researching problems whose solution will lead to financial profit for entrepreneurs, businesses, and start-ups. Your mission is to generate the response in basic HTML with no styling. Separate each <li> element with a <br/>. Do not overlap the text; I repeat, do NOT overlap each line; let the 2nd problem be in a separate paragraph. Keep the formatting simple; keep it to only 2 problems. Put the steps in an ordered list. Improve the format if it's not good. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Problems");
  console.log(`Prompt is ${prompt}`);

  axios.get(apiUrl).then(displayProblem);
}

let problemFormElement = document.querySelector("#problem-generator-form");

problemFormElement.addEventListener("submit", generateProblem);
