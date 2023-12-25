// questions1.js
export const cssCodeResponsive = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "화면의 너비가 600px 미만일 때, 특정 요소의 너비를 100%로 설정하려면 어떤 CSS 미디어 쿼리를 작성해야 하는지 아래의 빈칸을 채워주세요.",
    code: `
      @media _____ (_____ : _____) {
        .element {
          width: _____;
        }
      }
    `,
    answerOptions: [
      ["only screen", "max-width", "600px", "100%"],
      ["only screen", "min-width", "600px", "100%"],
      ["screen and", "max-width", "600px", "100%"],
      ["screen and", "min-width", "600px", "100%"],
    ],
    answer: ["only screen", "max-width", "600px", "100%"],
    explanation:
      "미디어 쿼리를 사용하여 화면의 너비가 600px 미만일 때 특정 요소의 너비를 100%로 설정하려면 '@media only screen and (max-width: 600px)'를 사용합니다. 이는 뷰포트의 최대 너비가 600px일 때 해당 스타일을 적용하라는 의미입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "반응형 웹 디자인에서 모바일 기기의 뷰포트를 적절하게 설정하기 위해 사용하는 메타 태그를 작성해보세요. 빈칸을 채워주세요.",
    code: `
      <meta name="_____ _____" content="_____ = _____, _____ = _____">
    `,
    answerOptions: [
      ["viewport", "device-width", "width", "initial-scale", "1.0"],
      ["device", "device-width", "width", "initial-scale", "1.0"],
      ["screen", "device-width", "width", "initial-scale", "1.0"],
      ["viewport", "screen-width", "width", "initial-scale", "1.0"],
    ],
    answer: ["viewport", "device-width", "width", "initial-scale", "1.0"],
    explanation:
      '반응형 웹 디자인에서 모바일 기기의 뷰포트를 적절하게 설정하기 위해 \'<meta name="viewport" content="width=device-width, initial-scale=1.0">\' 메타 태그를 사용합니다. 이는 뷰포트의 너비를 장치의 너비에 맞추고, 초기 확대/축소 비율을 1.0으로 설정하라는 의미입니다.',
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "반응형 웹 디자인에서 모바일 기기의 뷰포트를 적절하게 설정하기 위해 사용하는 메타 태그를 작성하려면, 아래의 빈칸을 어떻게 채워야 할까요?",
    code: `
      <meta name="_____ _____" content="_____ = _____, _____ = _____">
    `,
    answerOptions: [
      ["viewport", "device-width", "width", "initial-scale", "1.0"],
      ["device", "device-width", "width", "initial-scale", "1.0"],
      ["screen", "device-width", "width", "initial-scale", "1.0"],
      ["viewport", "screen-width", "width", "initial-scale", "1.0"],
    ],
    answer: ["viewport", "device-width", "width", "initial-scale", "1.0"],
    explanation:
      '반응형 웹 디자인에서 모바일 기기의 뷰포트를 적절하게 설정하기 위해 \'<meta name="viewport" content="width=device-width, initial-scale=1.0">\' 메타 태그를 사용합니다. 이는 뷰포트의 너비를 장치의 너비에 맞추고, 초기 확대/축소 비율을 1.0으로 설정하라는 의미입니다.',
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "반응형 웹 디자인에서 화면 크기에 따라 다른 CSS 스타일을 적용하려면 어떤 CSS 문법을 사용해야 하는지, 아래의 빈칸을 채워주세요.",
    code: `
      @_____ _____ (_____ : _____) {
        .element {
          color: red;
        }
      }
    `,
    answerOptions: [
      ["media", "only screen", "max-width", "600px"],
      ["import", "only screen", "max-width", "600px"],
      ["media", "all", "max-width", "600px"],
      ["media", "only screen", "min-width", "600px"],
    ],
    answer: ["media", "only screen", "max-width", "600px"],
    explanation:
      "반응형 웹 디자인에서 화면 크기에 따라 다른 CSS 스타일을 적용하려면 CSS 미디어 쿼리를 사용합니다. '@media only screen and (max-width: 600px)' 문법은 화면 크기가 600px 이하일 때만 '.element' 선택자에 대한 스타일을 적용하라는 의미입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "웹 개발자가 다양한 디바이스에 적합한 뷰포트를 설정하기 위해 사용해야 하는 HTML 코드는 무엇입니까? 아래의 코드 옵션 중 올바른 것을 선택하십시오.",
    code: "",
    answerOptions: [
      {
        text: "<meta name='viewport' content='width=960'>",
        isCorrect: false,
      },
      {
        text: "<meta name='viewport' content='device-width, initial-scale=1.0'>",
        isCorrect: false,
      },
      {
        text: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        isCorrect: true,
      },
      {
        text: "<meta name='viewport' content='width=device-width, initial-scale=2.0'>",
        isCorrect: false,
      },
    ],
    answer:
      "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
    explanation:
      "반응형 웹 디자인에서 뷰포트를 설정하기 위해 `<meta name='viewport' content='width=device-width, initial-scale=1.0'>` 코드를 사용합니다. 이 코드는 웹 페이지가 로드될 때 뷰포트의 너비를 디바이스의 스크린 너비와 동일하게 설정하고, 초기 확대 비율을 1로 설정하여 사용자가 웹 페이지를 자연스러운 크기로 볼 수 있도록 합니다. `width=960`은 고정된 너비를 지정하고, `initial-scale=2.0`은 페이지를 200% 확대하여 시작하는 것으로, 이는 대부분의 사용 사례에서 바람직하지 않습니다. `device-width`는 잘못된 속성 값이며, 올바른 키워드는 `width`입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "미디어 쿼리를 사용하여 화면 크기에 따라 다른 스타일을 적용하는 CSS 코드는 어떻게 작성해야 합니까? 아래의 코드 예시를 참고하여 정답을 선택하십시오.",
    code: `
      /* 기본 스타일 */
      .container {
        width: 80%;
        margin: 0 auto;
      }
  
      /* 화면 너비가 600px 이하일 때 적용되는 스타일 */
      @media (max-width: 600px) {
        .container {
          width: 100%;
          margin: 0;
        }
      }
    `,
    answerOptions: [
      {
        text: "미디어 쿼리는 JavaScript에서만 정의할 수 있으므로 CSS에서 해당 기능을 구현할 수 없습니다.",
        isCorrect: false,
      },
      {
        text: "CSS의 `@media` 룰을 사용하여 특정 조건(예: `max-width: 600px`)에 맞는 스타일을 정의할 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "`@media` 룰은 오직 인쇄 매체에만 적용되는 스타일을 정의하기 위해 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "화면 크기에 따른 스타일 적용은 CSS에서 지원하지 않으며, 대신 모든 스타일은 반응형으로 자동으로 조정됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "CSS의 `@media` 룰을 사용하여 특정 조건(예: `max-width: 600px`)에 맞는 스타일을 정의할 수 있습니다.",
    explanation:
      "미디어 쿼리는 반응형 웹 디자인에서 중요한 역할을 합니다. CSS 내에 `@media` 규칙을 사용하여 특정 조건이 만족될 때 적용되는 스타일을 정의할 수 있습니다. 예시로 제시된 코드는 화면의 너비가 600픽셀 이하일 때 `.container` 클래스에 대해 `width: 100%;`와 `margin: 0;`을 적용하는 미디어 쿼리를 보여줍니다. 이를 통해 화면이 작을 때는 컨테이너가 화면 전체 너비를 차지하도록 조정되며, 마진을 제거하여 더 많은 공간을 활용할 수 있도록 합니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "미디어 쿼리 구문을 사용하여 특정 조건에서 스타일을 적용하는 방법에 대해 설명하십시오. 아래 코드 예시의 미디어 쿼리가 어떤 상황에서 작동하는지 설명하고, 그 이유를 설명하십시오.",
    code: `
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
        body {
          background-color: lightgreen;
        }
      }
    `,
    answerOptions: [
      {
        text: "이 미디어 쿼리는 화면의 너비가 768픽셀 이상 1024픽셀 이하인 디바이스에서만 `body`의 배경색을 `lightgreen`으로 설정합니다.",
        isCorrect: true,
      },
      {
        text: "이 미디어 쿼리는 화면의 너비가 768픽셀 이하인 디바이스에서 `body`의 배경색을 `lightgreen`으로 설정합니다.",
        isCorrect: false,
      },
      {
        text: "이 미디어 쿼리는 화면의 너비가 1024픽셀 이상인 디바이스에 적용되어 `body`의 배경색을 `lightgreen`으로 설정합니다.",
        isCorrect: false,
      },
      {
        text: "이 미디어 쿼리는 인쇄 매체에서만 `body`의 배경색을 `lightgreen`으로 설정합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "이 미디어 쿼리는 화면의 너비가 768픽셀 이상 1024픽셀 이하인 디바이스에서만 `body`의 배경색을 `lightgreen`으로 설정합니다.",
    explanation:
      "미디어 쿼리 구문은 디바이스의 특정 특성에 따라 다른 스타일을 적용할 수 있게 해줍니다. 위의 미디어 쿼리는 'only screen'을 사용하여 스타일이 스크린에만 적용되도록 지정하고 있으며, 'min-width: 768px'과 'max-width: 1024px' 조건을 사용하여 화면의 너비가 768픽셀 이상이면서 1024픽셀 이하인 경우에만 특정 스타일을 적용하도록 하고 있습니다. 즉, 이 쿼리는 태블릿과 같이 중간 크기의 디바이스에 대한 스타일을 정의할 때 사용될 수 있습니다. 이를 통해 개발자는 다양한 화면 크기에 맞는 유연한 레이아웃과 스타일을 구성할 수 있습니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
];
