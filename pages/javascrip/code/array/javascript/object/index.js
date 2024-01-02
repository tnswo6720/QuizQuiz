// questions1.js
export const javascriptCodeObject = [
  // 질문 데이터...
  {
    type: "fill-in-the-blank",
    questionText:
      "JavaScript에서 객체를 정의하고, 특정 속성을 추가, 수정, 삭제하는 방법에 대해 실습합니다. 아래 코드의 빈칸을 채워 객체를 완성하십시오.",
    code: `
      let person = {
        name: 'Jane Doe',
        age: 28,
        job: 'Developer'
      };
  
      // 속성 추가
      person._____ = 'jane.doe@example.com';
  
      // 속성 수정
      person['age'] = _____;
  
      // 속성 삭제
      _____ person.job;
  
      console.log(person);
    `,
    answerOptions: [
      ["email", "29", "delete"],
      ["address", '"29 years"', "remove"],
      ["phoneNumber", '"twenty-nine"', "omit"],
      ["contact", '"twenty nine"', "erase"],
    ],
    answer: ["email, 29, delete"],
    explanation:
      "JavaScript에서 객체의 속성을 추가할 때는 점 표기법(dot notation)을 사용하여 `person.email = 'jane.doe@example.com';`과 같이 작성합니다. 객체의 속성 값을 수정할 때는 대괄호 표기법(bracket notation)을 사용할 수 있으며, `person['age'] = 29;`는 person 객체의 'age' 속성 값을 29로 변경합니다. 객체의 속성을 삭제할 때는 `delete` 연산자를 사용하며, `delete person.job;`은 person 객체에서 'job' 속성을 제거합니다.",
    subject: "javascript",
    subSubject: "Objects",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "JavaScript에서 제공하는 객체 메서드를 사용하여 객체의 속성을 동적으로 조작하는 코드를 작성하세요. 주어진 'person' 객체에 대해 다음 작업을 수행하는 함수를 완성하십시오: 속성을 추가, 속성 값을 업데이트, 속성을 삭제합니다.",
    code: `
      function updatePersonObject(person) {
        // 속성 'email' 추가
        person['email'] = 'jane.doe@example.com';
  
        // 'age' 속성 값을 29로 업데이트
        _____(person, 'age', {
          value: 29,
          writable: true,
          enumerable: true,
          configurable: true
        });
  
        // 'job' 속성 삭제
        _____(person, 'job');
  
        return person;
      }
  
      let person = {
        name: 'Jane Doe',
        age: 28,
        job: 'Developer'
      };
  
      console.log(updatePersonObject(person));
    `,
    answerOptions: [
      ["Object.defineProperty", "delete"],
      ["Object.assign", "Object.removeProperty"],
      ["Object.update", "Object.deleteProperty"],
      ["Object.setProperty", "remove"],
    ],
    answer: ["Object.defineProperty, delete"],
    explanation:
      "JavaScript에서 'Object.defineProperty' 메서드를 사용하면 객체에 새로운 속성을 정확히 추가하거나 수정할 수 있습니다. 이 메서드는 객체, 속성의 이름, 그리고 속성 기술자(descriptor)를 받습니다. 속성 기술자는 해당 속성의 값(value), 값의 변경 가능 여부(writable), 열거 가능 여부(enumerable), 그리고 속성의 설정 가능 여부(configurable)를 정의합니다. 'delete' 연산자는 객체의 속성을 삭제하는 데 사용됩니다. 따라서 'Object.defineProperty(person, 'age', { ... })'는 'age' 속성을 업데이트하고, 'delete person.job'은 'job' 속성을 삭제합니다.",
    subject: "javascript",
    subSubject: "Objects",
    quizType: "coding",
  },
  {
    type: "coding",
    questionText:
      "JavaScript에서 객체의 속성과 메서드를 동적으로 추가하고 접근하는 방법을 실습합니다. 'person' 객체에 'fullName' 메서드를 추가하고, 'lastName' 속성을 업데이트한 후, 'job' 속성을 삭제하는 작업을 수행하는 함수를 완성하세요.",
    code: `
      function manipulatePersonObject(person) {
        // 'fullName' 메서드 추가: 'firstName'과 'lastName'을 결합하여 반환
        person.fullName = function() {
          return this._____ + ' ' + this._____;
        };
  
        // 'lastName' 속성을 'Smith'로 업데이트
        person._____ = 'Smith';
  
        // 'job' 속성 삭제
        _____(person, 'job');
  
        return person;
      }
  
      let person = {
        firstName: 'John',
        lastName: 'Doe',
        job: 'Developer'
      };
  
      console.log(manipulatePersonObject(person));
    `,
    answerOptions: [
      ["firstName", "lastName", "lastName", "delete"],
      ["name", "surname", "surname", "remove"],
      ["givenName", "familyName", "familyName", "discard"],
      ["first", "last", "last", "erase"],
    ],
    answer: ["firstName, lastName, lastName, delete"],
    explanation:
      "이 함수는 'person' 객체에 'fullName' 메서드를 추가하여 'firstName'과 'lastName' 속성을 결합한 문자열을 반환합니다. 메서드 내부에서 `this` 키워드를 사용하여 현재 객체의 속성에 접근합니다. 'lastName' 속성을 업데이트하기 위해 직접 할당(`person.lastName = 'Smith';`)을 사용합니다. 마지막으로 'job' 속성을 삭제하기 위해 `delete` 연산자(`delete person.job;`)를 사용합니다. 이 연산자는 객체의 속성을 제거하는 표준 방법입니다.",
    subject: "javascript",
    subSubject: "Objects",
    quizType: "coding",
  },
];
