// questions1.js
export const cssNotionStyle = [
  // 질문 데이터...
  // basic
  // basic

  {
    type: "multiple-choice",
    questionText: "API 서버의 주요 역할은 무엇인가?",
    code: `
  
  `,
    answerOptions: [
      {
        text: "클라이언트와 데이터베이스 사이에서 중개자 역할을 한다.",
        isCorrect: true,
      },
      {
        text: "데이터베이스를 관리한다.",
        isCorrect: false,
      },
      {
        text: "클라이언트의 사용자 인터페이스를 구현한다.",
        isCorrect: false,
      },
      {
        text: "인프라를 관리한다.",
        isCorrect: false,
      },
    ],
    answer: "클라이언트와 데이터베이스 사이에서 중개자 역할을 한다.",
    explanation:
      "API 서버는 클라이언트의 요청을 처리하고, 필요한 경우 데이터베이스에 데이터를 저장하거나 조회하는 중개자 역할을 합니다.",
    subject: "common",
    subSubject: "backend",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "데이터베이스의 주요 역할은 무엇인가?",
    code: `
  
  `,
    answerOptions: [
      {
        text: "구조화된 데이터를 저장하고 검색한다.",
        isCorrect: true,
      },
      {
        text: "클라이언트와 데이터베이스 사이에서 중개자 역할을 한다.",
        isCorrect: false,
      },
      {
        text: "클라이언트의 사용자 인터페이스를 구현한다.",
        isCorrect: false,
      },
      {
        text: "인프라를 관리한다.",
        isCorrect: false,
      },
    ],
    answer: "구조화된 데이터를 저장하고 검색한다.",
    explanation:
      "데이터베이스는 구조화된 데이터를 저장하고 검색할 수 있는 시스템입니다.",
    subject: "common",
    subSubject: "database",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "인프라스트럭처에는 어떤 것들이 포함되는가?",
    code: `
  
    `,
    answerOptions: [
      {
        text: "서버, 스토리지, 네트워크 장비, 운영 체제, 미들웨어",
        isCorrect: true,
      },
      {
        text: "클라이언트, 서버, 데이터베이스",
        isCorrect: false,
      },
      {
        text: "API 서버, 데이터베이스",
        isCorrect: false,
      },
      {
        text: "클라이언트, 사용자 인터페이스",
        isCorrect: false,
      },
    ],
    answer: "서버, 스토리지, 네트워크 장비, 운영 체제, 미들웨어",
    explanation:
      "인프라스트럭처는 IT 시스템의 기본적인 구조와 서비스를 제공하는데 필요한 물리적 또는 가상의 리소스를 의미하며, 이에는 서버, 스토리지, 네트워크 장비, 운영 체제, 미들웨어 등이 포함됩니다.",
    subject: "common",
    subSubject: "backend",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "Node.js의 주요 특징 중 하나가 아닌 것은 무엇인가?",
    code: "",
    answerOptions: [
      {
        text: "Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임이다.",
        isCorrect: false,
      },
      {
        text: "서버 측에서 실행되는 JavaScript로, 웹 서버를 생성하거나 파일 시스템에 액세스하는 등의 서버 사이드 스크립팅을 가능하게 한다.",
        isCorrect: false,
      },
      {
        text: "npm(Node Package Manager)를 통해 다양한 라이브러리와 도구를 제공한다.",
        isCorrect: false,
      },
      {
        text: "동기적인 I/O 처리를 지원한다.",
        isCorrect: true,
      },
    ],
    answer: "동기적인 I/O 처리를 지원한다.",
    explanation:
      "Node.js는 이벤트 기반, 비동기 I/O 모델을 사용하여 효율적이고 경량화된 애플리케이션을 구축하는 것이 특징입니다. 따라서 '동기적인 I/O 처리를 지원한다'는 Node.js의 주요 특징이 아닙니다.",
    subject: "common",
    subSubject: "backend",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "JavaScript가 바이트코드를 사용하는 주요 이유는 무엇인가?",
    code: "",
    answerOptions: [
      {
        text: "소스 코드를 더 빠르게 실행하기 위해",
        isCorrect: true,
      },
      {
        text: "소스 코드의 크기를 줄이기 위해",
        isCorrect: false,
      },
      {
        text: "소스 코드를 보호하기 위해",
        isCorrect: false,
      },
      {
        text: "소스 코드의 호환성을 높이기 위해",
        isCorrect: false,
      },
    ],
    answer: "소스 코드를 더 빠르게 실행하기 위해",
    explanation:
      "JavaScript 엔진은 바이트코드를 사용하여 소스 코드를 더 빠르게 실행합니다. 바이트코드는 중간 언어로, 소스 코드를 컴파일 한 후 실행하는 데 사용됩니다. 이 과정은 JavaScript의 실행 속도를 크게 향상시킵니다.",
    subject: "common",
    subSubject: "backend",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "이벤트 큐, 이벤트 루프, 워커 스레드에 대한 설명 중 올바르지 않은 것은 무엇인가?",
    code: "",
    answerOptions: [
      {
        text: "이벤트 큐는 비동기 작업의 결과를 저장하는 곳이다.",
        isCorrect: false,
      },
      {
        text: "이벤트 루프는 이벤트 큐에서 이벤트를 가져와 콜백 함수를 실행한다.",
        isCorrect: false,
      },
      {
        text: "워커 스레드는 동기적인 작업을 처리한다.",
        isCorrect: true,
      },
      {
        text: "워커 스레드는 비동기 작업을 백그라운드에서 처리하고, 그 결과를 이벤트 큐에 넣는다.",
        isCorrect: false,
      },
    ],
    answer: "워커 스레드는 동기적인 작업을 처리한다.",
    explanation:
      "워커 스레드는 비동기 작업을 백그라운드에서 처리하는 역할을 합니다. 따라서 '워커 스레드는 동기적인 작업을 처리한다'는 설명은 올바르지 않습니다.",
    subject: "common",
    subSubject: "backend",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "non-blocking과 blocking I/O의 차이점에 대한 설명 중 올바르지 않은 것은 무엇인가?",
    code: "",
    answerOptions: [
      {
        text: "blocking I/O는 I/O 작업이 완료될 때까지 작업을 중단하고 대기한다.",
        isCorrect: false,
      },
      {
        text: "non-blocking I/O는 I/O 작업이 완료될 때까지 다른 작업을 계속 수행한다.",
        isCorrect: false,
      },
      {
        text: "blocking I/O는 동시성 처리에 비효율적이다.",
        isCorrect: false,
      },
      {
        text: "non-blocking I/O는 I/O 작업이 완료될 때까지 작업을 중단하고 대기한다.",
        isCorrect: true,
      },
    ],
    answer:
      "non-blocking I/O는 I/O 작업이 완료될 때까지 작업을 중단하고 대기한다.",
    explanation:
      "non-blocking I/O는 I/O 작업이 완료되지 않았을 때도 다른 작업을 계속 수행할 수 있습니다. 따라서 'non-blocking I/O는 I/O 작업이 완료될 때까지 작업을 중단하고 대기한다'는 설명은 올바르지 않습니다.",
    subject: "common",
    subSubject: "backend",
    quizType: "coding",
  },
];
