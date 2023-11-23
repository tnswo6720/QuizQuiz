import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "Nest.js에서 컨트롤러를 생성하는 데코레이터는 무엇인가요?",
      code: "",
      answerOptions: ["@Controller", "@Component", "@Injectable", "@Module"],
      answer: "@Controller",
      explanation:
        "Nest.js에서는 @Controller 데코레이터를 사용하여 컨트롤러를 생성합니다. 컨트롤러는 클라이언트의 요청을 처리하고 응답을 반환하는 역할을 합니다.",
      explanationCode: `
        import { Controller, Get } from '@nestjs/common';
    
        @Controller('posts')
        export class PostsController {
          @Get()
          getPosts() {
            // ...
          }
        }
      `,
    },
    {
      questionText:
        "Nest.js에서 HTTP GET 요청을 처리하는 데코레이터는 무엇인가요?",
      code: "",
      answerOptions: ["@Get", "@Post", "@Put", "@Delete"],
      answer: "@Get",
      explanation:
        "Nest.js에서는 @Get 데코레이터를 사용하여 HTTP GET 요청을 처리합니다. 이 데코레이터는 메서드 레벨에서 사용되며, 해당 메서드는 GET 요청을 처리하는 로직을 구현합니다.",
      explanationCode: `
        import { Controller, Get } from '@nestjs/common';
    
        @Controller('posts')
        export class PostsController {
          @Get()
          getPosts() {
            // GET 요청을 처리하는 로직
          }
        }
      `,
    },
    {
      questionText: "Nest.js CLI에서 리소스를 생성하는 명령어는 무엇인가요?",
      code: "",
      answerOptions: [
        "nest g resource",
        "nest create resource",
        "nest new resource",
        "nest generate resource",
      ],
      answer: "nest g resource",
      explanation:
        "Nest.js CLI에서는 'nest g resource' 명령어를 사용하여 새로운 리소스를 생성합니다. 이 명령어는 컨트롤러, 서비스, 모듈 등의 기본 구조를 자동으로 생성해 줍니다.",
      explanationCode: `
        // 리소스를 생성하는 명령어
        nest g resource posts
      `,
    },

    {
      questionText: "Nest.js에서 @Controller 데코레이터의 역할은 무엇인가요?",
      code: `
        @Controller('posts')
        export class PostsController {
          constructor(private readonly postsService: PostsService) {}
    
          @Get()
          getPost(): Post {
            // ...
          }
        }
      `,
      answerOptions: [
        "클라이언트의 요청을 처리하고 응답을 반환하는 컨트롤러를 정의하는 데 사용됩니다.",
        "데이터베이스와 상호작용하는 서비스를 정의하는 데 사용됩니다.",
        "애플리케이션의 구조를 정의하는 모듈을 정의하는 데 사용됩니다.",
        "의존성 주입을 가능하게 하는 데 사용됩니다.",
      ],
      answer:
        "클라이언트의 요청을 처리하고 응답을 반환하는 컨트롤러를 정의하는 데 사용됩니다.",
      explanation:
        "@Controller 데코레이터는 클래스를 Nest.js 컨트롤러로 선언합니다. 이 컨트롤러는 클라이언트의 요청을 처리하고 응답을 반환하는 역할을 합니다.",
      explanationCode: `
        @Controller('posts')
        export class PostsController {
          constructor(private readonly postsService: PostsService) {}
    
          @Get()
          getPost(): Post {
            // ...
          }
        }
      `,
    },
    {
      questionText: "@Get 데코레이터의 역할은 무엇인가요?",
      code: `
        @Controller('posts')
        export class PostsController {
          constructor(private readonly postsService: PostsService) {}
    
          @Get()
          getPost(): Post {
            // ...
          }
        }
      `,
      answerOptions: [
        "HTTP GET 요청을 처리하는 메서드를 정의하는 데 사용됩니다.",
        "HTTP POST 요청을 처리하는 메서드를 정의하는 데 사용됩니다.",
        "HTTP PUT 요청을 처리하는 메서드를 정의하는 데 사용됩니다.",
        "HTTP DELETE 요청을 처리하는 메서드를 정의하는 데 사용됩니다.",
      ],
      answer: "HTTP GET 요청을 처리하는 메서드를 정의하는 데 사용됩니다.",
      explanation:
        "@Get 데코레이터는 HTTP GET 요청을 처리하는 메서드를 정의하는 데 사용됩니다. 이 데코레이터가 붙은 메서드는 클라이언트가 해당 경로로 GET 요청을 보내면 실행됩니다.",
      explanationCode: `
        @Controller('posts')
        export class PostsController {
          constructor(private readonly postsService: PostsService) {}
    
          @Get()
          getPost(): Post {
            // ...
          }
        }
      `,
    },
    {
      questionText:
        "Nest.js에서 컨트롤러와 서비스 사이의 관계를 어떻게 설정하는지 설명하세요.",
      code: `
        @Controller('posts')
        export class PostsController {
          constructor(private readonly postsService: PostsService) {}
    
          @Get()
          getPost(): Post {
            // ...
          }
        }
      `,
      answerOptions: [
        "컨트롤러는 서비스를 직접 호출하여 데이터를 가져오고 처리합니다.",
        "컨트롤러는 서비스를 생성하고, 서비스가 데이터를 가져오고 처리하도록 합니다.",
        "컨트롤러는 서비스를 생성하지 않고, 서비스가 데이터를 가져오고 처리하도록 합니다.",
        "컨트롤러는 서비스를 생성하고, 서비스는 컨트롤러에게 데이터를 보내줍니다.",
      ],
      answer: "컨트롤러는 서비스를 직접 호출하여 데이터를 가져오고 처리합니다.",
      explanation:
        "Nest.js에서 컨트롤러는 주로 라우팅과 요청/응답 객체를 처리하는 역할을 하며, 실제 비즈니스 로직은 서비스에서 처리합니다. 컨트롤러는 생성자를 통해 서비스를 주입받아 서비스의 메서드를 호출하여 데이터를 가져오고 처리할 수 있습니다.",
      explanationCode: `
        @Controller('posts')
        export class PostsController {
          constructor(private readonly postsService: PostsService) {}
    
          @Get()
          getPost(): Post {
            return this.postsService.getPost();
          }
        }
      `,
    },
    {
      questionText:
        "React에서 백엔드 서버로부터 데이터를 요청하기 위해 어떤 패키지를 사용할 수 있을까요?",
      code: "",
      answerOptions: ["axios", "express", "mongoose", "bcrypt"],
      answer: "axios",
      explanation:
        "React에서 백엔드 서버로부터 데이터를 요청하기 위해 axios 패키지를 사용할 수 있습니다. axios는 Promise를 기반으로 하는 HTTP 클라이언트 라이브러리로, 브라우저와 Node.js에서 모두 사용할 수 있습니다.",
      explanationCode: `
        import axios from 'axios';
      
        axios.get('/posts')
          .then(response => {
            console.log(response.data);
          });
      `,
    },
    {
      questionText:
        "React에서 useEffect 훅을 사용하여 백엔드 서버로부터 데이터를 요청하는 방법은 무엇일까요?",
      code: "",
      answerOptions: [
        "useEffect 함수 내부에서 데이터를 요청한다.",
        "useEffect 함수 외부에서 데이터를 요청한다.",
        "useEffect 함수를 사용하지 않고 데이터를 요청한다.",
        "useEffect 함수의 의존성 배열에 데이터를 요청하는 함수를 넣는다.",
      ],
      answer: "useEffect 함수 내부에서 데이터를 요청한다.",
      explanation:
        "React에서 useEffect 훅을 사용하여 백엔드 서버로부터 데이터를 요청하는 방법은 useEffect 함수 내부에서 데이터를 요청하는 것입니다. 이렇게 하면 컴포넌트가 마운트되거나 업데이트될 때마다 데이터를 요청할 수 있습니다.",
      explanationCode: `
        import React, { useEffect } from 'react';
        import axios from 'axios';
      
        function Component() {
          useEffect(() => {
            axios.get('/posts')
              .then(response => {
                console.log(response.data);
              });
          }, []);
      
          return <div>Component</div>;
        }
      `,
    },
    {
      questionText: "다음 Nest.js 코드의 기능은 무엇인가요?",
      code: `
        @Get(':id')
        getPost(@Param('id') id: string) {
          return posts.find((post) => post.id === +id);
        }
      `,
      answerOptions: [
        "id값을 통해 특정 post를 삭제한다.",
        "id값을 통해 특정 post를 수정한다.",
        "id값을 통해 특정 post를 가져온다.",
        "id값을 통해 특정 post를 생성한다.",
      ],
      answer: "id값을 통해 특정 post를 가져온다.",
      explanation:
        "위 코드는 '@Get' 데코레이터와 함께 사용된 'getPost' 메소드를 정의하고 있습니다. 이 메소드는 URL의 'id' 파라미터를 받아, 이 id에 해당하는 post를 찾아 반환합니다. 여기서 '+id'는 문자열 id를 숫자로 변환한 것입니다. 따라서 이 코드는 id값을 통해 특정 post를 가져오는 기능을 수행합니다.",
      explanationCode: `
        @Get(':id')
        getPost(@Param('id') id: string) {
          return posts.find((post) => post.id === +id); // id에 해당하는 post를 반환
        }
      `,
    },

    // 추가 문제를 넣을 수 있습니다.
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(initialQuestions).map(
      (question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      })
    );
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleSubmit = () => {
    setIsCorrect(userAnswer === questions[currentQuestion].answer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
  };

  return (
    <div className="app">
      {questions.length > 0 ? (
        <>
          <div className="question-section">
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </div>

          <div className="answer-section">
            <h2>선택지</h2>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>제출</button>
          </div>
          {isSubmitted && (
            <div className="explanation-section">
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <pre>{questions[currentQuestion].explanationCode}</pre>{" "}
              {/* 설명에 대한 예시 코드를 보여줍니다. */}
              {currentQuestion < questions.length - 1 && (
                <button onClick={handleNext}>다음 문제</button>
              )}
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;
