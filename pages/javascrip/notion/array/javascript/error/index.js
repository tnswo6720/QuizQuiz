// questions1.js
export const javascriptNotionError = [
  // 질문 데이터...
  // promise
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
        try {
            console.log(nonExistentVariable);
        } catch (error) {
            console.log(error.message);
        } finally {
            console.log('This will run regardless of the above result.');
        }
    `,
    answerOptions: [
      {
        text: "nonExistentVariable is not defined\nThis will run regardless of the above result.",
        isCorrect: true,
      },
      {
        text: "undefined\nThis will run regardless of the above result.",
        isCorrect: false,
      },
      {
        text: "null\nThis will run regardless of the above result.",
        isCorrect: false,
      },
      {
        text: "Error\nThis will run regardless of the above result.",
        isCorrect: false,
      },
    ],
    answer:
      "nonExistentVariable is not defined\nThis will run regardless of the above result.",
    explanation:
      "이 코드는 try 블록에서 존재하지 않는 변수를 참조하여 에러가 발생하고, catch 블록에서 이 에러를 처리하여 에러 메시지를 출력합니다. finally 블록의 코드는 항상 실행됩니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
        function validateNumber(num) {
            if (isNaN(num)) {
                throw new Error('Not a number!');
            }
            console.log('Valid number');
        }
        
        try {
            validateNumber('abc');
        } catch (error) {
            console.log(error.message);
        }
    `,
    answerOptions: [
      {
        text: "Not a number!",
        isCorrect: true,
      },
      {
        text: "Valid number",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
    ],
    answer: "Not a number!",
    explanation:
      "이 코드는 validateNumber 함수에서 숫자가 아닌 입력에 대해 에러를 발생시키며, 이 에러를 catch 블록에서 처리하여 에러 메시지를 출력합니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      try {
        console.log('Start of try');
        lalala; // unknown variable
        console.log('End of try');
      } catch(error) {
        console.log('Error has occurred: ' + error.message);
      }
    `,
    answerOptions: [
      {
        text: "Start of try\nError has occurred: lalala is not defined",
        isCorrect: true,
      },
      {
        text: "Start of try\nEnd of try",
        isCorrect: false,
      },
      {
        text: "Error has occurred: lalala is not defined",
        isCorrect: false,
      },
      {
        text: "Start of try",
        isCorrect: false,
      },
    ],
    answer: "Start of try\nError has occurred: lalala is not defined",
    explanation:
      "이 코드는 try 블록에서 알 수 없는 변수를 참조하여 에러가 발생하고, catch 블록에서 이 에러를 처리하여 에러 메시지를 출력합니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      function validateString(s) {
        if (typeof s !== 'string') {
          throw new TypeError('Not a string!');
        }
        console.log('Valid string');
      }
      
      try {
        validateString(100);
      } catch (error) {
        console.log(error.message);
      }
    `,
    answerOptions: [
      {
        text: "Not a string!",
        isCorrect: true,
      },
      {
        text: "Valid string",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
    ],
    answer: "Not a string!",
    explanation:
      "이 코드는 validateString 함수에서 문자열이 아닌 입력에 대해 에러를 발생시키며, 이 에러를 catch 블록에서 처리하여 에러 메시지를 출력합니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      function divide(a, b) {
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        return a / b;
      }
      
      try {
        console.log(divide(10, 0));
      } catch (error) {
        console.log(error.message);
      }
    `,
    answerOptions: [
      {
        text: "Cannot divide by zero",
        isCorrect: true,
      },
      {
        text: "Infinity",
        isCorrect: false,
      },
      {
        text: "0",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
    ],
    answer: "Cannot divide by zero",
    explanation:
      "이 코드는 divide 함수에서 0으로 나누는 연산을 시도하면 에러를 발생시키며, 이 에러를 catch 블록에서 처리하여 에러 메시지를 출력합니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      try {
        console.log('Start of try');
        throw new Error('An error occurred');
      } catch (error) {
        console.log(error.message);
      } finally {
        console.log('This will always execute');
      }
    `,
    answerOptions: [
      {
        text: "Start of try\nAn error occurred\nThis will always execute",
        isCorrect: true,
      },
      {
        text: "Start of try\nThis will always execute",
        isCorrect: false,
      },
      {
        text: "An error occurred\nThis will always execute",
        isCorrect: false,
      },
      {
        text: "This will always execute",
        isCorrect: false,
      },
    ],
    answer: "Start of try\nAn error occurred\nThis will always execute",
    explanation:
      "이 코드는 try 블록에서 에러를 발생시키고, 이 에러를 catch 블록에서 처리하여 에러 메시지를 출력합니다. finally 블록의 코드는 항상 실행됩니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      function checkAge(age) {
        if (age < 18) {
          throw new Error("Access denied");
        }
        console.log('Access granted');
      }
      
      try {
        checkAge(15);
      } catch (error) {
        console.log(error.message);
      }
    `,
    answerOptions: [
      {
        text: "Access denied",
        isCorrect: true,
      },
      {
        text: "Access granted",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
    ],
    answer: "Access denied",
    explanation:
      "이 코드는 checkAge 함수에서 나이가 18 미만일 경우에 에러를 발생시키며, 이 에러를 catch 블록에서 처리하여 에러 메시지를 출력합니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: "try {\n console.log('Start of try');\n badVariable;\n console.log('End of try');\n} catch (error) {\n console.log(error.message);\n} finally {\n console.log('This will always execute');\n}",
    answerOptions: [
      {
        text: "Start of try\nbadVariable is not defined\nThis will always execute",
        isCorrect: true,
      },
      {
        text: "Start of try\nThis will always execute",
        isCorrect: false,
      },
      {
        text: "badVariable is not defined\nThis will always execute",
        isCorrect: false,
      },
      {
        text: "This will always execute",
        isCorrect: false,
      },
    ],
    answer:
      "Start of try\nbadVariable is not defined\nThis will always execute",
    explanation:
      "이 코드는 try 블록에서 존재하지 않는 변수를 참조하여 에러가 발생하고, catch 블록에서 이 에러를 처리하여 에러 메시지를 출력합니다. finally 블록의 코드는 항상 실행됩니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      function processNumber(num) {
        if (isNaN(num)) {
          throw new Error("Input is not a number");
        }
        console.log('Input is a number');
      }
      
      try {
        processNumber('abc');
      } catch (error) {
        console.log(error.message);
      }
    `,
    answerOptions: [
      {
        text: "Input is not a number",
        isCorrect: true,
      },
      {
        text: "Input is a number",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
    ],
    answer: "Input is not a number",
    explanation:
      "이 코드는 processNumber 함수에서 숫자가 아닌 입력에 대해 에러를 발생시키며, 이 에러를 catch 블록에서 처리하여 에러 메시지를 출력합니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: "try {\n console.log('Start of try');\n throw 'An error occurred';\n console.log('End of try');\n} catch (error) {\n console.log(error);\n} finally {\n console.log('This always runs');\n}",
    answerOptions: [
      {
        text: "Start of try\nAn error occurred\nThis always runs",
        isCorrect: true,
      },
      {
        text: "Start of try\nThis always runs",
        isCorrect: false,
      },
      {
        text: "An error occurred\nThis always runs",
        isCorrect: false,
      },
      {
        text: "This always runs",
        isCorrect: false,
      },
    ],
    answer: "Start of try\nAn error occurred\nThis always runs",
    explanation:
      "이 코드는 try 블록에서 에러를 발생시키고, 이 에러를 catch 블록에서 처리하여 에러 메시지를 출력합니다. finally 블록의 코드는 항상 실행됩니다.",
    subject: "javascript",
    subSubject: "error",
    quizType: "coding",
  },

  // promise
];
