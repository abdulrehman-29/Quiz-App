let quiz = document.getElementById("quiz");
let quesCountEl = document.getElementById("quesCount");
let timerEl = document.getElementById("questionNumber");

const quizQuestions = [
  {
    question: "1. What does HTML stand for?",
    option1: "Hyper Text Markup Language",
    option2: "High Text Markup Language",
    option3: "Hyper Tabular Markup Language",
    option4: "Home Text Multi Language",
    correctAnswer: "option1"
  },
  {
    question: "2. Which HTML tag is used for the largest heading?",
    option1: "<heading>",
    option2: "<h6>",
    option3: "<h1>",
    option4: "<head>",
    correctAnswer: "option3"
  },
  {
    question: "3. Which HTML element is used to insert a line break?",
    option1: "<break>",
    option2: "<br>",
    option3: "<lb>",
    option4: "<p>",
    correctAnswer: "option2"
  },
  {
    question: "4. Which tag is used to create a hyperlink in HTML?",
    option1: "<a>",
    option2: "<link>",
    option3: "<href>",
    option4: "<url>",
    correctAnswer: "option1"
  },
  {
    question: "5. Which attribute is used to display image alt text?",
    option1: "title",
    option2: "src",
    option3: "alt",
    option4: "description",
    correctAnswer: "option3"
  },
  {
    question: "6. Which HTML attribute is used to define inline styles?",
    option1: "class",
    option2: "style",
    option3: "styles",
    option4: "font",
    correctAnswer: "option2"
  },
  {
    question: "7. Which tag is used to define an unordered list in HTML?",
    option1: "<ol>",
    option2: "<list>",
    option3: "<ul>",
    option4: "<ulist>",
    correctAnswer: "option3"
  },
  {
    question: "8. Which HTML element is used to specify a footer for a document or section?",
    option1: "<bottom>",
    option2: "<footer>",
    option3: "<section>",
    option4: "<foot>",
    correctAnswer: "option2"
  },
  {
    question: "9. Which character is used to indicate an end tag in HTML?",
    option1: "/",
    option2: "*",
    option3: "<",
    option4: "^",
    correctAnswer: "option1"
  },
  {
    question: "10. What is the correct HTML element for playing video files?",
    option1: "<media>",
    option2: "<movie>",
    option3: "<video>",
    option4: "<play>",
    correctAnswer: "option3"
  },
  {
    question: "11. What is the correct HTML element for playing audio files?",
    option1: "<sound>",
    option2: "<audio>",
    option3: "<music>",
    option4: "<mp3>",
    correctAnswer: "option2"
  },
  {
    question: "12. How can you make a numbered list in HTML?",
    option1: "<ul>",
    option2: "<ol>",
    option3: "<dl>",
    option4: "<list>",
    correctAnswer: "option2"
  },
  {
    question: "13. How can you make a checkbox in HTML?",
    option1: '<input type="checkbox">',
    option2: "<checkbox>",
    option3: '<input type="check">',
    option4: "<check>",
    correctAnswer: "option1"
  },
  {
    question: "14. Which HTML element defines the title of a document?",
    option1: "<head>",
    option2: "<meta>",
    option3: "<title>",
    option4: "<header>",
    correctAnswer: "option3"
  },
  {
    question: "15. Which tag is used to create a drop-down list?",
    option1: '<input type="dropdown">',
    option2: "<list>",
    option3: "<select>",
    option4: "<dropdown>",
    correctAnswer: "option3"
  },
  {
    question: "16. Which element is used to define a multiline text input control?",
    option1: "<textarea>",
    option2: "<text>",
    option3: '<input type="textbox">',
    option4: "<field>",
    correctAnswer: "option1"
  },
  {
    question: "17. Which HTML tag is used to define important text?",
    option1: "<strong>",
    option2: "<important>",
    option3: "<b>",
    option4: "<i>",
    correctAnswer: "option1"
  },
  {
    question: "18. Which HTML tag is used to define emphasized text?",
    option1: "<italic>",
    option2: "<em>",
    option3: "<i>",
    option4: "<emphasize>",
    correctAnswer: "option2"
  },
  {
    question: "19. Which tag is used to define a table row?",
    option1: "<tr>",
    option2: "<td>",
    option3: "<th>",
    option4: "<table>",
    correctAnswer: "option1"
  },
  {
    question: "20. Which tag is used to define a standard table cell?",
    option1: "<th>",
    option2: "<td>",
    option3: "<tr>",
    option4: "<cell>",
    correctAnswer: "option2"
  },
  {
    question: "21. What is the correct HTML declaration for HTML5?",
    option1: "<!DOCTYPE html>",
    option2: "<!DOCTYPE HTML5>",
    option3: "<html doctype>",
    option4: '<?xml version="1.0"?>',
    correctAnswer: "option1"
  },
  {
    question: "22. Which attribute opens a link in a new tab?",
    option1: 'target="_self"',
    option2: 'target="_blank"',
    option3: 'target="_new"',
    option4: 'newtab="true"',
    correctAnswer: "option2"
  },
  {
    question: "23. Which HTML tag is used to embed an image?",
    option1: "<image>",
    option2: "<img>",
    option3: "<pic>",
    option4: "<src>",
    correctAnswer: "option2"
  },
  {
    question: "24. Which HTML element contains metadata about the page?",
    option1: "<head>",
    option2: "<body>",
    option3: "<meta>",
    option4: "<info>",
    correctAnswer: "option1"
  },
  {
    question: "25. Which element is used to group inline elements for styling?",
    option1: "<div>",
    option2: "<span>",
    option3: "<p>",
    option4: "<section>",
    correctAnswer: "option2"
  }
];

