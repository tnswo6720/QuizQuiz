// questions1.js
export const cssCodeSelector = [
  // 질문 데이터...

  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 속성 선택자를 사용하여 스타일을 적용하려면 어떻게 해야 하나요?",
    code: `
      ____ {
        color: red;
      }
    `,
    answerOptions: ["a[target]", ".target", "#target", "*target"],
    answer: "a[target]",
    explanation:
      "CSS에서 속성 선택자를 사용하여 스타일을 적용하려면 대괄호([]) 안에 속성 이름을 넣습니다. 예를 들어, 'target' 속성을 가진 'a' 태그에 스타일을 적용하려면 'a[target]'로 표현합니다. 이렇게 하면, 'target' 속성을 가진 모든 'a' 태그에 대해 텍스트 색상을 빨간색으로 설정합니다. 예를 들어, HTML에서 `<a href='https://example.com' target='_blank'>Example Link</a>`라는 코드가 있을 때, 위 CSS 코드에 따르면 'Example Link' 텍스트는 빨간색으로 표시됩니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },

  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 가상 클래스 선택자를 사용하여 링크에 마우스 오버(hover)했을 때 스타일을 적용하려면 어떻게 해야 하나요?",
    code: `
      a:____ {
        color: blue;
      }
    `,
    answerOptions: ["hover", "link", "visited", "active"],
    answer: "hover",
    explanation:
      "CSS에서 가상 클래스 선택자를 사용하여 링크에 마우스 오버(hover)했을 때 스타일을 적용하려면 ':hover'를 사용합니다. 'a:hover'로 표현하면, 'a' 태그에 마우스를 올렸을 때 스타일을 적용할 수 있습니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 가상 요소 선택자를 사용하여 요소의 내용 앞에 내용을 삽입하려면 어떻게 해야 하나요?",
    code: `
      p::____ {
        content: 'Hello ';
      }
    `,
    answerOptions: ["before", "after", "first-letter", "first-line"],
    answer: "before",
    explanation:
      "CSS에서 가상 요소 선택자를 사용하여 요소의 내용 앞에 내용을 삽입하려면 '::before'를 사용합니다. 'p::before'로 표현하면, 'p' 태그의 내용 앞에 'Hello '를 삽입할 수 있습니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },

  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 속성 선택자를 사용하여 특정 속성 값이 있는 요소를 선택하려면 어떻게 해야 하나요?",
    code: `
      ____ {
        color: blue;
      }
    `,
    answerOptions: [
      "input[type='text']",
      ".type='text'",
      "#type='text'",
      "*type='text'",
    ],
    answer: "input[type='text']",
    explanation:
      "CSS에서 속성 선택자를 사용하여 특정 속성 값이 있는 요소를 선택하려면 대괄호([]) 안에 '속성=값' 형태로 작성합니다. 예를 들어, 'type' 속성 값이 'text'인 'input' 태그에 스타일을 적용하려면 'input[type='text']'로 표현합니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 첫번째 자식을 선택하는 가상 클래스 선택자는 무엇인가요?",
    code: `
      p:____ {
        color: green;
      }
    `,
    answerOptions: ["first-child", "last-child", "nth-child", "only-child"],
    answer: "first-child",
    explanation:
      "CSS에서 요소의 첫번째 자식을 선택하는 가상 클래스 선택자는 ':first-child'입니다. 'p:first-child'로 표현하면, 'p' 태그 중 첫번째 자식 요소를 선택할 수 있습니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "CSS에서 요소의 내용 뒤에 내용을 삽입하려면 어떤 가상 요소 선택자를 사용해야 하나요?",
    code: `
      p::____ {
        content: ' Bye';
      }
    `,
    answerOptions: ["after", "before", "first-letter", "first-line"],
    answer: "after",
    explanation:
      "CSS에서 요소의 내용 뒤에 내용을 삽입하려면 '::after' 가상 요소 선택자를 사용합니다. 'p::after'로 표현하면, 'p' 태그의 내용 뒤에 ' Bye'를 삽입할 수 있습니다.",
    subject: "css",
    subSubject: "selector",
    quizType: "coding",
  },
];
