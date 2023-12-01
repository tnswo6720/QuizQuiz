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
        "CSS에서 요소의 위치를 문서의 흐름에 따라 결정하는 위치 유형은 무엇인가요?",
      code: `
      div {
        position: ______;
      }
      `,
      answerOptions: ["static", "relative", "absolute", "fixed", "sticky"],
      answer: "static",
      explanation:
        "CSS에서 'static' 위치 유형은 요소의 위치를 문서의 흐름에 따라 결정합니다. 이는 'position' 속성의 기본값입니다.",
    },
    {
      questionText:
        "CSS에서 요소의 위치를 상대적으로 이동시키는 위치 유형은 무엇인가요?",
      code: `
      div {
        position: ______;
        top: 10px;
        left: 20px;
      }
      `,
      answerOptions: ["static", "relative", "absolute", "fixed", "sticky"],
      answer: "relative",
      explanation:
        "CSS에서 'relative' 위치 유형은 요소의 위치를 상대적으로 이동시킵니다. 이는 원래 위치에서 상대적으로 이동하며, 주변 요소에는 영향을 주지 않습니다.",
    },
    {
      questionText:
        "CSS에서 요소의 위치를 가장 가까운 위치가 지정된 조상 요소에 대해 절대적으로 위치시키는 유형은 무엇인가요?",
      code: `
      div {
        position: ______;
        top: 0;
        right: 0;
      }
      `,
      answerOptions: ["static", "relative", "absolute", "fixed", "sticky"],
      answer: "absolute",
      explanation:
        "CSS에서 'absolute' 위치 유형은 요소의 위치를 가장 가까운 위치가 지정된 조상 요소(즉, 'relative', 'absolute', 'fixed', 'sticky' 중 하나의 값을 가진 요소)에 대해 절대적으로 위치시킵니다.",
    },
    {
      questionText:
        "CSS에서 요소의 위치를 뷰포트에 대해 고정시키는 위치 유형은 무엇인가요?",
      code: `
      div {
        position: ______;
        bottom: 0;
        right: 0;
      }
      `,
      answerOptions: ["static", "relative", "absolute", "fixed", "sticky"],
      answer: "fixed",
      explanation:
        "CSS에서 'fixed' 위치 유형은 요소의 위치를 뷰포트에 대해 고정시킵니다. 스크롤을 해도 요소의 위치는 변하지 않습니다.",
    },
    {
      questionText:
        "CSS에서 요소의 위치를 스크롤 위치에 따라 상대적이거나 고정될 수 있게 하는 위치 유형은 무엇인가요?",
      code: `
      div {
        position: ______;
        top: 0;
      }
      `,
      answerOptions: ["static", "relative", "absolute", "fixed", "sticky"],
      answer: "sticky",
      explanation:
        "CSS에서 'sticky' 위치 유형은 요소의 위치를 스크롤 위치에 따라 상대적이거나 고정될 수 있게 합니다. 스크롤 영역에서 벗어나면 고정되고, 스크롤 영역 안에 있으면 상대적으로 움직입니다.",
    },
    {
      questionText:
        "CSS에서 요소의 배치, 방향, 정렬 등을 제어하는 레이아웃 모델은 무엇인가요?",
      code: `
      div {
        display: ______;
      }
      `,
      answerOptions: ["block", "inline", "flex", "grid"],
      answer: "flex",
      explanation:
        "CSS에서 'flex'는 요소의 배치, 방향, 정렬 등을 제어하는 레이아웃 모델입니다. 'display' 속성의 'flex' 값을 사용하여 플렉스 컨테이너를 생성할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 2차원 레이아웃 시스템을 제공하는 모델은 무엇인가요?",
      code: `
      div {
        display: ______;
      }
      `,
      answerOptions: ["block", "inline", "flex", "grid"],
      answer: "grid",
      explanation:
        "CSS에서 'grid'는 2차원 레이아웃 시스템을 제공하는 모델입니다. 'display' 속성의 'grid' 값을 사용하여 그리드 컨테이너를 생성할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 요소가 기본 위치에서 위로 얼마만큼 움직일지 지정하는 속성은 무엇인가요?",
      code: `
      div {
        position: relative;
        ______: 10px;
      }
      `,
      answerOptions: ["width", "height", "top", "bottom", "left", "right"],
      answer: "top",
      explanation:
        "CSS에서 'top', 'bottom', 'left', 'right' 속성은 요소가 기본 위치에서 상하좌우로 얼마만큼 움직일지 지정합니다. 이 속성들은 'position' 속성이 'static'이 아닌 경우에만 적용됩니다.",
    },

    {
      questionText:
        "CSS 그리드 레이아웃에서 각 그리드 셀 내부의 콘텐츠를 수평 방향 중앙에 위치하게 하는 속성은 무엇인가요?",
      code: `
      div {
        display: grid;
        ______: center;
      }
      `,
      answerOptions: [
        "justify-items",
        "align-items",
        "justify-content",
        "align-content",
      ],
      answer: "justify-items",
      explanation:
        "CSS 그리드 레이아웃에서 'justify-items' 속성은 각 그리드 셀 내부의 콘텐츠를 수평 방향으로 정렬하는 데 사용됩니다. 'center' 값은 콘텐츠를 가운데에 정렬합니다.",
    },

    {
      questionText:
        "CSS 그리드 레이아웃에서 전체 그리드의 행들을 수직 방향 중앙에 배치하게 하는 속성은 무엇인가요?",
      code: `
      div {
        display: grid;
        ______: center;
      }
      `,
      answerOptions: [
        "justify-items",
        "align-items",
        "justify-content",
        "align-content",
      ],
      answer: "align-content",
      explanation:
        "CSS 그리드 레이아웃에서 'align-content' 속성은 전체 그리드의 행들을 수직 방향으로 정렬하는 데 사용됩니다. 'center' 값은 행들을 가운데에 정렬합니다.",
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