let index = 0;
let score = 0;
let timeLeft = 20;
let timerInterval = null;

function escapeHTML(str) {
  let div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function startTimer() {
  timeLeft = 20;
  timerEl.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      handleNext();
    }
  }, 1000);
}

function loadQuestion() {
  const currentQ = quizQuestions[index];

  quesCountEl.textContent = index + 1;

  quiz.innerHTML = `
    <h2 id="question">${escapeHTML(currentQ.question)}</h2>

    <div class="option-item">
      <input type="radio" id="opt1" name="quizOption" value="option1">
      <label for="opt1">${escapeHTML(currentQ.option1)}</label>
    </div>

    <div class="option-item">
      <input type="radio" id="opt2" name="quizOption" value="option2">
      <label for="opt2">${escapeHTML(currentQ.option2)}</label>
    </div>

    <div class="option-item">
      <input type="radio" id="opt3" name="quizOption" value="option3">
      <label for="opt3">${escapeHTML(currentQ.option3)}</label>
    </div>

    <div class="option-item">
      <input type="radio" id="opt4" name="quizOption" value="option4">
      <label for="opt4">${escapeHTML(currentQ.option4)}</label>
    </div>

    <button id="nextBtn" class="btn" style="margin-top: 15px;" disabled>Next Question</button>
  `;

  const nextBtn = document.getElementById("nextBtn");
  const options = document.querySelectorAll('input[name="quizOption"]');

  options.forEach((radio) => {
    radio.addEventListener("change", () => {
      nextBtn.disabled = false;
    });
  });

  nextBtn.addEventListener("click", handleNext);

  startTimer();
}

function handleNext() {
  clearInterval(timerInterval);

  const selectedOption = document.querySelector('input[name="quizOption"]:checked');

  if (selectedOption && selectedOption.value === quizQuestions[index].correctAnswer) {
    score++;
  }

  index++;

  if (index < quizQuestions.length) {
    loadQuestion();
  } else {
    clearInterval(timerInterval);
    let percentage = Math.round((score / quizQuestions.length) * 100);

    quiz.innerHTML = `
      <div class="result-box">
        <h2>Quiz Completed!</h2>
        <p class="result-text">Score: <strong>${score} / ${quizQuestions.length}</strong></p>
        <p class="result-text">Percentage: <strong>${percentage}%</strong></p>

        <div class="btn-group">
          <button id="restartBtn" class="btn">Try Again</button>
          <button id="logoutBtn" class="btn logout-btn">Logout</button>
        </div>
      </div>
    `;

    document.getElementById("restartBtn").addEventListener("click", () => {
      index = 0;
      score = 0;
      loadQuestion();
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}

// Start Quiz
loadQuestion();