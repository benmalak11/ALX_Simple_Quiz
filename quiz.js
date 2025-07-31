checkAnswer.addEventListener("checkAnswer", function {

const checkAnswer = document.getElementById("submit-answer");

function checkAnswer() {
    // Function body
    const correctAnswer = "4";
    const selected = document.querySelector('[name="quiz"]:checked');
     const userAnswer = selected ? selected.value : null;
  feedbackDiv.style.display = "block";
}
 if (userAnswer === correctAnswer) {
    feedbackDiv.textContent = "Correct! Well done.";
 }
 if (userAnswer === anotherAnswer) {
    feedbackDiv.textContent = "That's incorrect. Try again!";
 }
}