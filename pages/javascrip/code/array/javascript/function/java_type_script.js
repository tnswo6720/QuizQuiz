// questions1.js
export const javascriptCodeFunction = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 함수를 선언하고 호출하는 코드는 다음 중 어떤 것인가요?",
    code: `
      ______ greet() {
        console.log('Hello, World!');
      }
      
      ______;
    `,
    answerOptions: [
      "function, greet()",
      "function, greet;",
      "func, greet()",
      "func, greet;",
    ],
    answer: "function, greet()",
    explanation:
      "'function' 키워드를 사용하여 함수를 선언하고, 함수 이름 뒤에 괄호를 붙여 함수를 호출합니다.",
    subject: "javascript",
    subSubject: "function",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "자바스크립트에서 화살표 함수를 선언하는 방법은 무엇인가요?",
    code: `
      const greet = ______ => {
        console.log('Hello, World!');
      };

      greet();
    `,
    answerOptions: ["()", "(param)", "{}", "<>"],
    answer: "()",
    explanation:
      "화살표 함수는 '()'를 사용하여 매개변수를 지정하고, '=>'로 함수 본문을 연결합니다.",
    subject: "javascript",
    subSubject: "function",
    quizType: "coding",
  },

  {
    type: "fill-in-the-blank",
    questionText: "자바스크립트에서 함수를 선언하는 방법은 무엇인가요?",
    code: `
      ______ hello(name) {
        return 'Hello, ' + name;
      }
    `,
    answerOptions: ["function", "const", "let", "var"],
    answer: "function",
    explanation:
      "자바스크립트에서는 'function' 키워드를 사용하여 함수를 선언합니다.",
    subject: "javascript",
    subSubject: "function",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 화살표 함수를 사용하여 간단한 덧셈 함수를 작성하는 방법은 무엇인가요?",
    code: `
      ______ add = (a, b) => a + b;
    `,
    answerOptions: ["const", "let", "var", "function"],
    answer: "const",
    explanation:
      "화살표 함수는 'const', 'let', 'var' 키워드를 사용하여 선언할 수 있습니다. 'const'는 값을 변경할 수 없는 상수를 선언하는데 사용됩니다.",
    subject: "javascript",
    subSubject: "function",
    quizType: "coding",
  },

  {
    type: "fill-in-the-blank",
    questionText: "자바스크립트에서 함수를 호출하는 방법은 무엇인가요?",
    code: `
      function sayHello(name) {
        return 'Hello, ' + name;
      }

      console.log(sayHello(______));
    `,
    answerOptions: ["'John'", "John", 123, true],
    answer: "'John'",
    explanation:
      "함수를 호출할 때는 함수 이름 뒤에 괄호를 붙이고, 필요한 인자를 괄호 안에 넣습니다.",
    subject: "javascript",
    subSubject: "function",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 배열의 각 요소를 처리하는 콜백 함수를 작성해보세요. 여기서 처리란, 각 요소를 제곱한 값을 출력하는 것을 의미합니다.",
    code: `
      const numbers = [1, 2, 3, 4, 5];

      // 콜백 함수 사용
      numbers.forEach(_____);
    `,
    answerOptions: [
      "number => console.log(number)",
      "number => console.log(number * number)",
      "n => n",
      "num => num",
    ],
    answer: "number => console.log(number * number)",
    explanation:
      "자바스크립트에서는 함수를 다른 함수의 인자로 전달하여, 특정 시점에 실행되도록(콜백) 할 수 있습니다. 이렇게 전달된 함수를 콜백 함수라고 합니다. 이 경우 'number => console.log(number * number)'가 배열의 각 요소를 제곱하여 출력하는 콜백 함수입니다.",
    subject: "javascript",
    subSubject: "function",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "다음 코드에서 빈칸에 들어갈 기호는 무엇인가요?",
    code: `
      const greet = name ______ {
        console.log('Hello, ' + name);
      }
    `,
    answerOptions: ["=", "==", "===", "=>"],
    answer: "=>",
    explanation:
      "자바스크립트에서 화살표 함수를 선언할 때는 '=>' 기호를 사용합니다.",
    subject: "javascript",
    subSubject: "function",
    quizType: "coding",
  },
];

// 클로져는 Notion에서만
