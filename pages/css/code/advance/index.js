import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Section,
  Button,
  TextArea,
  OptionsContainer,
  Sectionchoice,
  InputAndButtonContainer,
} from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
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
  const createAnswerCode = (code, answer) => {
    const answers = answer.split(",");
    let updatedCode = code;

    answers.forEach((ans) => {
      updatedCode = updatedCode.replace(/______/, ans.trim());
    });

    return updatedCode;
  };

  const handleSubmit = () => {
    const userAnswers = userAnswer.split(",");
    const correctAnswers = questions[currentQuestion].answer.split(",");

    if (userAnswers.length !== correctAnswers.length) {
      setIsCorrect(false);
    } else {
      const isAllCorrect = userAnswers.every((ans, index) => {
        return ans.trim() === correctAnswers[index].trim();
      });

      setIsCorrect(isAllCorrect);
    }

    setIsSubmitted(true);
  };

  const formatCode = (code) => {
    return code.replace(/\s/g, ""); // 모든 공백 제거
  };

  const handleNext = () => {
    if (!isCorrect) {
      const correctCode = formatCode(
        createAnswerCode(
          questions[currentQuestion].code,
          questions[currentQuestion].answer
        )
      );

      if (formatCode(answerCode) !== correctCode) {
        alert("Please enter the correct code.");
        console.log("Correct Code:", correctCode);
        return;
      }
    }

    // 정답을 맞추었거나, 틀렸지만 정답 코드를 맞게 입력했다면 다음 문제로 넘어갑니다.
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setAnswerCode("");
      setIsSubmitted(false);
      setIsCorrect(null);
      setShowHint(false);
    } else {
      alert("Quiz finished!");
    }
  };
  const handleShowHint = () => {
    setShowHint(true); // 힌트 보기 버튼을 눌렀을 때 힌트를 보여줍니다.
  };

  return (
    <Wrapper>
      {questions.length > 0 ? (
        <>
          <Section className="question-section">
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </Section>

          {isSubmitted && !isCorrect && (
            <Section className="code-input-section">
              <h2>코드 입력</h2>
              <TextArea
                value={answerCode}
                onChange={(e) => setAnswerCode(e.target.value)}
              />
              <Button onClick={handleNext}>다음 문제</Button>
            </Section>
          )}

          {isSubmitted && (
            <Section className="explanation-section">
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              {isCorrect && <Button onClick={handleNext}>다음 문제</Button>}
            </Section>
          )}

          <Sectionchoice className="answer-section">
            <h2>선택지</h2>
            <OptionsContainer>
              {showHint ? (
                <div>
                  {questions[currentQuestion].answerOptions?.map(
                    (option, index) => (
                      <p key={index}>{option}</p>
                    )
                  )}
                </div>
              ) : null}

              {!showHint ? (
                <Button onClick={handleShowHint}>힌트 보기</Button>
              ) : null}
            </OptionsContainer>
            <InputAndButtonContainer>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={isSubmitted}
              />
              <Button onClick={handleSubmit} disabled={!userAnswer}>
                제출
              </Button>
            </InputAndButtonContainer>
          </Sectionchoice>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default Quiz;

// 기본 문법:
// 변수와 상수
// 데이터 타입
// 연산자
// 제어문 (if, for, while 등)

// 반복자가 뭔지
