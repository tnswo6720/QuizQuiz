// questions1.js
export const javascriptNotionPromise = [
  // 질문 데이터...

  // promise
  // promise

  {
    type: "multiple-choice",
    questionText: "자바스크립트에서 '콜백'이란 무엇인가요?",
    code: `
    function greeting(name) {
      alert('Hello ' + name);
    }

    function processUserInput(callback) {
      var name = prompt('Please enter your name.');
      callback(name);
    }

    processUserInput(greeting);
    `,
    answerOptions: [
      {
        text: "콜백은 함수의 실행을 일시 중지하고, 나중에 재개할 수 있는 기능입니다.",
        isCorrect: false,
      },
      {
        text: "콜백은 한 함수에 의해 다른 함수가 실행되도록 전달되는 함수입니다.",
        isCorrect: true,
      },
      {
        text: "콜백은 함수의 매개변수를 동적으로 변경하는 메커니즘입니다.",
        isCorrect: false,
      },
      {
        text: "콜백은 함수의 반환 값을 설정하는 방법입니다.",
        isCorrect: false,
      },
    ],
    answer: "콜백은 한 함수에 의해 다른 함수가 실행되도록 전달되는 함수입니다.",
    explanation:
      "콜백 함수는 다른 함수에 인수로 전달되는 함수입니다. 이 함수는 외부 함수 내에서 호출(또는 '되돌려 호출')되어 특정 연산이 완료된 후 실행됩니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "자바스크립트에서 '프로미스'의 정의는 무엇인가요?",
    code: `
  const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('Operation Successful');
    } else {
      reject('Operation Failed');
    }
  });

  promise.then((message) => {
    console.log(message);
  }).catch((message) => {
    console.error(message);
  });
  `,
    answerOptions: [
      {
        text: "프로미스는 비동기 작업의 최종 완료(또는 실패) 및 그 결과 값을 나타냅니다.",
        isCorrect: true,
      },
      {
        text: "프로미스는 함수의 매개변수를 동적으로 변경하는 메커니즘입니다.",
        isCorrect: false,
      },
      {
        text: "프로미스는 함수의 실행을 일시 중지하고, 나중에 재개할 수 있는 기능입니다.",
        isCorrect: false,
      },
      {
        text: "프로미스는 함수의 반환 값을 설정하는 방법입니다.",
        isCorrect: false,
      },
    ],
    answer:
      "프로미스는 비동기 작업의 최종 완료(또는 실패) 및 그 결과 값을 나타냅니다.",
    explanation:
      "프로미스는 비동기 연산이 끝난 후의 결과를 나타내는 객체입니다. 비동기 연산이 성공하면 '이행' 상태가 되고, 실패하면 '거부' 상태가 됩니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "자바스크립트에서 'async와 await'를 사용하는 이유는 무엇인가요?",
    code: `
  async function f() {
    let response = await fetch('https://api.github.com/users');
    let user = await response.json();
    return user;
  }

  f().then((user) => console.log(user));
  `,
    answerOptions: [
      {
        text: "async와 await는 비동기 코드를 동기적으로 작성하고, 이를 통해 코드의 가독성과 로직의 이해를 쉽게 할 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "async와 await는 콜백 함수를 대체하는 새로운 함수 선언 방식입니다.",
        isCorrect: false,
      },
      {
        text: "async와 await는 함수의 실행을 일시 중지하고, 나중에 재개할 수 있는 기능입니다.",
        isCorrect: false,
      },
      {
        text: "async와 await는 여러 함수를 동시에 실행하는 병렬 프로그래밍을 가능하게 합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "async와 await는 비동기 코드를 동기적으로 작성하고, 이를 통해 코드의 가독성과 로직의 이해를 쉽게 할 수 있습니다.",
    explanation:
      "async와 await 키워드는 비동기 코드를 마치 동기 코드처럼 보이게 작성할 수 있게 합니다. 이를 통해 코드의 가독성이 향상되며, 로직의 이해가 쉬워집니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },
  // //
  {
    type: "multiple-choice",
    questionText: "자바스크립트에서 '콜백 지옥'이란 무엇인가요?",
    code: `
    fs.readdir(source, function (err, files) {
      if (err) {
        console.log('Error finding files: ' + err);
      } else {
        files.forEach(function (filename, fileIndex) {
          console.log(filename);
          gm(source + filename).size(function (err, values) {
            if (err) {
              console.log('Error identifying file size: ' + err);
            } else {
              console.log(filename + ' : ' + values);
              aspect = (values.width / values.height);
              widths.forEach(function (width, widthIndex) {
                height = Math.round(width / aspect);
                console.log('resizing ' + filename + 'to ' + height + 'x' + height);
                this.resize(width, height).write(destination + 'w' + width + '_' + filename, function(err) {
                  if (err) console.log('Error writing file: ' + err);
                });
              }.bind(this));
            }
          });
        });
      }
    });
    `,
    answerOptions: [
      {
        text: "콜백 지옥은 한 함수 내에서 너무 많은 콜백 함수를 사용하여 코드의 복잡성이 증가하는 현상을 말합니다.",
        isCorrect: true,
      },
      {
        text: "콜백 지옥은 콜백 함수가 예상치 못한 시점에 호출되어 발생하는 문제를 말합니다.",
        isCorrect: false,
      },
      {
        text: "콜백 지옥은 콜백 함수가 너무 많은 매개변수를 가지고 있을 때 발생하는 문제를 말합니다.",
        isCorrect: false,
      },
      {
        text: "콜백 지옥은 콜백 함수가 재귀적으로 호출되어 스택 오버플로우를 발생시키는 현상을 말합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "콜백 지옥은 한 함수 내에서 너무 많은 콜백 함수를 사용하여 코드의 복잡성이 증가하는 현상을 말합니다.",
    explanation:
      "콜백 지옥은 비동기 프로그래밍에서 콜백 함수를 너무 많이 중첩 사용하여 코드의 가독성이 떨어지고 복잡성이 증가하는 현상을 말합니다. 이를 해결하기 위해 프로미스나 async와 await 같은 기법을 사용합니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "자바스크립트에서 '프로미스 체인'의 개념은 무엇인가요?",
    code: `
  new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 1000);
  })
  .then((result) => {
      alert(result);
      return result * 2;
  })
  .then((result) => {
      alert(result);
      return result * 2;
  })
  .then((result) => {
      alert(result);
      return result * 2;
  });
  `,
    answerOptions: [
      {
        text: "프로미스 체인은 프로미스가 서로 연결되어 있고, 각각의 프로미스가 이전 프로미스의 결과를 기반으로 실행되는 구조를 말합니다.",
        isCorrect: true,
      },
      {
        text: "프로미스 체인은 여러 프로미스를 동시에 실행하는 병렬 처리 구조를 말합니다.",
        isCorrect: false,
      },
      {
        text: "프로미스 체인은 프로미스가 순차적으로 실행되는 동기 처리 구조를 말합니다.",
        isCorrect: false,
      },
      {
        text: "프로미스 체인은 프로미스의 상태 변화를 추적하는 메커니즘을 말합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "프로미스 체인은 프로미스가 서로 연결되어 있고, 각각의 프로미스가 이전 프로미스의 결과를 기반으로 실행되는 구조를 말합니다.",
    explanation:
      "프로미스 체인은 프로미스 객체를 연결하여 비동기 작업을 순차적으로 처리하는 패턴입니다. 각 프로미스는 이전 프로미스의 결과를 받아 처리하며, 이를 통해 비동기 작업을 마치 동기 작업처럼 순차적으로 처리할 수 있습니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "자바스크립트의 'async 함수'에서 발생한 오류를 어떻게 처리해야 하나요?",
    code: `
    async function getGithubUser(username) {
      try {
        let response = await fetch('https://api.github.com/users/' + username);
        let user = await response.json();
        return user;
      } catch (error) {
        console.error('Error:', error);
      }
    }

    getGithubUser('octocat');
    `,
    answerOptions: [
      {
        text: "async 함수에서 발생한 오류는 try-catch 문을 사용하여 처리할 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "async 함수에서 발생한 오류는 Error 객체를 사용하여 처리할 수 있습니다.",
        isCorrect: false,
      },
      {
        text: "async 함수에서 발생한 오류는 throw 문을 사용하여 처리할 수 있습니다.",
        isCorrect: false,
      },
      {
        text: "async 함수에서 발생한 오류는 Promise.reject() 메소드를 사용하여 처리할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer:
      "async 함수에서 발생한 오류는 try-catch 문을 사용하여 처리할 수 있습니다.",
    explanation:
      "async 함수에서 발생하는 오류는 try-catch 문을 사용하여 처리합니다. try 블록 내에서 발생하는 오류는 catch 블록에서 잡아서 처리할 수 있습니다. 이 방식은 동기 코드에서 사용하는 오류 처리 방식과 유사하여, 코드의 일관성을 유지하는 데 도움이 됩니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },

  //  //
  {
    type: "multiple-choice",
    questionText: "자바스크립트에서 'Promise.all' 메소드의 용도는 무엇인가요?",
    code: `
    let promise1 = Promise.resolve(3);
    let promise2 = 42;
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then((values) => {
        console.log(values);
    });
    `,
    answerOptions: [
      {
        text: "Promise.all 메소드는 여러 개의 프로미스를 병렬로 처리하고, 모든 프로미스가 이행될 때까지 기다린 후 결과를 반환합니다.",
        isCorrect: true,
      },
      {
        text: "Promise.all 메소드는 여러 개의 프로미스 중 하나라도 이행되면 즉시 결과를 반환합니다.",
        isCorrect: false,
      },
      {
        text: "Promise.all 메소드는 프로미스 체인을 생성하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "Promise.all 메소드는 새로운 프로미스 객체를 생성하는 데 사용됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "Promise.all 메소드는 여러 개의 프로미스를 병렬로 처리하고, 모든 프로미스가 이행될 때까지 기다린 후 결과를 반환합니다.",
    explanation:
      "Promise.all 메소드는 프로미스의 배열을 인자로 받아, 모든 프로미스가 이행된 경우에만 이행상태가 되는 새로운 프로미스를 반환합니다. 반환된 프로미스의 결과값은 각 프로미스의 결과값으로 이루어진 배열입니다. 만약 하나라도 거부 상태가 되는 프로미스가 있다면, Promise.all 메소드가 반환하는 프로미스 역시 거부 상태가 됩니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "자바스크립트에서 'Promise.race' 메소드의 용도는 무엇인가요?",
    code: `
  var promise1 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 500, 'one');
  });

  var promise2 = new Promise(function(resolve, reject) {
      setTimeout(resolve, 100, 'two');
  });

  Promise.race([promise1, promise2]).then(function(value) {
      console.log(value);
  });
  `,
    answerOptions: [
      {
        text: "Promise.race 메소드는 여러 개의 프로미스 중에서 가장 먼저 이행 또는 거부되는 프로미스의 결과 또는 실패 이유를 반환합니다.",
        isCorrect: true,
      },
      {
        text: "Promise.race 메소드는 여러 개의 프로미스를 병렬로 처리하고, 모든 프로미스가 이행될 때까지 기다린 후 결과를 반환합니다.",
        isCorrect: false,
      },
      {
        text: "Promise.race 메소드는 프로미스 체인을 생성하는 데 사용됩니다.",
        isCorrect: false,
      },
      {
        text: "Promise.race 메소드는 새로운 프로미스 객체를 생성하는 데 사용됩니다.",
        isCorrect: false,
      },
    ],
    answer:
      "Promise.race 메소드는 여러 개의 프로미스 중에서 가장 먼저 이행 또는 거부되는 프로미스의 결과 또는 실패 이유를 반환합니다.",
    explanation:
      "Promise.race 메소드는 프로미스의 배열을 인자로 받아, 가장 먼저 이행 또는 거부 상태가 된 프로미스의 결과값을 반환하는 새로운 프로미스를 생성합니다. 이 메소드는 여러 개의 비동기 작업 중 가장 먼저 완료되는 작업의 결과만 필요할 때 유용합니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "자바스크립트에서 async 함수에서 반환된 값은 어떤 형태가 될까요?",
    code: `
  async function foo() {
      return 1;
  }

  foo().then(alert);  // 1
  `,
    answerOptions: [
      {
        text: "async 함수에서 반환된 값은 항상 Promise 객체입니다.",
        isCorrect: true,
      },
      {
        text: "async 함수에서 반환된 값은 항상 undefined입니다.",
        isCorrect: false,
      },
      {
        text: "async 함수에서 반환된 값은 항상 콜백 함수입니다.",
        isCorrect: false,
      },
      {
        text: "async 함수에서 반환된 값은 항상 Boolean 값입니다.",
        isCorrect: false,
      },
    ],
    answer: "async 함수에서 반환된 값은 항상 Promise 객체입니다.",
    explanation:
      "async 함수는 항상 Promise를 반환합니다. 반환 값이 Promise가 아닌 경우, 이 값은 Promise.resolve 메소드를 사용하여 Promise로 감싸져 반환됩니다. 이를 통해 async 함수의 호출자는 항상 Promise를 기대할 수 있으므로, 비동기 코드를 더 쉽게 작성할 수 있습니다.",
    subject: "javascript",
    subSubject: "promise",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "자바스크립트에서 'async' 키워드의 역할은 무엇인가요?",
    code: `
  async function foo() {
      return 1;
  }

  foo().then(alert);  // 1
  `,
    answerOptions: [
      {
        text: "async 키워드는 함수를 비동기 함수로 정의합니다.",
        isCorrect: true,
      },
      {
        text: "async 키워드는 함수를 동기 함수로 정의합니다.",
        isCorrect: false,
      },
      {
        text: "async 키워드는 함수의 실행을 일시 중지합니다.",
        isCorrect: false,
      },
      {
        text: "async 키워드는 프로미스 객체를 생성합니다.",
        isCorrect: false,
      },
    ],
    answer: "async 키워드는 함수를 비동기 함수로 정의합니다.",
    explanation:
      "async 키워드를 사용하여 함수를 선언하면, 해당 함수는 비동기 함수가 됩니다. 비동기 함수는 항상 Promise를 반환하며, await 키워드를 사용할 수 있습니다.",
    subject: "javascript",
    subSubject: "async-await",
    quizType: "coding",
  },
  // //
  {
    type: "multiple-choice",
    questionText: "자바스크립트에서 'await' 키워드의 역할은 무엇인가요?",
    code: `
    async function foo() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Promise is fulfilled!"), 1000)
        });

        let result = await promise; 
        console.log(result);
    }

    foo();
    `,
    answerOptions: [
      {
        text: "await 키워드는 Promise의 결과를 반환하기 위해 비동기 함수의 실행을 일시 중지합니다.",
        isCorrect: true,
      },
      {
        text: "await 키워드는 새로운 Promise를 생성합니다.",
        isCorrect: false,
      },
      {
        text: "await 키워드는 함수를 비동기 함수로 변환합니다.",
        isCorrect: false,
      },
      {
        text: "await 키워드는 Promise를 동기적으로 처리합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "await 키워드는 Promise의 결과를 반환하기 위해 비동기 함수의 실행을 일시 중지합니다.",
    explanation:
      "await 키워드는 비동기 함수 내에서만 사용할 수 있으며, Promise의 이행 값을 반환하기 위해 비동기 함수의 실행을 일시 중지합니다. Promise가 이행되면, 함수의 실행이 재개되며 await 표현식의 값은 이행된 Promise의 결과값이 됩니다.",
    subject: "javascript",
    subSubject: "async-await",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "자바스크립트에서 'await' 키워드를 사용할 수 있는 곳은 어디인가요?",
    code: `
    async function foo() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Promise is fulfilled!"), 1000)
        });

        let result = await promise; 
        console.log(result);
    }

    foo();
    `,
    answerOptions: [
      {
        text: "await 키워드는 async 함수 내에서만 사용할 수 있습니다.",
        isCorrect: true,
      },
      {
        text: "await 키워드는 모든 함수 내에서 사용할 수 있습니다.",
        isCorrect: false,
      },
      {
        text: "await 키워드는 콜백 함수 내에서 사용할 수 있습니다.",
        isCorrect: false,
      },
      {
        text: "await 키워드는 프로미스 체인 내에서 사용할 수 있습니다.",
        isCorrect: false,
      },
    ],
    answer: "await 키워드는 async 함수 내에서만 사용할 수 있습니다.",
    explanation:
      "await 키워드는 async로 선언된 함수 내에서만 사용할 수 있습니다. 이외의 곳에서 await 키워드를 사용하면 문법 오류가 발생합니다. await 키워드는 Promise의 이행 값을 반환하기 위해 비동기 함수의 실행을 일시 중지하는 역할을 합니다.",
    subject: "javascript",
    subSubject: "async-await",
    quizType: "coding",
  },

  // promise
  // promise
];
