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
    {
      questionText:
        "CSS에서 요소의 상하좌우 여백을 한 번에 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 10px 15px 20px 25px;
        }
      `,
      answerOptions: ["padding", "margin", "border", "position"],
      answer: "margin",
      explanation:
        "CSS에서 요소의 상하좌우 여백을 한 번에 설정하려면 'margin' 속성을 사용합니다. 값은 상, 우, 하, 좌 순서대로 적용됩니다.",
    },

    {
      questionText:
        "CSS에서 특정 요소만 선택하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 선택자는 무엇일까요?",
      code: `
        ______:first-child {
          color: red;
        }
      `,
      answerOptions: ["p", "h1", "div", "body"],
      answer: "p",
      explanation:
        "CSS에서 특정 요소만 선택하려면 요소 선택자를 사용합니다. 이 경우 'p' 태그의 첫 번째 자식 요소만 선택하려면 'p:first-child'를 사용합니다.",
    },

    {
      questionText:
        "CSS에서 요소의 위치를 절대 위치로 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성 값은 무엇일까요?",
      code: `
        .box {
          position: ______;
        }
      `,
      answerOptions: ["static", "relative", "absolute", "fixed"],
      answer: "absolute",
      explanation:
        "CSS에서 요소의 위치를 절대 위치로 설정하려면 'position' 속성 값을 'absolute'로 설정합니다.",
    },
    {
      questionText:
        "CSS에서 flexbox의 방향을 역방향으로 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성 값은 무엇일까요?",
      code: `
        .container {
          display: flex;
          flex-direction: ______;
        }
      `,
      answerOptions: ["row", "column", "row-reverse", "column-reverse"],
      answer: "row-reverse",
      explanation:
        "CSS에서 flexbox의 방향을 역방향으로 설정하려면 'flex-direction' 속성 값을 'row-reverse' 또는 'column-reverse'로 설정합니다.",
    },

    {
      questionText:
        "CSS에서 요소의 테두리를 둥글게 만들려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 50%;
        }
      `,
      answerOptions: [
        "border",
        "border-radius",
        "border-style",
        "border-width",
      ],
      answer: "border-radius",
      explanation:
        "CSS에서 요소의 테두리를 둥글게 만들려면 'border-radius' 속성을 사용합니다.",
    },

    {
      questionText:
        "CSS에서 요소의 z축 방향의 위치를 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 1;
        }
      `,
      answerOptions: ["z-index", "position", "display", "visibility"],
      answer: "z-index",
      explanation:
        "CSS에서 요소의 z축 방향의 위치를 설정하려면 'z-index' 속성을 사용합니다.",
    },
    {
      questionText:
        "CSS에서 요소의 내부 여백을 한 번에 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 10px 15px 20px 25px;
        }
      `,
      answerOptions: ["padding", "margin", "border", "position"],
      answer: "padding",
      explanation:
        "CSS에서 요소의 내부 여백을 한 번에 설정하려면 'padding' 속성을 사용합니다. 값은 상, 우, 하, 좌 순서대로 적용됩니다.",
    },

    {
      questionText:
        "CSS에서 요소의 투명도를 설정하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 속성은 무엇일까요?",
      code: `
        .box {
          ______: 0.5;
        }
      `,
      answerOptions: ["opacity", "visibility", "color", "background"],
      answer: "opacity",
      explanation:
        "CSS에서 요소의 투명도를 설정하려면 'opacity' 속성을 사용합니다. 값은 0(완전 투명)에서 1(완전 불투명) 사이입니다.",
    },

    {
      questionText:
        "CSS에서 특정 요소만 선택하려고 합니다. 아래의 코드에서 빈칸에 들어갈 수 있는 CSS 선택자는 무엇일까요?",
      code: `
        ______:last-child {
          color: red;
        }
      `,
      answerOptions: ["p", "h1", "div", "body"],
      answer: "div",
      explanation:
        "CSS에서 특정 요소만 선택하려면 요소 선택자를 사용합니다. 이 경우 'div' 태그의 마지막 자식 요소만 선택하려면 'div:last-child'를 사용합니다.",
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
    if (!isCorrect) {
      const correctCode = createAnswerCode(
        questions[currentQuestion],
        questions[currentQuestion].answer
      );
      if (
        answerCode.replace(/\s/g, "").toLowerCase() !==
        correctCode.replace(/\s/g, "").toLowerCase()
      ) {
        return;
      }
    }

    // 정답을 맞추었거나, 틀렸지만 정답 코드를 맞게 입력했다면 다음 문제로 넘어갑니다.
    if (currentQuestion < questions.length - 1) {
      // 추가된 코드
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setAnswerCode("");
      setIsSubmitted(false);
      setIsCorrect(null);
      setShowHint(false);
    } else {
      // 여기에 마지막 문제를 풀고난 후의 처리를 작성하면 됩니다.
      // 예를 들어, alert으로 퀴즈가 끝났음을 알리거나, 결과 페이지로 이동하는 등의 작업을 할 수 있습니다.
      alert("Quiz finished!");
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
            <button onClick={handleSubmit} disabled={!userAnswer}>
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
              {isCorrect && <button onClick={handleNext}>다음 문제</button>}
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
