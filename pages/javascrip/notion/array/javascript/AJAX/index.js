// questions1.js
export const javascriptNotionAJAX = [
  // 질문 데이터...
  // promise
  {
    type: "multiple-choice",
    questionText: "AJAX는 무엇의 약자인가요?",
    answerOptions: [
      {
        text: "Asynchronous JavaScript and XML",
        isCorrect: true,
      },
      {
        text: "Application JavaScript and XML",
        isCorrect: false,
      },
      {
        text: "Active JavaScript and XML",
        isCorrect: false,
      },
      {
        text: "Auto JavaScript and XML",
        isCorrect: false,
      },
    ],
    answer: "Asynchronous JavaScript and XML",
    explanation:
      "AJAX는 Asynchronous JavaScript and XML의 약자로, 비동기적인 웹 애플리케이션 제작을 위한 기법입니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "knowledge",
  },

  {
    type: "multiple-choice",
    questionText:
      "AJAX를 사용할 때, 서버로부터 응답을 받지 못한 경우 어떤 상태 코드를 반환하나요?",
    answerOptions: [
      {
        text: "200",
        isCorrect: false,
      },
      {
        text: "404",
        isCorrect: true,
      },
      {
        text: "500",
        isCorrect: false,
      },
      {
        text: "301",
        isCorrect: false,
      },
    ],
    answer: "404",
    explanation:
      "AJAX 요청에서 404 상태 코드는 요청한 리소스를 찾을 수 없음을 나타냅니다. 즉, 서버로부터 응답을 받지 못한 경우 404 상태 코드를 반환하게 됩니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "AJAX를 사용하는 주된 이유는 무엇인가요?",
    answerOptions: [
      {
        text: "페이지 전체를 새로 고치지 않고도 웹 페이지의 일부분만 업데이트할 수 있기 때문",
        isCorrect: true,
      },
      {
        text: "웹 페이지의 로딩 속도를 늦추기 위해",
        isCorrect: false,
      },
      {
        text: "웹 페이지의 보안을 강화하기 위해",
        isCorrect: false,
      },
      {
        text: "웹 페이지의 디자인을 개선하기 위해",
        isCorrect: false,
      },
    ],
    answer:
      "페이지 전체를 새로 고치지 않고도 웹 페이지의 일부분만 업데이트할 수 있기 때문",
    explanation:
      "AJAX는 웹 페이지의 일부분만 비동기적으로 업데이트할 수 있게 해주는 기술입니다. 이를 통해 사용자 경험을 향상시킬 수 있습니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200)
        console.log(JSON.parse(xhr.responseText));
    };
    xhr.send();
  `,
    answerOptions: [
      {
        text: "'https://api.example.com/data'에서 반환된 데이터를 JSON 객체로 변환한 결과",
        isCorrect: true,
      },
      {
        text: "undefined",
        isCorrect: false,
      },
      {
        text: "null",
        isCorrect: false,
      },
      {
        text: "Error",
        isCorrect: false,
      },
    ],
    answer:
      "'https://api.example.com/data'에서 반환된 데이터를 JSON 객체로 변환한 결과",
    explanation:
      "이 코드는 AJAX를 사용하여 'https://api.example.com/data' 주소로 비동기 HTTP GET 요청을 보내고, 응답 상태가 200(성공)인 경우 응답 텍스트를 JSON 객체로 변환하여 콘솔에 출력합니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "AJAX 요청의 상태를 나타내는 readyState 프로퍼티의 값 '4'는 무엇을 의미하나요?",
    answerOptions: [
      {
        text: "요청이 초기화되지 않음",
        isCorrect: false,
      },
      {
        text: "서버와의 연결이 설정됨",
        isCorrect: false,
      },
      {
        text: "요청이 처리 중임",
        isCorrect: false,
      },
      {
        text: "요청이 완료되고 응답이 준비됨",
        isCorrect: true,
      },
    ],
    answer: "요청이 완료되고 응답이 준비됨",
    explanation:
      "AJAX에서 readyState 프로퍼티의 값 '4'는 요청이 완료되고 응답이 준비된 상태를 나타냅니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 404)
        console.log('Not Found');
    };
    xhr.send();
  `,
    answerOptions: [
      {
        text: "'Not Found' - 만약 'https://api.example.com/data' 주소로의 요청이 실패할 경우",
        isCorrect: true,
      },
      {
        text: "'https://api.example.com/data'에서 반환된 데이터",
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
    answer:
      "'Not Found' - 만약 'https://api.example.com/data' 주소로의 요청이 실패할 경우",
    explanation:
      "이 코드는 AJAX를 사용하여 'https://api.example.com/data' 주소로 비동기 HTTP GET 요청을 보내고, 요청 상태가 4(요청 완료)이며 응답 상태가 404(Not Found)인 경우 'Not Found'를 콘솔에 출력합니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "AJAX 요청에서 HTTP 상태 코드 '200'은 무엇을 의미하나요?",
    answerOptions: [
      {
        text: "클라이언트의 요청이 성공적으로 처리되었음",
        isCorrect: true,
      },
      {
        text: "요청한 리소스가 존재하지 않음",
        isCorrect: false,
      },
      {
        text: "서버에서 클라이언트의 요청을 처리하는 동안 오류가 발생함",
        isCorrect: false,
      },
      {
        text: "요청한 리소스가 이동되었음",
        isCorrect: false,
      },
    ],
    answer: "클라이언트의 요청이 성공적으로 처리되었음",
    explanation:
      "HTTP 상태 코드 '200'은 클라이언트의 요청이 성공적으로 처리되었음을 의미합니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200)
        console.log(xhr.getAllResponseHeaders());
    };
    xhr.send();
  `,
    answerOptions: [
      {
        text: "'https://api.example.com/data'에서 반환된 모든 응답 헤더",
        isCorrect: true,
      },
      {
        text: "'https://api.example.com/data'에서 반환된 데이터",
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
    answer: "'https://api.example.com/data'에서 반환된 모든 응답 헤더",
    explanation:
      "이 코드는 AJAX를 사용하여 'https://api.example.com/data' 주소로 비동기 HTTP GET 요청을 보내고, 요청 상태가 4(요청 완료)이며 응답 상태가 200(성공)인 경우 모든 응답 헤더를 콘솔에 출력합니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "위 코드에서 XMLHttpRequest 객체의 `open` 메서드는 무엇을 하는데 사용되었나요?",
    code: `
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.example.com/data', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200)
        console.log(xhr.responseText);
    };
    xhr.send(JSON.stringify({key: 'value'}));
    `,
    answerOptions: [
      {
        text: "서버로의 요청을 보내는 역할",
        isCorrect: false,
      },
      {
        text: "요청을 초기화하는 역할",
        isCorrect: true,
      },
      {
        text: "서버로부터 응답을 받는 역할",
        isCorrect: false,
      },
      {
        text: "JSON 데이터를 변환하는 역할",
        isCorrect: false,
      },
    ],
    answer: "요청을 초기화하는 역할",
    explanation:
      "`open` 메서드는 XMLHttpRequest 객체의 요청을 초기화하는 역할을 합니다. 첫 번째 인자는 HTTP 메서드를, 두 번째 인자는 요청을 보낼 URL을, 세 번째 인자는 요청이 비동기적으로 실행될지 여부를 결정합니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "위 코드에서 XMLHttpRequest 객체의 `onreadystatechange` 프로퍼티는 무엇을 하는데 사용되었나요?",
    code: `
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.example.com/data', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200)
        console.log(xhr.responseText);
    };
    xhr.send(JSON.stringify({key: 'value'}));
    `,
    answerOptions: [
      {
        text: "서버로의 요청을 보내는 역할",
        isCorrect: false,
      },
      {
        text: "요청의 상태 변화를 감지하고 처리하는 역할",
        isCorrect: true,
      },
      {
        text: "서버로부터 응답을 받는 역할",
        isCorrect: false,
      },
      {
        text: "JSON 데이터를 변환하는 역할",
        isCorrect: false,
      },
    ],
    answer: "요청의 상태 변화를 감지하고 처리하는 역할",
    explanation:
      "`onreadystatechange`는 요청의 상태가 변할 때마다 호출되는 이벤트 핸들러입니다. `readyState` 속성의 값이 변경될 때마다 이 함수가 호출되며, 이를 통해 우리는 요청의 상태를 추적하고 적절한 동작을 수행할 수 있습니다.",
    subject: "javascript",
    subSubject: "ajax",
    quizType: "coding",
  },

  // promise
];
