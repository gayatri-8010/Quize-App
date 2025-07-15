const quiz = [
  { q: "What does HTML stand for?", o: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language", "Hyperlinks and Text Mark Language"], a: 0 },
  { q: "Which tag is used to create a hyperlink in HTML?", o: ["<a>", "<link>", "<href>", "<url>"], a: 0 },
  { q: "Which CSS property changes text color?", o: ["font-color", "text-color", "color", "style"], a: 2 },
  { q: "What does CSS stand for?", o: ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style System", "Colorful Style Syntax"], a: 0 },
  { q: "Which tag is used for inserting a line break in HTML?", o: ["<br>", "<break>", "<lb>", "<newline>"], a: 0 }
];

let current = 0, score = 0;

function showQuestion() {
  document.getElementById('result').textContent = '';
  const q = quiz[current];
  document.getElementById('question').textContent = q.q;
  const options = document.getElementById('options');
  options.innerHTML = '';
  q.o.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index);
    options.appendChild(btn);
  });
}

function checkAnswer(index) {
  const correct = quiz[current].a;
  if (index === correct) score++;
  disableOptions();
  document.getElementById('result').textContent = index === correct ? "Correct!" : "Wrong!";
}

function disableOptions() {
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    document.querySelector('.quiz-container').innerHTML = `<h2>🎉 You scored ${score}/${quiz.length}</h2>`;
  }
}

showQuestion();
