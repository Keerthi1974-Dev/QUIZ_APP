
// Generate 100 subtle stars scattered over the page with twinkle animation
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    for(let i=0; i<starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 2 + 1;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.animationDuration = (Math.random() * 5 + 3) + "s";
      starsContainer.appendChild(star);
    }

    const quizData = {
      math: [
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correct: 1 },
        { question: "What is 5 * 5?", options: ["25", "30", "35", "40"], correct: 0 },
        { question: "What is the square root of 64?", options: ["8", "6", "4", "2"], correct: 0 },
        { question: "What is 10 divided by 2?", options: ["5", "6", "4", "3"], correct: 0 },
        { question: "What is the value of x in 2x + 5 = 11?", options: ["3", "4", "5", "6"], correct: 0 }
      ],
      history: [
        { question: "Who was the first President of India?", options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Mahatma Gandhi", "Subhas Chandra Bose"], correct: 1 },
        { question: "Which year did India gain independence?", options: ["1945", "1947", "1950", "1960"], correct: 1 },
        { question: "Who was the leader of the Indian independence movement 'Dandi March'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"], correct: 0 },
        { question: "Which battle is considered a turning point in the Indian independence movement?", options: ["Battle of Plassey", "Battle of Buxar", "Sepoy Mutiny", "Battle of Panipat"], correct: 2 },
        { question: "who started the chipco Movement?", options: ["Sunderlal Bahuguna", "Gandhiji", "Medha Patkar", "Anil Agarwal"], correct: 0 },
      ],
      polity: [
        { question: "What is the name of the Indian Constitution?", options: ["The Constitution of India", "The Indian Constitution", "Constitution of Bharat", "Bharatiya Samvidhan"], correct: 0 },
        { question: "How many fundamental rights are there in the Indian Constitution?", options: ["6", "7", "5", "4"], correct: 1 },
        { question: "Which article of the Indian Constitution deals with the 'Right to Equality'?", options: ["Article 14", "Article 15", "Article 16", "Article 17"], correct: 0 },
        { question: "Who is the head of the judiciary in India?", options: ["President", "Prime Minister", "Chief Justice", "Speaker"], correct: 2 },
        { question: "When was the Constitution of India adopted?", options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"],correct: 2},
      ],
      coding: [
        { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HyperText Making Language", "HyperText Managing Language", "HyperText Making Link"], correct: 0 },
        { question: "Which programming language is commonly used for web development?", options: ["Java", "Python", "JavaScript", "All of the above"], correct: 3 },
        { question: "What is the purpose of CSS?", options: ["To add interactivity to web pages", "To create web pages", "To style web pages", "To manage databases"], correct: 2 },
        { question: "Which of the following is a valid HTML tag?", options: ["<java>", "<python>", "<html>", "<script>"], correct: 2 },
        { question: "Which HTML tag is used to define a hyperlink?",options: ["<link>", "<href>", "<a>", "<hyperlink>"],correct: 2},
      ],
      english: [
        { question: "What is the past tense of 'go'?", options: ["went", "goes", "going", "gone"], correct: 0 },
        { question: "What is the synonym of 'fast'?", options: ["Slow", "Quick", "Big", "Happy"], correct: 1 },
        { question: "What is the antonym of 'hot'?", options: ["Cold", "Warm", "Cool", "Chilly"], correct: 0 },
        { question: "Which of the following words is correctly spelled?", options: ["Occured", "Recieve", "Separate", "All of the above"], correct: 2 },
        {question: "Which word is a **homophone** for 'pair'?",options: ["pare", "peer", "pear", "pier"], correct: 2},


      ],
      gk: [
        { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], correct: 1 },
        { question: "Which planet is known as the 'Red Planet'?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
        { question: "Who is the CEO of Tesla?", options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg"], correct: 0 },
        { question: "What is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], correct: 2 },
        {question: "When did the Pahalgam terror attack, which killed 26 civilians, occur?",options: ["15 August 2024", "22 April 2025", "26 January 2025", "2 October 2024"],correct: 1},
        {question: "What was Operation SINDOOR?",options: [
    "A peacekeeping mission in Kashmir",
    "A disaster relief operation in Uttarakhand",
    "India's military response to the Pahalgam terror attack",
    "A joint exercise with the United Nations"
  ],
  correct: 2
}

        

      ],
      science: [
        { question: "What is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Uranus"], correct: 2 },
        { question: "Which scientist discovered gravity?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Leonardo da Vinci"], correct: 1 },
        { question: "What is the chemical symbol for gold?", options: ["Ag", "Fe", "Au", "Cu"], correct: 2 },
        { question: "Which part of a plant is responsible for photosynthesis?", options: ["Roots", "Stem", "Leaves", "Flowers"], correct: 2 },
        { question: "What is the process called when plants make their own food?", options: ["Respiration", "Photosynthesis", "Decomposition", "Fermentation"], correct: 1 },
        { question: "What is the largest organ in the human body?", options: ["Brain", "Heart", "Liver", "Skin"], correct: 3 },
        { question: "Which of the following is NOT a mammal?", options: ["Whale", "Kangaroo", "Penguin", "Snake"], correct: 3 },
        { question: "What is the scientific term for the 'building blocks of life'?", options: ["Cells", "Molecules", "Tissues", "Organisms"], correct: 0 }
      ]
    };

    let currentSubject = '';
    let currentQuestion = 0;
    let score = 0;

    function startQuiz(subject) {
      currentSubject = subject;
      currentQuestion = 0;
      score = 0;
      document.querySelector('.subject-section').style.display = 'none';
      document.querySelector('.quiz-section').style.display = 'block';
      document.querySelector('.results-section').style.display = 'none';
      loadQuestion();
    }

    questionData.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = option;
    btn.onclick = () => selectOption(index, btn);
    optionsContainer.appendChild(btn);
  });

  document.getElementById('next-btn').disabled = true;
  document.getElementById('next-btn').setAttribute('aria-disabled', 'true');
  document.getElementById('show-results-btn').style.display = 'none';


