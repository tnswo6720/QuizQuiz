// questions1.js
export const javascriptNotionArray = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'fruits' 배열에 'Apple'을 추가한 후, 배열의 길이를 올바르게 반환하는 메서드는 무엇인가요?",
    code: `
      var fruits = ['Banana', 'Orange', 'Mango'];
      fruits.push('Apple');
    `,
    answerOptions: [
      {
        text: "fruits.length;",
        isCorrect: true,
      },
      {
        text: "fruits.size();",
        isCorrect: false,
      },
      {
        text: "fruits.count;",
        isCorrect: false,
      },
      {
        text: "fruits.len();",
        isCorrect: false,
      },
    ],
    answer: "fruits.length;",
    explanation:
      "JavaScript에서 배열의 길이는 '배열명.length' 형태로 반환합니다. 따라서 'fruits' 배열의 길이는 'fruits.length;'와 같이 반환합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'numbers' 배열의 각 요소를 순회하며 출력하는 올바른 방법은 무엇인가요?",
    code: `
      var numbers = [1, 2, 3, 4, 5];
    `,
    answerOptions: [
      {
        text: "for (var i = 0; i < numbers.length; i++) { console.log(numbers[i]); }",
        isCorrect: true,
      },
      {
        text: "numbers.forEach(i => console.log(i);",
        isCorrect: false,
      },
      {
        text: "numbers.map((i) => console.log(i));",
        isCorrect: false,
      },
      {
        text: "numbers.print(i);",
        isCorrect: false,
      },
    ],
    answer:
      "for (var i = 0; i < numbers.length; i++) { console.log(numbers[i]); }",
    explanation:
      "JavaScript에서 배열의 요소를 순회하며 출력하는 가장 기본적인 방법은 for 반복문을 사용하는 것입니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'animals' 배열에서 'Cat'을 제거한 후, 결과 배열을 반환하는 올바른 메서드는 무엇인가요?",
    code: `
      var animals = ['Dog', 'Cat', 'Elephant', 'Lion'];
    `,
    answerOptions: [
      {
        text: "animals.delete('Cat');",
        isCorrect: false,
      },
      {
        text: "animals.pop('Cat');",
        isCorrect: false,
      },
      {
        text: "animals.splice(animals.indexOf('Cat'), 1);",
        isCorrect: true,
      },
      {
        text: "animals.remove('Cat');",
        isCorrect: false,
      },
    ],
    answer: "animals.splice(animals.indexOf('Cat'), 1);",
    explanation:
      "JavaScript에서 배열의 특정 요소를 제거하려면 'splice' 메서드를 사용하며, 'indexOf' 메서드를 사용하여 해당 요소의 인덱스를 찾을 수 있습니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'numbers' 배열의 각 요소에 2를 곱한 새로운 배열을 생성하는 올바른 방법은 무엇인가요?",
    code: `
      var numbers = [1, 2, 3, 4, 5];
    `,
    answerOptions: [
      {
        text: "var newNumbers = numbers.map((number) => number * 2);",
        isCorrect: true,
      },
      {
        text: "var newNumbers = numbers.forEach((number) => number * 2);",
        isCorrect: false,
      },
      {
        text: "var newNumbers = numbers.multiply(2);",
        isCorrect: false,
      },
      {
        text: "var newNumbers = for (var i = 0; i < numbers.length; i++) { numbers[i] * 2; }",
        isCorrect: false,
      },
    ],
    answer: "var newNumbers = numbers.map((number) => number * 2);",
    explanation:
      "JavaScript에서 배열의 각 요소에 함수를 적용하여 새로운 배열을 생성하려면 'map' 메서드를 사용합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'fruits' 배열의 마지막 요소를 제거한 후, 제거된 요소를 반환하는 올바른 메서드는 무엇인가요?",
    code: `
      var fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
    `,
    answerOptions: [
      {
        text: "fruits.pop();",
        isCorrect: true,
      },
      {
        text: "fruits.splice(-1, 1);",
        isCorrect: false,
      },
      {
        text: "fruits.removeLast();",
        isCorrect: false,
      },
      {
        text: "fruits[-1];",
        isCorrect: false,
      },
    ],
    answer: "fruits.pop();",
    explanation:
      "JavaScript에서 배열의 마지막 요소를 제거하려면 'pop' 메서드를 사용합니다. 이 메서드는 제거된 요소를 반환합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'numbers' 배열의 모든 요소를 문자열로 바꾼 새로운 배열을 생성하는 올바른 방법은 무엇인가요?",
    code: `
      var numbers = [1, 2, 3, 4, 5];
    `,
    answerOptions: [
      {
        text: "var stringNumbers = numbers.map((number) => number.toString());",
        isCorrect: true,
      },
      {
        text: "var stringNumbers = numbers.forEach((number) => number.toString());",
        isCorrect: false,
      },
      {
        text: "var stringNumbers = numbers.toString();",
        isCorrect: false,
      },
      {
        text: "var stringNumbers = for (var i = 0; i < numbers.length; i++) { numbers[i].toString(); }",
        isCorrect: false,
      },
    ],
    answer: "var stringNumbers = numbers.map((number) => number.toString());",
    explanation:
      "JavaScript에서 배열의 각 요소에 함수를 적용하여 새로운 배열을 생성하려면 'map' 메서드를 사용합니다. 여기에서는 각 요소를 문자열로 바꾸는 'toString' 메서드를 사용하였습니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'arr' 배열에서 '2'가 포함되어 있는지 확인하는 올바른 메서드는 무엇인가요?",
    code: `
      var arr = [1, 2, 3, 4, 5];
    `,
    answerOptions: [
      {
        text: "arr.includes(2);",
        isCorrect: true,
      },
      {
        text: "arr.has(2);",
        isCorrect: false,
      },
      {
        text: "arr.contains(2);",
        isCorrect: false,
      },
      {
        text: "arr.indexOf(2) != -1;",
        isCorrect: false,
      },
    ],
    answer: "arr.includes(2);",
    explanation:
      "JavaScript에서 배열에 특정 요소가 포함되어 있는지 확인하려면 'includes' 메서드를 사용합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'numbers' 배열의 각 요소에 3을 더한 새로운 배열을 생성하는 올바른 방법은 무엇인가요?",
    code: `
      var numbers = [1, 2, 3, 4, 5];
    `,
    answerOptions: [
      {
        text: "var newNumbers = numbers.map((number) => number + 3);",
        isCorrect: true,
      },
      {
        text: "var newNumbers = numbers.forEach((number) => number + 3);",
        isCorrect: false,
      },
      {
        text: "var newNumbers = numbers.add(3);",
        isCorrect: false,
      },
      {
        text: "var newNumbers = for (var i = 0; i < numbers.length; i++) { numbers[i] + 3; }",
        isCorrect: false,
      },
    ],
    answer: "var newNumbers = numbers.map((number) => number + 3);",
    explanation:
      "JavaScript에서 배열의 각 요소에 함수를 적용하여 새로운 배열을 생성하려면 'map' 메서드를 사용합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'fruits' 배열의 첫 번째 요소를 제거한 후, 제거된 요소를 반환하는 올바른 메서드는 무엇인가요?",
    code: `
      var fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
    `,
    answerOptions: [
      {
        text: "fruits.shift();",
        isCorrect: true,
      },
      {
        text: "fruits.splice(0, 1);",
        isCorrect: false,
      },
      {
        text: "fruits.removeFirst();",
        isCorrect: false,
      },
      {
        text: "fruits[0];",
        isCorrect: false,
      },
    ],
    answer: "fruits.shift();",
    explanation:
      "JavaScript에서 배열의 첫 번째 요소를 제거하려면 'shift' 메서드를 사용합니다. 이 메서드는 제거된 요소를 반환합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'numbers' 배열의 모든 요소를 두 배로 곱한 새로운 배열을 생성하는 올바른 방법은 무엇인가요?",
    code: `
      var numbers = [1, 2, 3, 4, 5];
    `,
    answerOptions: [
      {
        text: "var newNumbers = numbers.map((number) => number * 2);",
        isCorrect: true,
      },
      {
        text: "var newNumbers = numbers.forEach((number) => number * 2);",
        isCorrect: false,
      },
      {
        text: "var newNumbers = numbers.double();",
        isCorrect: false,
      },
      {
        text: "var newNumbers = for (var i = 0; i < numbers.length; i++) { numbers[i] * 2; }",
        isCorrect: false,
      },
    ],
    answer: "var newNumbers = numbers.map((number) => number * 2);",
    explanation:
      "JavaScript에서 배열의 각 요소에 함수를 적용하여 새로운 배열을 생성하려면 'map' 메서드를 사용합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
];
