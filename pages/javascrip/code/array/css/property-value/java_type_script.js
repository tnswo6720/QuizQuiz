// questions1.js
export const cssCodePropertyValue = [
  // 질문 데이터...

  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 배경색을 변경하려면 어떤 속성을 사용해야 하나요?",
    code: `
      div {
        ____: red;
      }
    `,
    answerOptions: [
      "background-color",
      "font-color",
      "border-color",
      "text-color",
    ],
    answer: "background-color",
    explanation:
      "CSS에서 요소의 배경색을 변경하려면 'background-color' 속성을 사용합니다. 'background-color: red;'로 표현하면, 해당 요소의 배경색을 빨간색으로 설정할 수 있습니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 텍스트 정렬 방식을 변경하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      p {
        ____: ____;
      }
    `,
    answerOptions: [
      ["text-align", "center"],
      ["font-align", "middle"],
      ["text-align", "middle"],
      ["font-align", "center"],
    ],
    answer: ["text-align", "center"],
    explanation:
      "CSS에서 요소의 텍스트 정렬 방식을 변경하려면 'text-align' 속성을 사용하고, 그 값으로 'center'를 지정하면 텍스트를 가운데 정렬할 수 있습니다. 'text-align: center;'로 표현하면, 해당 요소의 텍스트를 가운데 정렬합니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 폰트 크기를 변경하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      h1 {
        ____: ____;
      }
    `,
    answerOptions: [
      ["font-size", "20px"],
      ["text-size", "20pt"],
      ["font-size", "20pt"],
      ["text-size", "20px"],
    ],
    answer: ["font-size", "20px"],
    explanation:
      "CSS에서 요소의 폰트 크기를 변경하려면 'font-size' 속성을 사용하고, 그 값으로 픽셀(px) 단위의 숫자를 지정합니다. 'font-size: 20px;'로 표현하면, 해당 요소의 폰트 크기를 20픽셀로 설정합니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 테두리 두께를 변경하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      div {
        ____: ____;
      }
    `,
    answerOptions: [
      ["border-width", "10px"],
      ["border-thickness", "10px"],
      ["border-width", "10pt"],
      ["border-thickness", "10pt"],
    ],
    answer: ["border-width", "10px"],
    explanation:
      "CSS에서 요소의 테두리 두께를 변경하려면 'border-width' 속성을 사용하고 그 값으로 픽셀(px) 단위의 숫자를 지정합니다. 'border-width: 10px;'로 표현하면, 해당 요소의 테두리 두께를 10픽셀로 설정합니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 테두리 색상을 변경하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      div {
        ____: ____;
      }
    `,
    answerOptions: [
      ["border-color", "black"],
      ["border-color", "#000000"],
      ["border-shade", "black"],
      ["border-shade", "#000000"],
    ],
    answer: ["border-color", "black"],
    explanation:
      "CSS에서 요소의 테두리 색상을 변경하려면 'border-color' 속성을 사용하고 그 값으로 색상 이름이나 색상 코드를 지정합니다. 'border-color: black;'로 표현하면, 해당 요소의 테두리 색상을 검은색으로 설정합니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 너비를 변경하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      img {
        ____: ____;
      }
    `,
    answerOptions: [
      ["width", "200px"],
      ["length", "200px"],
      ["width", "200pt"],
      ["length", "200pt"],
    ],
    answer: ["width", "200px"],
    explanation:
      "CSS에서 요소의 너비를 변경하려면 'width' 속성을 사용하고 그 값으로 픽셀(px) 단위의 숫자를 지정합니다. 'width: 200px;'로 표현하면, 해당 요소의 너비를 200픽셀로 설정합니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
];
