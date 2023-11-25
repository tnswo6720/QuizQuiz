import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText: "SCSS에서 변수를 선언하는 문법은 무엇인가요?",
      code: `
      ______ mainColor: #c0c0c0;
    
      div {
        background-color: $mainColor;
      }
      `,
      answerOptions: ["$", "@", "%", "&"],
      answer: "$",
      explanation:
        "SCSS에서 변수는 '$' 기호를 사용하여 선언합니다. 변수를 사용하면 CSS의 재사용성을 높이고 유지 관리를 용이하게 할 수 있습니다.",
    },
    {
      questionText: "LESS에서 믹스인을 선언하는 문법은 무엇인가요?",
      code: `
      .rounded-corners (@radius: 5px) {
        border-radius: @radius;
      }
    
      div {
        ______ .rounded-corners;
      }
      `,
      answerOptions: ["@", ".", "#", "&"],
      answer: ".",
      explanation:
        "LESS에서 믹스인은 '.' 기호를 사용하여 선언하고 호출합니다. 믹스인을 사용하면 CSS의 재사용성을 높이고 코드의 중복을 줄일 수 있습니다.",
    },
    {
      questionText: "SCSS에서 중첩된 선택자를 참조하는 기호는 무엇인가요?",
      code: `
      div {
        &:______ {
          color: red;
        }
      }
      `,
      answerOptions: ["&", "@", "%", "."],
      answer: "&",
      explanation:
        "SCSS에서 '&' 기호는 중첩된 선택자를 참조하는 데 사용됩니다. 이 기호를 사용하면 부모 선택자를 쉽게 참조할 수 있어 CSS의 가독성을 향상시킬 수 있습니다.",
    },
    {
      questionText: "LESS에서 계산을 수행하는 문법은 무엇인가요?",
      code: `
      @width: 100px;
    
      div {
        width: @width * 2;
      }
      `,
      answerOptions: ["calc()", "@{}", "()", "[]"],
      answer: "()",
      explanation:
        "LESS에서 계산은 '()' 기호를 사용하여 수행합니다. 이 기호를 사용하면 CSS 값의 계산을 쉽게 수행할 수 있습니다.",
    },
    {
      questionText:
        "SCSS에서 중첩 규칙을 사용하여 자식 요소를 선택하는 문법은 무엇인가요?",
      code: `
      div {
        ______ p {
          color: red;
        }
      }
      `,
      answerOptions: ["&", "@", ">", "."],
      answer: ">",
      explanation:
        "SCSS에서 '>' 기호는 부모 요소 바로 아래의 자식 요소를 선택하는 데 사용됩니다. 이 기호를 사용하면 CSS의 가독성을 향상시키고 중첩된 선택자를 쉽게 작성할 수 있습니다.",
    },
    {
      questionText: "LESS에서 색상의 빛깔을 조절하는 함수는 무엇인가요?",
      code: `
      @color: #ff0000;
    
      div {
        background-color: ______(@color, 10%);
      }
      `,
      answerOptions: ["lighten", "darken", "saturate", "desaturate"],
      answer: "lighten",
      explanation:
        "LESS에서 'lighten' 함수는 색상의 빛깔을 밝게 조절하는 데 사용됩니다. 이 함수를 사용하면 CSS의 색상 조작을 쉽게 수행할 수 있습니다.",
    },
    {
      questionText: "SCSS에서 조건문을 사용하는 문법은 무엇인가요?",
      code: `
      @mixin text-color($lightness) {
        @if $lightness > 50% {
          color: black;
        } @______ {
          color: white;
        }
      }
      `,
      answerOptions: ["else", "elseif", "if", "unless"],
      answer: "else",
      explanation:
        "SCSS에서 '@if'와 '@else'를 사용하여 조건문을 작성할 수 있습니다. 이를 통해 CSS의 동적 스타일링을 수행할 수 있습니다.",
    },
    {
      questionText: "LESS에서 믹스인을 인자와 함께 호출하는 문법은 무엇인가요?",
      code: `
      .border-radius(@radius) {
        border-radius: @radius;
      }
    
      div {
        ______ .border-radius(10px);
      }
      `,
      answerOptions: ["@", ".", "#", "&"],
      answer: ".",
      explanation:
        "LESS에서 믹스인은 '.' 기호를 사용하여 호출합니다. 믹스인 이름 뒤의 괄호 안에 인자를 넣어 믹스인을 호출할 수 있습니다.",
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
