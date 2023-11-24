import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "CSS에서 'em'과 'rem' 단위의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'em'은 상위 요소의 글꼴 크기를 기준으로 하고, 'rem'은 문서의 루트 요소의 글꼴 크기를 기준으로 한다",
        "'em'은 문서의 루트 요소의 글꼴 크기를 기준으로 하고, 'rem'은 상위 요소의 글꼴 크기를 기준으로 한다",
        "'em'과 'rem'은 모두 상위 요소의 글꼴 크기를 기준으로 한다",
        "'em'과 'rem'은 모두 문서의 루트 요소의 글꼴 크기를 기준으로 한다",
      ],
      answer:
        "'em'은 상위 요소의 글꼴 크기를 기준으로 하고, 'rem'은 문서의 루트 요소의 글꼴 크기를 기준으로 한다",
      explanation:
        "'em' 단위는 상위 요소의 글꼴 크기를 기준으로 계산되며, 'rem' 단위는 문서의 루트 요소(html 요소)의 글꼴 크기를 기준으로 계산됩니다.",
      explanationCode: `/* CSS 코드 */
        html {
          font-size: 16px; /* 루트 요소의 글꼴 크기를 설정 */
        }
        .parent {
          font-size: 2em; /* 상위 요소의 글꼴 크기(16px)의 2배인 32px로 설정 */
        }
        .child {
          font-size: 0.5rem; /* 루트 요소의 글꼴 크기(16px)의 절반인 8px로 설정 */
        }`,
    },
    {
      questionText:
        "CSS에서 'inline'과 'block' 디스플레이의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "'inline' 요소는 새로운 줄에서 시작하지 않고, 'block' 요소는 새로운 줄에서 시작한다",
        "'inline' 요소는 새로운 줄에서 시작하고, 'block' 요소는 새로운 줄에서 시작하지 않는다",
        "'inline'과 'block' 요소는 모두 새로운 줄에서 시작한다",
        "'inline'과 'block' 요소는 모두 새로운 줄에서 시작하지 않는다",
      ],
      answer:
        "'inline' 요소는 새로운 줄에서 시작하지 않고, 'block' 요소는 새로운 줄에서 시작한다",
      explanation:
        "'inline' 요소는 새로운 줄에서 시작하지 않고, 이전 요소의 옆에 배치됩니다. 'block' 요소는 항상 새로운 줄에서 시작하고, 가능한 한 가로 방향으로 넓게 펼쳐집니다.",
      explanationCode: `/* CSS 코드 */
        span {
          display: inline; /* 'inline' 요소는 새로운 줄에서 시작하지 않습니다. */
        }
        div {
          display: block; /* 'block' 요소는 새로운 줄에서 시작합니다. */
        }`,
    },
    {
      questionText:
        "CSS에서 요소의 글꼴 크기를 설정하려면 어떤 속성을 사용해야 할까요?",
      code: "",
      answerOptions: ["font-size", "text-size", "font-weight", "font-style"],
      answer: "font-size",
      explanation:
        "CSS에서 요소의 글꼴 크기를 설정하려면 'font-size' 속성을 사용합니다.",
      explanationCode: `
        .element {
          font-size: 20px;
        }
      `,
    },
    {
      questionText:
        "CSS에서 요소의 배경 이미지를 설정하려면 어떤 속성을 사용해야 할까요?",
      code: "",
      answerOptions: [
        "background-image",
        "background-color",
        "background",
        "image",
      ],
      answer: "background-image",
      explanation:
        "CSS에서 요소의 배경 이미지를 설정하려면 'background-image' 속성을 사용합니다.",
      explanationCode: `
        .element {
          background-image: url('background.jpg');
        }
      `,
    },

    {
      questionText:
        "CSS에서 요소의 내부 여백을 설정하려면 어떤 속성을 사용해야 할까요?",
      code: "",
      answerOptions: ["padding", "margin", "border", "space"],
      answer: "padding",
      explanation:
        "CSS에서 요소의 내부 여백을 설정하려면 'padding' 속성을 사용합니다.",
      explanationCode: `
    .element {
      padding: 20px;
    }
  `,
    },
    {
      questionText:
        "CSS에서 특정 클래스를 선택하려면 어떤 선택자를 사용해야 할까요?",
      code: "",
      answerOptions: [
        ".클래스이름",
        "#클래스이름",
        "@클래스이름",
        "$클래스이름",
      ],
      answer: ".클래스이름",
      explanation:
        "CSS에서 특정 클래스를 선택하려면 '.' 선택자를 사용하고 뒤에 클래스 이름을 붙입니다.",
      explanationCode: `
        .myClass {
          color: red;
        }
      `,
    },
    {
      questionText:
        "CSS에서 특정 아이디를 선택하려면 어떤 선택자를 사용해야 할까요?",
      code: "",
      answerOptions: [
        ".아이디이름",
        "#아이디이름",
        "@아이디이름",
        "$아이디이름",
      ],
      answer: "#아이디이름",
      explanation:
        "CSS에서 특정 아이디를 선택하려면 '#' 선택자를 사용하고 뒤에 아이디 이름을 붙입니다.",
      explanationCode: `
        #myId {
          color: blue;
        }
      `,
    },
    {
      questionText:
        "CSS에서 요소에 마우스를 올렸을 때의 스타일을 설정하려면 어떤 가상 클래스를 사용해야 할까요?",
      code: "",
      answerOptions: [":hover", ":click", ":focus", ":active"],
      answer: ":hover",
      explanation:
        "CSS에서 요소에 마우스를 올렸을 때의 스타일을 설정하려면 ':hover' 가상 클래스를 사용합니다.",
      explanationCode: `
        .element:hover {
          color: yellow;
        }
      `,
    },
    {
      questionText:
        "CSS에서 요소의 테두리를 설정하려면 어떤 속성을 사용해야 할까요?",
      code: "",
      answerOptions: ["border", "outline", "edge", "frame"],
      answer: "border",
      explanation:
        "CSS에서 요소의 테두리를 설정하려면 'border' 속성을 사용합니다.",
      explanationCode: `
        .element {
          border: 1px solid black;
        }
      `,
    },
    {
      questionText:
        "CSS에서 요소의 높이를 설정하려면 어떤 속성을 사용해야 할까요?",
      code: "",
      answerOptions: ["height", "size", "length", "dimension"],
      answer: "height",
      explanation:
        "CSS에서 요소의 높이를 설정하려면 'height' 속성을 사용합니다.",
      explanationCode: `
        .element {
          height: 100px;
        }
      `,
    },
    {
      questionText:
        "CSS에서 요소의 너비를 설정하려면 어떤 속성을 사용해야 할까요?",
      code: "",
      answerOptions: ["width", "size", "length", "dimension"],
      answer: "width",
      explanation:
        "CSS에서 요소의 너비를 설정하려면 'width' 속성을 사용합니다.",
      explanationCode: `
        .element {
          width: 100px;
        }
      `,
    },
    {
      questionText:
        "CSS에서 애니메이션 효과를 적용하기 위해 어떤 속성을 사용해야 하나요?",
      code: "",
      answerOptions: ["transition", "transform", "animation", "text-animation"],
      answer: "animation",
      explanation:
        "`animation` 속성은 `@keyframes`와 함께 사용되어 요소에 애니메이션 효과를 적용하는 데 사용됩니다. 하지만 `transition`과 `transform` 역시 중요한 속성으로, 각각 요소의 속성 변화를 부드럽게 표현하고, 요소에 회전, 크기 조절, 기울이기 등의 변환을 적용하는 데 사용됩니다.",
      explanationCode:
        "@keyframes slide { 0% { left: 0; } 100% { left: 50px; } } .box { animation: slide 2s infinite; } /* animation 속성 사용 예제 */",
    },
    {
      questionText:
        "반응형 웹 디자인을 구현하기 위해 어떤 CSS 기술이 필수적인가요?",
      code: "",
      answerOptions: [
        "미디어 쿼리",
        "그리드 시스템",
        "플렉스박스",
        "CSS 그라디언트",
      ],
      answer: "미디어 쿼리",
      explanation:
        "반응형 웹 디자인을 구현하기 위해선 `미디어 쿼리`가 필수적입니다. 미디어 쿼리를 통해 다양한 화면 크기에 대응하는 스타일을 적용할 수 있습니다. 그리드 시스템과 플렉스박스 역시 중요하지만, 이들은 레이아웃을 구성하는 방식에 관한 것이며, 반드시 반응형 디자인에 필수적인 것은 아닙니다.",
      explanationCode:
        "@media screen and (max-width: 600px) { body { background-color: lightblue; } } /* 미디어 쿼리 사용 예제 */",
    },

    {
      questionText: "CSS에서 `z-index` 속성이 적용되는 조건은 무엇인가요?",
      code: "",
      answerOptions: [
        "요소가 반드시 블록 레벨 요소여야 한다",
        "요소에 'position: static'이 설정되어 있어야 한다",
        "요소에 'position: absolute', 'position: relative', 또는 'position: fixed' 중 하나가 설정되어 있어야 한다",
        "특별한 조건은 없다",
      ],
      answer:
        "요소에 'position: absolute', 'position: relative', 또는 'position: fixed' 중 하나가 설정되어 있어야 한다",
      explanation:
        "`z-index` 속성은 요소의 쌓임 순서 (즉, 어떤 요소가 다른 요소 위에 나타나는지)를 제어합니다. 이 속성은 'position' 속성이 'static'이 아닌 요소에만 적용됩니다.",
      explanationCode:
        ".element { position: relative; z-index: 999; } /* z-index가 적용되는 예제 */",
    },
    {
      questionText:
        "CSS에서 속성 값에 '!important'를 사용하는 이유는 무엇인가요?",
      code: "",
      answerOptions: [
        "다른 스타일 시트에 의해 덮어쓰일 수 있는 속성 값을 보호하기 위해",
        "해당 속성 값이 브라우저에 의해 무시되는 것을 방지하기 위해",
        "해당 속성 값이 모든 요소에 적용되도록 하기 위해",
        "해당 속성 값이 특정 요소에만 적용되도록 하기 위해",
      ],
      answer:
        "다른 스타일 시트에 의해 덮어쓰일 수 있는 속성 값을 보호하기 위해",
      explanation:
        "'!important'는 CSS에서 특정 속성 값이 다른 스타일 시트에 의해 덮어쓰이는 것을 방지하려는 경우에 사용됩니다. '!important'가 지정된 속성 값은 그 속성이 적용된 요소에 대해 같은 속성의 다른 값들보다 우선적으로 적용됩니다.",
      explanationCode:
        ".element { color: red !important; } /* !important가 적용되는 예제 */",
    },
    {
      questionText:
        "CSS의 `animation` 속성이 받아들일 수 있는 값 중, 'linear'의 의미는 무엇인가요?",
      code: "",
      answerOptions: [
        "'linear'는 애니메이션이 시작부터 끝까지 일정한 속도로 진행되도록 합니다.",
        "'linear'는 애니메이션이 처음에 느리게, 그리고 점점 빨라지도록 합니다.",
        "'linear'는 애니메이션이 처음과 끝에서 느리게, 중간에서는 빠르게 진행되도록 합니다.",
        "'linear'는 애니메이션이 끝에서 느리게 진행되도록 합니다.",
      ],
      answer:
        "'linear'는 애니메이션이 시작부터 끝까지 일정한 속도로 진행되도록 합니다.",
      explanation:
        "CSS의 `animation-timing-function` 속성은 애니메이션의 속도 곡선을 지정하는 데 사용되며, 'linear'는 이 속성의 값 중 하나입니다. 'linear'는 애니메이션이 시작부터 끝까지 일정한 속도로 진행되도록 지정합니다.",
      explanationCode:
        ".element { animation: slide 2s linear infinite; } /* 'linear' 값 사용 예제 */",
    },

    {
      questionText:
        "CSS의 `animation-fill-mode` 속성이 'forwards'로 설정되었을 때, 애니메이션의 동작은 어떻게 변하나요?",
      code: "",
      answerOptions: [
        "애니메이션은 정방향으로만 실행됩니다.",
        "애니메이션은 한 번만 실행되고 반복되지 않습니다.",
        "애니메이션이 끝나면 요소는 애니메이션의 마지막 키 프레임의 스타일을 유지합니다.",
        "애니메이션이 끝나면 요소는 애니메이션의 첫 번째 키 프레임의 스타일로 돌아갑니다.",
      ],
      answer:
        "애니메이션이 끝나면 요소는 애니메이션의 마지막 키 프레임의 스타일을 유지합니다.",
      explanation:
        "`animation-fill-mode` 속성은 애니메이션이 시작되기 전이나 끝난 후에 요소의 스타일을 어떻게 처리할지 지정합니다. 'forwards' 값은 애니메이션이 끝난 후에 요소가 마지막 키 프레임의 스타일을 유지하도록 지정합니다.",
      explanationCode:
        ".element { animation: slide 2s forwards; } /* 'forwards' 값 사용 예제 */",
    },

    {
      questionText: "CSS의 `animation-delay` 속성은 어떤 역할을 하나요?",
      code: "",
      answerOptions: [
        "애니메이션의 전체 실행 시간을 지정합니다.",
        "애니메이션이 시작하기 전 대기하는 시간을 지정합니다.",
        "애니메이션이 반복되는 주기를 지정합니다.",
        "애니메이션이 일시 중지되는 시간을 지정합니다.",
      ],
      answer: "애니메이션이 시작하기 전 대기하는 시간을 지정합니다.",
      explanation:
        "`animation-delay` 속성은 애니메이션이 시작하기 전에 대기하는 시간을 지정합니다. 이 속성을 사용하면 애니메이션의 시작 시점을 조절할 수 있습니다.",
      explanationCode:
        ".element { animation: slide 2s; animation-delay: 1s; } /* 'animation-delay' 속성 사용 예제 */",
    },
    {
      questionText:
        "다음 CSS 코드에서 `animation` 속성의 각 값의 의미는 무엇인가요? \n\n .element { animation: slide 2s ease-in-out 1s infinite alternate both; }",
      code: "",
      answerOptions: [
        "slide: 애니메이션 키 프레임의 이름, 2s: 애니메이션의 전체 진행 시간, ease-in-out: 애니메이션의 속도 곡선, 1s: 애니메이션 시작 전의 대기 시간, infinite: 애니메이션의 반복 횟수, alternate: 애니메이션의 진행 방향, both: 애니메이션이 시작되기 전과 끝난 후의 요소 스타일",
        "slide: 애니메이션의 전체 진행 시간, 2s: 애니메이션 키 프레임의 이름, ease-in-out: 애니메이션 시작 전의 대기 시간, 1s: 애니메이션의 속도 곡선, infinite: 애니메이션의 진행 방향, alternate: 애니메이션이 시작되기 전과 끝난 후의 요소 스타일, both: 애니메이션의 반복 횟수",
        "slide: 애니메이션의 반복 횟수, 2s: 애니메이션 키 프레임의 이름, ease-in-out: 애니메이션 시작 전의 대기 시간, 1s: 애니메이션의 전체 진행 시간, infinite: 애니메이션의 속도 곡선, alternate: 애니메이션의 진행 방향, both: 애니메이션이 시작되기 전과 끝난 후의 요소 스타일",
        "slide: 애니메이션의 속도 곡선, 2s: 애니메이션 키 프레임의 이름, ease-in-out: 애니메이션의 전체 진행 시간, 1s: 애니메이션 시작 전의 대기 시간, infinite: 애니메이션의 진행 방향, alternate: 애니메이션이 시작되기 전과 끝난 후의 요소 스타일, both: 애니메이션의 반복 횟수",
      ],
      answer:
        "slide: 애니메이션 키 프레임의 이름, 2s: 애니메이션의 전체 진행 시간, ease-in-out: 애니메이션의 속도 곡선, 1s: 애니메이션 시작 전의 대기 시간, infinite: 애니메이션의 반복 횟수, alternate: 애니메이션의 진행 방향, both: 애니메이션이 시작되기 전과 끝난 후의 요소 스타일",
      explanation:
        "CSS의 `animation` 속성에서는 여러 설정을 한 줄에 쓸 수 있습니다. 이때 설정 값들의 순서는 다음과 같습니다: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`.",
      explanationCode:
        ".element { animation: slide 2s ease-in-out 1s infinite alternate both; } /* 'animation' 속성 사용 예제 */",
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
