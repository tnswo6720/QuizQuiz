// questions1.js
export const javascriptNotionFunction = [
  // 질문 데이터...
  // promise
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'greet' 함수를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function greet(name) {
        return 'Hello, ' + name + '!';
      }
    `,
    answerOptions: [
      {
        text: "greet Hello;",
        isCorrect: false,
      },
      {
        text: "greet('Hello');",
        isCorrect: true,
      },
      {
        text: "greet = 'Hello';",
        isCorrect: false,
      },
      {
        text: "greet.Hello;",
        isCorrect: false,
      },
    ],
    answer: "greet('Hello');",
    explanation:
      "JavaScript에서 함수는 '함수명(인자)' 형태로 호출합니다. 따라서 'greet' 함수는 'greet('Hello');'와 같이 호출합니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 화살표 함수를 사용하여 'greet' 함수를 재작성한 것 중 틀린 것은 무엇인가요?",
    code: `
      function greet(name) {
        return 'Hello, ' + name + '!';
      }
    `,
    answerOptions: [
      {
        text: "let greet = (name) => 'Hello, ' + name + '!';",
        isCorrect: false,
      },
      {
        text: "let greet = name => 'Hello, ' + name + '!';",
        isCorrect: false,
      },
      {
        text: "let greet = (name) => return 'Hello, ' + name + '!';",
        isCorrect: true,
      },
      {
        text: "let greet = (name) => {'Hello, ' + name + '!'};",
        isCorrect: false,
      },
    ],
    answer: "let greet = (name) => return 'Hello, ' + name + '!';",
    explanation:
      "화살표 함수에서는 중괄호를 사용하지 않을 경우 'return' 키워드를 생략해야 합니다. 따라서 'let greet = (name) => return 'Hello, ' + name + '!';'는 잘못된 코드입니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'calculate' 함수를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function calculate(x, y, callback) {
        return callback(x, y);
      }
    `,
    answerOptions: [
      {
        text: "calculate(5, 3, function(a, b) { return a + b; });",
        isCorrect: true,
      },
      {
        text: "calculate(5, 3, (a + b));",
        isCorrect: false,
      },
      {
        text: "calculate(5, 3, return (a, b));",
        isCorrect: false,
      },
      {
        text: "calculate(5, 3, (a, b) => { return a + b; });",
        isCorrect: true,
      },
    ],
    answer: "calculate(5, 3, function(a, b) { return a + b; });",
    explanation:
      "콜백 함수는 다른 함수의 인자로 전달되는 함수입니다. 위 코드에서는 'calculate' 함수를 호출할 때, 세 번째 인자로 콜백 함수를 전달해야 합니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'calculate' 함수를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function calculate(x, y, callback) {
        return callback(x, y);
      }
    `,
    answerOptions: [
      {
        text: "calculate(5, 3, function(a, b) { return a + b; });",
        isCorrect: true,
      },
      {
        text: "calculate(5, 3, (a + b));",
        isCorrect: false,
      },
      {
        text: "calculate(5, 3, return (a, b));",
        isCorrect: false,
      },
      {
        text: "calculate(5, 3, (a, b) => { return a + b; });",
        isCorrect: true,
      },
    ],
    answer: "calculate(5, 3, function(a, b) { return a + b; });",
    explanation:
      "콜백 함수는 다른 함수의 인자로 전달되는 함수입니다. 위 코드에서는 'calculate' 함수를 호출할 때, 세 번째 인자로 콜백 함수를 전달해야 합니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'makeAdder' 함수를 호출하여 반환된 함수의 특징에 대한 올바른 설명은 무엇인가요?",
    code: `
      function makeAdder(x) {
        return function(y) {
          return x + y;
        };
      }
    `,
    answerOptions: [
      {
        text: "반환된 함수는 'makeAdder' 함수의 지역 변수 'x'에 접근할 수 없다.",
        isCorrect: false,
      },
      {
        text: "반환된 함수는 'makeAdder' 함수의 지역 변수 'x'에 접근할 수 있다.",
        isCorrect: true,
      },
      {
        text: "반환된 함수는 'makeAdder' 함수의 매개변수 'x'를 변경할 수 있다.",
        isCorrect: false,
      },
      {
        text: "반환된 함수는 독립적으로 'x'와 'y'를 처리한다.",
        isCorrect: false,
      },
    ],
    answer: "반환된 함수는 'makeAdder' 함수의 지역 변수 'x'에 접근할 수 있다.",
    explanation:
      "이는 클로저의 특징 중 하나로, 내부 함수는 외부 함수의 변수에 접근할 수 있습니다. 따라서 'makeAdder' 함수에서 반환된 함수는 'x'에 접근할 수 있습니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 정의된 'sum' 함수를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function sum(a, b) {
        return a + b;
      }
    `,
    answerOptions: [
      {
        text: "sum 1 2;",
        isCorrect: false,
      },
      {
        text: "sum(1, 2);",
        isCorrect: true,
      },
      {
        text: "sum = 1, 2;",
        isCorrect: false,
      },
      {
        text: "sum.1.2;",
        isCorrect: false,
      },
    ],
    answer: "sum(1, 2);",
    explanation:
      "JavaScript에서 함수는 '함수명(인자1, 인자2, ...)' 형태로 호출합니다. 따라서 'sum' 함수는 'sum(1, 2);'와 같이 호출합니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 예시 중 올바른 화살표 함수의 사용 예시는 무엇인가요?",
    code: ``,
    answerOptions: [
      {
        text: "let add = (a, b) -> a + b;",
        isCorrect: false,
      },
      {
        text: "let add = ((a, b) => return a + b);",
        isCorrect: false,
      },
      {
        text: "let add = (a, b) => a + b;",
        isCorrect: true,
      },
      {
        text: "let add = => (a, b) a + b;",
        isCorrect: false,
      },
    ],
    answer: "let add = (a, b) => a + b;",
    explanation:
      "화살표 함수는 '(인자) => 표현식' 형태로 작성합니다. 표현식은 바로 반환되는 값입니다. 따라서 'let add = (a, b) => a + b;'가 올바른 화살표 함수의 사용 예시입니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'processData' 함수를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function processData(data, callback) {
        console.log('Data processed: ', data);
        callback(data);
      }
    `,
    answerOptions: [
      {
        text: "processData('myData', function(data) { console.log('Callback: ', data); });",
        isCorrect: true,
      },
      {
        text: "processData('myData', 'Callback: ' + data);",
        isCorrect: false,
      },
      {
        text: "processData('myData', console.log('Callback: ', data));",
        isCorrect: false,
      },
      {
        text: "processData('myData', (data) => { console.log('Callback: ', data); });",
        isCorrect: true,
      },
    ],
    answer:
      "processData('myData', function(data) { console.log('Callback: ', data); });",
    explanation:
      "콜백 함수는 다른 함수의 인자로 전달되는 함수입니다. 위 코드에서는 'processData' 함수를 호출할 때, 두 번째 인자로 콜백 함수를 전달해야 합니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'makeMultiplier' 함수를 호출하여 반환된 함수의 특징에 대한 올바른 설명은 무엇인가요?",
    code: `
      function makeMultiplier(multiplier) {
        return function(x) {
          return x * multiplier;
        };
      }
    `,
    answerOptions: [
      {
        text: "반환된 함수는 'makeMultiplier' 함수의 지역 변수 'multiplier'에 접근할 수 없다.",
        isCorrect: false,
      },
      {
        text: "반환된 함수는 'makeMultiplier' 함수의 지역 변수 'multiplier'에 접근할 수 있다.",
        isCorrect: true,
      },
      {
        text: "반환된 함수는 'makeMultiplier' 함수의 매개변수 'multiplier'를 변경할 수 있다.",
        isCorrect: false,
      },
      {
        text: "반환된 함수는 독립적으로 'x'와 'multiplier'를 처리한다.",
        isCorrect: false,
      },
    ],
    answer:
      "반환된 함수는 'makeMultiplier' 함수의 지역 변수 'multiplier'에 접근할 수 있다.",
    explanation:
      "이는 클로저의 특징 중 하나로, 내부 함수는 외부 함수의 변수에 접근할 수 있습니다. 따라서 'makeMultiplier' 함수에서 반환된 함수는 'multiplier'에 접근할 수 있습니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'multiply' 함수를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function multiply(a, b) {
        return a * b;
      }
    `,
    answerOptions: [
      {
        text: "multiply 3 4;",
        isCorrect: false,
      },
      {
        text: "multiply(3, 4);",
        isCorrect: true,
      },
      {
        text: "multiply = 3, 4;",
        isCorrect: false,
      },
      {
        text: "multiply.3.4;",
        isCorrect: false,
      },
    ],
    answer: "multiply(3, 4);",
    explanation:
      "JavaScript에서 함수는 '함수명(인자1, 인자2, ...)' 형태로 호출합니다. 따라서 'multiply' 함수는 'multiply(3, 4);'와 같이 호출합니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 예시 중 올바른 화살표 함수의 사용 예시는 무엇인가요?",
    code: ``,
    answerOptions: [
      {
        text: "let subtract = (a, b) -> a - b;",
        isCorrect: false,
      },
      {
        text: "let subtract = ((a, b) => return a - b);",
        isCorrect: false,
      },
      {
        text: "let subtract = (a, b) => a - b;",
        isCorrect: true,
      },
      {
        text: "let subtract = => (a, b) a - b;",
        isCorrect: false,
      },
    ],
    answer: "let subtract = (a, b) => a - b;",
    explanation:
      "화살표 함수는 '(인자) => 표현식' 형태로 작성합니다. 표현식은 바로 반환되는 값입니다. 따라서 'let subtract = (a, b) => a - b;'가 올바른 화살표 함수의 사용 예시입니다.",
    subject: "javascript",
    subSubject: "Function",
    quizType: "coding",
  },

  // promise
];
