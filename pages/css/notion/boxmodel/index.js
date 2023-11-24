import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText: "CSS에서 'Margin'은 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "박스의 내부 여백을 의미한다.",
        "박스의 경계를 의미한다.",
        "박스의 외부 여백을 의미한다.",
        "박스의 내용을 의미한다.",
      ],
      answer: "박스의 외부 여백을 의미한다.",
      explanation:
        "CSS에서 'Margin'은 박스의 외부 여백을 의미합니다. 이는 박스와 다른 요소 사이의 공간을 생성합니다.",
      explanationCode: "div {\n  margin: 10px;\n}",
    },
    {
      questionText: "CSS에서 'Padding'은 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "박스의 내부 여백을 의미한다.",
        "박스의 경계를 의미한다.",
        "박스의 외부 여백을 의미한다.",
        "박스의 내용을 의미한다.",
      ],
      answer: "박스의 내부 여백을 의미한다.",
      explanation:
        "CSS에서 'Padding'은 박스의 내부 여백을 의미합니다. 이는 콘텐츠와 경계 사이의 공간을 생성합니다.",
      explanationCode: "div {\n  padding: 20px;\n}",
    },
    {
      questionText: "CSS에서 'Border'는 무엇을 의미하는가요?",
      code: "",
      answerOptions: [
        "박스의 내부 여백을 의미한다.",
        "박스의 경계를 의미한다.",
        "박스의 외부 여백을 의미한다.",
        "박스의 내용을 의미한다.",
      ],
      answer: "박스의 경계를 의미한다.",
      explanation:
        "CSS에서 'Border'는 박스의 경계를 의미합니다. 이는 박스의 외곽선을 형성합니다.",
      explanationCode: "div {\n  border: 1px solid black;\n}",
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
