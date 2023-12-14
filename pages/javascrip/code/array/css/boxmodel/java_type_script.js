// questions1.js
export const cssCodeBoxmodel = [
  // 질문 데이터...

  {
    type: "fill-in-the-blank",
    questionText:
      "1CSS에서 요소의 전체 너비를 계산하려면 어떤 요소들을 더해야 하나요? 그리고 그 요소들의 너비를 조절하는 속성은 무엇인가요?",
    code: `
      .box {
        width: ______;
        padding: ______;
        border: ______;
        margin: ______;
        box-sizing: ______;
      }
    `,
    answerOptions: [
      ["100px", "10px", "5px", "20px", "border-box"],
      ["100%", "10px", "5px", "20px", "content-box"],
      ["auto", "10%", "5%", "auto", "border-box"],
      ["100px", "10%", "5px", "20px", "content-box"],
    ],
    answer: ["100px, 10px, 5px, 20px, border-box"],
    explanation:
      "CSS에서 요소의 전체 너비는 'width', 'padding', 'border', 'margin'의 값을 모두 더한 것입니다. 이 값들은 각각 'width', 'padding', 'border-width', 'margin' 속성으로 조절할 수 있습니다. 또한, 'box-sizing' 속성을 'border-box'로 설정하면, 'width'가 'border'와 'padding'을 포함한 전체 너비를 지정하게 됩니다.",
    subject: "css",
    subSubject: "box model",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 전체 너비를 계산하려면 어떤 요소들을 더해야 하나요? 그리고 그 요소들의 너비를 조절하는 속성은 무엇인가요?",
    code: `
      .box {
        width: ______;
        padding: ______;
        border: ______;
        margin: ______;
        box-sizing: ______;
      }
    `,
    answerOptions: [
      ["100px", "10px", "5px", "20px", "border-box"],
      ["100%", "10px", "5px", "20px", "content-box"],
      ["auto", "10%", "5%", "auto", "border-box"],
      ["100px", "10%", "5px", "20px", "content-box"],
    ],
    answer: ["100px, 10px, 5px, 20px, border-box"],
    explanation:
      "CSS에서 요소의 전체 너비는 'width', 'padding', 'border', 'margin'의 값을 모두 더한 것입니다. 이 값들은 각각 'width', 'padding', 'border-width', 'margin' 속성으로 조절할 수 있습니다. 또한, 'box-sizing' 속성을 'border-box'로 설정하면, 'width'가 'border'와 'padding'을 포함한 전체 너비를 지정하게 됩니다.",
    subject: "css",
    subSubject: "box model",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 padding, border, margin의 순서대로 초기값을 설정하려면 어떤 속성을 사용해야 하나요?",
    code: `
      .box {
        ______: 0;
        ______: 0;
        ______: 0;
      }
    `,
    answerOptions: [
      ["padding", "border-width", "margin"],
      ["margin", "border-width", "padding"],
      ["border-width", "margin", "padding"],
      ["padding", "margin", "border-width"],
    ],
    answer: ["padding, border-width, margin"],
    explanation:
      "CSS에서 요소의 padding, border, margin을 초기화하려면 각각 'padding', 'border-width', 'margin' 속성을 사용하고 값으로 '0'을 지정하면 됩니다.",
    subject: "css",
    subSubject: "box model",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 박스의 경계선 너비를 조절하려면 어떤 속성을 사용해야 하나요? 그리고 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .box {
        ______: ______;
      }
    `,
    answerOptions: [
      ["border-width", "10px"],
      ["border", "10px solid black"],
      ["border-size", "10px"],
      ["border-width", "1em"],
    ],
    answer: ["border-width, 10px"],
    explanation:
      "CSS에서 박스의 경계선 너비를 조절하려면 'border-width' 속성을 사용하고, 그 값으로 너비를 지정합니다. 예를 들어 'border-width: 10px;'로 표현하면, 해당 박스의 경계선 너비를 10픽셀로 설정합니다.",
    subject: "css",
    subSubject: "box model",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 마진을 모두 10px로 설정하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .box {
        ______: ______;
      }
    `,
    answerOptions: [
      ["margin", "10px"],
      ["padding", "10px"],
      ["border-width", "10px"],
      ["margin", "1em"],
    ],
    answer: ["margin,10px"],
    explanation:
      "CSS에서 요소의 마진을 설정하려면 'margin' 속성을 사용하고, 그 값으로 마진의 크기를 지정합니다. 예를 들어 'margin: 10px;'로 표현하면, 해당 요소의 마진을 모두 10픽셀로 설정합니다.",
    subject: "css",
    subSubject: "box model",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS 박스 모델에서, 요소 내부의 실제 내용을 감싸는 영역을 설정하는 속성은 무엇인가요?",
    code: `
      .box {
        ______: 50px;
      }
    `,
    answerOptions: ["content", "padding", "border", "margin"],
    answer: "content",
    explanation:
      "CSS 박스 모델에서, 요소 내부의 실제 내용을 감싸는 영역을 'content'라고 합니다. 예를 들어 'content: 50px;'로 표현하면, 해당 요소의 콘텐츠 영역을 50픽셀로 설정합니다.",
    subject: "css",
    subSubject: "box model",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS 박스 모델에서, 경계(Border)와 콘텐츠(Content) 사이의 공간을 설정하는 속성은 무엇인가요?",
    code: `
    .box {
      ______: 20px;
    }
  `,
    answerOptions: ["content", "padding", "border", "margin"],
    answer: "padding",
    explanation:
      "CSS 박스 모델에서, 경계(Border)와 콘텐츠(Content) 사이의 공간을 'padding'이라고 합니다. 예를 들어 'padding: 20px;'로 표현하면, 해당 요소의 패딩 영역을 20픽셀로 설정합니다.",
    subject: "css",
    subSubject: "box model",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 경계를 설정하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      .box {
        ______: ______;
      }
    `,
    answerOptions: [
      ["padding", "20px"],
      ["border", "2px solid black"],
      ["margin", "10px"],
      ["content", "50px"],
    ],
    answer: "border, 2px solid black",
    explanation:
      "CSS에서 요소의 경계를 설정하려면 'border' 속성을 사용하고, 그 값으로 경계의 크기와 스타일, 색상을 지정합니다. 예를 들어 'border: 2px solid black;'로 표현하면, 해당 요소의 경계를 두께 2픽셀, 실선 스타일, 검은색으로 설정합니다.",
    subject: "css",
    subSubject: "box model",
    quizType: "coding",
  },
];
