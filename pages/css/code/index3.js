import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "CSS에서 요소의 배경 이미지를 설정하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 속성은 무엇일까요?",
      code: `
          .element {
            ______: url('background.jpg');
          }
          `,
      answerOptions: [
        "background-image",
        "background-color",
        "background",
        "image",
      ],
      answer: "background-image",
      explanation:
        "CSS에서 요소의 배경 이미지를 설정하는 속성은 'background-image'입니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 특정 요소와 그 자손 요소에 스타일을 적용하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 선택자는 무엇일까요?",
      code: `
          .element ______ {
            color: red;
          }
          `,
      answerOptions: [">", "+", "~", " "],
      answer: " ",
      explanation:
        "CSS에서 특정 요소와 그 자손 요소에 스타일을 적용하려면 공백( )을 사용하는 선택자를 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 요소의 배경색을 투명하게 만들려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 값은 무엇일까요?",
      code: `
          .element {
            background-color: ______;
          }
          `,
      answerOptions: ["transparent", "none", "clear", "0"],
      answer: "transparent",
      explanation:
        "CSS에서 요소의 배경색을 투명하게 만들려면 'transparent' 값을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 텍스트의 색상을 변경하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 속성은 무엇일까요?",
      code: `
          .element {
            ______: red;
          }
          `,
      answerOptions: ["color", "text-color", "font-color", "background-color"],
      answer: "color",
      explanation:
        "CSS에서 텍스트의 색상을 변경하려면 'color' 속성을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 요소의 너비를 설정하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 속성은 무엇일까요?",
      code: `
          .element {
            ______: 100px;
          }
          `,
      answerOptions: ["width", "size", "length", "height"],
      answer: "width",
      explanation:
        "CSS에서 요소의 너비를 설정하려면 'width' 속성을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 요소의 내부 여백을 설정하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 속성은 무엇일까요?",
      code: `
          .element {
            ______: 20px;
          }
          `,
      answerOptions: ["padding", "margin", "border", "space"],
      answer: "padding",
      explanation:
        "CSS에서 요소의 내부 여백을 설정하려면 'padding' 속성을 사용합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "CSS에서 특정 색상을 배경색으로 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        body {
          ______: #f0f0f0;
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
        "CSS에서 배경색을 설정하려면 'background-color' 속성을 사용합니다.",
    },

    {
      questionText:
        "CSS에서 텍스트의 정렬 방식을 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        p {
          ______: center;
        }
      `,
      answerOptions: [
        "text-align",
        "align-items",
        "justify-content",
        "align-text",
      ],
      answer: "text-align",
      explanation:
        "CSS에서 텍스트의 정렬 방식을 설정하려면 'text-align' 속성을 사용합니다.",
    },

    {
      questionText:
        "CSS에서 요소의 너비를 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 100px;
        }
      `,
      answerOptions: ["width", "height", "size", "length"],
      answer: "width",
      explanation:
        "CSS에서 요소의 너비를 설정하려면 'width' 속성을 사용합니다.",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false); // 힌트를 보여줄지 말지를 결정하는 상태를 추가합니다.
  // 정답인 코드를 생성하는 함수를 추가합니다.

  // 정답 코드를 상태로 관리합니다.
  const [answerCode, setAnswerCode] = useState("");

  useEffect(() => {
    setQuestions(shuffleArray(initialQuestions));
  }, []);

  const shuffleArray = (array) => {
    const arr = [...array]; // 배열 복사
    let currentIndex = arr.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  };
  const createAnswerCode = (question, answer) => {
    const { code } = question;
    return code.replace("______", answer);
  };
  const handleSubmit = () => {
    if (userAnswer === questions[currentQuestion].answer) {
      setIsCorrect(true);
      setIsSubmitted(true);
    } else {
      setIsCorrect(false);
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    const correctCode = createAnswerCode(
      questions[currentQuestion],
      questions[currentQuestion].answer
    );
    if (answerCode.replace(/\s/g, "") === correctCode.replace(/\s/g, "")) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setAnswerCode("");
      setIsSubmitted(false);
      setIsCorrect(null);
      setShowHint(false);
    }
  };

  const handleShowHint = () => {
    setShowHint(true); // 힌트 보기 버튼을 눌렀을 때 힌트를 보여줍니다.
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
            {showHint ? (
              questions[currentQuestion].answerOptions.map((option, index) => (
                <p key={index}>{option}</p>
              ))
            ) : (
              <button onClick={handleShowHint}>힌트 보기</button>
            )}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isSubmitted}
            />
            <button onClick={handleSubmit} disabled={isSubmitted}>
              제출
            </button>
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
            </div>
          )}

          {isSubmitted && !isCorrect && (
            <div className="code-input-section">
              <h2>코드 입력</h2>
              <textarea
                value={answerCode}
                onChange={(e) => setAnswerCode(e.target.value)}
                style={{ width: "30%", height: "100px" }}
              />
              <button onClick={handleNext}>다음 문제</button>
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
