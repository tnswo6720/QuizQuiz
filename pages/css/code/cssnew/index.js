import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText: "CSS에서 요소를 회전시키는 변환 함수는 무엇인가요?",
      code: `
      div {
        transform: ______(45deg);
      }
      `,
      answerOptions: ["rotate", "scale", "translate", "skew"],
      answer: "rotate",
      explanation:
        "CSS에서 'transform' 속성의 'rotate' 함수는 요소를 회전시키는 데 사용됩니다. 값은 회전 각도를 지정하며, 양의 값은 시계 방향, 음의 값은 반시계 방향으로 회전합니다.",
    },
    {
      questionText:
        "CSS에서 요소의 변환을 애니메이션처럼 부드럽게 만드는 속성은 무엇인가요?",
      code: `
      div {
        ______: width 2s;
      }
      `,
      answerOptions: ["animation", "transition", "transform", "filter"],
      answer: "transition",
      explanation:
        "CSS에서 'transition' 속성은 요소의 변환을 애니메이션처럼 부드럽게 만드는 데 사용됩니다. 값은 순서대로 애니메이션을 적용할 속성, 애니메이션의 지속 시간을 지정합니다.",
    },
    {
      questionText:
        "CSS에서 키 프레임 애니메이션을 정의하는 규칙은 무엇인가요?",
      code: `
      ______ slidein {
        from {
          margin-left: 100%;
          width: 300%;
        }
    
        to {
          margin-left: 0%;
          width: 100%;
        }
      }
      `,
      answerOptions: ["@media", "@import", "@font-face", "@keyframes"],
      answer: "@keyframes",
      explanation:
        "CSS에서 '@keyframes' 규칙을 사용하여 키 프레임 애니메이션을 정의할 수 있습니다. 이 규칙을 사용하면 애니메이션의 각 단계에서의 스타일을 지정할 수 있습니다.",
    },
    {
      questionText: "CSS에서 요소에 그림자를 추가하는 속성은 무엇인가요?",
      code: `
      div {
        ______: 10px 10px 5px #888888;
      }
      `,
      answerOptions: ["text-shadow", "box-shadow", "border", "outline"],
      answer: "box-shadow",
      explanation:
        "CSS에서 'box-shadow' 속성은 요소에 그림자를 추가하는 데 사용됩니다. 값은 순서대로 그림자의 가로 및 세로 오프셋, 흐림 반경, 그림자 색상을 지정합니다.",
    },
    {
      questionText: "CSS에서 텍스트에 그림자를 추가하는 속성은 무엇인가요?",
      code: `
      p {
        ______: 2px 2px #ff0000;
      }
      `,
      answerOptions: ["text-shadow", "box-shadow", "border", "outline"],
      answer: "text-shadow",
      explanation:
        "CSS에서 'text-shadow' 속성은 텍스트에 그림자를 추가하는 데 사용됩니다. 값은 순서대로 그림자의 가로 및 세로 오프셋, 그림자 색상을 지정합니다.",
    },
    {
      questionText: "CSS에서 배경색을 그라디언트로 지정하는 함수는 무엇인가요?",
      code: `
      div {
        background: ______(red, yellow);
      }
      `,
      answerOptions: [
        "color",
        "gradient",
        "linear-gradient",
        "radial-gradient",
      ],
      answer: "linear-gradient",
      explanation:
        "CSS에서 'linear-gradient' 함수는 배경색을 그라디언트로 지정하는 데 사용됩니다. 값은 그라디언트의 시작 색상과 종료 색상을 지정합니다.",
    },
    {
      questionText: "CSS에서 요소를 확대하는 변환 함수는 무엇인가요?",
      code: `
      div {
        transform: ______(2);
      }
      `,
      answerOptions: ["rotate", "scale", "translate", "skew"],
      answer: "scale",
      explanation:
        "CSS에서 'transform' 속성의 'scale' 함수는 요소를 확대 또는 축소하는 데 사용됩니다. 값은 확대 또는 축소의 배율을 지정하며, 1보다 큰 값은 확대, 1보다 작은 값은 축소를 의미합니다.",
    },
    {
      questionText:
        "CSS에서 애니메이션의 지속 시간을 지정하는 속성은 무엇인가요?",
      code: `
      div {
        animation: slidein ______;
      }
      `,
      answerOptions: [
        "animation-name",
        "animation-duration",
        "animation-timing-function",
        "animation-delay",
      ],
      answer: "animation-duration",
      explanation:
        "CSS에서 'animation-duration' 속성은 애니메이션의 지속 시간을 지정하는 데 사용됩니다. 값은 시간을 지정하며, 초(s) 또는 밀리초(ms) 단위를 사용할 수 있습니다.",
    },
    {
      questionText: "CSS에서 요소에 둥근 그림자를 추가하는 코드는 무엇인가요?",
      code: `
      div {
        ______: 10px 10px 10px 10px #888888;
      }
      `,
      answerOptions: ["text-shadow", "box-shadow", "border", "outline"],
      answer: "box-shadow",
      explanation:
        "'box-shadow' 속성의 네 번째 값은 그림자를 더욱 부드럽게 만드는 'spread radius'를 지정하는데 사용됩니다. 이 값이 클수록 그림자는 더욱 둥글고 넓어집니다.",
    },
    {
      questionText:
        "CSS에서 텍스트에 빨간색 그림자를 추가하는 코드는 무엇인가요?",
      code: `
      p {
        ______: 2px 2px 2px red;
      }
      `,
      answerOptions: ["text-shadow", "box-shadow", "border", "outline"],
      answer: "text-shadow",
      explanation:
        "'text-shadow' 속성은 텍스트에 그림자를 추가하는 데 사용됩니다. 마지막 값은 그림자의 색상을 지정합니다.",
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
