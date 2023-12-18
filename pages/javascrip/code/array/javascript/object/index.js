// questions1.js
export const javascriptCodeObject = [
  // 질문 데이터...

  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 객체의 프로토타입을 가져오는 메서드는 무엇인가요?",
    code: `
        const person = {
          name: 'John',
          age: 30
        };
        
        // 프로토타입 가져오기
        console.log(Object.______(person));
      `,
    answerOptions: [
      "getPrototypeOf",
      "setPrototypeOf",
      "getOwnPropertyNames",
      "create",
    ],
    answer: ["getPrototypeOf"],
    explanation:
      "자바스크립트에서는 'Object.getPrototypeOf()'를 사용하여 객체의 프로토타입을 가져옵니다. 이 메서드는 표준 메서드이며, '__proto__' 속성 대신 사용하는 것이 권장됩니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 객체의 프로토타입을 설정하는 메서드는 무엇인가요?",
    code: `
        const person = {
          name: 'John',
          age: 30
        };
        
        // 프로토타입 설정하기
        const newProto = {
          speak: function() { console.log('Hello!'); }
        };
        Object.______(person, newProto);
      `,
    answerOptions: [
      "getPrototypeOf",
      "setPrototypeOf",
      "getOwnPropertyNames",
      "create",
    ],
    answer: ["setPrototypeOf"],
    explanation:
      "자바스크립트에서는 'Object.setPrototypeOf()'를 사용하여 객체의 프로토타입을 설정할 수 있습니다. 이 메서드는 표준 메서드이며, '__proto__' 속성 대신 사용하는 것이 권장됩니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 객체의 메서드를 정의하는 방법은 무엇인가요?",
    code: `
        const person = {
          name: 'John',
          age: 30,
          greet: ______ () {
            console.log('Hello, ' + this.name);
          }
        };
        
        person.greet();
      `,
    answerOptions: ["function", "const", "let", "var"],
    answer: ["function"],
    explanation:
      "자바스크립트에서는 'function' 키워드를 사용하여 객체의 메서드를 정의합니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 객체를 생성하고 속성을 추가하는 방법은 무엇인가요?",
    code: `
        const person = ______ ;
        
        person.name = 'John';
        person.age = 30;
        
        console.log(person);
      `,
    answerOptions: ["{}", "[]", "()", "''"],
    answer: ["{}"],
    explanation:
      "자바스크립트에서는 '{}'를 사용하여 객체를 생성하고, '.'을 사용하여 속성을 추가합니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "자바스크립트에서 객체를 생성하는 또 다른 방법은 무엇인가요?",
    code: `
        const person = {
          name: ______,
          age: 30
        };
        
        console.log(person);
      `,
    answerOptions: ["'John'", "John", 123, true],
    answer: ["'John'"],
    explanation:
      "자바스크립트에서는 객체 리터럴을 사용하여 객체를 생성하고, 속성을 바로 추가할 수 있습니다. 속성 값은 문자열, 숫자, 불리언 등 다양한 타입이 될 수 있습니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 객체의 메서드를 축약해서 정의하는 방법은 무엇인가요?",
    code: `
        const person = {
          name: 'John',
          age: 30,
          greet() {
            console.log('Hello, ' + this.______);
          }
        };
        
        person.greet();
      `,
    answerOptions: ["name", "age", "greet", "person"],
    answer: ["name"],
    explanation:
      "ES6부터는 객체의 메서드를 '메서드명() {}' 형식으로 축약해서 정의할 수 있습니다. 이 메서드 내에서 'this' 키워드는 해당 객체를 참조합니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 모든 객체가 기본적으로 가지고 있는 프로토타입 메서드는 무엇인가요?",
    code: `
        const person = {
          name: 'John',
          age: 30
        };
        
        console.log(person.______());
      `,
    answerOptions: ["toString", "valueOf", "constructor", "prototype"],
    answer: ["toString"],
    explanation:
      "자바스크립트에서는 모든 객체가 Object의 프로토타입을 상속받아, 'toString'과 같은 메서드를 기본적으로 사용할 수 있습니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText: "자바스크립트에서 객체의 속성을 삭제하는 방법은 무엇인가요?",
    code: `
        const person = {
          name: 'John',
          age: 30
        };
        
        ______ person.age;
        
        console.log(person);
      `,
    answerOptions: ["delete", "remove", "erase", "clear"],
    answer: ["delete"],
    explanation:
      "자바스크립트에서는 'delete' 연산자를 사용하여 객체의 속성을 삭제할 수 있습니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 객체의 메서드 내에서 객체 자신을 참조하는 키워드는 무엇인가요?",
    code: `
        const person = {
          name: 'John',
          age: 30,
          greet() {
            console.log('Hello, ' + ______.name);
          }
        };
        
        person.greet();
      `,
    answerOptions: ["this", "self", "me", "it"],
    answer: ["this"],
    explanation:
      "자바스크립트에서는 'this' 키워드를 사용하여 객체의 메서드 내에서 객체 자신을 참조합니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 생성자 함수를 사용하여 객체를 생성하는 방법은 무엇인가요?",
    code: `
        function Person(name, age) {
          this.name = name;
          this.age = age;
        }
        
        const john = new ______('John', 30);
        
        console.log(john);
      `,
    answerOptions: ["Person", "Object", "people", "human"],
    answer: ["Person"],
    explanation:
      "자바스크립트에서는 'new' 연산자와 생성자 함수를 사용하여 객체를 생성할 수 있습니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 깊은 복사(Deep Copy)를 수행하는 방법 중, JSON의 명령어를 이용하는 방법에 대해 작성하시오.",
    code: `
    const original = { a: 1, b: 2 };
    const copied = ______(______(original));
    `,
    answerOptions: [
      ["JSON.parse", "JSON.stringify"],
      ["JSON.stringify", "JSON.parse"],
      ["Object.assign", "JSON.stringify"],
      ["JSON.parse", "Object.assign"],
    ],
    answer: ["JSON.parse", "JSON.stringify"],
    explanation:
      "자바스크립트에서 깊은 복사를 수행하는 한 가지 방법은 JSON.stringify와 JSON.parse 메서드를 이용하는 것입니다. 먼저 원본 객체를 JSON.stringify 메서드를 통해 문자열로 변환한 후, 그 문자열을 JSON.parse 메서드를 통해 다시 객체로 변환합니다. 이 방법으로 원본 객체와 복사된 객체 사이에 참조 관계가 완전히 끊어지므로 깊은 복사가 이루어집니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드에서 JSON.stringify 함수의 역할은 무엇인가?",
    code: `
    const obj = { name: 'John', age: 30, city: 'New York' };
    const myJSON = JSON.stringify(obj);
    `,
    answerOptions: [
      {
        text: "obj 객체를 JSON 문자열로 변환한다.",
        isCorrect: true,
      },
      {
        text: "JSON 문자열을 obj 객체로 변환한다.",
        isCorrect: false,
      },
      {
        text: "obj 객체를 다른 객체로 복사한다.",
        isCorrect: false,
      },
      {
        text: "JSON 문자열을 다른 문자열로 변환한다.",
        isCorrect: false,
      },
    ],
    answer: "obj 객체를 JSON 문자열로 변환한다.",
    explanation:
      'JSON.stringify 함수는 자바스크립트 객체를 JSON 문자열로 변환하는 역할을 합니다. 위 코드에서 JSON.stringify(obj)는 obj 객체를 JSON 형식의 문자열로 변환합니다. 따라서, myJSON는 \'{"name":"John", "age":30, "city":"New York"}\'와 같은 형태의 문자열이 됩니다.',
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드에서 JSON.parse 함수의 역할은 무엇인가?",
    code: `
    const myJSON = '{"name":"John", "age":30, "city":"New York"}';
    const obj = JSON.parse(myJSON);
    `,
    answerOptions: [
      {
        text: "myJSON 문자열을 자바스크립트 객체로 변환한다.",
        isCorrect: true,
      },
      {
        text: "자바스크립트 객체를 myJSON 문자열로 변환한다.",
        isCorrect: false,
      },
      {
        text: "myJSON 문자열을 다른 문자열로 변환한다.",
        isCorrect: false,
      },
      {
        text: "자바스크립트 객체를 다른 객체로 복사한다.",
        isCorrect: false,
      },
    ],
    answer: "myJSON 문자열을 자바스크립트 객체로 변환한다.",
    explanation:
      "JSON.parse 함수는 JSON 문자열을 자바스크립트 객체로 변환하는 역할을 합니다. 위 코드에서 JSON.parse(myJSON)는 myJSON 문자열을 자바스크립트 객체로 변환합니다. 따라서, obj는 {name: 'John', age: 30, city: 'New York'}와 같은 형태의 객체가 됩니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
];
