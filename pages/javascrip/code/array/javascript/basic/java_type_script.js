// questions1.js
export const javascriptCodeBasic = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 변하지 않는 값을 선언하는 키워드는 무엇인가요?",
    code: `
      const pi = 3.14159;
      console.log(______);
    `,
    answerOptions: ["var", "let", "const", "function"],
    answer: "const",
    explanation:
      "'const' 키워드는 변하지 않는(즉, 읽기 전용) 값을 선언하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },

  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 두 변수의 값을 비교하는 연산자는 무엇인가요?",
    code: `
    let a = 5;
    let b = 10;
    console.log(a ______ b);
  `,
    answerOptions: ["=", "==", "===", "<>"],
    answer: "===",
    explanation:
      "'===' 연산자는 두 변수의 값과 타입이 동일한지를 비교하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 조건에 따른 흐름 제어를 위한 키워드는 무엇인가요?",
    code: `
    let a = 5;
    let b = 10;

    if (a < b) {
      console.log('a is less than b');
    } else {
      console.log('a is not less than b');
    }
  `,
    answerOptions: ["for", "while", "if", "switch"],
    answer: "if",
    explanation:
      "'if' 키워드는 특정 조건이 참인지 여부에 따라 코드 블록의 실행을 제어하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 변수를 선언하면서 동시에 값을 초기화하는 키워드는 무엇인가요?",
    code: `
      ______ name = 'John Doe';
      console.log(name);
    `,
    answerOptions: ["var", "const", "function", "if"],
    answer: "var",
    explanation:
      "'var' 키워드는 변수를 선언하고 동시에 값을 초기화하는데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "자바스크립트에서 두 수를 더하는 연산자는 무엇인가요?",
    code: `
    let a = 5;
    let b = 10;
    let c = a ______ b;
    console.log(c);
  `,
    answerOptions: ["-", "*", "/", "+"],
    answer: "+",
    explanation: "'+' 연산자는 두 수를 더하는데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 특정 코드를 지정된 횟수만큼 반복하는 제어문은 무엇인가요?",
    code: `
      ______ (let i = 0; i < 5; i++) {
        console.log(i);
      }
    `,
    answerOptions: ["if", "while", "switch", "for"],
    answer: "for",
    explanation: "'for' 제어문은 코드를 지정된 횟수만큼 반복하는데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 논리형 값을 나타내는 데이터 타입은 무엇인가요?",
    code: `
      let isTrue = ______;
      console.log(isTrue);
    `,
    answerOptions: ["string", "number", "boolean", "object"],
    answer: "boolean",
    explanation: "논리형 값은 'boolean' 데이터 타입으로 표현됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 값이 변경되지 않는 상수를 선언하는 키워드는 무엇인가요?",
    code: `
      ______ PI = 3.14;
      console.log(PI);
    `,
    answerOptions: ["var", "let", "const", "function"],
    answer: "const",
    explanation:
      "'const' 키워드는 값이 변경되지 않는 상수를 선언하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 특정 조건이 참인 동안 코드를 반복하는 제어문은 무엇인가요?",
    code: `
      let i = 0;

      ______ (i < 5) {
        console.log(i);
        i++;
      }
    `,
    answerOptions: ["for", "while", "if", "switch"],
    answer: "while",
    explanation:
      "'while' 제어문은 특정 조건이 참인 동안 코드를 반복하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 변수의 데이터 타입을 확인하는 키워드는 무엇인가요?",
    code: `
      let name = 'John Doe';
      console.log(______(name));
    `,
    answerOptions: ["typeof", "instanceof", "datatype", "type"],
    answer: "typeof",
    explanation:
      "'typeof' 키워드는 변수의 데이터 타입을 확인하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 조건이 참일 때만 코드를 실행하는 제어문은 무엇인가요?",
    code: `
      let a = 10;

      ______ (a > 5) {
        console.log('a is greater than 5');
      }
    `,
    answerOptions: ["for", "while", "if", "switch"],
    answer: "if",
    explanation:
      "'if' 제어문은 조건이 참일 때만 코드를 실행하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
];
