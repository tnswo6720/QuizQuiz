// questions1.js
export const javascriptCodeObject = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "자바스크립트에서 객체의 프로토타입을 참조하는 속성은 무엇인가요?",
    code: `
      const person = {
        name: 'John',
        age: 30
      };
      
      console.log(person.______);
    `,
    answerOptions: ["prototype", "__proto__", "constructor", "super"],
    answer: "__proto__",
    explanation:
      "자바스크립트에서는 '__proto__' 속성을 사용하여 객체의 프로토타입을 참조할 수 있습니다. 하지만 '__proto__'는 표준이 아니며, 일부 환경에서는 지원되지 않을 수 있습니다. 실제 프로덕션 코드에서 프로토타입에 접근하거나 수정할 때는 'Object.getPrototypeOf()'나 'Object.setPrototypeOf()'와 같은 메서드를 사용하는 것이 권장됩니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
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
    answer: "getPrototypeOf",
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
    answer: "setPrototypeOf",
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
    answer: "function",
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
    answer: "{}",
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
    answer: "'John'",
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
    answer: "name",
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
    answer: "toString",
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
    answer: "delete",
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
    answer: "this",
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
    answer: "Person",
    explanation:
      "자바스크립트에서는 'new' 연산자와 생성자 함수를 사용하여 객체를 생성할 수 있습니다.",
    subject: "javascript",
    subSubject: "object",
    quizType: "coding",
  },
];
