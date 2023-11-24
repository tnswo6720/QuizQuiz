import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText: "CSS에서 텍스트 속성 중에 해당되지 않는 것은 무엇인가요?",
      code: "",
      answerOptions: ["color", "font-size", "text-align", "margin"],
      answer: "margin",
      explanation:
        "CSS에서 'color', 'font-size', 'text-align'은 텍스트 속성입니다. 'margin'은 박스 모델의 속성으로, 텍스트 속성에는 해당되지 않습니다.",
      explanationCode: "p { color: red; font-size: 16px; text-align: center; }",
    },
    {
      questionText: "CSS에서 글꼴 속성 중에 해당되지 않는 것은 무엇인가요?",
      code: "",
      answerOptions: ["font-family", "font-size", "font-weight", "width"],
      answer: "width",
      explanation:
        "CSS에서 'font-family', 'font-size', 'font-weight'은 글꼴 속성입니다. 'width'는 레이아웃 속성으로, 글꼴 속성에는 해당되지 않습니다.",
      explanationCode:
        "p { font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; }",
    },
    {
      questionText: "웹 글꼴의 장점은 무엇인가요?",
      code: "",
      answerOptions: [
        "사용자의 기기에 설치된 글꼴에 관계없이 웹사이트에서 동일한 글꼴을 보여줄 수 있다.",
        "웹 글꼴을 사용하면 웹사이트의 로딩 속도가 빨라진다.",
        "웹 글꼴을 사용하면 웹사이트의 보안이 강화된다.",
        "웹 글꼴을 사용하면 웹사이트의 구조가 단순해진다.",
      ],
      answer:
        "사용자의 기기에 설치된 글꼴에 관계없이 웹사이트에서 동일한 글꼴을 보여줄 수 있다.",
      explanation:
        "웹 글꼴의 가장 큰 장점은 사용자의 기기에 설치된 글꼴에 관계없이 웹사이트에서 동일한 글꼴을 보여줄 수 있다는 것입니다. 이를 통해 디자인의 일관성을 유지할 수 있습니다.",
      explanationCode:
        "@font-face { font-family: 'MyWebFont'; src: url('webfont.eot'); }",
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
