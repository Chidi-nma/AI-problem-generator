function displayProblem(response) {
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
  let prompt = `Generate ideas for solving real-life pressing and important problems related to ${instructionsInput.value} and step-by-step instructions on how to approach, solve the problem and start a profitable business, talk about the business model. I will give you a specific area or industry that I would like you to focus on, the problems and solution must be impacted by technology`;

  let context =
    "You are an experienced researcher and problem expert with many years of experience in researching problems whose solution will lead to financial profit for entrepreneurs, businesses, and start-ups. Your mission is to generate the response in basic HTML. Separate each line with a <br/> and let the 2nd problem be in a separate paragraph so that it's easier to read. explain the problem a bit before outlining the step-by step-approach to solve the problem. keep it to only 2 problems. Keep it to 7 lines, do not include a title, use the <strong> element where required, if there are more than 2 more problems, tell the user to click the submit button again to view more unique problems";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let problemElement = document.querySelector("#problems");
  problemElement.classList.remove("hidden");

  problemElement.innerHTML = ` <div class = "blink" >⏳ Generating an idea for solving problems related to ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayProblem);
}

let problemFormElement = document.querySelector("#problem-generator-form");

problemFormElement.addEventListener("submit", generateProblem);
