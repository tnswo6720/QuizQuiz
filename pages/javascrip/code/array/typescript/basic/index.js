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
    subSubject: "basid",
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
    subSubject: "basid",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "TypeScript에서 변수에 명시적인 타입을 지정하려면 어떻게 해야 하나요? 예를 들어, 숫자 타입의 변수 'count'와 문자열 타입의 변수 'name'을 선언하려면 각각 어떤 코드를 작성해야 할까요?",
    code: `
      let count: _____ = 0;
      let name: _____ = 'Alice';
    `,
    answerOptions: [
      ["number", "string"],
      ["Number", "String"],
      ["int", "str"],
      ["numeric", "text"],
    ],
    answer: ["number, string"],
    explanation:
      "TypeScript에서 변수에 타입을 지정할 때는 변수명 뒤에 콜론(:)을 붙이고 타입을 명시합니다. 예를 들어 'let count: number = 0;'는 'count'라는 이름의 변수에 'number' 타입을 지정하고 초기값으로 0을 할당합니다. 'let name: string = 'Alice';'는 'name'이라는 변수에 'string' 타입을 지정하고 초기값으로 'Alice'를 할당합니다. 이렇게 타입을 명시적으로 지정하면 TypeScript 컴파일러는 해당 변수에 할당되는 값이 지정된 타입과 일치하는지 검사합니다.",
    subject: "typescript",
    subSubject: "basic",
    quizType: "coding",
  },
];
