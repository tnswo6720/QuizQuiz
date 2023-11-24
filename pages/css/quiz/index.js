import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "CSS에서 요소의 배경색을 변경하는 속성은 무엇인가요?",
      code: `
      div {
        ______: red;
      }
      `,
      answerOptions: [
        "color",
        "background-color",
        "border-color",
        "text-color",
      ],
      answer: "background-color",
      explanation:
        "CSS에서 요소의 배경색을 변경하려면 'background-color' 속성을 사용합니다. 이 속성에 색상 값을 지정하면 해당 요소의 배경색이 변경됩니다.",
    },
    {
      questionText: "CSS에서 요소의 너비를 지정하는 속성은 무엇인가요?",
      code: `
      div {
        ______: 100px;
      }
      `,
      answerOptions: ["width", "height", "size", "length"],
      answer: "width",
      explanation:
        "CSS에서 요소의 너비를 지정하려면 'width' 속성을 사용합니다. 이 속성에 길이 값을 지정하면 해당 요소의 너비가 변경됩니다.",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const shuffledQuestions = initialQuestions.map((question) => ({
      ...question,
      answerOptions: shuffleArray([...question.answerOptions]),
    }));
    setQuestions(shuffleArray(shuffledQuestions));
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
              <p>
                {userAnswer === questions[currentQuestion].answer ? (
                  <>
                    정답입니다!
                    <br />
                    {questions[currentQuestion].explanation}
                  </>
                ) : (
                  <>
                    틀렸습니다.
                    <br />
                    {questions[currentQuestion].explanation}
                  </>
                )}
              </p>
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
