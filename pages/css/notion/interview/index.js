import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 기존 initialQuestions 배열에 이어서 추가합니다.
    {
      questionText:
        "CSS 선택자의 특정성에 대해 설명하고, 이가 작동하는 방식을 서술하시오.",
      code: "",
      answerOptions: [
        "CSS 선택자의 특정성은 선택자가 어떤 요소에 스타일을 적용할 것인지 결정하는 규칙으로, 특정성이 높은 선택자의 스타일이 더 낮은 특정성을 가진 선택자의 스타일보다 우선 적용된다.",
        "CSS 선택자의 특정성은 선택자가 어떤 요소에 스타일을 적용할 것인지 결정하는 규칙으로, 특정성이 낮은 선택자의 스타일이 더 높은 특정성을 가진 선택자의 스타일보다 우선 적용된다.",
        "CSS 선택자의 특정성은 선택자가 어떤 요소에 스타일을 적용할 것인지 결정하는 규칙으로, 특정성이 높은 선택자의 스타일이 더 높은 특정성을 가진 선택자의 스타일보다 우선 적용된다.",
        "CSS 선택자의 특정성은 선택자가 어떤 요소에 스타일을 적용할 것인지 결정하는 규칙으로, 특정성이 낮은 선택자의 스타일이 더 낮은 특정성을 가진 선택자의 스타일보다 우선 적용된다.",
      ],
      answer:
        "CSS 선택자의 특정성은 선택자가 어떤 요소에 스타일을 적용할 것인지 결정하는 규칙으로, 특정성이 높은 선택자의 스타일이 더 낮은 특정성을 가진 선택자의 스타일보다 우선 적용된다.",
      explanation:
        "CSS에서 선택자의 특정성은 선택자가 어떤 요소에 스타일을 적용할 것인지 결정하는 규칙이다. 특정성이 높은 선택자의 스타일이 더 낮은 특정성을 가진 선택자의 스타일보다 우선 적용된다. 이는 선택자의 종류와 수, 위치 등을 기반으로 계산된다.",
      explanationCode: "",
    },
    {
      questionText: "Resetting CSS와 Normalizing CSS의 차이점을 설명하시오.",
      code: "",
      answerOptions: [
        "Resetting CSS는 모든 HTML 요소의 스타일을 제거하여 일관된 레이아웃을 제공하며, Normalizing CSS는 기본 스타일을 유지하면서 브라우저간의 차이를 최소화한다.",
        "Resetting CSS는 모든 HTML 요소의 스타일을 유지하면서 브라우저간의 차이를 최소화하며, Normalizing CSS는 모든 HTML 요소의 스타일을 제거하여 일관된 레이아웃을 제공한다.",
        "Resetting CSS는 일부 HTML 요소의 스타일을 제거하여 일관된 레이아웃을 제공하며, Normalizing CSS는 모든 HTML 요소의 스타일을 유지하면서 브라우저간의 차이를 최소화한다.",
        "Resetting CSS는 일부 HTML 요소의 스타일을 유지하면서 브라우저간의 차이를 최소화하며, Normalizing CSS는 모든 HTML 요소의 스타일을 제거하여 일관된 레이아웃을 제공한다.",
      ],
      answer:
        "Resetting CSS는 모든 HTML 요소의 스타일을 제거하여 일관된 레이아웃을 제공하며, Normalizing CSS는 기본 스타일을 유지하면서 브라우저간의 차이를 최소화한다.",
      explanation:
        "Resetting CSS는 모든 HTML 요소의 스타일을 제거하여 일관된 레이아웃을 제공한다. 반면에, Normalizing CSS는 기본 스타일을 유지하면서 브라우저간의 차이를 최소화한다. 이는 브라우저 기본 스타일의 일관성을 보장하고, 웹사이트가 다양한 브라우저에서 일관된 레이아웃을 가질 수 있도록 돕는다.",
      explanationCode: `
        /* Reset CSS */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
    
        /* Normalize CSS */
        html {
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
        }
      `,
    },

    {
      questionText:
        "웹페이지 로딩 속도를 향상시키는 CSS 스프라이트에 대해 설명해주세요. 이 기술을 구현하는 방법은 무엇인가요?",
      code: "",
      answerOptions: [
        "다수의 이미지를 하나로 묶은 후 background-position 속성을 이용하여 필요한 부분만 보여주는 방법",
        "다수의 이미지를 하나로 묶은 후 position 속성을 이용하여 필요한 부분만 보여주는 방법",
        "단일 이미지를 여러 부분으로 나눈 후 background-position 속성을 이용하여 필요한 부분만 보여주는 방법",
        "단일 이미지를 여러 부분으로 나눈 후 position 속성을 이용하여 필요한 부분만 보여주는 방법",
      ],
      answer:
        "다수의 이미지를 하나로 묶은 후 background-position 속성을 이용하여 필요한 부분만 보여주는 방법",
      explanation:
        "CSS 스프라이트는 여러 이미지를 하나로 결합한 후, background-position을 이용하여 필요한 이미지 부분만 보여주는 기법입니다. 이를 통해 웹사이트의 로딩 속도를 개선하고 서버에 대한 요청 수를 줄일 수 있습니다.",
      explanationCode: `
        .icon {
          background-image: url(sprite.png);
        }

        .icon-search {
          background-position: -50px -25px;
          width: 25px;
          height: 25px;
        }
      `,
    },
    {
      questionText:
        "브라우저마다 스타일이 달라지는 문제를 해결하려면 어떤 방법을 사용해야 할까요?",
      code: "",
      answerOptions: [
        "Reset CSS 또는 Normalize CSS를 사용하여 브라우저의 기본 스타일을 초기화",
        "이미지 또는 동영상을 사용하여 브라우저의 기본 스타일을 초기화",
        "HTML 태그를 사용하여 브라우저의 기본 스타일을 초기화",
        "CSS 태그를 사용하여 브라우저의 기본 스타일을 초기화",
      ],
      answer:
        "Reset CSS 또는 Normalize CSS를 사용하여 브라우저의 기본 스타일을 초기화",
      explanation:
        "브라우저마다 기본 스타일이 다르므로, 이로 인한 스타일 차이를 해결하기 위해 Reset CSS 또는 Normalize CSS를 사용하여 브라우저의 기본 스타일을 초기화할 수 있습니다. 이를 통해 모든 브라우저에서 일관된 스타일을 보장할 수 있습니다.",
      explanationCode: `
        /* Reset CSS */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Normalize CSS */
        html {
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
        }
      `,
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
            {showHint ? (
              questions[currentQuestion].answerOptions.map((option, index) => (
                <p key={index}>{option}</p>
              ))
            ) : (
              <button onClick={handleShowHint}>힌트 보기</button>
            )}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isSubmitted}
            />
            <button onClick={handleSubmit} disabled={!userAnswer}>
              제출
            </button>
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
              {isCorrect && <button onClick={handleNext}>다음 문제</button>}
            </div>
          )}

          {isSubmitted && !isCorrect && (
            <div className="code-input-section">
              <h2>코드 입력</h2>
              <textarea
                value={answerCode}
                onChange={(e) => setAnswerCode(e.target.value)}
                style={{ width: "30%", height: "100px" }}
              />
              <button onClick={handleNext}>다음 문제</button>
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
