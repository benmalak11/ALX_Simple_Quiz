function checkAnswer() {
    // Function body
    const correctAnswer = "4";
    const selected = document.querySelector('[name="quiz"]:checked');
  feedbackDiv.style.display = "block";
}
 if (!selected) {
      feedbackDiv.textContent = "❌ Please select an answer!";
      feedbackDiv.style.color = "#dc3545";
    } else if (selected.value === correctAnswer) {
      feedbackDiv.textContent = "✅ Correct! JavaScript runs in a web browser.";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.textContent = `❌ Wrong! The correct answer is ${correctAnswer}.`;
      feedbackDiv.style.color = "#dc3545";
    }