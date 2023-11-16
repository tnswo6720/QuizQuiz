import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "CSS에서 'em'과 'rem' 단위의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'em'은 상위 요소의 글꼴 크기를 기준으로 하고, 'rem'은 문서의 루트 요소의 글꼴 크기를 기준으로 한다",
        "'em'은 문서의 루트 요소의 글꼴 크기를 기준으로 하고, 'rem'은 상위 요소의 글꼴 크기를 기준으로 한다",
        "'em'과 'rem'은 모두 상위 요소의 글꼴 크기를 기준으로 한다",
        "'em'과 'rem'은 모두 문서의 루트 요소의 글꼴 크기를 기준으로 한다",
      ],
      answer:
        "'em'은 상위 요소의 글꼴 크기를 기준으로 하고, 'rem'은 문서의 루트 요소의 글꼴 크기를 기준으로 한다",
      explanation:
        "'em' 단위는 상위 요소의 글꼴 크기를 기준으로 계산되며, 'rem' 단위는 문서의 루트 요소(html 요소)의 글꼴 크기를 기준으로 계산됩니다.",
      explanationCode: `/* CSS 코드 */
        html {
          font-size: 16px; /* 루트 요소의 글꼴 크기를 설정 */
        }
        .parent {
          font-size: 2em; /* 상위 요소의 글꼴 크기(16px)의 2배인 32px로 설정 */
        }
        .child {
          font-size: 0.5rem; /* 루트 요소의 글꼴 크기(16px)의 절반인 8px로 설정 */
        }`,
    },
    {
      questionText:
        "CSS에서 'inline'과 'block' 디스플레이의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'inline' 요소는 새로운 줄에서 시작하지 않고, 'block' 요소는 새로운 줄에서 시작한다",
        "'inline' 요소는 새로운 줄에서 시작하고, 'block' 요소는 새로운 줄에서 시작하지 않는다",
        "'inline'과 'block' 요소는 모두 새로운 줄에서 시작한다",
        "'inline'과 'block' 요소는 모두 새로운 줄에서 시작하지 않는다",
      ],
      answer:
        "'inline' 요소는 새로운 줄에서 시작하지 않고, 'block' 요소는 새로운 줄에서 시작한다",
      explanation:
        "'inline' 요소는 새로운 줄에서 시작하지 않고, 이전 요소의 옆에 배치됩니다. 'block' 요소는 항상 새로운 줄에서 시작하고, 가능한 한 가로 방향으로 넓게 펼쳐집니다.",
      explanationCode: `/* CSS 코드 */
        span {
          display: inline; /* 'inline' 요소는 새로운 줄에서 시작하지 않습니다. */
        }
        div {
          display: block; /* 'block' 요소는 새로운 줄에서 시작합니다. */
        }`,
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setQuestions(shuffleArray(initialQuestions));
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
