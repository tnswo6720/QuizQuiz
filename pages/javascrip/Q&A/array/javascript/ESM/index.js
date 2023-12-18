// questions1.js
export const javascriptNotionESM = [
  // 질문 데이터...
  // promise
  {
    type: "multiple-choice",
    questionText:
      "JavaScript에서 모듈을 임포트하고 익스포트하는 방법에 대한 질문입니다. 다음 중 ESM(ES Modules) 방식으로 모듈을 임포트하는 올바른 방법은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "const module = require('module');",
        isCorrect: false,
      },
      {
        text: "import module from 'module';",
        isCorrect: true,
      },
      {
        text: "import { module } from 'module';",
        isCorrect: true,
      },
      {
        text: "const { module } = require('module');",
        isCorrect: false,
      },
    ],
    answer: "import module from 'module';",
    explanation:
      "ESM(ES Modules)는 'import' 키워드를 사용하여 모듈을 임포트하고, 'export' 키워드를 사용하여 모듈을 익스포트합니다. 반면, CommonJS는 'require' 함수를 사용하여 모듈을 임포트하고, 'module.exports'를 사용하여 모듈을 익스포트합니다.",
    subject: "javascript",
    subSubject: "ESM",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "JavaScript에서 모듈을 익스포트하는 방법에 대한 질문입니다. 다음 중 CommonJS 방식으로 모듈을 익스포트하는 올바른 방법은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "export const module = {};",
        isCorrect: false,
      },
      {
        text: "export default module;",
        isCorrect: false,
      },
      {
        text: "module.exports = {};",
        isCorrect: true,
      },
      {
        text: "export { module };",
        isCorrect: false,
      },
    ],
    answer: "module.exports = {};",
    explanation:
      "CommonJS는 'module.exports'를 사용하여 모듈을 익스포트합니다. 반면, ESM(ES Modules)는 'export' 키워드를 사용하여 모듈을 익스포트합니다.",
    subject: "javascript",
    subSubject: "ESM",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "JavaScript에서 ESM(ES Modules)을 사용하여 모듈을 익스포트하는 방법에 대한 질문입니다. 다음 중 올바른 방법은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "module.exports = {};",
        isCorrect: false,
      },
      {
        text: "exports.module = {};",
        isCorrect: false,
      },
      {
        text: "export const module = {};",
        isCorrect: true,
      },
      {
        text: "export default module;",
        isCorrect: true,
      },
    ],
    answer: "export const module = {};",
    explanation:
      "ESM(ES Modules)는 'export' 키워드를 사용하여 모듈을 익스포트합니다. 반면, CommonJS는 'module.exports' 또는 'exports'를 사용하여 모듈을 익스포트합니다.",
    subject: "javascript",
    subSubject: "ESM",
    quizType: "coding",
  },

  // promise
];

//