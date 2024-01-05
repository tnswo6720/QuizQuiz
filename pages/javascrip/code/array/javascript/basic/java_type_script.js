// questions1.js
export const javascriptCodeBasic = [
  // 질문 데이터...

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
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 JavaScript 코드에서 'name' 변수에 할당될 문자열, 'maxAge' 상수에 할당될 수, 그리고 if문에서 출력될 메시지를 적절하게 채워주세요. 단, 'age'는 'maxAge'보다 커야 합니다.",
    code: `
      // 변수 선언
      let name = ______;

      // 상수 선언
      const maxAge = ______;

      // 데이터 타입: 숫자
      let age = 18;

      // 연산자 사용
      age = age + 2;

      // 제어문: if
      if (age > maxAge) {
        console.log(______);
      } else {
        console.log(______);
      }
    `,
    answerOptions: [
      [
        "'John'",
        "19",
        "'You are over the max age.'",
        "'You are under the max age.'",
      ],
      ["'Jane'", "20", "'You are an adult.'", "'You are a minor.'"],
      ["'Doe'", "16", "'You are older.'", "'You are younger.'"],
      ["'Smith'", "17", "'You are overage.'", "'You are underage.'"],
    ],
    answer: [
      "'John'",
      "19",
      "'You are over the max age.'",
      "'You are under the max age.'",
    ],
    explanation:
      "JavaScript에서는 'let' 키워드를 사용해 변수를 선언하고, 'const' 키워드를 사용해 상수를 선언합니다. 숫자 데이터 타입은 숫자 값을 저장하는 데 사용하고, 연산자는 값에 대한 수학적 연산을 수행하는 데 사용합니다. 'if' 제어문은 조건에 따라 코드의 실행 흐름을 제어합니다.",
    subject: "JavaScript",
    subSubject: "Basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 JavaScript 코드에서 'count' 변수를 조건문 내에서 증가시키는 부분을 적절한 연산자로 채워주세요.",
    code: `
      // 변수 선언
      let count = 0;

      // 제어문: for
      for (let i = 0; i < 10; i++) {
        // 연산자 사용
        count ______;
      }
    `,
    answerOptions: [["++"], ["--"], ["**"], ["//"]],
    answer: ["++"],
    explanation:
      "JavaScript에서 '++' 연산자는 변수의 값을 1 증가시키는 데 사용됩니다. 따라서, 'count++'는 'count' 변수의 값을 1 증가시킵니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 JavaScript 코드에서 빈칸을 채워, 'number' 변수에 저장된 값이 10보다 크면 'greater' 문자열을 출력하고, 그렇지 않으면 'less' 문자열을 출력하는 코드를 완성해 보세요.",
    code: `
      // 변수 선언
      let number = 15;

      // 제어문: if
      if (number ______ 10) {
        console.log(______);
      } else {
        console.log('less');
      }
    `,
    answerOptions: [
      [">", "'greater'"],
      ["<", "'less'"],
      ["==", "'equal'"],
      ["!=", "'not equal'"],
    ],
    answer: [">", "'greater'"],
    explanation:
      "JavaScript에서 '>' 연산자는 왼쪽 피연산자가 오른쪽 피연산자보다 큰 경우 true를 반환합니다. 따라서, 'number > 10'은 number 값이 10보다 큰 경우 true를 반환하므로, 이 경우 'greater'가 출력됩니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "JavaScript에서 변수를 선언하고 초기화하는 방법 중 하나는 'let' 키워드를 사용하는 것입니다. 아래의 코드에서 빈칸을 채워 'let' 키워드를 사용하여 'greeting' 변수를 선언하고, 'Hello, World!' 문자열을 초기화해 보세요.",
    code: `
      ______ greeting = ______;
      console.log(greeting);
    `,
    answerOptions: [
      ["let", "'Hello, World!'"],
      ["var", "'Hello, World!'"],
      ["const", "'Hello, World!'"],
      ["let", "Hello, World!"],
    ],
    answer: ["let, 'Hello, World!'"],
    explanation:
      "JavaScript에서 'let' 키워드를 사용하여 변수를 선언하고 초기화할 수 있습니다. 문자열을 초기화할 때는 따옴표('') 또는 쌍따옴표(\")를 사용해야 합니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "JavaScript에서 변경 가능한 변수를 선언하려면 'let' 키워드를 사용하고, 변경 불가능한 상수를 선언하려면 'const' 키워드를 사용합니다. 변수 'myVariable'를 선언하고 초깃값으로 50을 할당하려면 어떤 키워드를 사용해야 하며, 상수 'myConstant'에 25를 할당하려면 어떻게 해야 할까요?",
    code: `
      ______ myVariable = 50;
      ______ myConstant = 25;
    `,
    answerOptions: [
      ["let", "const"],
      ["const", "let"],
      ["var", "let"],
      ["let", "var"],
    ],
    answer: ["let, const"],
    explanation:
      "JavaScript에서 'let' 키워드는 변경될 수 있는 변수를 선언할 때 사용됩니다. 'const' 키워드는 값이 변하지 않는 상수를 선언할 때 사용되며, 한 번 할당된 값은 변경할 수 없습니다. 'let myVariable = 50;'는 'myVariable'이라는 변수를 선언하고 50을 할당합니다. 'const myConstant = 25;'는 'myConstant'라는 상수를 선언하고 25를 할당합니다. 상수는 선언과 동시에 값을 할당해야 하며, 이후에는 그 값을 변경할 수 없습니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "JavaScript에서 매개변수로 두 숫자를 받아 합을 반환하는 함수를 작성하려고 합니다. 이 함수를 'addNumbers'라고 명명하고, 두 매개변수를 'num1'과 'num2'라고 할 때, 적절한 함수 선언은 어떻게 되나요?",
    code: `
      function ______(______, ______) {
        return ______ + ______;
      }
    `,
    answerOptions: [
      ["addNumbers", "num1", "num2", "num1", "num2"],
      ["sum", "x", "y", "x", "y"],
      ["add", "value1", "value2", "value1", "value2"],
      ["combine", "first", "second", "first", "second"],
    ],
    answer: ["addNumbers, num1, num2, num1, num2"],
    explanation:
      "JavaScript에서 함수를 선언할 때 'function' 키워드를 사용하고, 그 뒤에 함수의 이름을 명시합니다. 함수의 매개변수는 소괄호 안에 정의하며, 함수의 본문은 중괄호 내에 작성합니다. 'function addNumbers(num1, num2) { return num1 + num2; }'는 'num1'과 'num2' 두 매개변수를 받아 그 합을 반환하는 'addNumbers'라는 이름의 함수를 정의합니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
];
