// questions1.js
export const javascriptNotionAPI = [
  // 질문 데이터...
  // promise
  {
    type: "multiple-choice",
    questionText: "아래 옵션 중 JavaScript에서 웹 API란 무엇인가요?",
    answerOptions: [
      {
        text: "웹 브라우저에서 제공하는 기능들을 사용할 수 있게 해주는 인터페이스",
        isCorrect: true,
      },
      {
        text: "웹 서버와 클라이언트 간에 데이터를 주고받을 수 있게 해주는 인터페이스",
        isCorrect: false,
      },
      {
        text: "웹 페이지의 내용을 변경하거나 조작할 수 있게 해주는 인터페이스",
        isCorrect: false,
      },
      {
        text: "웹 사이트를 만들 수 있게 해주는 인터페이스",
        isCorrect: false,
      },
    ],
    answer:
      "웹 브라우저에서 제공하는 기능들을 사용할 수 있게 해주는 인터페이스",
    explanation:
      "웹 API는 웹 브라우저에서 제공하는 기능들을 사용할 수 있게 해주는 인터페이스를 말합니다. 예를 들어, DOM 조작, AJAX, Geolocation 등의 기능을 제공합니다.",
    subject: "javascript",
    subSubject: "API",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.example.com/data', false);
      request.send();

      if (request.status === 200) {
        console.log(request.responseText);
      }
    `,
    answerOptions: [
      {
        text: "'https://api.example.com/data'에서 반환된 데이터",
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
    answer: "'https://api.example.com/data'에서 반환된 데이터",
    explanation:
      "이 코드는 웹 API의 XMLHttpRequest 객체를 사용하여 'https://api.example.com/data' 주소로 HTTP GET 요청을 보내고, 응답 상태가 200(성공)인 경우 응답 텍스트를 콘솔에 출력합니다.",
    subject: "javascript",
    subSubject: "API",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      var request = new XMLHttpRequest();
      request.open('GET', 'https://api.example.com/data', true);
      request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200)
          console.log(request.responseText);
      };
      request.send();
    `,
    answerOptions: [
      {
        text: "'https://api.example.com/data'에서 반환된 데이터",
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
    answer: "'https://api.example.com/data'에서 반환된 데이터",
    explanation:
      "이 코드는 웹 API의 XMLHttpRequest 객체를 사용하여 'https://api.example.com/data' 주소로 비동기 HTTP GET 요청을 보내고, 응답 상태가 200(성공)인 경우 응답 텍스트를 콘솔에 출력합니다.",
    subject: "javascript",
    subSubject: "API",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래의 JavaScript 코드를 실행하면, 어떤 결과가 출력됩니까?",
    code: `
      fetch('https://api.example.com/data')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log('There has been a problem with your fetch operation: ', error.message));
    `,
    answerOptions: [
      {
        text: "'https://api.example.com/data'에서 반환된 JSON 데이터 또는 에러 메시지",
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
      "'https://api.example.com/data'에서 반환된 JSON 데이터 또는 에러 메시지",
    explanation:
      "이 코드는 웹 API의 Fetch API를 사용하여 'https://api.example.com/data' 주소로 HTTP GET 요청을 보내고, 응답을 JSON으로 파싱한 후 콘솔에 출력하거나, 네트워크 응답이 ok가 아닌 경우 에러를 콘솔에 출력합니다.",
    subject: "javascript",
    subSubject: "API",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "JavaScript에서 외부 API를 호출하기 위해 주로 사용하는 내장 함수는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "callAPI()",
        isCorrect: false,
      },
      {
        text: "fetch()",
        isCorrect: true,
      },
      {
        text: "api()",
        isCorrect: false,
      },
      {
        text: "request()",
        isCorrect: false,
      },
    ],
    answer: "fetch()",
    explanation:
      "JavaScript에서는 'fetch()' 함수를 사용하여 비동기적으로 네트워크 요청을 보내고 외부 API를 호출할 수 있습니다. 이 함수는 Promise를 반환하여 비동기적인 처리를 가능하게 합니다.",
    subject: "javascript",
    subSubject: "API",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "JavaScript에서 fetch API를 사용하여 비동기 네트워크 요청을 보낼 때, Promise 체인의 올바른 순서는 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "fetch().then().catch()",
        isCorrect: true,
      },
      {
        text: "fetch().catch().then()",
        isCorrect: false,
      },
      {
        text: "then().fetch().catch()",
        isCorrect: false,
      },
      {
        text: "catch().then().fetch()",
        isCorrect: false,
      },
    ],
    answer: "fetch().then().catch()",
    explanation:
      "JavaScript의 fetch API는 Promise를 반환하며, 'then()' 메서드를 통해 요청이 성공적으로 완료되었을 때의 처리를, 'catch()' 메서드를 통해 예외 상황 처리를 구현할 수 있습니다. 그래서 올바른 순서는 'fetch().then().catch()'입니다.",
    subject: "javascript",
    subSubject: "API",
    quizType: "coding",
  },

  // promise
];
