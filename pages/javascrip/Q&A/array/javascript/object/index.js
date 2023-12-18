// questions1.js
export const javascriptNotionObject = [
  // 질문 데이터...
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'person' 객체의 'age' 속성 값을 올바르게 변경한 방법은 무엇인가요?",
    code: `
      var person = {
        name: 'John',
        age: 30
      };
    `,
    answerOptions: [
      {
        text: "person.age = 31;",
        isCorrect: true,
      },
      {
        text: "person('age') = 31;",
        isCorrect: false,
      },
      {
        text: "person.age(31);",
        isCorrect: false,
      },
      {
        text: "person[age] = 31;",
        isCorrect: false,
      },
    ],
    answer: "person.age = 31;",
    explanation:
      "JavaScript에서 객체의 속성은 '객체명.속성명' 형태로 접근하고 변경할 수 있습니다. 따라서 'person' 객체의 'age' 속성 값은 'person.age = 31;'와 같이 변경합니다.",
    subject: "javascript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'person' 객체의 'greet' 메서드를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      var person = {
        name: 'John',
        age: 30,
        greet: function() {
          return 'Hello, ' + this.name;
        }
      };
    `,
    answerOptions: [
      {
        text: "person.greet;",
        isCorrect: false,
      },
      {
        text: "person.greet();",
        isCorrect: true,
      },
      {
        text: "person['greet'];",
        isCorrect: false,
      },
      {
        text: "person('greet');",
        isCorrect: false,
      },
    ],
    answer: "person.greet();",
    explanation:
      "JavaScript에서 객체의 메서드는 '객체명.메서드명()' 형태로 호출합니다. 따라서 'person' 객체의 'greet' 메서드는 'person.greet();'와 같이 호출합니다.",
    subject: "javascript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'Animal' 프로토타입에 'eat' 메서드를 추가한 후, 'cat' 객체에서 이 메서드를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.eat = function() {
        return this.name + ' is eating.';
      };

      var cat = new Animal('Cat');
    `,
    answerOptions: [
      {
        text: "cat.eat;",
        isCorrect: false,
      },
      {
        text: "cat.eat();",
        isCorrect: true,
      },
      {
        text: "Animal.eat;",
        isCorrect: false,
      },
      {
        text: "Animal.eat();",
        isCorrect: false,
      },
    ],
    answer: "cat.eat();",
    explanation:
      "JavaScript에서 객체의 메서드는 '객체명.메서드명()' 형태로 호출합니다. 따라서 'cat' 객체의 'eat' 메서드는 'cat.eat();'와 같이 호출합니다.",
    subject: "javascript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'dog' 객체의 'age' 속성 값을 올바르게 변경한 방법은 무엇인가요?",
    code: `
      var dog = {
        name: 'Max',
        age: 5
      };
    `,
    answerOptions: [
      {
        text: "dog.age = 6;",
        isCorrect: true,
      },
      {
        text: "dog('age') = 6;",
        isCorrect: false,
      },
      {
        text: "dog.age(6);",
        isCorrect: false,
      },
      {
        text: "dog[age] = 6;",
        isCorrect: false,
      },
    ],
    answer: "dog.age = 6;",
    explanation:
      "JavaScript에서 객체의 속성은 '객체명.속성명' 형태로 접근하고 변경할 수 있습니다. 따라서 'dog' 객체의 'age' 속성 값은 'dog.age = 6;'와 같이 변경합니다.",
    subject: "javascript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'person' 객체의 'sayHello' 메서드를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      var person = {
        name: 'Jane',
        age: 25,
        sayHello: function() {
          return 'Hello, ' + this.name;
        }
      };
    `,
    answerOptions: [
      {
        text: "person.sayHello;",
        isCorrect: false,
      },
      {
        text: "person.sayHello();",
        isCorrect: true,
      },
      {
        text: "person['sayHello'];",
        isCorrect: false,
      },
      {
        text: "person('sayHello');",
        isCorrect: false,
      },
    ],
    answer: "person.sayHello();",
    explanation:
      "JavaScript에서 객체의 메서드는 '객체명.메서드명()' 형태로 호출합니다. 따라서 'person' 객체의 'sayHello' 메서드는 'person.sayHello();'와 같이 호출합니다.",
    subject: "javascript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'Bird' 프로토타입에 'fly' 메서드를 추가한 후, 'sparrow' 객체에서 이 메서드를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function Bird(name) {
        this.name = name;
      }

      Bird.prototype.fly = function() {
        return this.name + ' is flying.';
      };

      var sparrow = new Bird('Sparrow');
    `,
    answerOptions: [
      {
        text: "sparrow.fly;",
        isCorrect: false,
      },
      {
        text: "sparrow.fly();",
        isCorrect: true,
      },
      {
        text: "Bird.fly;",
        isCorrect: false,
      },
      {
        text: "Bird.fly();",
        isCorrect: false,
      },
    ],
    answer: "sparrow.fly();",
    explanation:
      "JavaScript에서 객체의 메서드는 '객체명.메서드명()' 형태로 호출합니다. 따라서 'sparrow' 객체의 'fly' 메서드는 'sparrow.fly();'와 같이 호출합니다.",
    subject: "javascript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'student' 객체의 'grade' 속성 값을 올바르게 변경한 방법은 무엇인가요?",
    code: `
      var student = {
        name: 'Anna',
        grade: 3
      };
    `,
    answerOptions: [
      {
        text: "student.grade = 4;",
        isCorrect: true,
      },
      {
        text: "student('grade') = 4;",
        isCorrect: false,
      },
      {
        text: "student.grade(4);",
        isCorrect: false,
      },
      {
        text: "student[grade] = 4;",
        isCorrect: false,
      },
    ],
    answer: "student.grade = 4;",
    explanation:
      "JavaScript에서 객체의 속성은 '객체명.속성명' 형태로 접근하고 변경할 수 있습니다. 따라서 'student' 객체의 'grade' 속성 값은 'student.grade = 4;'와 같이 변경합니다.",
    subject: "javascript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'person' 객체의 'introduce' 메서드를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      var person = {
        name: 'Bob',
        age: 40,
        introduce: function() {
          return 'Hello, my name is ' + this.name;
        }
      };
    `,
    answerOptions: [
      {
        text: "person.introduce;",
        isCorrect: false,
      },
      {
        text: "person.introduce();",
        isCorrect: true,
      },
      {
        text: "person['introduce'];",
        isCorrect: false,
      },
      {
        text: "person('introduce');",
        isCorrect: false,
      },
    ],
    answer: "person.introduce();",
    explanation:
      "JavaScript에서 객체의 메서드는 '객체명.메서드명()' 형태로 호출합니다. 따라서 'person' 객체의 'introduce' 메서드는 'person.introduce();'와 같이 호출합니다.",
    subject: "javascript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'Vehicle' 프로토타입에 'move' 메서드를 추가한 후, 'car' 객체에서 이 메서드를 올바르게 호출한 방법은 무엇인가요?",
    code: `
      function Vehicle(name) {
        this.name = name;
      }

      Vehicle.prototype.move = function() {
        return this.name + ' is moving.';
      };

      var car = new Vehicle('Car');
    `,
    answerOptions: [
      {
        text: "car.move;",
        isCorrect: false,
      },
      {
        text: "car.move();",
        isCorrect: true,
      },
      {
        text: "Vehicle.move;",
        isCorrect: false,
      },
      {
        text: "Vehicle.move();",
        isCorrect: false,
      },
    ],
    answer: "car.move();",
    explanation:
      "JavaScript에서 객체의 메서드는 '객체명.메서드명()' 형태로 호출합니다. 따라서 'car' 객체의 'move' 메서드는 'car.move();'와 같이 호출합니다.",
    subject: "JavaScript",
    subSubject: "Object",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서 'bird' 객체의 'color' 속성 값을 올바르게 변경한 방법은 무엇인가요?",
    code: `
      var bird = {
        name: 'Peacock',
        color: 'Blue'
      };
    `,
    answerOptions: [
      {
        text: "bird.color = 'Green';",
        isCorrect: true,
      },
      {
        text: "bird('color') = 'Green';",
        isCorrect: false,
      },
      {
        text: "bird.color('Green');",
        isCorrect: false,
      },
      {
        text: "bird[color] = 'Green';",
        isCorrect: false,
      },
    ],
    answer: "bird.color = 'Green';",
    explanation:
      "JavaScript에서 객체의 속성은 '객체명.속성명' 형태로 접근하고 변경할 수 있습니다. 따라서 'bird' 객체의 'color' 속성 값은 'bird.color = 'Green';'와 같이 변경합니다.",
    subject: "JavaScript",
    subSubject: "Object",
    quizType: "coding",
  },
];
