// questions1.js
export const javascript = [
  // 질문 데이터...

  {
    type: "fill-in-the-blank",
    questionText:
      "다음 코드에서 빈 1칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 각 요소를 함수를 통해 변환하고, 변환된 요소로 새로운 배열을 생성합니다.",
    code: `
        const arr = [1, 2, 3, 4, 5];
        const newArr = arr.______(function(num) { 
          return num * 2; 
        });
        
        console.log(newArr);
      `,
    answerOptions: ["map", "reduce", "filter", "forEach"],
    answer: "map",
    explanation:
      "배열의 각 요소를 함수를 통해 변환하고 변환된 요소로 새 배열을 생성하는 'map' 메서드가 적절합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 코드에서 빈 2칸에 들어갈 수 있는 배열 메서드는 무엇인가요? 이 메서드는 배열의 각 요소에 대해 함수를 실행합니다.",
    code: `
        const arr = [1, 2, 3, 4, 5];
        arr.______(function(num) { 
          console.log(num);
        });
      `,
    answerOptions: ["map", "reduce", "filter", "forEach"],
    answer: "forEach",
    explanation:
      "배열의 각 요소에 대해 함수를 실행하는 'forEach' 메서드가 적절합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 코드에서 빈 3칸에 들어갈 수 있는 배열 생성자는 무엇인가요? 이 생성자는 배열을 생성합니다.",
    code: `
        const arr = new ______(1, 2, 3, 4, 5);
        
        console.log(arr);
      `,
    answerOptions: ["Array", "Object", "Function", "String"],
    answer: "Array",
    explanation: "배열을 생성하는 'Array' 생성자가 적절합니다.",
    subject: "javascript",
    subSubject: "array",
    quizType: "coding",
  },

  // 자바스크립트 array
  // 자바스크립트 array

  // 자바스크립트 event
  // 자바스크립트 event

  {
    type: "fill-in-the-blank",
    questionText:
      "1자바스크립트에서 HTML 요소에 이벤트 리스너를 추가하는 메서드는 무엇인가요?",
    code: `
      const btn = document.querySelector('button');
  
      btn.______('click', function() {
        console.log('Button clicked!');
      });
    `,
    answerOptions: [
      "addEventListener",
      "removeEventListener",
      "dispatchEvent",
      "createEvent",
    ],
    answer: "addEventListener",
    explanation:
      "'addEventListener' 메서드는 특정 이벤트를 감지하고 그에 반응하는 이벤트 리스너를 추가하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "2자바스크립트에서 HTML 요소에 추가된 이벤트 리스너를 제거하는 메서드는 무엇인가요?",
    code: `
      const btn = document.querySelector('button');
  
      function handleClick() {
        console.log('Button clicked!');
      }
  
      btn.addEventListener('click', handleClick);
      btn.______('click', handleClick);
    `,
    answerOptions: [
      "addEventListener",
      "removeEventListener",
      "dispatchEvent",
      "createEvent",
    ],
    answer: "removeEventListener",
    explanation:
      "'removeEventListener' 메서드는 이전에 추가된 이벤트 리스너를 제거하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "3자바스크립트에서 새로운 이벤트 객체를 생성하는 생성자는 무엇인가요?",
    code: `
      const btn = document.querySelector('button');
  
      const event = new ______('click');
  
      btn.dispatchEvent(event);
    `,
    answerOptions: ["Event", "CustomEvent", "MouseEvent", "KeyboardEvent"],
    answer: "Event",
    explanation:
      "'Event' 생성자는 새로운 이벤트 객체를 생성하는 데 사용됩니다.",
    subject: "javascript",
    subSubject: "event",
    quizType: "coding",
  },
];

// questions2.js
export const typescript = [
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
    subSubject: "basic",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "타입스크립트를 설치하기 위해 사용되는 yarn 명령어를 작성해보세요.",
    code: "______ add typescript",
    answer: "yarn",
    explanation:
      "타입스크립트를 설치하기 위해 `yarn add typescript` 명령어를 사용합니다.",
    explanationCode: "yarn add typescript",
    subject: "typescript",
    subSubject: "basic",
    quizType: "coding",
  },
];
