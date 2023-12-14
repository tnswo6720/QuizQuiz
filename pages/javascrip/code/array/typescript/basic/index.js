// questions1.js
export const typescriptCodeBasic = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText: "다음 코드에서 'ccc' 변수에 할당 가능한 타입은 무엇인가요?",
    code: `
      let ccc: ______ = 1000;
      ccc = "1000원";
    `,
    answerOptions: ["string", "number", "string | number", "any"],
    answer: "string | number",
    explanation:
      "'ccc' 변수는 숫자와 문자열을 모두 할당받을 수 있으므로, 빈 칸에는 'string | number'가 들어갑니다. 'string | number'는 'ccc'가 문자열 혹은 숫자 타입의 값을 가질 수 있음을 나타내는 유니언 타입입니다.",
    subject: "typescript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "타입스크립트를 설치하기 위해 사용되는 명령어를 작성해보세요.",
    code: "______ add typescript",
    answer: "yarn",
    explanation:
      "타입스크립트를 설치하기 위해 `yarn add typescript` 명령어를 사용합니다.",
    explanationCode: "yarn add typescript",
    subject: "typescript",
    subSubject: "basic",
    quizType: "coding",
  },
];
