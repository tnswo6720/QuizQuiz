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
    answer: ["only screen, max-width, 600px, 100%"],
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
    answer: ["viewport, device-width, width, initial-scale, 1.0"],
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
    answer: ["viewport, device-width, width, initial-scale, 1.0"],
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
    answer: ["media, only screen, max-width, 600px"],
    explanation:
      "반응형 웹 디자인에서 화면 크기에 따라 다른 CSS 스타일을 적용하려면 CSS 미디어 쿼리를 사용합니다. '@media only screen and (max-width: 600px)' 문법은 화면 크기가 600px 이하일 때만 '.element' 선택자에 대한 스타일을 적용하라는 의미입니다.",
    subject: "css",
    subSubject: "responsive",
    quizType: "coding",
  },
];
