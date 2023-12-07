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
      questionText:
        "CSS에서 아래 코드에서 'myId'라는 아이디를 가진 요소를 선택하는 데 필요한 선택자는 무엇일까요?",
      code: `
      ______myId .item {
        color: red;
      }
      `,
      answerOptions: ["#", ".", "*", "div"],
      answer: "#",
      explanation:
        "'#'은 아이디 선택자를 의미합니다. 아이디 선택자는 HTML 문서 내에서 유일하게 존재해야하며, 한 요소에만 적용됩니다.",
    },

    {
      questionText:
        "CSS에서 아래 코드에서 div 요소의 자식 요소인 p를 선택하는 데 필요한 결합자는 무엇일까요?",
      code: `
      div ______ p {
        color: blue;
      }
      `,
      answerOptions: [">", "+", "~", " "],
      answer: ">",
      explanation:
        "'>'는 자식 결합자를 의미합니다. 이 결합자는 부모 요소 바로 아래에 있는 자식 요소에만 스타일을 적용합니다.",
    },

    {
      questionText:
        "CSS에서 전체 페이지의 배경색을 변경하기 위해 아래 코드의 빈칸에 들어갈 적절한 선택자는 무엇일까요?",
      code: `
      ______ {
        background-color: yellow;
      }
      `,
      answerOptions: ["body", "div", "p", "a"],
      answer: "body",
      explanation:
        "'body'는 HTML 문서의 본문을 선택하는 선택자입니다. 이 선택자를 이용하면 전체 페이지의 배경색을 변경할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 아래 코드에서 h1 요소 바로 다음에 오는 형제 요소인 p를 선택하는 데 필요한 결합자는 무엇일까요?",
      code: `
      h1 ______ p {
        font-size: 20px;
      }
      `,
      answerOptions: [">", "+", "~", " "],
      answer: "+",
      explanation:
        "'+'는 인접 형제 결합자를 의미합니다. 이 결합자는 첫 번째 요소 바로 다음에 있는 형제 요소에만 스타일을 적용합니다.",
    },

    {
      questionText:
        "CSS에서 아래 코드에서 h1 요소 이후에 오는 모든 형제 요소인 p에 스타일을 적용하려면 빈칸에 어떤 결합자를 써야 할까요?",
      code: `
      h1 ______ p {
        font-size: 20px;
      }
      `,
      answerOptions: [">", "+", "~", " "],
      answer: "~",
      explanation:
        "'~'는 일반 형제 결합자를 의미합니다. 이 결합자는 첫 번째 요소 이후에 오는 모든 형제 요소에 스타일을 적용합니다.",
    },
    {
      questionText:
        "CSS에서 아래 코드에서 'myClass'라는 클래스를 가진 모든 요소의 배경색을 파란색으로 변경하려면 어떻게 써야 할까요?",
      code: `
      ______ {
        background-color: blue;
      }
      `,
      answerOptions: ["#myClass", ".myClass", "myClass", "class(myClass)"],
      answer: ".myClass",
      explanation:
        "'.'은 클래스 선택자를 의미합니다. 클래스 선택자는 HTML 문서 내에서 여러 요소에 적용될 수 있습니다.",
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

  const handleSubmit = () => {
    const userAnswers = userAnswer.split(",");
    const correctAnswers = questions[currentQuestion].answer.split(",");

    if (userAnswers.length !== correctAnswers.length) {
      setIsCorrect(false);
    } else {
      const isAllCorrect = userAnswers.every((ans, index) => {
        return (
          ans.replace(/\s/g, "") === correctAnswers[index].replace(/\s/g, "")
        );
      });

      setIsCorrect(isAllCorrect);
    }

    setIsSubmitted(true);
  };

  const createAnswerCode = (code, answer) => {
    let updatedCode = code;
    while (updatedCode.includes("______")) {
      updatedCode = updatedCode.replace("______", answer);
    }
    return updatedCode;
  };

  const handleNext = () => {
    if (!isCorrect) {
      const correctCode = createAnswerCode(
        questions[currentQuestion].code,
        questions[currentQuestion].answer
      ).replace(/\s/g, "");

      if (answerCode.replace(/\s/g, "") !== correctCode) {
        alert("Please enter the correct code.");
        console.log("Correct Code:", correctCode);
        return;
      }

      if (answerCode.includes("______")) {
        alert("Please fill in all the blanks.");
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
