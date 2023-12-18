// questions2.js
export const typescriptNotionInfiniteScroller = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "자바스크립트에서 스프레드 연산자(...)을 사용하여 객체를 복사하는 경우, 어떤 유형의 복사가 이루어지는가?",
    code: `
    const original = { a: 1, b: 2 };
    const copied = { ...original };
    `,
    answerOptions: [
      {
        text: "깊은 복사(Deep Copy)",
        isCorrect: false,
      },
      {
        text: "얕은 복사(Shallow Copy)",
        isCorrect: true,
      },
      {
        text: "복사가 아닌 참조",
        isCorrect: false,
      },
      {
        text: "부분 복사(Partial Copy)",
        isCorrect: false,
      },
    ],
    answer: "얕은 복사(Shallow Copy)",
    explanation:
      "자바스크립트에서 스프레드 연산자(...)를 사용하여 객체를 복사하면 얕은 복사(Shallow Copy)가 이루어집니다. 이는 복사된 객체의 속성이 원본 객체의 속성을 참조하지 않지만, 속성의 값이 객체인 경우 그 객체는 참조형태로 복사되어, 이 객체를 변경하면 원본 객체에도 영향을 미칩니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드 예시 중에서 깊은 복사(Deep Copy)를 수행하지 않는 코드는 무엇인가?",
    code: `
    // Code 1
    const original1 = { a: 1, b: 2 };
    const copied1 = JSON.parse(JSON.stringify(original1));

    // Code 2
    const original2 = { a: 1, b: 2 };
    const copied2 = Object.assign({}, original2);

    // Code 3
    const _ = require('lodash');
    const original3 = { a: 1, b: 2 };
    const copied3 = _.cloneDeep(original3);
    `,
    answerOptions: [
      {
        text: "Code 1",
        isCorrect: false,
      },
      {
        text: "Code 2",
        isCorrect: true,
      },
      {
        text: "Code 3",
        isCorrect: false,
      },
    ],
    answer: "Code 2",
    explanation:
      "Object.assign 메서드는 얕은 복사(Shallow Copy)를 수행하는 방법으로, 깊은 복사를 원하는 경우에는 적합하지 않습니다. 반면에 Code 1의 JSON.stringify와 JSON.parse 메서드를 사용하는 방법과 Code 3의 lodash 라이브러리의 _.cloneDeep 함수를 사용하는 방법은 깊은 복사를 수행합니다.",
    subject: "typescript",
    subSubject: "infinitescroller",
    quizType: "coding",
  },
];