function selectOption(selectedIndex, selectedBtn) {
  const correctIndex = quizData[currentSubject][currentQuestion].correct;
  const allButtons = document.querySelectorAll('.option-btn');

  allButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correctIndex) {
      btn.style.backgroundColor = '#28a745'; // Green for correct
    }
    if (index === selectedIndex && index !== correctIndex) {
      btn.style.backgroundColor = '#dc3545'; // Red for wrong
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
  }

  const isLastQuestion = currentQuestion === quizData[currentSubject].length - 1;
  document.getElementById('next-btn').style.display = isLastQuestion ? 'none' : 'inline-block';
  document.getElementById('show-results-btn').style.display = isLastQuestion ? 'inline-block' : 'none';
  document.getElementById('next-btn').disabled = false;
  document.getElementById('next-btn').setAttribute('aria-disabled', 'false');
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData[currentSubject].length) {
    loadQuestion();
  }
}

function showResults() {
  document.querySelector('.quiz-section').style.display = 'none';
  document.querySelector('.results-section').style.display = 'block';

  const totalQuestions = quizData[currentSubject].length;
  let compliment = '';

  if (score === totalQuestions) {
    compliment = 'Excellent! Perfect score!';
  } else if (score >= 3) {
    compliment = 'Good job! Keep it up!';
  } else {
    compliment = 'Needs improvement. Keep practicing!';
  }

  document.getElementById('results-summary').innerText =
    `You scored ${score} out of ${totalQuestions}.\n${compliment}`;
}


function retryQuiz() {
  startQuiz(currentSubject);
}

function backToSubjects() {
  document.querySelector('.subject-section').style.display = 'block';
  document.querySelector('.quiz-section').style.display = 'none';
  document.querySelector('.results-section').style.display = 'none';
}
function loadQuestion() {
  const questionData = quizData[currentSubject][currentQuestion];

  // Update header info
  document.getElementById('subject-name').innerText = currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1);
  document.getElementById('current-question').innerText = `Question ${currentQuestion + 1}`;
  document.getElementById('score').innerText = `Score: ${score}`;

  // Show question text
  const questionEl = document.getElementById('question');
  questionEl.innerText = questionData.question;

  // Clear previous options
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  // Create buttons for options
  questionData.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = option;
    btn.disabled = false;
    btn.style.backgroundColor = 'rgba(0, 123, 255, 0.5)'; // Reset color
    btn.onclick = () => selectOption(index, btn);
    optionsContainer.appendChild(btn);
  });

  // Reset next button
  const nextBtn = document.getElementById('next-btn');
  nextBtn.disabled = true;
  nextBtn.setAttribute('aria-disabled', 'true');
  nextBtn.style.display = 'inline-block';

  // Hide show results button initially
  document.getElementById('show-results-btn').style.display = 'none';
}
 
