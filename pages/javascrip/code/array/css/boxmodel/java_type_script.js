// questions1.js
export const cssCodeBoxmodel = [
  // 질문 데이터...

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
