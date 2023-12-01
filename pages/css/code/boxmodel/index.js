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
        "CSS 박스 모델에서 실제 콘텐츠가 위치하는 영역을 무엇이라고 하나요?",
      code: `
        div {
          ______: 50px;
        }
        `,
      answerOptions: ["padding", "border", "margin", "content"],
      answer: "content",
      explanation:
        "CSS 박스 모델에서 실제 콘텐츠가 위치하는 영역을 '콘텐츠'라고 합니다. 하지만 CSS에서는 직접 'content' 속성을 사용하여 콘텐츠 영역의 크기를 조절하는 것은 불가능합니다.",
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
        "CSS에서 박스의 전체 크기를 콘텐츠, 패딩, 경계의 크기 합으로 설정하는 'box-sizing' 속성의 값은 무엇인가요?",
      code: `
        div {
          box-sizing: ______;
        }
        `,
      answerOptions: ["content-box", "padding-box", "border-box", "margin-box"],
      answer: "border-box",
      explanation:
        "'box-sizing' 속성의 'border-box' 값은 박스의 전체 크기를 콘텐츠, 패딩, 경계의 크기 합으로 설정합니다. 이를 통해 박스의 너비와 높이가 경계와 패딩을 포함한 값으로 계산됩니다.",
    },
    {
      questionText:
        "CSS에서 박스의 내부 공간(padding)을 20px로 설정하려면 어떻게 해야 하나요?",
      code: `
        div {
          ______: 20px;
        }
        `,
      answerOptions: ["padding", "border", "margin", "content"],
      answer: "padding",
      explanation:
        "'padding' 속성을 사용하여 박스의 내부 공간을 설정할 수 있습니다. 여기서 '20px'는 모든 방향에 대해 패딩을 20px로 설정합니다.",
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
        return (
          ans.replace(/\s/g, "") === correctAnswers[index].replace(/\s/g, "")
        );
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
