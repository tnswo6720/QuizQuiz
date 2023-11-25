import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText:
        "CSS에서 아래 코드의 빈칸에 들어갈 적절한 선택자는 무엇일까요?",
      code: `
      ______ .item {
        color: red;
      }
      `,
      answerOptions: ["#", ".", "*", "div"],
      answer: "#",
      explanation:
        "'#'은 아이디 선택자를 의미합니다. 아이디 선택자는 HTML 문서 내에서 유일하게 존재해야하며, 한 요소에만 적용됩니다.",
    },
    {
      questionText:
        "CSS에서 아래 코드의 빈칸에 들어갈 적절한 결합자는 무엇일까요?",
      code: `
      div ______ p {
        color: blue;
      }
      `,
      answerOptions: [">", "+", "~", " "],
      answer: ">",
      explanation:
        "'>'는 자식 결합자를 의미합니다. 이 결합자는 부모 요소 바로 아래에 있는 자식 요소에만 스타일을 적용합니다.",
    },
    {
      questionText:
        "CSS에서 아래 코드의 빈칸에 들어갈 적절한 선택자는 무엇일까요?",
      code: `
      ______ {
        background-color: yellow;
      }
      `,
      answerOptions: ["body", "div", "p", "a"],
      answer: "body",
      explanation:
        "'body'는 HTML 문서의 본문을 선택하는 선택자입니다. 이 선택자를 이용하면 전체 페이지의 배경색을 변경할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 아래 코드의 빈칸에 들어갈 적절한 결합자는 무엇일까요?",
      code: `
      h1 ______ p {
        font-size: 20px;
      }
      `,
      answerOptions: [">", "+", "~", " "],
      answer: "+",
      explanation:
        "'+'는 인접 형제 결합자를 의미합니다. 이 결합자는 첫 번째 요소 바로 다음에 있는 형제 요소에만 스타일을 적용합니다.",
    },
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
