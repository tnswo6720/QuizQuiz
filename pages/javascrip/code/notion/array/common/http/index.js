// questions1.js
export const CommonNotionHttp = [
  // 질문 데이터...
  // basic
  // basic

  {
    type: "multiple-choice",
    questionText:
      "다음 중 JSON(JavaScript Object Notation)의 규칙이 아닌 것은 무엇인가요?",
    code: ``,
    answerOptions: [
      {
        text: "데이터는 키-값 쌍으로 표현된다.",
        isCorrect: false,
      },
      {
        text: "키는 반드시 따옴표로 둘러싸여야 한다.",
        isCorrect: false,
      },
      {
        text: "데이터 값으로 함수를 사용할 수 있다.",
        isCorrect: true,
      },
      {
        text: "배열은 대괄호([])로, 객체는 중괄호({})로 표현된다.",
        isCorrect: false,
      },
    ],
    answer: "데이터 값으로 함수를 사용할 수 있다.",
    explanation:
      "JSON에서는 데이터 값으로 함수를 사용할 수 없습니다. 따라서 '데이터 값으로 함수를 사용할 수 있다'는 설명은 올바르지 않습니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "HTTP에서 구조화된 데이터를 보낼 때 주로 어떤 데이터 형식을 사용하나요?",
    code: `
      fetch('https://api.example.com/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Item Name',
          description: 'Item Description',
        }),
      })
    `,
    answerOptions: [
      {
        text: "XML",
        isCorrect: false,
      },
      {
        text: "JSON",
        isCorrect: true,
      },
      {
        text: "HTML",
        isCorrect: false,
      },
      {
        text: "Plain Text",
        isCorrect: false,
      },
    ],
    answer: "JSON",
    explanation:
      "HTTP에서 구조화된 데이터를 보낼 때는 주로 JSON(JavaScript Object Notation) 데이터 형식을 사용합니다. 이는 서버와 클라이언트 간에 데이터를 교환하는 데 널리 사용되는 경량의 데이터 형식입니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 HTTP(Hypertext Transfer Protocol)의 구성 요소가 아닌 것은 무엇인가요?",
    code: ``,
    answerOptions: [
      {
        text: "요청 메소드",
        isCorrect: false,
      },
      {
        text: "헤더",
        isCorrect: false,
      },
      {
        text: "바디",
        isCorrect: false,
      },
      {
        text: "스크립트",
        isCorrect: true,
      },
    ],
    answer: "스크립트",
    explanation:
      "HTTP 메시지는 요청 메소드, 헤더, 바디 등으로 구성되지만 '스크립트'는 HTTP 메시지의 구성 요소가 아닙니다. 따라서 '스크립트'는 올바르지 않은 선택입니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 중 URL(Uniform Resource Locator)의 구성 요소가 아닌 것은 무엇인가요?",
    code: ``,
    answerOptions: [
      {
        text: "프로토콜",
        isCorrect: false,
      },
      {
        text: "호스트",
        isCorrect: false,
      },
      {
        text: "경로",
        isCorrect: false,
      },
      {
        text: "메소드",
        isCorrect: true,
      },
    ],
    answer: "메소드",
    explanation:
      "URL은 프로토콜, 호스트, 경로 등으로 구성되지만 '메소드'는 URL의 구성 요소가 아닙니다. 따라서 '메소드'는 올바르지 않은 선택입니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "HTTP 메소드 중 PATCH와 PUT의 주요 차이점은 무엇인가요?",
    code: `
      // PUT request
      fetch('/api/resource/1', {
        method: 'PUT',
        body: JSON.stringify({
          name: 'New Name',
          description: 'New Description',
          price: 100,
        }),
      });
      
      // PATCH request
      fetch('/api/resource/1', {
        method: 'PATCH',
        body: JSON.stringify({
          price: 200,
        }),
      });
    `,
    answerOptions: [
      {
        text: "PUT은 리소스를 완전히 새로 작성하고, PATCH는 리소스의 일부를 업데이트한다.",
        isCorrect: true,
      },
      {
        text: "PATCH는 리소스를 완전히 새로 작성하고, PUT는 리소스의 일부를 업데이트한다.",
        isCorrect: false,
      },
      {
        text: "PUT은 리소스를 삭제하고, PATCH는 리소스를 생성한다.",
        isCorrect: false,
      },
      {
        text: "PATCH는 리소스를 삭제하고, PUT는 리소스를 생성한다.",
        isCorrect: false,
      },
    ],
    answer:
      "PUT은 리소스를 완전히 새로 작성하고, PATCH는 리소스의 일부를 업데이트한다.",
    explanation:
      "PUT 메소드는 대상 리소스를 요청의 페이로드로 완전히 새로 작성하는데 사용되며, PATCH 메소드는 대상 리소스의 일부만을 업데이트하는데 사용됩니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "HTTP 헤더(header)란 무엇이며, 주로 어떤 용도로 사용되나요?",
    code: `
      fetch('https://api.example.com/items', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer token',
        },
      });
    `,
    answerOptions: [
      {
        text: "요청이나 응답의 본문을 설명하는 메타데이터이며, 주로 인증, 캐싱, 콘텐츠 유형 등을 제어하는데 사용된다.",
        isCorrect: true,
      },
      {
        text: "요청이나 응답의 본문을 구성하는 데이터이며, 주로 데이터 전송을 위해 사용된다.",
        isCorrect: false,
      },
      {
        text: "요청이나 응답을 전송하는 서버의 정보이며, 주로 서버의 상태를 표시하는데 사용된다.",
        isCorrect: false,
      },
      {
        text: "요청이나 응답의 상태를 나타내는 코드이며, 주로 오류 처리에 사용된다.",
        isCorrect: false,
      },
    ],
    answer:
      "요청이나 응답의 본문을 설명하는 메타데이터이며, 주로 인증, 캐싱, 콘텐츠 유형 등을 제어하는데 사용된다.",
    explanation:
      "HTTP 헤더는 요청이나 응답의 본문을 설명하는 메타데이터로, 인증, 캐싱, 콘텐츠 유형 등을 제어하는데 주로 사용됩니다. 예를 들어, 'Accept' 헤더는 클라이언트가 이해할 수 있는 콘텐츠 유형을 지정하고, 'Authorization' 헤더는 사용자의 인증 정보를 포함합니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "HTTP 바디(body)란 무엇이며, 주로 어떤 용도로 사용되나요?",
    code: `
      fetch('https://api.example.com/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Item Name',
          description: 'Item Description',
        }),
      });
    `,
    answerOptions: [
      {
        text: "요청이나 응답에서 실제로 전송되는 데이터이며, 주로 리소스의 생성, 수정 등을 위해 사용된다.",
        isCorrect: true,
      },
      {
        text: "요청이나 응답의 상태를 나타내는 코드이며, 주로 오류 처리에 사용된다.",
        isCorrect: false,
      },
      {
        text: "요청이나 응답의 본문을 설명하는 메타데이터이며, 주로 인증, 캐싱, 콘텐츠 유형 등을 제어하는데 사용된다.",
        isCorrect: false,
      },
      {
        text: "요청이나 응답을 전송하는 서버의 정보이며, 주로 서버의 상태를 표시하는데 사용된다.",
        isCorrect: false,
      },
    ],
    answer:
      "요청이나 응답에서 실제로 전송되는 데이터이며, 주로 리소스의 생성, 수정 등을 위해 사용된다.",
    explanation:
      "HTTP 바디는 요청이나 응답에서 실제로 전송되는 데이터를 포함합니다. 이는 주로 리소스의 생성, 수정 등을 위해 사용되며, 'POST' 요청의 경우 요청 바디에 생성하려는 리소스의 정보를 포함하여 보낼 수 있습니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "HTTP 헤더(header)와 바디(body)의 주요 차이점은 무엇인가요?",
    code: `
      fetch('https://api.example.com/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Item Name',
          description: 'Item Description',
        }),
      });
    `,
    answerOptions: [
      {
        text: "헤더는 요청이나 응답의 본문을 설명하는 메타데이터이고, 바디는 요청이나 응답에서 실제로 전송되는 데이터이다.",
        isCorrect: true,
      },
      {
        text: "바디는 요청이나 응답의 본문을 설명하는 메타데이터이고, 헤더는 요청이나 응답에서 실제로 전송되는 데이터이다.",
        isCorrect: false,
      },
      {
        text: "헤더는 요청이나 응답을 전송하는 서버의 정보이고, 바디는 요청이나 응답의 상태를 나타내는 코드이다.",
        isCorrect: false,
      },
      {
        text: "바디는 요청이나 응답을 전송하는 서버의 정보이고, 헤더는 요청이나 응답의 상태를 나타내는 코드이다.",
        isCorrect: false,
      },
    ],
    answer:
      "헤더는 요청이나 응답의 본문을 설명하는 메타데이터이고, 바디는 요청이나 응답에서 실제로 전송되는 데이터이다.",
    explanation:
      "HTTP 헤더는 요청이나 응답의 본문을 설명하는 메타데이터로, 인증, 캐싱, 콘텐츠 유형 등을 제어하는데 사용됩니다. 반면에 HTTP 바디는 요청이나 응답에서 실제로 전송되는 데이터를 포함하며, 주로 리소스의 생성, 수정 등을 위해 사용됩니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "HTTP 응답의 주요 구성 요소는 무엇인가요?",
    code: `
      // Sample HTTP Response
      HTTP/1.1 200 OK
      Date: Mon, 27 Jul 2009 12:28:53 GMT
      Server: Apache/2.2.14 (Win32)
      Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
      Content-Length: 88
      Content-Type: text/html
      Connection: Closed
  
      <html>
      <body>
      <h1>Hello, World!</h1>
      </body>
      </html>
    `,
    answerOptions: [
      {
        text: "상태 코드, 헤더, 바디",
        isCorrect: true,
      },
      {
        text: "메소드, URL, 버전",
        isCorrect: false,
      },
      {
        text: "호스트, 경로, 쿼리 파라미터",
        isCorrect: false,
      },
      {
        text: "프로토콜, 포트, 리소스",
        isCorrect: false,
      },
    ],
    answer: "상태 코드, 헤더, 바디",
    explanation:
      "HTTP 응답은 주로 상태 코드, 헤더, 바디로 구성됩니다. 상태 코드는 요청이 성공적으로 이루어졌는지, 에러가 발생했는지 등을 나타냅니다. 헤더는 응답의 메타데이터를 담고 있으며, 바디는 실제 응답 데이터를 포함합니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "HTTP 상태 코드의 주요 범위와 그 의미로 옳은 것은 무엇인가요?",
    code: "",
    answerOptions: [
      {
        text: "1xx (정보): 요청을 받았으며 프로세스를 계속한다. 2xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다. 3xx (리다이렉션): 추가 조치가 필요하여 이루어져야 한다. 4xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다. 5xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패하였다.",
        isCorrect: true,
      },
      {
        text: "1xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다. 2xx (리다이렉션): 추가 조치가 필요하여 이루어져야 한다. 3xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다. 4xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패하였다. 5xx (정보): 요청을 받았으며 프로세스를 계속한다.",
        isCorrect: false,
      },
      {
        text: "1xx (리다이렉션): 추가 조치가 필요하여 이루어져야 한다. 2xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다. 3xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패하였다. 4xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다. 5xx (정보): 요청을 받았으며 프로세스를 계속한다.",
        isCorrect: false,
      },
      {
        text: "1xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다. 2xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패하였다. 3xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다. 4xx (정보): 요청을 받았으며 프로세스를 계속한다. 5xx (리다이렉션): 추가 조치가 필요하여 이루어져야 한다.",
        isCorrect: false,
      },
    ],
    answer:
      "1xx (정보): 요청을 받았으며 프로세스를 계속한다. 2xx (성공): 요청을 성공적으로 받았으며 인식했고 수용하였다. 3xx (리다이렉션): 추가 조치가 필요하여 이루어져야 한다. 4xx (클라이언트 오류): 요청의 문법이 잘못되었거나 요청을 처리할 수 없다. 5xx (서버 오류): 서버가 명백히 유효한 요청에 대해 충족을 실패하였다.",
    explanation:
      "HTTP 상태 코드는 세 자리 숫자로 이루어져 있으며, 각 범위(1xx, 2xx, 3xx, 4xx, 5xx)는 다른 종류의 응답을 나타냅니다. 1xx는 정보 응답, 2xx는 성공 응답, 3xx는 리다이렉션을 위한 응답, 4xx는 클라이언트 오류, 그리고 5xx는 서버 오류를 나타냅니다.",
    subject: "common",
    subSubject: "http",
    quizType: "coding",
  },
];

// HTTP란?
// HTTP에서 구조화된 데이터를 보낼 때 어떤 구조로 보내는지?
// JSON의 규칙에 대해
// HTTP의 구성요소에 대해
// URL의 구성 요소에 대해
// 메서드에 대해 (PATCH, PUT ,DELETE, GET 등)
// PATCH와 PUT의 차이점
// 헤더란 무엇인가와 용도
// BODY란 무엇인가와 용도
// 헤더와 바디의 차이점
// HTTP 응답의 구성 요소
// Status Code의 종류
