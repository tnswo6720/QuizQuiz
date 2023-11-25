import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText:
        "CSS 박스 모델에서 실제 콘텐트가 위치하는 영역을 무엇이라고 하나요?",
      code: `
      div {
        ______: 50px;
      }
      `,
      answerOptions: ["padding", "border", "margin", "content"],
      answer: "content",
      explanation:
        "CSS 박스 모델에서 실제 콘텐트가 위치하는 영역을 '콘텐츠'라고 합니다. 하지만 CSS에서는 직접 'content' 속성을 사용하여 콘텐트 영역의 크기를 조절하는 것은 불가능합니다.",
    },
    {
      questionText:
        "CSS 박스 모델에서 콘텐츠와 경계 사이의 공간을 무엇이라고 하나요?",
      code: `
      div {
        ______: 20px;
      }
      `,
      answerOptions: ["content", "padding", "border", "margin"],
      answer: "padding",
      explanation:
        "CSS 박스 모델에서 콘텐츠와 경계 사이의 공간을 '패딩'이라고 합니다. 'padding' 속성을 사용하여 이 공간의 크기를 조절할 수 있습니다.",
    },
    {
      questionText: "CSS 박스 모델에서 박스의 테두리를 무엇이라고 하나요?",
      code: `
      div {
        ______: 2px solid black;
      }
      `,
      answerOptions: ["content", "padding", "border", "margin"],
      answer: "border",
      explanation:
        "CSS 박스 모델에서 박스의 테두리를 '경계' 또는 '보더'라고 합니다. 'border' 속성을 사용하여 이 테두리의 스타일, 너비, 색상 등을 지정할 수 있습니다.",
    },
    {
      questionText:
        "CSS 박스 모델에서 박스와 박스 사이의 공간을 무엇이라고 하나요?",
      code: `
      div {
        ______: 10px;
      }
      `,
      answerOptions: ["content", "padding", "border", "margin"],
      answer: "margin",
      explanation:
        "CSS 박스 모델에서 박스와 박스 사이의 공간을 '마진'이라고 합니다. 'margin' 속성을 사용하여 이 공간의 크기를 조절할 수 있습니다.",
    },

    {
      questionText:
        "CSS 박스 모델에서 실제 콘텐츠가 차지하는 영역을 무엇이라고 하나요?",
      code: `
      div {
        width: 200px;
        height: 100px;
      }
      `,
      answerOptions: ["padding", "border", "margin", "content"],
      answer: "content",
      explanation:
        "CSS 박스 모델에서 실제 콘텐츠가 차지하는 영역을 '콘텐츠'라고 합니다. 'width'와 'height' 속성을 사용하여 이 영역의 크기를 조절할 수 있습니다.",
    },
    {
      questionText:
        "CSS 박스 모델에서 콘텐츠와 테두리 사이의 공간을 무엇이라고 하나요?",
      code: `
      div {
        ______: 20px;
      }
      `,
      answerOptions: ["content", "padding", "border", "margin"],
      answer: "padding",
      explanation:
        "CSS 박스 모델에서 콘텐츠와 테두리 사이의 공간을 '패딩'이라고 합니다. 'padding' 속성을 사용하여 이 공간의 크기를 조절할 수 있습니다.",
    },
    {
      questionText: "CSS 박스 모델에서 박스의 외곽선을 무엇이라고 하나요?",
      code: `
      div {
        ______: 2px solid black;
      }
      `,
      answerOptions: ["content", "padding", "border", "margin"],
      answer: "border",
      explanation:
        "CSS 박스 모델에서 박스의 외곽선을 '경계' 또는 '보더'라고 합니다. 'border' 속성을 사용하여 이 테두리의 스타일, 너비, 색상 등을 지정할 수 있습니다.",
    },
    {
      questionText:
        "CSS 박스 모델에서 박스와 다른 요소 사이의 공간을 무엇이라고 하나요?",
      code: `
      div {
        ______: 10px;
      }
      `,
      answerOptions: ["content", "padding", "border", "margin"],
      answer: "margin",
      explanation:
        "CSS 박스 모델에서 박스와 다른 요소 사이의 공간을 '마진'이라고 합니다. 'margin' 속성을 사용하여 이 공간의 크기를 조절할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 박스의 전체 크기를 콘텐츠, 패딩, 경계의 크기 합으로 설정하는 속성은 무엇인가요?",
      code: `
      div {
        ______: border-box;
      }
      `,
      answerOptions: ["content-box", "padding-box", "border-box", "margin-box"],
      answer: "box-sizing",
      explanation:
        "'box-sizing' 속성의 'border-box' 값은 박스의 전체 크기를 콘텐츠, 패딩, 경계의 크기 합으로 설정합니다. 이를 통해 박스의 너비와 높이가 경계와 패딩을 포함한 값으로 계산됩니다.",
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
