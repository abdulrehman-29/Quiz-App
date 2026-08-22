# 🎯 Interactive Web Quiz App

A lightweight, simple, and interactive Quiz Application built using **Vanilla HTML, CSS, JavaScript**, and **LocalStorage**. Users can sign up, log in, attempt timed multiple-choice quizzes, and view their final results upon completion.

---

## ✨ Features

* 🔐 **User Authentication (Sign Up / Log In):** Simple login and registration system stored entirely in the browser's `LocalStorage`.
* ⏱️ **20-Second Countdown Timer:** Every question has a strict 20-second timer. If time runs out before selecting an option, the app automatically moves to the next question.
* 🚫 **Smart Button Validation:** The **Next Question** button remains disabled until the user selects an answer, preventing accidental skips.
* 📊 **Instant Score & Results:** Displays complete test performance and score right after finishing the quiz.
* 💾 **Persistent Session Data:** Uses browser `LocalStorage` so account data and scores persist across page reloads.
* ⚡ **Zero Dependencies:** Built with pure Web Technologies—no external backend, databases, or JS frameworks required!

---

## 🛠️ Tech Stack

* **HTML5** – UI structure and form markup.
* **CSS3** – Layout styling, responsive design, and status colors.
* **JavaScript (ES6)** – Timer logic, form control, scoring algorithm, and DOM manipulation.
* **LocalStorage API** – Client-side storage for user accounts and quiz state.

---

## 📂 Project Structure

```text
quiz-app/
│
├── index.html       # Sign Up & Log In page
├── quiz.html        # Main Quiz interface
├── result.html      # Score breakdown & results screen
│
├── css/
│   └── style.css    # Unified stylesheet for all screens
│
├── js/
│   ├── auth.js      # Sign Up & Login logic with LocalStorage
│   ├── quiz.js      # Quiz timer, questions, and option validation
│   └── questions.js # Quiz questions dataset
│
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

Follow these instructions to run the project locally on your machine.

### Prerequisites

No special tools or backends are required. All you need is a modern web browser (Google Chrome, Firefox, Safari, Edge, etc.).

### Installation & Run Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd quiz-app
   ```

3. **Open in Browser:**
   * Simply double-click `index.html` to open it in your browser.
   * **Alternative (VS Code):** Right-click `index.html` and click **"Open with Live Server"**.

---

## 🎮 How to Play

1. **Create an Account:** Open `index.html` and sign up with a username and password.
2. **Log In:** Use your registered details to log in.
3. **Take the Quiz:**
   * You will have **20 seconds** per question.
   * Select one option to enable the **Next** button.
   * If the time hits `0`, the app automatically jumps to the next question!
4. **View Results:** After the final question, your total score and result summary will be displayed.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to modify and use it for your own projects!
