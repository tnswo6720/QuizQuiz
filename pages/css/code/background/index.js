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
      questionText: "CSS에서 색상을 16진수 값으로 표현하는 코드는 무엇인가요?",
      code: `
      div {
        color: ______;
      }
      `,
      answerOptions: [
        "#000000",
        "rgb(0,0,0)",
        "rgba(0,0,0,1)",
        "hsl(0,0%,0%)",
        "hsla(0,0%,0%,1)",
      ],
      answer: "#000000",
      explanation:
        "CSS에서 색상을 16진수 값으로 표현하는 코드를 HEX 코드라고 합니다. 예를 들어, '#000000'은 검은색을 나타냅니다.",
    },
    {
      questionText: "CSS에서 배경 색상을 지정하는 속성은 무엇인가요?",
      code: `
      div {
        ______: #000000;
      }
      `,
      answerOptions: [
        "color",
        "background-color",
        "border-color",
        "outline-color",
      ],
      answer: "background-color",
      explanation:
        "CSS에서 'background-color' 속성은 요소의 배경 색상을 지정하는 데 사용됩니다.",
    },
    {
      questionText: "CSS에서 배경 이미지를 지정하는 속성은 무엇인가요?",
      code: `
      div {
        ______: url('image.jpg');
      }
      `,
      answerOptions: [
        "background-image",
        "background-color",
        "border-image",
        "content",
      ],
      answer: "background-image",
      explanation:
        "CSS에서 'background-image' 속성은 요소의 배경 이미지를 지정하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 배경 이미지를 반복하지 않게 하는 속성 값은 무엇인가요?",
      code: `
      div {
        background-repeat: ______;
      }
      `,
      answerOptions: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      answer: "no-repeat",
      explanation:
        "CSS에서 'background-repeat' 속성의 'no-repeat' 값은 배경 이미지를 반복하지 않게 합니다.",
    },
    {
      questionText: "CSS에서 배경 이미지의 위치를 지정하는 속성은 무엇인가요?",
      code: `
      div {
        ______: center;
      }
      `,
      answerOptions: [
        "background-position",
        "background-repeat",
        "background-size",
        "background-clip",
      ],
      answer: "background-position",
      explanation:
        "CSS에서 'background-position' 속성은 배경 이미지의 위치를 지정하는 데 사용됩니다.",
    },
    {
      questionText: "CSS에서 배경 이미지의 크기를 지정하는 속성은 무엇인가요?",
      code: `
      div {
        ______: cover;
      }
      `,
      answerOptions: [
        "background-position",
        "background-repeat",
        "background-size",
        "background-clip",
      ],
      answer: "background-size",
      explanation:
        "CSS에서 'background-size' 속성은 배경 이미지의 크기를 지정하는 데 사용됩니다. 'cover' 값은 배경 이미지를 요소에 맞게 확장합니다.",
    },
    {
      questionText:
        "CSS에서 색상을 RGB 값과 투명도로 표현하는 코드는 무엇인가요?",
      code: `
      div {
        color: ______;
      }
      `,
      answerOptions: [
        "#000000",
        "rgb(0,0,0)",
        "rgba(0,0,0,1)",
        "hsl(0,0%,0%)",
        "hsla(0,0%,0%,1)",
      ],
      answer: "rgba(0,0,0,1)",
      explanation:
        "CSS에서 색상을 RGB 값과 투명도로 표현하는 코드를 RGBA 코드라고 합니다. 예를 들어, 'rgba(0,0,0,1)'은 검은색을 나타내며, 마지막 값 1은 투명도를 나타냅니다.",
    },
    {
      questionText:
        "CSS에서 배경 이미지를 X축 방향으로만 반복하는 속성 값은 무엇인가요?",
      code: `
      div {
        background-repeat: ______;
      }
      `,
      answerOptions: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      answer: "repeat-x",
      explanation:
        "CSS에서 'background-repeat' 속성의 'repeat-x' 값은 배경 이미지를 X축 방향으로만 반복합니다.",
    },
    {
      questionText:
        "CSS에서 배경 이미지를 Y축 방향으로만 반복하는 속성 값은 무엇인가요?",
      code: `
      div {
        background-repeat: ______;
      }
      `,
      answerOptions: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      answer: "repeat-y",
      explanation:
        "CSS에서 'background-repeat' 속성의 'repeat-y' 값은 배경 이미지를 Y축 방향으로만 반복합니다.",
    },
    {
      questionText:
        "CSS에서 배경 이미지의 크기를 요소의 크기에 맞게 조정하는 속성 값은 무엇인가요?",
      code: `
      div {
        background-size: ______;
      }
      `,
      answerOptions: ["auto", "cover", "contain", "100% 100%"],
      answer: "cover",
      explanation:
        "CSS에서 'background-size' 속성의 'cover' 값은 배경 이미지의 크기를 요소의 크기에 맞게 조정하되, 이미지의 가로세로 비율을 유지하면서 전체 요소를 덮도록 확장합니다.",
    },
    {
      questionText:
        "CSS에서 배경 이미지의 크기를 요소의 크기에 맞게 조정하되, 이미지 전체가 보이도록 하는 속성 값은 무엇인가요?",
      code: `
      div {
        background-size: ______;
      }
      `,
      answerOptions: ["auto", "cover", "contain", "100% 100%"],
      answer: "contain",
      explanation:
        "CSS에서 'background-size' 속성의 'contain' 값은 배경 이미지의 크기를 요소의 크기에 맞게 조정하되, 이미지 전체가 보이도록 합니다. 이 경우, 이미지의 가로세로 비율이 유지되며, 요소의 일부 영역이 빈 상태로 남을 수 있습니다.",
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
