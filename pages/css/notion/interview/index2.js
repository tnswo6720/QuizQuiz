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
    {
      questionText:
        "다음 중 'float' 속성의 기능을 가장 잘 설명하는 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "요소를 왼쪽이나 오른쪽으로 띄워서 다른 요소가 그 주위를 감싸도록 만든다.",
        "요소를 위쪽이나 아래쪽으로 띄워서 다른 요소가 그 주위를 감싸도록 만든다.",
        "요소의 위치를 절대적으로 설정한다.",
        "요소의 위치를 상대적으로 설정한다.",
      ],
      answer:
        "요소를 왼쪽이나 오른쪽으로 띄워서 다른 요소가 그 주위를 감싸도록 만든다.",
      explanation:
        "CSS의 'float' 속성은 요소를 왼쪽이나 오른쪽으로 띄워서 다른 요소가 그 주위를 감싸도록 만듭니다. 'float: left'는 요소를 왼쪽으로 띄웁니다.",
      explanationCode: `
        .element {
          float: left;
        }
      `,
    },
    {
      questionText:
        "다음 중 'z-index' 속성을 사용할 때 필수로 설정해야 하는 속성은 무엇인가요?",
      code: "",
      answerOptions: ["position", "display", "visibility", "overflow"],
      answer: "position",
      explanation:
        "CSS의 'z-index' 속성은 'position' 속성이 'static'이 아닌 요소에만 적용됩니다. 따라서 'z-index'를 사용하려면 'position' 속성을 'relative', 'absolute', 'fixed', 'sticky' 중 하나로 설정해야 합니다.",
      explanationCode: `
        .element {
          position: relative;
          z-index: 1;
        }
      `,
    },
    {
      questionText:
        "BFC(Block Formatting Context)가 생성되는 상황 중 올바른 것을 선택하세요.",
      code: "",
      answerOptions: [
        "'display' 속성의 값이 'flex'인 경우",
        "'position' 속성의 값이 'absolute'인 경우",
        "'overflow' 속성의 값이 'visible'이 아닌 경우",
        "'float' 속성의 값이 'left'인 경우",
      ],
      answer: "'overflow' 속성의 값이 'visible'이 아닌 경우",
      explanation:
        "CSS에서 'overflow' 속성의 값이 'visible'이 아닌 경우, BFC(Block Formatting Context)가 생성됩니다. BFC는 레이아웃에 영향을 주는 특별한 영역을 생성하며, BFC 내부의 요소들은 외부 요소의 영향을 받지 않습니다.",
      explanationCode: `
        .element {
          overflow: auto;
        }
      `,
    },
    {
      questionText:
        "BFC(Block Formatting Context)에 대한 가장 정확한 설명은 무엇인가요?",
      code: "",
      answerOptions: [
        "BFC는 블록 요소의 배치를 결정하고, 실제 배치가 일어나는 환경을 제공하는 레이아웃 방식입니다.",
        "BFC는 인라인 요소의 배치를 결정하고, 실제 배치가 일어나는 환경을 제공하는 레이아웃 방식입니다.",
        "BFC는 블록 요소와 인라인 요소의 배치를 결정하며, 실제 배치가 일어나는 환경을 제공하는 레이아웃 방식입니다.",
        "BFC는 블록 요소와 인라인 요소의 배치를 결정하지 않는 레이아웃 방식입니다.",
      ],
      answer:
        "BFC는 블록 요소의 배치를 결정하고, 실제 배치가 일어나는 환경을 제공하는 레이아웃 방식입니다.",
      explanation:
        "BFC(Block Formatting Context)는 블록 요소의 배치를 결정하고, 실제 배치가 일어나는 환경을 제공하는 레이아웃 방식입니다. BFC는 레이아웃에 영향을 주는 특별한 영역을 생성하며, BFC 내부의 요소들은 외부 요소의 영향을 받지 않습니다.",
      explanationCode: "",
    },
    {
      questionText: "CSS에서 clear 속성에는 어떤 값들이 있을까요?",
      code: "",
      answerOptions: [
        "none, left, right, both",
        "block, inline, inline-block",
        "visible, hidden, collapse",
        "static, relative, absolute, fixed",
      ],
      answer: "none, left, right, both",
      explanation:
        "CSS에서 clear 속성은 float를 제거하는데 사용되며, 'none', 'left', 'right', 'both'의 값을 가질 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText: "CSS clear 속성은 어떤 상황에서 사용하는 것이 적합한가요?",
      code: "",
      answerOptions: [
        "요소를 수직으로 정렬할 때",
        "요소를 수평으로 정렬할 때",
        "float된 요소 이후의 요소 배치를 제어할 때",
        "요소의 위치를 절대값으로 지정할 때",
      ],
      answer: "float된 요소 이후의 요소 배치를 제어할 때",
      explanation:
        "CSS에서 clear 속성은 float된 요소 이후의 요소 배치를 제어하는데 사용되는 것이 적합합니다. clear 속성을 사용하면 해당 요소는 float된 요소의 영향을 받지 않게 됩니다.",
      explanationCode: "",
    },
    {
      questionText:
        "기능이 제한된 브라우저에서 페이지를 어떻게 처리해야 할까요?",
      code: "",
      answerOptions: [
        "페이지의 중요한 기능이나 내용을 제거하거나 감춥니다",
        "페이지를 완전히 비활성화시킵니다",
        "Graceful Degradation 또는 Progressive Enhancement 기법을 사용합니다",
        "새로운 브라우저를 사용하도록 사용자에게 메시지를 전달합니다",
      ],
      answer:
        "Graceful Degradation 또는 Progressive Enhancement 기법을 사용합니다",
      explanation:
        "기능이 제한된 브라우저에서는 Graceful Degradation 또는 Progressive Enhancement 같은 기법을 사용하여 사용자 경험을 최적화합니다. 이를 통해 모든 사용자가 기본 기능을 이용할 수 있도록 하며, 가능한 경우 고급 기능을 제공합니다.",
      explanationCode: "",
    },
    {
      questionText:
        "콘텐츠를 시각적으로 숨기되, 스크린 리더에서는 읽을 수 있도록 만드는 방법은 무엇인가요?",
      code: "",
      answerOptions: [
        "display: none;",
        "visibility: hidden;",
        "width: 0; height: 0;",
        "position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;",
      ],
      answer:
        "position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;",
      explanation:
        "콘텐츠를 시각적으로 숨기되, 스크린 리더에서는 읽을 수 있게 만드는 방법은 'position: absolute; left: -10000px; top: auto; width: 1px; height: 1px; overflow: hidden;' 등의 스타일을 적용하는 것입니다. 이 방법은 시각적으로는 콘텐츠를 숨기지만, 스크린 리더는 이를 읽을 수 있도록 해 웹 접근성을 향상시킵니다.",
      explanationCode: "",
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
