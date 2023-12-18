// questions1.js
export const cssNotionErrorSolution = [
  // 질문 데이터...
  // basic
  // basic
  {
    type: "multiple-choice",
    questionText:
      "다음 중 퀴즈 플랫폼의 UI에서 화면 하단 내용이 짤리는 현상을 해결하기 위해 수정해야 할 CSS 속성은 무엇인가요?",
    code: `
  export const Wrapper = styled.div\`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #f9f9f9;
    min-height: calc(100vh - 50px);
    height: 100%;
    overflow: auto;
  \`;
    `,
    answerOptions: [
      {
        text: "`min-height: calc(100vh - 50px);`를 `min-height: 100%;`로 변경한다.",
        isCorrect: false,
      },
      {
        text: "`overflow: auto;`를 `overflow: hidden;`으로 변경한다.",
        isCorrect: false,
      },
      {
        text: "`height: 100%;` 속성을 제거한다.",
        isCorrect: true,
      },
      {
        text: "`display: flex;`를 `display: block;`으로 변경한다.",
        isCorrect: false,
      },
    ],
    answer: "`height: 100%;` 속성을 제거한다.",
    explanation:
      "`height: 100%;` 속성을 제거하면 `Wrapper`의 높이가 내용에 따라 자동으로 조절되므로, 내용이 많아지더라도 화면 하단이 짤리는 문제를 해결할 수 있습니다. Wrapper의 자식요소는 뷰포트를 기준으로 100%여서 생긴 문제였습니다",
    subject: "css",
    subSubject: "ErrorSolution",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 CSS에서 블록 레벨 요소의 높이가 내용에 따라 자동으로 조절되는 이유는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "블록 레벨 요소는 자신의 부모 요소의 높이를 자동으로 상속하기 때문이다.",
        isCorrect: false,
      },
      {
        text: "블록 레벨 요소는 기본적으로 width 속성이 auto로 설정되어 있기 때문이다.",
        isCorrect: false,
      },
      {
        text: "블록 레벨 요소는 기본적으로 height 속성이 auto로 설정되어 있어, 그 안에 있는 내용에 따라 높이가 자동으로 조절된다.",
        isCorrect: true,
      },
      {
        text: "블록 레벨 요소는 자신의 자식 요소의 높이를 자동으로 상속하기 때문이다.",
        isCorrect: false,
      },
    ],
    answer:
      "블록 레벨 요소는 기본적으로 height 속성이 auto로 설정되어 있어, 그 안에 있는 내용에 따라 높이가 자동으로 조절된다.",
    explanation:
      "블록 레벨 요소는 기본적으로 자신의 내용에 맞게 높이가 자동으로 조절됩니다. 따라서 height 속성을 명시적으로 설정하지 않으면, 요소의 높이는 자동으로 그 안에 있는 내용에 맞춰서 조절됩니다.",
    subject: "css",
    subSubject: "ErrorSolution",
    quizType: "coding",
  },
];
