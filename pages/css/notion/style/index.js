import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText: "CSS에서 선택자(selector)는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "스타일을 적용할 HTML 요소를 선택하는 규칙",
        "HTML 요소의 스타일을 정의하는 규칙",
        "HTML 요소의 배치를 결정하는 규칙",
        "HTML 요소의 동작을 제어하는 규칙",
      ],
      answer: "스타일을 적용할 HTML 요소를 선택하는 규칙",
      explanation:
        "CSS에서 선택자(selector)는 스타일을 적용할 HTML 요소를 선택하는 규칙을 의미합니다. 선택자의 종류에는 태그, 클래스, 아이디 등이 있습니다.",
      explanationCode: "p { color: red; } /* 'p'는 선택자입니다. */",
    },
    {
      questionText:
        "CSS에서 속성(property)과 값(value)은 어떤 역할을 하는가요?",
      code: "",
      answerOptions: [
        "속성은 스타일을 적용할 HTML 요소를 선택하고, 값은 속성의 상태를 정의한다.",
        "속성은 HTML 요소의 스타일을 정의하고, 값은 속성의 상태를 정의한다.",
        "속성은 HTML 요소의 배치를 결정하고, 값은 배치의 상태를 정의한다.",
        "속성은 HTML 요소의 동작을 제어하고, 값은 동작의 상태를 정의한다.",
      ],
      answer:
        "속성은 HTML 요소의 스타일을 정의하고, 값은 속성의 상태를 정의한다.",
      explanation:
        "CSS에서 속성(property)은 HTML 요소의 스타일을 정의하는 것을 의미하고, 값(value)은 해당 속성의 상태를 정의하는 것을 의미합니다. 예를 들어, 'color: red;'에서 'color'는 속성이고, 'red'는 값입니다.",
      explanationCode:
        "p { color: red; } /* 'color'는 속성이고, 'red'는 값입니다. */",
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
    const formattedUserAnswer = userAnswer.replace(/\s/g, "").toLowerCase();
    const formattedCorrectAnswer = questions[currentQuestion].answer
      .replace(/\s/g, "")
      .toLowerCase();

    setIsCorrect(formattedUserAnswer === formattedCorrectAnswer);
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
