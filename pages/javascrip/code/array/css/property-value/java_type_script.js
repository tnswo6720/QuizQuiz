// questions1.js
export const cssCodePropertyValue = [
  // 질문 데이터...

  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 배경색을 변경하려면 어떤 속성을 사용해야 하나요?",
    code: `
      div {
        ______: red;
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
      "1CSS에서 요소의 폰트 크기를 변경하려면 어떤 속성을 사용하고, 그 속성에 어떤 값을 지정해야 하나요?",
    code: `
      h1 {
        ______: ______;
      }
    `,
    answerOptions: [
      ["font-size", "20px"],
      ["text-size", "20pt"],
      ["font-size", "20pt"],
      ["text-size", "20px"],
    ],
    answer: ["font-size, 20px"],
    explanation:
      "CSS에서 요소의 폰트 크기를 변경하려면 'font-size' 속성을 사용하고, 그 값으로 픽셀(px) 단위의 숫자를 지정합니다. 'font-size: 20px;'로 표현하면, 해당 요소의 폰트 크기를 20픽셀로 설정합니다.",
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
        ______: ______;
      }
    `,
    answerOptions: [
      ["font-size", "20px"],
      ["text-size", "20pt"],
      ["font-size", "20pt"],
      ["text-size", "20px"],
    ],
    answer: ["font-size, 20px"],
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
        ______: ______;
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
        ______: ______;
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
        ______: ______;
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
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 텍스트 정렬을 위해 사용하는 속성과 중앙 정렬을 지정하는 속성값을 무엇인가요?",
    code: `
      .text-center {
        ______: ______;
      }
    `,
    answerOptions: [
      ["text-align", "center"],
      ["text-justify", "middle"],
      ["text-align", "middle"],
      ["font-align", "center"],
    ],
    answer: ["text-align, center"],
    explanation:
      "CSS에서 텍스트를 정렬할 때 'text-align' 속성을 사용합니다. 중앙 정렬을 하고자 할 때는 이 속성에 'center'라는 값을 지정합니다. 따라서 '.text-center { text-align: center; }'는 해당 클래스를 가진 요소 내의 텍스트를 중앙에 정렬합니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소에 그림자 효과를 주기 위해 사용하는 속성과 값을 무엇인가요? 수평 오프셋 5px, 수직 오프셋 10px, 흐림 반경 15px, 색상으로 rgba(0, 0, 0, 0.5)를 지정하세요.",
    code: `
      .shadow-box {
        ______: ______ ______ ______ ______;
      }
    `,
    answerOptions: [
      ["box-shadow", "5px 10px 15px rgba(0, 0, 0, 0.5)"],
      ["text-shadow", "5px 10px 15px rgba(0, 0, 0, 0.5)"],
      ["border-shadow", "5px 10px rgba(0, 0, 0, 0.5)"],
      ["box-shadow", "10px 5px rgba(0, 0, 0, 0.5)"],
    ],
    answer: ["box-shadow, 5px 10px 15px rgba(0, 0, 0, 0.5)"],
    explanation:
      "CSS에서 'box-shadow' 속성은 요소에 그림자 효과를 추가하는 데 사용됩니다. 이 속성에는 수평 오프셋, 수직 오프셋, 흐림 반경(선택적), 그리고 색상을 값으로 지정할 수 있습니다. '.shadow-box { box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5); }'로 설정하면, 해당 클래스를 가진 요소에는 지정한 옵션으로 그림자가 적용됩니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 상단 외부 여백을 30px로 설정하고 싶을 때 사용하는 속성과 값을 무엇인가요?",
    code: `
      .top-margin {
        margin-______: ______;
      }
    `,
    answerOptions: [
      ["top", "30px"],
      ["up", "30px"],
      ["above", "30"],
      ["top", "3em"],
    ],
    answer: ["top, 30px"],
    explanation:
      "CSS에서 요소의 특정 방향(위, 오른쪽, 아래, 왼쪽)에 대한 외부 여백을 설정할 때는 'margin-top', 'margin-right', 'margin-bottom', 'margin-left' 속성을 사용할 수 있습니다. 'margin-top: 30px;'로 설정하면 해당 클래스를 가진 요소의 상단 마진을 30픽셀로 설정하게 됩니다.",
    subject: "css",
    subSubject: "property-value",
    quizType: "coding",
  },
];
