import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText: "CSS에서 텍스트 색상을 지정하는 속성은 무엇인가요?",
      code: `
      p {
        ______: #000000;
      }
      `,
      answerOptions: [
        "color",
        "background-color",
        "border-color",
        "outline-color",
      ],
      answer: "color",
      explanation:
        "CSS에서 'color' 속성은 텍스트의 색상을 지정하는 데 사용됩니다.",
    },
    {
      questionText: "CSS에서 텍스트 크기를 지정하는 속성은 무엇인가요?",
      code: `
      p {
        ______: 16px;
      }
      `,
      answerOptions: ["width", "height", "font-size", "line-height"],
      answer: "font-size",
      explanation:
        "CSS에서 'font-size' 속성은 텍스트의 크기를 지정하는 데 사용됩니다.",
    },
    {
      questionText: "CSS에서 텍스트를 가운데 정렬하는 속성은 무엇인가요?",
      code: `
      p {
        ______: center;
      }
      `,
      answerOptions: [
        "text-align",
        "text-decoration",
        "text-transform",
        "text-indent",
      ],
      answer: "text-align",
      explanation:
        "CSS에서 'text-align' 속성은 텍스트를 정렬하는 데 사용됩니다. 'center'는 텍스트를 가운데 정렬합니다.",
    },
    {
      questionText:
        "CSS에서 텍스트를 모두 대문자로 변형하는 속성은 무엇인가요?",
      code: `
      p {
        ______: uppercase;
      }
      `,
      answerOptions: [
        "text-transform",
        "text-decoration",
        "text-align",
        "text-indent",
      ],
      answer: "text-transform",
      explanation:
        "CSS에서 'text-transform' 속성은 텍스트의 대소문자 형태를 제어합니다. 'uppercase'는 모든 문자를 대문자로 변환합니다.",
    },
    {
      questionText: "CSS에서 글꼴 가족을 지정하는 속성은 무엇인가요?",
      code: `
      p {
        ______: Arial, sans-serif;
      }
      `,
      answerOptions: ["font-family", "font-size", "font-style", "font-weight"],
      answer: "font-family",
      explanation:
        "CSS에서 'font-family' 속성은 텍스트의 글꼴 가족을 지정하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 글꼴 스타일을 이탤릭으로 지정하는 속성은 무엇인가요?",
      code: `
      p {
        ______: italic;
      }
      `,
      answerOptions: ["font-family", "font-size", "font-style", "font-weight"],
      answer: "font-style",
      explanation:
        "CSS에서 'font-style' 속성은 텍스트의 글꼴 스타일을 지정하는 데 사용됩니다. 'italic'은 이탤릭체를 지정합니다.",
    },
    {
      questionText: "CSS에서 웹 글꼴을 지정하는 규칙은 무엇인가요?",
      code: `
      ______ {
        font-family: 'MyFont';
        src: url('MyFont.woff2') format('woff2');
      }
      `,
      answerOptions: ["@media", "@import", "@font-face", "@keyframes"],
      answer: "@font-face",
      explanation:
        "CSS에서 '@font-face' 규칙을 사용하여 웹 글꼴을 지정할 수 있습니다. 이 규칙을 사용하면 웹 서버에서 글꼴 파일을 다운로드받아 사용할 수 있습니다.",
    },
    {
      questionText: "CSS에서 텍스트의 줄 간격을 지정하는 속성은 무엇인가요?",
      code: `
      p {
        ______: 1.5;
      }
      `,
      answerOptions: [
        "line-height",
        "text-indent",
        "text-shadow",
        "text-overflow",
      ],
      answer: "line-height",
      explanation:
        "CSS에서 'line-height' 속성은 텍스트의 줄 간격을 지정하는 데 사용됩니다. 값은 숫자, 길이, 백분율이 될 수 있으며, 텍스트 크기에 대한 상대적인 배율을 지정하는 숫자 값이 가장 일반적입니다.",
    },
    {
      questionText: "CSS에서 텍스트에 밑줄을 추가하는 속성은 무엇인가요?",
      code: `
      p {
        ______: underline;
      }
      `,
      answerOptions: [
        "text-decoration",
        "text-transform",
        "text-align",
        "text-indent",
      ],
      answer: "text-decoration",
      explanation:
        "CSS에서 'text-decoration' 속성은 텍스트에 선을 추가하는 등의 장식을 지정하는 데 사용됩니다. 'underline'은 텍스트에 밑줄을 추가합니다.",
    },
    {
      questionText: "CSS에서 글꼴 두께를 지정하는 속성은 무엇인가요?",
      code: `
      p {
        ______: bold;
      }
      `,
      answerOptions: ["font-family", "font-size", "font-style", "font-weight"],
      answer: "font-weight",
      explanation:
        "CSS에서 'font-weight' 속성은 텍스트의 글꼴 두께를 지정하는 데 사용됩니다. 'bold'는 굵은 글꼴을 지정합니다.",
    },
    {
      questionText: "CSS에서 텍스트에 그림자를 추가하는 속성은 무엇인가요?",
      code: `
      p {
        ______: 1px 1px 2px black;
      }
      `,
      answerOptions: [
        "text-shadow",
        "box-shadow",
        "shadow-color",
        "shadow-offset",
      ],
      answer: "text-shadow",
      explanation:
        "CSS에서 'text-shadow' 속성은 텍스트에 그림자를 추가하는 데 사용됩니다. 값은 순서대로 그림자의 가로 및 세로 오프셋, 흐림 반경, 그림자 색상을 지정합니다.",
    },
    {
      questionText: "CSS에서 웹 글꼴의 포맷을 지정하는 속성은 무엇인가요?",
      code: `
      @font-face {
        font-family: 'MyFont';
        src: url('MyFont.woff2') ______('woff2');
      }
      `,
      answerOptions: ["format", "style", "weight", "stretch"],
      answer: "format",
      explanation:
        "CSS의 '@font-face' 규칙에서 'format' 속성은 다운로드될 웹 글꼴의 포맷을 지정하는 데 사용됩니다. 이 속성을 사용하면 브라우저가 지원하는 글꼴 포맷만 다운로드하여 성능을 향상시킬 수 있습니다.",
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
