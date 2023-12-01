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
        "CSS에서 미디어 쿼리를 사용하여 화면 너비가 600px 이하일 때 텍스트 색상을 변경하는 코드는 무엇인가요?",
      code: `
      ______ (max-width: 600px) {
        p {
          color: #000000;
        }
      }
      `,
      answerOptions: [
        "@media screen",
        "@media print",
        "@font-face",
        "@keyframes",
      ],
      answer: "@media screen",
      explanation:
        "CSS에서 '@media screen'과 '(max-width: 600px)'를 함께 사용하여 화면 너비가 600px 이하일 때 특정 스타일을 적용할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 이미지 크기를 뷰포트 너비에 따라 조정하려면 어떤 속성을 사용해야 하나요?",
      code: `
      img {
        ______: 100%;
      }
      `,
      answerOptions: ["width", "height", "max-width", "max-height"],
      answer: "max-width",
      explanation:
        "CSS에서 'max-width' 속성을 '100%'로 설정하면 이미지의 최대 너비가 뷰포트의 너비에 따라 조정되어 반응형 이미지를 만들 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 테이블 레이아웃을 자동으로 조정하려면 어떤 속성을 사용해야 하나요?",
      code: `
      table {
        ______: auto;
      }
      `,
      answerOptions: ["width", "height", "table-layout", "border-collapse"],
      answer: "table-layout",
      explanation:
        "CSS에서 'table-layout' 속성을 'auto'로 설정하면 테이블의 레이아웃이 셀의 내용에 따라 자동으로 조정되어 반응형 테이블을 만들 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 화면 너비가 600px 이하일 때 테이블을 수직으로 스크롤하게 만드는 코드는 무엇인가요?",
      code: `
      @media (max-width: 600px) {
        .table {
          ______: auto;
          display: block;
        }
      }
      `,
      answerOptions: ["overflow-x", "overflow-y", "scroll", "overflow"],
      answer: "overflow-y",
      explanation:
        "'overflow-y' 속성을 'auto'로 설정하면 요소의 높이를 초과하는 내용을 수직으로 스크롤하여 볼 수 있습니다. 이는 화면 너비가 600px 이하일 때 테이블을 수직으로 스크롤하게 만드는 데 사용할 수 있습니다.",
    },

    {
      questionText:
        "CSS에서 미디어 쿼리를 사용하여 화면 너비가 768px 이상일 때 텍스트 크기를 변경하는 코드는 무엇인가요?",
      code: `
      ______ (min-width: 768px) {
        p {
          font-size: 18px;
        }
      }
      `,
      answerOptions: [
        "@media screen",
        "@media print",
        "@font-face",
        "@keyframes",
      ],
      answer: "@media screen",
      explanation:
        "CSS에서 '@media screen'과 '(min-width: 768px)'를 함께 사용하여 화면 너비가 768px 이상일 때 특정 스타일을 적용할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 이미지 크기를 뷰포트의 높이에 따라 조정하려면 어떤 속성을 사용해야 하나요?",
      code: `
      img {
        ______: 100%;
      }
      `,
      answerOptions: ["width", "height", "max-width", "max-height"],
      answer: "max-height",
      explanation:
        "CSS에서 'max-height' 속성을 '100%'로 설정하면 이미지의 최대 높이가 뷰포트의 높이에 따라 조정되어 반응형 이미지를 만들 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 테이블의 테두리를 합치려면 어떤 속성을 사용해야 하나요?",
      code: `
      table {
        ______: collapse;
      }
      `,
      answerOptions: [
        "border",
        "border-collapse",
        "border-spacing",
        "border-width",
      ],
      answer: "border-collapse",
      explanation:
        "CSS에서 'border-collapse' 속성을 'collapse'로 설정하면 테이블의 테두리가 합쳐집니다. 이는 테이블의 격자선이 하나로 합쳐져 더 깔끔한 레이아웃을 만들 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 화면 너비가 600px 이하일 때 테이블의 셀 간격을 조정하는 코드는 무엇인가요?",
      code: `
      @media (max-width: 600px) {
        table {
          ______: 10px;
        }
      }
      `,
      answerOptions: ["padding", "margin", "border-spacing", "border-width"],
      answer: "border-spacing",
      explanation:
        "'border-spacing' 속성은 테이블의 셀 간격을 지정하는 데 사용됩니다. 이는 화면 너비가 600px 이하일 때 테이블의 셀 간격을 조정하는 데 사용할 수 있습니다.",
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
