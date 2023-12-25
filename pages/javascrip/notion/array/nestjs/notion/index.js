// questions1.js
export const nestjsNotionNotion = [
  // 질문 데이터...

  {
    type: "multiple-choice",
    questionText: "다음 Node.js 코드를 실행하면 어떤 결과가 출력될까요?",
    code: `
    const http = require("http");
    
    const host = "localhost";
    const port = 3000;
    
    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Hello World</h1>");
    });
    
    server.listen(port, host, () => {
      console.log("server running on http://localhost:3000");
    });
    `,
    answerOptions: [
      {
        text: "서버가 실행되지 않는다.",
        isCorrect: false,
      },
      {
        text: "'server running on http://localhost:3000'이 콘솔에 출력된다.",
        isCorrect: true,
      },
      {
        text: "'Hello World'가 콘솔에 출력된다.",
        isCorrect: false,
      },
      {
        text: "서버에 오류가 발생한다.",
        isCorrect: false,
      },
    ],
    answer: "'server running on http://localhost:3000'이 콘솔에 출력된다.",
    explanation:
      "이 Node.js 코드는 HTTP 서버를 생성하고, localhost의 3000번 포트에서 서버를 실행합니다. 서버가 정상적으로 실행되면 'server running on http://localhost:3000'이 콘솔에 출력됩니다. 또한, 이 서버에 접속하면 'Hello World'라는 메시지가 웹 페이지에 표시됩니다.",
    subject: "Node.js",
    subSubject: "HTTP Server",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "Node.js에서 'res.writeHead 코드의 역할은 무엇인가요?",
    code: `
    const http = require("http");
    
    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Hello World</h1>");
    });
    `,
    answerOptions: [
      {
        text: "HTML 형식의 응답을 보내고 HTTP 상태 코드를 200으로 설정한다.",
        isCorrect: true,
      },
      {
        text: "HTML 형식의 요청을 받는다.",
        isCorrect: false,
      },
      {
        text: "서버를 종료한다.",
        isCorrect: false,
      },
      {
        text: "서버를 시작한다.",
        isCorrect: false,
      },
    ],
    answer: "HTML 형식의 응답을 보내고 HTTP 상태 코드를 200으로 설정한다.",
    explanation:
      "'res.writeHead()' 메서드는 HTTP 응답의 헤더를 설정하는 데 사용됩니다. 이 코드에서는 HTTP 상태 코드를 200으로 설정하고, 응답 헤더의 'Content-Type'을 'text/html'로 설정하여 HTML 형식의 응답을 보내는 것을 명시하고 있습니다.",
    subject: "Node.js",
    subSubject: "HTTP Server",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText: "Node.js에서 'res.end 코드의 역할은 무엇인가요?",
    code: `
    const http = require("http");
    
    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Hello World</h1>");
    });
    `,
    answerOptions: [
      {
        text: "서버에 'Hello World' 메시지를 출력한다.",
        isCorrect: false,
      },
      {
        text: "응답을 종료하고 'Hello World' 메시지를 클라이언트에게 보낸다.",
        isCorrect: true,
      },
      {
        text: "'Hello World' 메시지를 요청한다.",
        isCorrect: false,
      },
      {
        text: "서버를 종료한다.",
        isCorrect: false,
      },
    ],
    answer: "응답을 종료하고 'Hello World' 메시지를 클라이언트에게 보낸다.",
    explanation:
      "'res.end()' 메서드는 HTTP 응답을 종료하고 선택적으로 데이터를 클라이언트에게 보냅니다. 이 코드에서는 'Hello World'라는 메시지를 HTML 형식으로 클라이언트에게 보내고 있습니다.",
    subject: "Node.js",
    subSubject: "HTTP Server",
    quizType: "coding",
  },

  {
    type: "multiple-choice",
    questionText:
      "'server.listen(port, host, () => {console.log(\"server running on http://localhost:3000\");});' 코드의 역할은 무엇인가요?",
    code: `
      const http = require("http");
      
      const host = "localhost";
      const port = 3000;
      
      const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Hello World</h1>");
      });
      
      server.listen(port, host, () => {
        console.log("server running on http://localhost:3000");
      });
      `,
    answerOptions: [
      {
        text: "서버를 localhost의 3000번 포트에서 실행하고, 실행이 완료되면 메시지를 출력한다.",
        isCorrect: true,
      },
      {
        text: "서버를 종료한다.",
        isCorrect: false,
      },
      {
        text: "서버에 'server running on http://localhost:3000' 메시지를 출력한다.",
        isCorrect: false,
      },
      {
        text: "서버를 시작하지 않고 메시지를 출력한다.",
        isCorrect: false,
      },
    ],
    answer:
      "서버를 localhost의 3000번 포트에서 실행하고, 실행이 완료되면 메시지를 출력한다.",
    explanation:
      "'server.listen()' 메서드는 서버를 지정된 포트에서 시작합니다. 콜백 함수를 전달하면 서버 시작이 완료되면 실행됩니다. 이 코드에서는 서버가 localhost의 3000번 포트에서 시작되고, 시작이 완료되면 'server running on http://localhost:3000' 메시지가 콘솔에 출력됩니다.",
    subject: "Node.js",
    subSubject: "HTTP Server",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 Node.js 코드가 실행되었을 때, 'http://localhost:3000/user' 주소로 접속하면 어떤 결과가 나타날까요?",
    code: `
    const http = require("http");
    const url = require("url");
    
    const host = "localhost";
    const port = 3000;
    
    const server = http.createServer((req, res) => {
      const path = url.parse(req.url).pathname;
    
      if (path === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Home Page!</h1>");
      } else if (path === "/post") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Post Page!</h1>");
      } else if (path === "/user") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>User Page!</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 Page Not Found!</h1>");
      }
    });
    
    server.listen(port, host, () => {
      console.log("server running on http://localhost:3000");
    });
    `,
    answerOptions: [
      {
        text: "'Home Page!'라는 메시지가 표시된다.",
        isCorrect: false,
      },
      {
        text: "'Post Page!'라는 메시지가 표시된다.",
        isCorrect: false,
      },
      {
        text: "'User Page!'라는 메시지가 표시된다.",
        isCorrect: true,
      },
      {
        text: "'404 Page Not Found!'라는 메시지가 표시된다.",
        isCorrect: false,
      },
    ],
    answer: "'User Page!'라는 메시지가 표시된다.",
    explanation:
      "이 Node.js 서버는 요청 URL의 경로에 따라 다른 웹 페이지를 반환합니다. '/user' 경로로 요청이 들어오면, 서버는 HTTP 상태 코드 200과 함께 'User Page!'라는 메시지가 포함된 HTML 페이지를 반환합니다.",
    subject: "Node.js",
    subSubject: "HTTP Server",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "NestJS에서 서비스 계층과 컨트롤러 계층을 분리하여 구현할 때의 주된 장점은 무엇인가요? 아래의 코드 예시를 참고하여 선택하십시오.",
    code: `
      import { Controller, Get } from '@nestjs/common';
      import { CatsService } from './cats.service';
  
      @Controller('cats')
      export class CatsController {
        constructor(private catsService: CatsService) {}
  
        @Get()
        findAll() {
          return this.catsService.findAll();
        }
      }
  
      import { Injectable } from '@nestjs/common';
  
      @Injectable()
      export class CatsService {
        findAll() {
          return 'This action returns all cats';
        }
      }
    `,
    answerOptions: [
      {
        text: "HTTP 요청 처리와 비즈니스 로직이 혼재되어, 코드의 가독성이 향상됩니다.",
        isCorrect: false,
      },
      {
        text: "컨트롤러만으로 모든 비즈니스 로직을 처리할 수 있어, 서비스 계층의 필요성이 없어집니다.",
        isCorrect: false,
      },
      {
        text: "관심사의 분리(Separation of Concerns) 원칙에 따라, 각 계층이 자신의 역할에만 집중할 수 있게 하여 코드의 유지보수성이 향상됩니다.",
        isCorrect: true,
      },
      {
        text: "서비스와 컨트롤러의 분리는 코드의 복잡성을 증가시켜, 애플리케이션의 실행 속도를 느리게 합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "관심사의 분리(Separation of Concerns) 원칙에 따라, 각 계층이 자신의 역할에만 집중할 수 있게 하여 코드의 유지보수성이 향상됩니다.",
    explanation:
      "NestJS에서 서비스 계층과 컨트롤러 계층을 분리하는 구조는 관심사의 분리(Separation of Concerns) 원칙을 따릅니다. 이로 인해 서비스 계층은 데이터 관리와 비즈니스 로직에, 컨트롤러 계층은 라우팅과 요청/응답 처리에 집중할 수 있습니다. 이 분리는 코드의 유지보수성을 높이고, 각 부분이 더 명확하고 관리하기 쉬운 형태로 구성될 수 있도록 돕습니다. 또한, 테스트가 용이해지고, 기능 확장과 리팩토링이 간단해집니다.",
    subject: "nestjs",
    subSubject: "notion",
    quizType: "coding",
  },
];
