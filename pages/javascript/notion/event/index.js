import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "자바스크립트에서 이벤트 버블링이란 무엇을 의미하는가요?",
      code: `
        const btn = document.querySelector('button');
        const div = document.querySelector('div');
    
        btn.addEventListener('click', function() {
          console.log('Button clicked!');
        });
    
        div.addEventListener('click', function() {
          console.log('Div clicked!');
        });
      `,
      answerOptions: [
        "하위 요소에서 발생한 이벤트가 상위 요소로 전파되는 현상",
        "상위 요소에서 발생한 이벤트가 하위 요소로 전파되는 현상",
        "이벤트가 동시에 두 개 이상의 요소에서 발생하는 현상",
        "동일한 이벤트가 두 번 이상 발생하는 현상",
      ],
      answer: "하위 요소에서 발생한 이벤트가 상위 요소로 전파되는 현상",
      explanation:
        "이벤트 버블링은 하위 요소에서 발생한 이벤트가 상위 요소로 전파되는 현상을 말합니다.",
    },
    {
      questionText: "자바스크립트에서 이벤트 캡쳐링이란 무엇을 의미하는가요?",
      answerOptions: [
        "하위 요소에서 발생한 이벤트가 상위 요소로 전파되는 현상",
        "상위 요소에서 발생한 이벤트가 하위 요소로 전파되는 현상",
        "이벤트가 동시에 두 개 이상의 요소에서 발생하는 현상",
        "동일한 이벤트가 두 번 이상 발생하는 현상",
      ],
      answer: "상위 요소에서 발생한 이벤트가 하위 요소로 전파되는 현상",
      explanation:
        "이벤트 캡쳐링은 상위 요소에서 발생한 이벤트가 하위 요소로 전파되는 현상을 말합니다.",
    },
    {
      questionText:
        "자바스크립트에서 'addEventListener' 메서드의 세번째 인자로 'true'를 넘긴다면 어떤 현상이 발생하는가요?",
      answerOptions: [
        "이벤트 버블링이 발생한다",
        "이벤트 캡쳐링이 발생한다",
        "이벤트 전파가 중지된다",
        "이벤트 핸들러가 여러 번 호출된다",
      ],
      answer: "이벤트 캡쳐링이 발생한다",
      explanation:
        "'addEventListener' 메서드의 세번째 인자로 'true'를 넘기면, 이벤트 캡쳐링이 발생합니다.",
    },

    // 추가 문제를 넣을 수 있습니다.
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(initialQuestions).map(
      (question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      })
    );
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleSubmit = () => {
    setIsCorrect(userAnswer === questions[currentQuestion].answer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
  };

  return (
    <div className="app">
      {questions.length > 0 ? (
        <>
          <div className="question-section">
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </div>

          <div className="answer-section">
            <h2>선택지</h2>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>제출</button>
          </div>
          {isSubmitted && (
            <div className="explanation-section">
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <pre>{questions[currentQuestion].explanationCode}</pre>{" "}
              {/* 설명에 대한 예시 코드를 보여줍니다. */}
              {currentQuestion < questions.length - 1 && (
                <button onClick={handleNext}>다음 문제</button>
              )}
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;
