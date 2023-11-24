import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText:
        "CSS에서 색상 코드를 표현하는 방식 중 올바르지 않은 것은 무엇인가요?",
      code: "",
      answerOptions: ["16진수 코드", "RGB 함수", "색상 이름", "숫자 코드"],
      answer: "숫자 코드",
      explanation:
        "CSS에서 색상은 16진수 코드, RGB 함수, 색상 이름으로 표현할 수 있습니다. 숫자 코드로 색상을 표현하는 것은 올바르지 않습니다.",
      explanationCode: "div { color: #ff0000; } /* 16진수 코드 */",
    },
    {
      questionText: "CSS에서 'background-color' 속성은 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "배경 이미지를 설정한다.",
        "배경 색상을 설정한다.",
        "텍스트 색상을 설정한다.",
        "테두리 색상을 설정한다.",
      ],
      answer: "배경 색상을 설정한다.",
      explanation:
        "CSS에서 'background-color' 속성은 요소의 배경 색상을 설정하는 데 사용됩니다.",
      explanationCode: "div { background-color: #ff0000; }",
    },
    {
      questionText: "CSS에서 'background-image' 속성은 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "배경 이미지를 설정한다.",
        "배경 색상을 설정한다.",
        "텍스트 색상을 설정한다.",
        "테두리 색상을 설정한다.",
      ],
      answer: "배경 이미지를 설정한다.",
      explanation:
        "CSS에서 'background-image' 속성은 요소의 배경 이미지를 설정하는 데 사용됩니다.",
      explanationCode: "div { background-image: url('image.jpg'); }",
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