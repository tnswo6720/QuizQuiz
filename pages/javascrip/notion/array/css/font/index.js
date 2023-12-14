// questions1.js
export const cssNotionFont = [
  // 질문 데이터...
  // basic
  // basic
  {
    type: "multiple-choice",
    questionText:
      "CSS에서 폰트 패밀리를 설정할 때, 어떤 순서로 폰트를 나열해야 하나요?",
    questionImage: "",
    code: `
      p {
        font-family: "Times New Roman", Times, serif;
      }
    `,
    answerOptions: [
      {
        text: "일반적인 폰트 이름 -> 특정 폰트 이름",
        isCorrect: false,
      },
      {
        text: "특정 폰트 이름 -> 일반적인 폰트 이름",
        isCorrect: true,
      },
      {
        text: "알파벳 순서로 나열",
        isCorrect: false,
      },
      {
        text: "사용 빈도 순으로 나열",
        isCorrect: false,
      },
    ],
    answer: "특정 폰트 이름 -> 일반적인 폰트 이름",
    explanation:
      "CSS에서 폰트 패밀리를 설정할 때는 특정 폰트 이름을 먼저 나열하고, 그 후에 일반적인 폰트 이름을 나열합니다. 이렇게 하면 원하는 폰트가 사용자의 시스템에 없을 경우, 다음에 나열된 폰트가 사용됩니다.",
    subject: "css",
    subSubject: "Font",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "폴백 폰트를 적용하는 올바른 방법은 무엇인가요?",
    questionImage: "",
    code: `
      body {
        font-family: "Times New Roman", Times, serif;
      }
    `,
    answerOptions: [
      {
        text: "폰트 패밀리 속성에 하나의 폰트 이름만 명시한다.",
        isCorrect: false,
      },
      {
        text: "폰트 패밀리 속성에 사용하고 싶은 폰트 이름을 여러 개 나열한다.",
        isCorrect: true,
      },
      {
        text: "폴백 폰트는 별도의 CSS 속성으로 설정한다.",
        isCorrect: false,
      },
      {
        text: "폴백 폰트는 HTML 태그의 속성으로 설정한다.",
        isCorrect: false,
      },
    ],
    answer: "폰트 패밀리 속성에 사용하고 싶은 폰트 이름을 여러 개 나열한다.",
    explanation:
      "폴백 폰트는 CSS의 'font-family' 속성을 사용하여 설정합니다. 원하는 폰트가 사용자의 시스템에 없을 경우, 나열된 폰트 중에서 사용 가능한 폰트가 사용됩니다. 이를 폴백(fallback) 폰트라고 합니다.",
    subject: "css",
    subSubject: "Font",
    quizType: "coding",
  },
];
