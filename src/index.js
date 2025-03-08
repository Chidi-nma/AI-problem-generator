function generateProblem(event) {
  event.preventDefault();

  new Typewriter("#problems", {
    strings: "Problem goes here",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let problemFormElement = document.querySelector("#problem-generator-form");

problemFormElement.addEventListener("submit", generateProblem);
