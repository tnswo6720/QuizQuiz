import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText: "CSS는 어떤 언어의 약자인가요?",
      code: "",
      answerOptions: [
        "Cascading Style Sheets",
        "Cascading Style Scripts",
        "Cascading Script Sheets",
        "Cascading Sheet Styles",
      ],
      answer: "Cascading Style Sheets",
      explanation:
        "CSS는 Cascading Style Sheets의 약자로, 웹 페이지의 디자인과 레이아웃을 담당하는 스타일 시트 언어입니다.",
      explanationCode: "",
    },
    {
      questionText: "CSS의 주요 기능은 무엇인가요?",
      code: "",
      answerOptions: [
        "웹 페이지의 내용을 작성하는 것",
        "웹 페이지에 동적인 기능을 추가하는 것",
        "웹 페이지의 디자인과 레이아웃을 제어하는 것",
        "웹 페이지를 인터넷에 게시하는 것",
      ],
      answer: "웹 페이지의 디자인과 레이아웃을 제어하는 것",
      explanation:
        "CSS는 웹 페이지의 디자인과 레이아웃을 제어하는 주요 기능을 가지고 있습니다. 이를 통해 웹 페이지의 다양한 스타일을 효과적으로 관리할 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText: "CSS는 어떤 언어와 함께 사용되는가요?",
      code: "",
      answerOptions: [
        "HTML과 JavaScript",
        "Python과 Java",
        "C++과 C#",
        "PHP와 Ruby",
      ],
      answer: "HTML과 JavaScript",
      explanation:
        "CSS는 HTML과 함께 사용되어 웹 페이지의 디자인을 담당하고, JavaScript와 함께 사용되어 웹 페이지에 동적인 기능을 추가하는 데 사용됩니다.",
      explanationCode: "",
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
