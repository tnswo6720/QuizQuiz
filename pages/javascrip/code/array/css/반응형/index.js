// questions1.js
export const cssCodeResponsive = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "화면의 너비가 600px 미만일 때, 특정 요소의 너비를 100%로 설정하려면 어떤 CSS 미디어 쿼리를 작성해야 하는지 아래의 빈칸을 채워주세요.",
    code: `
      @media ______ (______ : ______) {
        .element {
          width: ______;
        }
      }
    `,
    answerOptions: [
      ["only-screen", "max-width", "600px", "100%"],
      ["only-screen", "min-width", "600px", "100%"],
      ["screen-and", "max-width", "600px", "100%"],
      ["screen-and", "min-width", "600px", "100%"],
    ],
    answer: ["only-screen, max-width, 600px, 100%"],
    explanation:
      "미디어 쿼리를 사용하여 화면의 너비가 600px 미만일 때 특정 요소의 너비를 100%로 설정하려면 '@media only screen and (max-width: 600px)'를 사용합니다. 이는 뷰포트의 최대 너비가 600px일 때 해당 스타일을 적용하라는 의미입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },

  {
    type: "fill-in-the-blank",
    questionText:
      "반응형 웹 디자인에서 모바일 기기의 뷰포트를 적절하게 설정하기 위해 사용하는 메타 태그를 작성하려면, 아래의 빈칸을 어떻게 채워야 할까요?",
    code: `
      <meta name="______" content="width=______, initial-scale=______">
    `,
    answerOptions: [
      ["viewport", "device-width", "1.0"],
      ["viewport", "screen-width", "1"],
      ["device", "device-width", "1.0"],
      ["screen", "device-width", "1"],
    ],
    answer: ["viewport, device-width, 1.0"],
    explanation:
      '반응형 웹 디자인에서는 \'<meta name="viewport" content="width=device-width, initial-scale=1.0">\' 메타 태그를 사용하여 모바일 기기의 화면 크기에 웹 페이지를 최적화합니다. 이 메타 태그는 뷰포트의 너비를 장치의 너비에 맞추고, 초기 확대/축소 비율을 1.0으로 설정합니다, 이는 웹페이지가 모바일 기기에서 적절한 크기로 표시되도록 도와줍니다.',
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },

  {
    type: "fill-in-the-blank",
    questionText:
      "반응형 웹 디자인에서 화면 크기에 따라 다른 CSS 스타일을 적용하려면 어떤 CSS 문법을 사용해야 하는지, 아래의 빈칸을 채워주세요.",
    code: `
      @______ ______ (______ : ______) {
        .element {
          color: red;
        }
      }
    `,
    answerOptions: [
      ["media", "only-screen", "max-width", "600px"],
      ["import", "only-screen", "max-width", "600px"],
      ["media", "all", "max-width", "600px"],
      ["media", "only-screen", "min-width", "600px"],
    ],
    answer: ["media, only-screen, max-width, 600px"],
    explanation:
      "반응형 웹 디자인에서 화면 크기에 따라 다른 CSS 스타일을 적용하려면 CSS 미디어 쿼리를 사용합니다. '@media only screen and (max-width: 600px)' 문법은 화면 크기가 600px 이하일 때만 '.element' 선택자에 대한 스타일을 적용하라는 의미입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "반응형 웹 디자인에서 화면 크기가 600px 이하일 때 특정 스타일을 적용하려면, 아래의 빈칸을 채워주세요.",
    code: `
      @media ______ ______ (______ : ______) {
        body {
          background-color: lightblue;
        }
      }
    `,
    answerOptions: [
      ["only-screen", "and", "max-width", "600px"],
      ["only-print", "and", "max-width", "600px"],
      ["only-screen", "and", "min-width", "600px"],
      ["only-screen", "and", "width", "600px"],
    ],
    answer: ["only-screen, and, max-width, 600px"],
    explanation:
      "반응형 웹 디자인에서 화면 크기가 600px 이하일 때 특정 스타일을 적용하려면 '@media only screen and (max-width: 600px)'를 사용합니다. 이는 화면 크기가 600px 이하일 때 body의 배경색을 lightblue로 변경하라는 의미입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "CSS를 사용하여 반응형 웹 디자인을 구현하는 방법에 대해 실습합니다. 주어진 CSS 코드는 화면 크기에 따라 다른 스타일을 적용하도록 미디어 쿼리를 사용합니다. 화면의 너비가 768px 미만일 때 '.container' 클래스의 너비를 100%로 설정하는 미디어 쿼리를 작성하세요.",
    code: `
      @media only screen and (max-width: _____) {
        .container {
          width: _____;
        }
      }
    `,
    answerOptions: [
      ["768px", "100%"],
      ["600px", "50%"],
      ["768px", "50%"],
      ["1024px", "100%"],
    ],
    answer: ["768px, 100%"],
    explanation:
      "CSS의 미디어 쿼리는 화면의 너비와 같은 다양한 조건에 따라 서로 다른 스타일을 적용할 수 있게 해줍니다. 위의 코드는 '@media only screen and (max-width: 768px)'를 사용하여 화면의 최대 너비가 768px 이하일 때 적용되는 스타일을 정의합니다. '.container' 클래스에 'width: 100%;'를 설정함으로써 해당 화면 크기에서는 컨테이너가 전체 너비를 차지하도록 합니다. 이는 태블릿과 모바일 장치에서의 사용자 경험을 개선하는 데 도움을 줍니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "화면의 방향이 세로(portrait)일 때와 가로(landscape)일 때 다른 스타일을 적용하려고 합니다. '.navigation' 클래스에 대해 세로 방향에서는 글꼴 크기를 12px로, 가로 방향에서는 18px로 설정하는 미디어 쿼리를 작성하세요.",
    code: `
      @media only screen and (orientation: portrait) {
        .navigation {
          font-size: _____;
        }
      }
  
      @media only screen and (orientation: landscape) {
        .navigation {
          font-size: _____;
        }
      }
    `,
    answerOptions: [
      ["12px, 18px"],
      ["14px, 16px"],
      ["10px, 20px"],
      ["15px, 17px"],
    ],
    answer: ["12px, 18px"],
    explanation:
      "CSS 미디어 쿼리의 'orientation' 속성을 사용하면 화면의 방향(세로 또는 가로)에 따라 스타일을 다르게 적용할 수 있습니다. 'orientation: portrait'는 기기가 세로 방향일 때, 'orientation: landscape'는 기기가 가로 방향일 때 적용되는 스타일을 정의합니다. 따라서 '.navigation' 클래스에 'font-size: 12px;'를 세로 방향에서, 'font-size: 18px;'를 가로 방향에서 적용하면, 사용자가 기기의 방향을 변경할 때마다 적절한 글꼴 크기로 보여질 것입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "디바이스의 방향에 따라 스타일을 적용하는 CSS 미디어 쿼리를 작성하세요. 세로 방향(portrait)에서는 '.menu' 클래스에 배경색을 파란색으로, 가로 방향(landscape)에서는 배경색을 녹색으로 설정합니다.",
    code: `
      @media only screen and (orientation: _____) {
        .menu {
          background-color: _____;
        }
      }
  
      @media only screen and (orientation: _____) {
        .menu {
          background-color: _____;
        }
      }
    `,
    answerOptions: [
      ["portrait, blue, landscape, green"],
      ["landscape, green, portrait, blue"],
      ["portrait, green, landscape, blue"],
      ["landscape, blue, portrait, green"],
    ],
    answer: ["portrait, blue, landscape, green"],
    explanation:
      "CSS 미디어 쿼리의 `orientation` 옵션을 사용하여 디바이스의 방향이 세로(portrait) 또는 가로(landscape)일 때 적용할 스타일을 지정할 수 있습니다. `orientation: portrait`는 세로 방향일 때 적용되며, 여기서는 '.menu' 클래스의 배경색을 파란색으로 설정합니다. `orientation: landscape`는 가로 방향일 때 적용되며, 가로 방향에서는 '.menu' 클래스의 배경색을 녹색으로 설정합니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
];
