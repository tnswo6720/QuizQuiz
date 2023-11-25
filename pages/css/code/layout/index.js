import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
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
        "CSS에서 요소가 기본 위치에서 상하좌우로 얼마만큼 움직일지 지정하는 속성은 무엇인가요?",
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
        "CSS 그리드 레이아웃에서 각 그리드 항목 내부의 콘텐츠를 수평 방향으로 정렬하는 속성은 무엇인가요?",
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
        "CSS 그리드 레이아웃에서 'justify-items' 속성은 각 그리드 항목 내부의 콘텐츠를 수평 방향으로 정렬하는 데 사용됩니다. 'center' 값은 콘텐츠를 가운데에 정렬합니다.",
    },
    {
      questionText:
        "CSS 그리드 레이아웃에서 그리드 행들을 수직 방향으로 정렬하는 속성은 무엇인가요?",
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
        "CSS 그리드 레이아웃에서 'align-content' 속성은 그리드 행들을 수직 방향으로 정렬하는 데 사용됩니다. 'center' 값은 행들을 가운데에 정렬합니다.",
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
