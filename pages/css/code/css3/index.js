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
      questionText: "CSS에서 요소를 회전시키는 속성은 무엇인가요?",
      code: `
        .box {
          ______: rotate(20deg);
        }
      `,
      answerOptions: ["transition", "transform", "animation", "shadow"],
      answer: "transform",
      explanation:
        "'transform' 속성은 요소를 회전, 크기 조정, 기울이기, 이동 또는 원근법을 사용하여 변형하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 요소의 변화를 일정 시간 동안 부드럽게 표현하는 속성은 무엇인가요?",
      code: `
        .box {
          ______: width 2s;
        }
      `,
      answerOptions: ["transform", "transition", "animation", "shadow"],
      answer: "transition",
      explanation:
        "'transition' 속성은 CSS 속성의 시작과 끝 사이를 부드럽게 전환시키는 데 사용됩니다.",
    },
    {
      questionText: "CSS에서 키프레임 애니메이션을 적용하는 속성은 무엇인가요?",
      code: `
        .box {
          ______: slide 5s infinite;
        }
      `,
      answerOptions: ["transform", "transition", "animation", "shadow"],
      answer: "animation",
      explanation:
        "'animation' 속성은 @keyframes 규칙을 사용하여 애니메이션 시퀀스를 생성하는 데 사용됩니다.",
    },
    {
      questionText: "CSS에서 요소에 그림자 효과를 주는 속성은 무엇인가요?",
      code: `
        .box {
          ______: 10px 10px 5px #888888;
        }
      `,
      answerOptions: ["transform", "transition", "animation", "box-shadow"],
      answer: "box-shadow",
      explanation:
        "'box-shadow' 속성은 요소에 그림자 효과를 추가하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 요소에 그라디언트 배경색을 적용하는 속성은 무엇인가요?",
      code: `
        .box {
          background: ______(red, yellow);
        }
      `,
      answerOptions: [
        "color",
        "background-color",
        "linear-gradient",
        "radial-gradient",
      ],
      answer: "linear-gradient",
      explanation:
        "'linear-gradient' 함수는 두 개 이상의 색상을 사용하여 직선 경로(선형)를 따라 그라디언트 효과를 생성하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 요소를 2D 평면에서 확대/축소하는 속성은 무엇인가요?",
      code: `
        .box {
          ______: scale(1.5);
        }
      `,
      answerOptions: ["translate", "rotate", "scale", "skew"],
      answer: "scale",
      explanation:
        "'scale' 함수는 요소의 크기를 변경합니다. 지정된 매개변수 값으로 요소의 너비와 높이를 확대/축소합니다.",
    },
    {
      questionText: "CSS에서 요소를 3D 공간에서 회전시키는 속성은 무엇인가요?",
      code: `
        .box {
          ______: rotateX(45deg);
        }
      `,
      answerOptions: ["rotate", "rotateY", "rotateX", "rotateZ"],
      answer: "rotateX",
      explanation:
        "'rotateX' 함수는 요소를 X축을 중심으로 3D 회전시킵니다. 매개변수로 회전 각도를 지정합니다.",
    },
    {
      questionText: "CSS에서 텍스트에 그림자 효과를 주는 속성은 무엇인가요?",
      code: `
        .text {
          ______: 2px 2px #FF0000;
        }
      `,
      answerOptions: [
        "box-shadow",
        "border-shadow",
        "text-shadow",
        "font-shadow",
      ],
      answer: "text-shadow",
      explanation:
        "'text-shadow' 속성은 텍스트에 그림자 효과를 추가하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 요소에 원형 그라디언트 배경색을 적용하는 속성은 무엇인가요?",
      code: `
        .box {
          background: ______(#3f87a6, #ebf8e1, #f69d3c);
        }
      `,
      answerOptions: [
        "linear-gradient",
        "radial-gradient",
        "circle-gradient",
        "sphere-gradient",
      ],
      answer: "radial-gradient",
      explanation:
        "'radial-gradient' 함수는 두 개 이상의 색상을 사용하여 원형 경로를 따라 그라디언트 효과를 생성하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 애니메이션 지속 시간을 설정하는 속성은 무엇인가요?",
      code: `
        .box {
          animation: slide 2s;
          ______: 3s;
        }
      `,
      answerOptions: [
        "animation-delay",
        "animation-duration",
        "animation-timing-function",
        "animation-direction",
      ],
      answer: "animation-delay",
      explanation:
        "'animation-delay' 속성은 애니메이션이 시작하기 전에 대기하는 시간을 설정하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 원형 그라디언트 배경을 생성하는 속성은 무엇인가요?",
      code: `
        .box {
          background: ______(circle at center, red, yellow);
        }
      `,
      answerOptions: [
        "linear-gradient",
        "radial-gradient",
        "repeating-linear-gradient",
        "repeating-radial-gradient",
      ],
      answer: "radial-gradient",
      explanation:
        "'radial-gradient' 함수는 원형 그라디언트 배경을 생성하는데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 전환 효과가 시작하기 전의 대기 시간을 설정하는 속성은 무엇인가요?",
      code: `
        .box {
          transition: width 2s;
          ______: 1s;
        }
      `,
      answerOptions: [
        "transition-duration",
        "transition-delay",
        "transition-property",
        "transition-timing-function",
      ],
      answer: "transition-delay",
      explanation:
        "'transition-delay' 속성은 전환 효과가 시작하기 전의 대기 시간을 설정하는 데 사용됩니다.",
    },
    {
      questionText:
        "CSS에서 요소를 비틀어주는 변환 함수와 그 함수를 사용하려면 어떤 속성을 써야하는지 작성하세요.",
      code: `
        .box {
          ______: skew(20deg);
        }
      `,
      answerOptions: ["translate", "rotate", "scale", "transform"],
      answer: "transform",
      explanation:
        "'skew'는 변환함수 중 하나로, 요소를 한 축을 중심으로 기울이는 역할을 합니다. 이 함수를 사용하려면 'transform' 속성을 사용해야 합니다.",
    },
    {
      questionText:
        "CSS에서 요소를 비틀어주는 변환 함수와 그 함수를 사용하려면 어떤 속성을 써야하는지 작성하세요.",
      code: `
        .box {
          ______: skew(20deg);
        }
      `,
      answerOptions: ["translate", "rotate", "scale", "transform"],
      answer: "transform",
      explanation:
        "'skew'는 변환함수 중 하나로, 요소를 한 축을 중심으로 기울이는 역할을 합니다. 이 함수를 사용하려면 'transform' 속성을 사용해야 합니다.",
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
