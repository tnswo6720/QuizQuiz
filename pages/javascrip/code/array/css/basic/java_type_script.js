// questions1.js
export const cssCodeBasic = [
  // 질문 데이터...

  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 아이디 선택자를 사용하여 스타일을 적용하려면 어떤 기호를 사용해야 하나요?",
    code: `
      ____myId {
        color: red;
      }
    `,
    answerOptions: ["#", ".", "*", "+"],
    answer: "#",
    explanation:
      "CSS에서 아이디 선택자를 사용하여 스타일을 적용하려면 '#' 기호를 사용합니다. 예를 들어, 'myId'라는 아이디가 부여된 요소에 스타일을 적용하려면 '#myId'로 표현합니다.",
    subject: "css",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 클래스 선택자를 사용하여 스타일을 적용하려면 어떤 기호를 사용해야 하나요?",
    code: `
      ____myClass {
        color: blue;
      }
    `,
    answerOptions: [".", "#", "*", "+"],
    answer: ".",
    explanation:
      "CSS에서 클래스 선택자를 사용하여 스타일을 적용하려면 '.' 기호를 사용합니다. 예를 들어, 'myClass'라는 클래스가 부여된 요소에 스타일을 적용하려면 '.myClass'로 표현합니다.",
    subject: "css",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "CSS에서 자식 요소를 선택하는 결합자는 무엇인가요?",
    code: `
      parent ____ child {
        color: green;
      }
    `,
    answerOptions: [">", "+", "~", " "],
    answer: ">",
    explanation:
      "CSS에서 자식 요소를 선택하는 결합자는 '>' 기호를 사용합니다. 'parent > child'로 표현하면, 'parent' 요소의 직접적인 자식인 'child' 요소를 선택합니다.",
    subject: "css",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 태그 선택자를 사용하여 스타일을 적용하려면 어떻게 해야 하나요?",
    code: `
      ____ {
        color: red;
      }
    `,
    answerOptions: ["p", "#p", ".p", "*p"],
    answer: "p",
    explanation:
      "CSS에서 태그 선택자를 사용하여 스타일을 적용하려면 태그 이름만 사용합니다. 예를 들어, 'p' 태그에 스타일을 적용하려면 'p'로 표현합니다.",
    subject: "css",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 인접 형제 선택자를 사용하려면 어떤 기호를 사용해야 하나요?",
    code: `
      h1 ____ p {
        color: blue;
      }
    `,
    answerOptions: ["+", ">", "~", " "],
    answer: "+",
    explanation:
      "CSS에서 인접 형제 선택자를 사용하려면 '+' 기호를 사용합니다. 'h1 + p'로 표현하면, 'h1' 요소를 바로 뒤따르는 'p' 요소를 선택합니다.",
    subject: "css",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 일반 형제 선택자를 사용하려면 어떤 기호를 사용해야 하나요?",
    code: `
      h1 ____ p {
        color: green;
      }
    `,
    answerOptions: ["~", "+", ">", " "],
    answer: "~",
    explanation:
      "CSS에서 일반 형제 선택자를 사용하려면 '~' 기호를 사용합니다. 'h1 ~ p'로 표현하면, 'h1' 요소를 뒤따르는 모든 'p' 요소를 선택합니다.",
    subject: "css",
    subSubject: "basic",
    quizType: "coding",
  },
];
