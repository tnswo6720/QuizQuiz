// questions1.js
export const javascriptNotionBasic = [
  // 질문 데이터...
  // basic
  // basic

  {
    type: "multiple-choice",
    questionText: "'let' 키워드의 특징 중 잘못된 것은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "'let'으로 선언된 변수는 재할당 가능하다.",
        isCorrect: false,
      },
      {
        text: "'let'으로 선언된 변수는 블록 범위(block scope)를 가진다.",
        isCorrect: false,
      },
      {
        text: "'let'으로 선언된 변수는 호이스팅(hoisting)에 영향을 받지 않는다.",
        isCorrect: true,
      },
      {
        text: "'let'으로 선언된 변수는 해당 범위에서만 사용할 수 있다.",
        isCorrect: false,
      },
    ],
    answer: "'let'으로 선언된 변수는 호이스팅(hoisting)에 영향을 받지 않는다.",
    explanation:
      "'let'으로 선언된 변수는 호이스팅에 영향을 받으나, 초기화 되기 전에 접근할 수 없는 '임시 사각 지대(TDZ)'가 존재합니다.",
    explanationCode: `console.log(x); // ReferenceError: x is not defined
let x = 5;`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "'NaN'의 정확한 설명은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "'NaN'은 'Not a Number'의 약자로, 숫자가 아닌 값을 숫자로 변환하려고 할 때 반환된다.",
        isCorrect: true,
      },
      {
        text: "'NaN'은 'Null and Null'의 약자로, 두 개의 null 값을 더하려고 할 때 반환된다.",
        isCorrect: false,
      },
      {
        text: "'NaN'은 'Not a Null'의 약자로, null이 아닌 값을 null로 변환하려고 할 때 반환된다.",
        isCorrect: false,
      },
      {
        text: "'NaN'은 'Not a Name'의 약자로, 선언되지 않은 변수에 접근하려고 할 때 반환된다.",
        isCorrect: false,
      },
    ],
    answer:
      "'NaN'은 'Not a Number'의 약자로, 숫자가 아닌 값을 숫자로 변환하려고 할 때 반환된다.",
    explanation:
      "'NaN'은 'Not a Number'의 약자로, 숫자가 아닌 값을 숫자로 변환하려고 할 때 반환되는 특수한 값입니다.",
    explanationCode: `console.log(Number('Hello')); // NaN`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "'null'과 'undefined'의 차이점 중 틀린 것은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "'undefined'는 값이 할당되지 않은 변수, 'null'은 값이 없음을 명시적으로 나타내고자 할 때 사용한다.",
        isCorrect: false,
      },
      {
        text: "'undefined'는 자바스크립트에서 자동으로 할당되는 값이며, 'null'은 사용자가 명시적으로 할당하는 값이다.",
        isCorrect: false,
      },
      {
        text: "'undefined'와 'null'은 동일하게 '값이 없음'을 나타내는 값이다.",
        isCorrect: false,
      },
      {
        text: "'undefined'는 변수 자체가 존재하지 않음을 나타내며, 'null'은 변수가 존재하지만 값이 없음을 나타낸다.",
        isCorrect: true,
      },
    ],
    answer:
      "'undefined'는 변수 자체가 존재하지 않음을 나타내며, 'null'은 변수가 존재하지만 값이 없음을 나타낸다.",
    explanation:
      "'undefined'는 값이 할당되지 않은 변수 또는 존재하지 않는 객체 프로퍼티에 접근하려고 할 때 반환되는 값입니다. 'null'은 값이 없음을 명시적으로 나타내고자 할 때 사용하는 특수한 값입니다.",
    explanationCode: `let x;
console.log(x); // undefined

let y = null;
console.log(y); // null`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드의 출력 결과는 무엇일까요?",
    code: `if ('false') {
        console.log('true');
      } else {
        console.log('false');
      }`,
    answerOptions: [
      {
        text: "true",
        isCorrect: true,
      },
      {
        text: "false",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "ReferenceError",
        isCorrect: false,
      },
    ],
    answer: "true",
    explanation:
      "자바스크립트에서 문자열 'false'는 truthy 값으로 간주되므로, 'if' 문의 조건문이 참으로 평가되어 'true'가 출력됩니다.",
    explanationCode: `if ('false') {
        console.log('true'); // 이 부분이 실행됩니다.
      } else {
        console.log('false');
      }`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "'boolean' 데이터 타입에 대한 설명 중 잘못된 것은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "'boolean'은 참(true) 또는 거짓(false) 두 가지 값만 가질 수 있는 데이터 타입이다.",
        isCorrect: false,
      },
      {
        text: "'boolean'은 숫자나 문자열과 같이 연산이 가능하다.",
        isCorrect: false,
      },
      {
        text: "'boolean'은 '0' 또는 '1'의 값을 가진다.",
        isCorrect: true,
      },
      {
        text: "'boolean'은 조건문에서 주로 사용된다.",
        isCorrect: false,
      },
    ],
    answer: "'boolean'은 '0' 또는 '1'의 값을 가진다.",
    explanation:
      "'boolean'은 'true' 또는 'false' 두 가지 값만 가질 수 있습니다. '0' 또는 '1'이 아닙니다.",
    explanationCode: `let bool = true;
console.log(bool); // true

bool = false;
console.log(bool); // false`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드의 출력 결과는 무엇일까요?",
    code: `console.log(1 == '1');
console.log(1 === '1');`,
    answerOptions: [
      {
        text: "true, true",
        isCorrect: false,
      },
      {
        text: "true, false",
        isCorrect: true,
      },
      {
        text: "false, true",
        isCorrect: false,
      },
      {
        text: "false, false",
        isCorrect: false,
      },
    ],
    answer: "true, false",
    explanation:
      "'==' 연산자는 값만을 비교하므로, 숫자 1과 문자열 '1'은 같다고 판단합니다. 반면 '===' 연산자는 값 뿐만 아니라 타입까지 비교하므로, 숫자 1과 문자열 '1'은 다르다고 판단합니다.",
    explanationCode: `console.log(1 == '1');  // true
console.log(1 === '1'); // false`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드의 출력 결과는 무엇일까요?",
    code: `let x = 0;
while (x < 3) {
  console.log('Hello');
  x++;
}`,
    answerOptions: [
      {
        text: "'Hello'가 세 번 출력된다.",
        isCorrect: true,
      },
      {
        text: "'Hello'가 무한히 출력된다.",
        isCorrect: false,
      },
      {
        text: "'Hello'가 한 번만 출력된다.",
        isCorrect: false,
      },
      {
        text: "아무것도 출력되지 않는다.",
        isCorrect: false,
      },
    ],
    answer: "'Hello'가 세 번 출력된다.",
    explanation:
      "while 문은 주어진 조건이 참인 동안 코드 블록을 실행합니다. 'x++'에 의해 x의 값이 1씩 증가하므로, 'Hello'가 세 번 출력된 후 x의 값이 3이 되어 조건이 거짓이 됩니다.",
    explanationCode: `let x = 0;
while (x < 3) {
  console.log('Hello'); // 'Hello'가 세 번 출력된다.
  x++;
}`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드의 출력 결과는 무엇일까요?",
    code: `const arr = [1, 2, 3];
const newArr = arr.filter(num => num > 1);
console.log(newArr);`,
    answerOptions: [
      {
        text: "[1, 2, 3]",
        isCorrect: false,
      },
      {
        text: "[1]",
        isCorrect: false,
      },
      {
        text: "[2, 3]",
        isCorrect: true,
      },
      {
        text: "[]",
        isCorrect: false,
      },
    ],
    answer: "[2, 3]",
    explanation:
      "'filter' 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 만듭니다. 따라서, 1보다 큰 요소 [2, 3]을 모아 새 배열을 만듭니다.",
    explanationCode: `const arr = [1, 2, 3];
const newArr = arr.filter(num => num > 1);
console.log(newArr); // [2, 3]`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "'const' 키워드로 선언된 변수의 특징은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "'const'로 선언된 변수는 재할당이 가능하다.",
        isCorrect: false,
      },
      {
        text: "'const'로 선언된 변수는 재할당이 불가능하다.",
        isCorrect: true,
      },
      {
        text: "'const'로 선언된 변수는 값을 초기화하지 않아도 된다.",
        isCorrect: false,
      },
      {
        text: "'const'로 선언된 변수는 블록 범위(block scope)를 가지지 않는다.",
        isCorrect: false,
      },
    ],
    answer: "'const'로 선언된 변수는 재할당이 불가능하다.",
    explanation:
      "'const'로 선언된 변수는 한 번 할당된 값을 변경할 수 없습니다. 이는 재할당 뿐만 아니라 재선언도 불가능하다는 것을 의미합니다. 하지만, 'const'로 선언된 객체나 배열의 프로퍼티는 수정이 가능합니다. 이는 'const'가 변수 자체에 대한 재할당을 막지만, 객체나 배열의 내용에 대해서는 제한하지 않기 때문입니다.",
    explanationCode: `const x = 10;
x = 20; // TypeError: Assignment to constant variable.`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드의 출력 결과는 무엇일까요?",
    code: `console.log(10 > 9);
console.log(10 == 9);
console.log(10 < 9);`,
    answerOptions: [
      {
        text: "true, false, false",
        isCorrect: true,
      },
      {
        text: "true, false, true",
        isCorrect: false,
      },
      {
        text: "false, true, false",
        isCorrect: false,
      },
      {
        text: "false, false, true",
        isCorrect: false,
      },
    ],
    answer: "true, false, false",
    explanation:
      "자바스크립트에서 비교 연산자는 두 피연산자를 비교하고 그 결과를 불리언 값으로 반환합니다. 따라서 각각 '10 > 9', '10 == 9', '10 < 9'의 결과는 'true', 'false', 'false'입니다.",
    explanationCode: `console.log(10 > 9);  // true
console.log(10 == 9); // false
console.log(10 < 9);  // false`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "1부터 5까지의 숫자를 출력하는 'for' 반복문의 올바른 코드는 무엇인가요?",
    code: `for (___; ___; ___) {
console.log(____);
}`,
    answerOptions: [
      {
        text: "let i = 1; i <= 5; i++, i",
        isCorrect: true,
      },
      {
        text: "let i = 0; i < 5; i++, i",
        isCorrect: false,
      },
      {
        text: "let i = 1; i <= 5; i++, i+1",
        isCorrect: false,
      },
      {
        text: "let i = 1; i < 5; i++, i",
        isCorrect: false,
      },
    ],
    answer: "let i = 1; i <= 5; i++, i",
    explanation:
      "'for' 반복문은 초기화, 조건, 증감식을 이용하여 코드 블록을 반복하여 실행합니다. 따라서 'i'를 1부터 시작하여 5 이하일 동안 1씩 증가시키면서 'i'를 출력하는 코드가 필요합니다.",
    explanationCode: `for (let i = 1; i <= 5; i++) {
console.log(i); // 1, 2, 3, 4, 5 순서로 출력된다.
}`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드를 실행하면 어떤 값이 출력될까요?",
    code: `
function calculate(a, b) {
  return a * b;
}

let x = calculate(7, 3);
let y = x;
y = calculate(2, 5);

console.log(x);
`,
    answerOptions: [
      {
        text: "21",
        isCorrect: true,
      },
      {
        text: "10",
        isCorrect: false,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "TypeError",
        isCorrect: false,
      },
    ],
    answer: "21",
    explanation:
      "자바스크립트에서 기본 데이터 타입들은 값에 의한 전달(Pass by Value) 방식을 사용합니다. 따라서 'y' 변수에 다른 값을 할당하더라도 'x' 변수의 값은 변하지 않습니다.",
    explanationCode: `
function calculate(a, b) {
  return a * b;
}

let x = calculate(7, 3); // x = 21
let y = x; // y = 21
y = calculate(2, 5); // y = 10

console.log(x); // 21
`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "자바스크립트에서 'undefined'와 'null'의 차이점은 무엇일까요?",
    code: "",
    answerOptions: [
      {
        text: "'null'은 값이 없음을 의미하고, 'undefined'는 변수가 선언되었지만 값이 할당되지 않았음을 의미한다.",
        isCorrect: true,
      },
      {
        text: "'null'은 변수가 선언되었지만 값이 할당되지 않았음을 의미하고, 'undefined'는 값이 없음을 의미한다.",
        isCorrect: false,
      },
      {
        text: "'null'과 'undefined'는 동일한 의미를 가진다.",
        isCorrect: false,
      },
      {
        text: "'null'은 값이 0임을 의미하고, 'undefined'는 값이 할당되지 않았음을 의미한다.",
        isCorrect: false,
      },
    ],
    answer:
      "'null'은 값이 없음을 의미하고, 'undefined'는 변수가 선언되었지만 값이 할당되지 않았음을 의미한다.",
    explanation:
      "'null'은 명시적으로 값이 없음을 표현할 때 사용합니다. 반면 'undefined'는 변수가 선언되었지만 아직 값이 할당되지 않은 상태를 나타냅니다.",
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드를 실행하면 어떤 값이 출력될까요?",
    code: `
let a;
let b = null;

console.log(typeof a, typeof b);
`,
    answerOptions: [
      {
        text: "'undefined' 'object'",
        isCorrect: true,
      },
      {
        text: "'undefined' 'null'",
        isCorrect: false,
      },
      {
        text: "'object' 'null'",
        isCorrect: false,
      },
      {
        text: "'object' 'undefined'",
        isCorrect: false,
      },
    ],
    answer: "'undefined' 'object'",
    explanation:
      "자바스크립트에서 선언만 되고 초기화되지 않은 변수의 타입은 'undefined'입니다. 반면 'null'은 개발자가 명시적으로 값이 '없음'을 나타내기 위해 사용하는 특별한 값으로, 타입은 'object'로 표시됩니다.",
    explanationCode: `
let a; // a는 선언만 되어 있으므로 타입은 'undefined'
let b = null; // b는 명시적으로 'null'로 초기화되었으므로 타입은 'object'

console.log(typeof a, typeof b); // 'undefined' 'object'
`,
    subject: "javascript",
    subSubject: "basic",
    quizType: "coding",
  },

  // basic
  // basic
];
