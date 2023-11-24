import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "CSS에서 요소의 배경색을 변경하는 속성은 무엇인가요?",
      code: `
      div {
        ______: red;
      }
      `,
      answerOptions: [
        "color",
        "background-color",
        "border-color",
        "text-color",
      ],
      answer: "background-color",
      explanation:
        "CSS에서 요소의 배경색을 변경하려면 'background-color' 속성을 사용합니다. 이 속성에 색상 값을 지정하면 해당 요소의 배경색이 변경됩니다.",
    },
    {
      questionText: "CSS에서 요소의 너비를 지정하는 속성은 무엇인가요?",
      code: `
      div {
        ______: 100px;
      }
      `,
      answerOptions: ["width", "height", "size", "length"],
      answer: "width",
      explanation:
        "CSS에서 요소의 너비를 지정하려면 'width' 속성을 사용합니다. 이 속성에 길이 값을 지정하면 해당 요소의 너비가 변경됩니다.",
    },
    {
      questionText:
        "CSS에서 요소를 수직으로 가운데 정렬하는 속성은 무엇인가요?",
      code: `
      div {
        display: flex;
        ______: center;
      }
      `,
      answerOptions: [
        "justify-content",
        "align-items",
        "align-content",
        "flex-direction",
      ],
      answer: "align-items",
      explanation:
        "CSS Flexbox에서 요소를 수직으로 가운데 정렬하려면 'align-items' 속성을 'center'로 설정합니다. 이 속성은 크로스 축(cross axis)에서 아이템들을 어떻게 정렬할지 결정합니다.",
    },
    {
      questionText: "CSS에서 특정 클래스를 선택하는 선택자는 무엇인가요?",
      code: `
      .______ {
        color: blue;
      }
      `,
      answerOptions: ["class name", "#class name", ".class name", "class name"],
      answer: ".class name",
      explanation:
        "CSS에서 특정 클래스를 선택하려면 점(.)을 사용한 선택자를 사용합니다. 즉, '.클래스명' 형식으로 작성하면 해당 클래스를 가진 요소들을 선택할 수 있습니다.",
    },

    {
      questionText:
        "CSS에서 특정 요소의 모든 네 모서리를 둥글게 만드는 속성은 무엇인가요?",
      code: `
  div {
    ______: 10px;
  }
  `,
      answerOptions: [
        "border-radius",
        "border-corner",
        "border-circle",
        "border-round",
      ],
      answer: "border-radius",
      explanation:
        "CSS에서 요소의 모든 네 모서리를 둥글게 만들기 위해서는 'border-radius' 속성을 사용합니다. 이 속성에 지정한 값만큼 각 모서리가 둥글게 만들어집니다.",
    },
    {
      questionText:
        "CSS에서 요소의 테두리 선의 굵기를 지정하는 속성은 무엇인가요?",
      code: `
  div {
    ______: 2px solid black;
  }
  `,
      answerOptions: [
        "border-width",
        "border-size",
        "border-thickness",
        "border",
      ],
      answer: "border",
      explanation:
        "CSS에서 요소의 테두리 선의 굵기를 지정하기 위해서는 'border' 속성을 사용할 수 있습니다. 'border' 속성에 선의 굵기, 스타일, 색상을 순서대로 지정하면 해당 요소의 테두리 스타일을 한번에 설정할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 요소의 위치를 절대적으로 지정하는 속성은 무엇인가요?",
      code: `
    div {
      ______: 20px;
    }
    `,
      answerOptions: ["position", "absolute", "relative", "fixed"],
      answer: "absolute",
      explanation:
        "CSS에서 요소의 위치를 절대적으로 지정하려면 'position' 속성을 'absolute'로 설정합니다. 이는 가장 가까운 상위 요소를 기준으로 위치를 지정합니다.",
    },
    {
      questionText:
        "CSS 'transform' 속성에서 요소를 회전시키는 함수는 무엇인가요?",
      code: `
    div {
      transform: ______(45deg);
    }
    `,
      answerOptions: ["scale", "translate", "rotate", "skew"],
      answer: "rotate",
      explanation:
        "CSS의 'transform' 속성의 'rotate' 함수는 요소를 회전시킵니다. 함수의 인수로 각도를 지정하면 해당 각도만큼 요소가 회전합니다.",
    },
    {
      questionText:
        "CSS에서 특정 요소를 선택하는 가장 강력한 선택자는 무엇인가요?",
      code: `
    ______ {
      color: blue;
    }
    `,
      answerOptions: ["tag", ".class", "#id", "attribute"],
      answer: "#id",
      explanation:
        "CSS에서 특정 요소를 선택하는 가장 강력한 선택자는 id 선택자입니다. '#' 뒤에 id 값을 지정하여 해당 id를 가진 요소를 선택할 수 있습니다.",
    },
    {
      questionText: "CSS에서 요소의 쌓임 순서를 설정하는 속성은 무엇인가요?",
      code: `
    div {
      ______: 9999;
    }
    `,
      answerOptions: ["position", "order", "z-index", "stacking"],
      answer: "z-index",
      explanation:
        "CSS에서 'z-index' 속성은 요소의 쌓임 순서를 설정합니다. 이 속성은 위치 지정된 요소에 대해서만 작동하며, 값이 클수록 요소가 다른 요소 위에 쌓입니다.",
    },
    {
      questionText:
        "CSS에서 Flex Container의 남는 공간에 대한 현재 Flex Item의 성장 비율을 설정하는 속성은 무엇인가요?",
      code: `
    div {
      flex: ______ 1;
    }
    `,
      answerOptions: ["flex-grow", "flex-shrink", "flex-basis", "flex-wrap"],
      answer: "flex-grow",
      explanation:
        "'flex-grow' 속성은 Flex Container의 남는 공간에 대한 현재 Flex Item의 성장 비율을 설정합니다. 이 속성의 값이 클수록 더 많은 공간을 차지합니다.",
    },
    {
      questionText:
        "CSS에서 부모 요소의 n번째 자식 요소를 선택하는 가상 클래스 선택자는 무엇인가요?",
      code: `
    li:______(2) {
      color: red;
    }
    `,
      answerOptions: [
        ":first-child",
        ":last-child",
        ":nth-child",
        ":nth-last-child",
      ],
      answer: ":nth-child",
      explanation:
        "CSS의 ':nth-child(n)' 선택자는 부모 요소의 n번째 자식 요소를 선택합니다. 이 선택자를 사용하면 특정 순서의 자식 요소에 스타일을 적용할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 특정 미디어 유형 또는 장치에 대한 CSS를 지정하는 @규칙은 무엇인가요?",
      code: `
    ______ (max-width: 600px) {
      body {
        background-color: lightblue;
      }
    }
    `,
      answerOptions: ["@media", "@import", "@charset", "@font-face"],
      answer: "@media",
      explanation:
        "CSS의 '@media' 규칙은 특정 미디어 유형 또는 장치에 대한 CSS를 지정하는 데 사용됩니다. '@media' 규칙을 사용하면 반응형 웹 디자인을 구현할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 'transform' 속성의 'translate' 함수가 하는 일은 무엇인가요?",
      answerOptions: [
        "요소를 지정된 각도로 회전시킵니다.",
        "요소를 지정된 거리만큼 이동시킵니다.",
        "요소의 크기를 지정된 배율로 확대/축소합니다.",
        "요소를 지정된 각도로 기울입니다.",
      ],
      answer: "요소를 지정된 거리만큼 이동시킵니다.",
      explanation:
        "CSS의 'transform' 속성의 'translate' 함수는 요소를 이동시킵니다. 함수의 첫 번째 인수로 x축 이동 거리를, 두 번째 인수로 y축 이동 거리를 지정합니다.",
    },
    {
      questionText: "CSS에서 '!important' 규칙이 하는 일은 무엇인가요?",
      answerOptions: [
        "스타일 선언의 우선 순위를 강제로 높입니다.",
        "특정 스타일 선언을 무시하게 합니다.",
        "스타일 선언을 중요하게 표시하게 합니다.",
        "스타일 선언을 브라우저에게 강제로 알립니다.",
      ],
      answer: "스타일 선언의 우선 순위를 강제로 높입니다.",
      explanation:
        "CSS의 '!important' 규칙은 특정 스타일 선언을 강제로 우선 순위를 가지게 합니다. '!important'가 지정된 스타일은 그 요소에 적용된 다른 모든 스타일보다 우선시되며, 일반적으로 스타일 충돌을 해결하는 데 사용됩니다.",
    },
    {
      questionText: "CSS의 'flex-shrink' 속성은 무엇을 하는가요?",
      answerOptions: [
        "Flex Item의 성장 비율을 설정합니다.",
        "Flex Item의 축소 비율을 설정합니다.",
        "Flex Item의 기본 크기를 설정합니다.",
        "Flex Item의 순서를 설정합니다.",
      ],
      answer: "Flex Item의 축소 비율을 설정합니다.",
      explanation:
        "'flex-shrink' 속성은 Flex Container의 공간이 부족할 때 현재 Flex Item의 축소 비율을 설정합니다. 이 속성의 값이 클수록 더 많이 축소됩니다.",
    },
    {
      questionText:
        "CSS에서 특정 요소의 모든 자식 요소를 선택하는 선택자는 무엇인가요?",
      code: `
    div ______ {
      color: blue;
    }
    `,
      answerOptions: ["> *", " *", " > *", " < *"],
      answer: " > *",
      explanation:
        "CSS에서 특정 요소의 모든 자식 요소를 선택하려면 부모 요소 선택자 뒤에 ' > *'를 붙입니다. 이는 직접적인 자식 요소뿐만 아니라 그 아래 모든 후손 요소를 선택합니다.",
    },
    {
      questionText:
        "CSS에서 특정 요소를 선택하는 가장 강력한 선택자는 무엇인가요?",
      code: `
    ______ {
      color: blue;
    }
    `,
      answerOptions: ["tag", ".class", "#id", "inline style"],
      answer: "inline style",
      explanation:
        "CSS에서 특정 요소를 선택하는 가장 강력한 선택자는 인라인 스타일입니다. 인라인 스타일은 HTML 요소 내부에 직접 작성되며, 다른 모든 CSS 선택자보다 우선 순위가 높습니다.",
    },
    {
      questionText: "CSS에서 transform 속성의 scale 함수는 무엇을 하는가요?",
      code: `
    div {
      transform: ______(2);
    }
    `,
      answerOptions: [
        "요소를 지정된 각도로 회전시킵니다.",
        "요소를 지정된 거리만큼 이동시킵니다.",
        "요소의 크기를 지정된 배율로 확대/축소합니다.",
        "요소를 지정된 각도로 기울입니다.",
      ],
      answer: "요소의 크기를 지정된 배율로 확대/축소합니다.",
      explanation:
        "CSS의 'transform' 속성의 'scale' 함수는 요소의 크기를 변경합니다. 함수의 인수로 배율을 지정하면, 해당 배율만큼 요소의 크기가 증가하거나 감소합니다.",
    },
    {
      questionText:
        "CSS에서 특정 요소의 마지막 자식 요소만 선택하는 가상 클래스 선택자는 무엇인가요?",
      code: `
    div:______ {
      color: blue;
    }
    `,
      answerOptions: [
        ":first-child",
        ":last-child",
        ":nth-child",
        ":nth-last-child",
      ],
      answer: ":last-child",
      explanation:
        "CSS의 ':last-child' 선택자는 부모 요소의 마지막 자식 요소를 선택합니다. 이 선택자를 사용하면 해당 부모 요소의 마지막 자식 요소에만 스타일을 적용할 수 있습니다.",
    },
    {
      questionText:
        "CSS에서 요소의 테두리 중간을 투명하게 만드는 속성은 무엇인가요?",
      code: `
    div {
      border: 10px ______ transparent;
    }
    `,
      answerOptions: ["solid", "double", "dotted", "dashed"],
      answer: "double",
      explanation:
        "CSS에서 요소의 테두리 중간을 투명하게 만들려면 'double' 스타일을 사용하고 색상을 'transparent'로 설정합니다. 이렇게 하면 테두리가 두 줄로 나타나며, 두 줄 사이는 투명하게 보입니다.",
    },
    {
      questionText:
        "CSS에서 요소를 지정된 각도로 회전시키는 'transform' 속성의 함수는 무엇인가요?",
      code: `
    div {
      transform: ______(45deg);
    }
    `,
      answerOptions: ["scale", "translate", "rotate", "skew"],
      answer: "rotate",
      explanation:
        "CSS의 'transform' 속성의 'rotate' 함수는 요소를 지정된 각도로 회전시킵니다. 함수의 인수로 회전 각도를 지정하면, 해당 각도만큼 요소가 회전합니다.",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const shuffledQuestions = initialQuestions.map((question) => ({
      ...question,
      answerOptions: shuffleArray([...question.answerOptions]),
    }));
    setQuestions(shuffleArray(shuffledQuestions));
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
              <p>
                {userAnswer === questions[currentQuestion].answer ? (
                  <>
                    정답입니다!
                    <br />
                    {questions[currentQuestion].explanation}
                  </>
                ) : (
                  <>
                    틀렸습니다.
                    <br />
                    {questions[currentQuestion].explanation}
                  </>
                )}
              </p>
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
