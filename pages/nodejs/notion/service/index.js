import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...

    {
      questionText:
        "Nest.js에서 `NotFoundException`은 언제 사용되는지 설명하세요.",
      code: `
      // 서비스 코드 예시
      getPostById(id: number) {
        const post = posts.find((post) => post.id === +id);
        if (!post) {
          throw new NotFoundException();
        }
        return post;
      }
      
      // 컨트롤러 코드 예시
      @Get(':id')
      getPost(@Param('id') id: string) {
        return this.postsService.getPostById(+id);
      }
      `,
      answerOptions: [
        "서버에서 요청한 리소스를 찾을 수 없을 때 사용한다.",
        "서버에서 에러가 발생했을 때 사용한다.",
        "서버에서 요청을 처리하는 도중 문제가 발생했을 때 사용한다.",
        "서버에서 데이터를 업데이트할 수 없을 때 사용한다.",
      ],
      answer: "서버에서 요청한 리소스를 찾을 수 없을 때 사용한다.",
      explanation:
        "`NotFoundException`은 Nest.js에서 요청한 리소스를 찾을 수 없을 때 발생하는 예외입니다. 이 예외는 주로 GET 요청에서 특정 id의 리소스를 찾을 수 없을 때 사용됩니다.",
      explanationCode: `
      // NotFoundException 사용 예시
      getPostById(id: number) {
        const post = posts.find((post) => post.id === +id);
        if (!post) {
          throw new NotFoundException();
        }
        return post;
      }
      `,
    },
    {
      questionText: "Nest.js에서 `Body` 데코레이터의 역할에 대해 설명하세요.",
      code: `
      // 컨트롤러 코드 예시
      @Post()
      postPosts(
        @Body('author') author: string,
        @Body('title') title: string,
        @Body('content') content: string,
      ) {
        return this.postsService.createPost(author, title, content);
      }
      `,
      answerOptions: [
        "`Body` 데코레이터는 HTTP 요청 본문에서 특정 속성을 추출한다.",
        "`Body` 데코레이터는 HTTP 요청 헤더에서 특정 속성을 추출한다.",
        "`Body` 데코레이터는 HTTP 요청 URL에서 특정 파라미터를 추출한다.",
        "`Body` 데코레이터는 HTTP 요청 쿠키에서 특정 속성을 추출한다.",
      ],
      answer: "`Body` 데코레이터는 HTTP 요청 본문에서 특정 속성을 추출한다.",
      explanation:
        "`Body` 데코레이터는 HTTP 요청 본문에서 특정 속성을 추출하는 데 사용됩니다. 이 데코레이터는 주로 POST 또는 PUT 요청에서 사용되며, 클라이언트로부터 전송받은 데이터를 사용하여 리소스를 생성하거나 업데이트하는 데 사용됩니다.",
      explanationCode: `
      // Body 데코레이터 사용 예시
      @Post()
      postPosts(
        @Body('author') author: string,
        @Body('title') title: string,
        @Body('content') content: string,
      ) {
        return this.postsService.createPost(author, title, content);
      }
      `,
    },
    {
      questionText:
        "Nest.js에서 `@Injectable()` 데코레이터의 역할은 무엇인가요?",
      code: `
      @Injectable()
      export class PostsService {
        // ...
      }
      `,
      answerOptions: [
        "`@Injectable()` 데코레이터는 클래스를 서비스로 표시하고, 이를 Nest.js의 의존성 주입 시스템에 등록한다.",
        "`@Injectable()` 데코레이터는 클래스를 컴포넌트로 표시하고, 이를 Nest.js의 라우팅 시스템에 등록한다.",
        "`@Injectable()` 데코레이터는 클래스를 모듈로 표시하고, 이를 Nest.js의 모듈 시스템에 등록한다.",
        "`@Injectable()` 데코레이터는 클래스를 컨트롤러로 표시하고, 이를 Nest.js의 라우팅 시스템에 등록한다.",
      ],
      answer:
        "`@Injectable()` 데코레이터는 클래스를 서비스로 표시하고, 이를 Nest.js의 의존성 주입 시스템에 등록한다.",
      explanation:
        "`@Injectable()` 데코레이터는 클래스를 서비스로 표시하고, 이를 Nest.js의 의존성 주입 시스템에 등록합니다. 이 서비스는 어플리케이션의 어느 곳에서나 재사용 가능하며, 다른 컨트롤러나 서비스에 주입될 수 있습니다.",
      explanationCode: `
      // @Injectable() 데코레이터 사용 예시
      @Injectable()
      export class PostsService {
        // ...
      }
      `,
    },
    {
      questionText:
        "Nest.js에서 `@Controller()` 데코레이터의 역할은 무엇인가요?",
      code: `
      @Controller('posts')
      export class PostsController {
        // ...
      }
      `,
      answerOptions: [
        "`@Controller()` 데코레이터는 클래스를 서비스로 표시하고, 이를 Nest.js의 의존성 주입 시스템에 등록한다.",
        "`@Controller()` 데코레이터는 클래스를 컴포넌트로 표시하고, 이를 Nest.js의 라우팅 시스템에 등록한다.",
        "`@Controller()` 데코레이터는 클래스를 모듈로 표시하고, 이를 Nest.js의 모듈 시스템에 등록한다.",
        "`@Controller()` 데코레이터는 클래스를 컨트롤러로 표시하고, 이를 Nest.js의 라우팅 시스템에 등록한다.",
      ],
      answer:
        "`@Controller()` 데코레이터는 클래스를 컨트롤러로 표시하고, 이를 Nest.js의 라우팅 시스템에 등록한다.",
      explanation:
        "`@Controller()` 데코레이터는 클래스를 컨트롤러로 표시하고, 이를 Nest.js의 라우팅 시스템에 등록합니다. 컨트롤러는 특정 URL 경로에 대한 클라이언트의 요청을 처리하고, 적절한 응답을 반환하는 역할을 합니다.",
      explanationCode: `
      // @Controller() 데코레이터 사용 예시
      @Controller('posts')
      export class PostsController {
        // ...
      }
      `,
    },
    {
      questionText: "Nest.js에서 `@Param()` 데코레이터의 역할은 무엇인가요?",
      code: `
      @Get(':id')
      getPost(@Param('id') id: string) {
        return this.postsService.getPostById(+id);
      }
      `,
      answerOptions: [
        "`@Param()` 데코레이터는 HTTP 요청 본문에서 특정 속성을 추출한다.",
        "`@Param()` 데코레이터는 HTTP 요청 헤더에서 특정 속성을 추출한다.",
        "`@Param()` 데코레이터는 HTTP 요청 URL에서 특정 파라미터를 추출한다.",
        "`@Param()` 데코레이터는 HTTP 요청 쿠키에서 특정 속성을 추출한다.",
      ],
      answer:
        "`@Param()` 데코레이터는 HTTP 요청 URL에서 특정 파라미터를 추출한다.",
      explanation:
        "`@Param()` 데코레이터는 HTTP 요청 URL에서 특정 파라미터를 추출하는 역할을 합니다. 이 데코레이터는 주로 라우트 파라미터 값을 처리할 때 사용됩니다.",
      explanationCode: `
      // @Param() 데코레이터 사용 예시
      @Get(':id')
      getPost(@Param('id') id: string) {
        return this.postsService.getPostById(+id);
      }
      `,
    },
    {
      questionText: "Nest.js에서 `@Get()` 데코레이터의 역할은 무엇인가요?",
      code: `
      @Get()
      getPosts() {
        return this.postsService.getAllPost();
      }
      `,
      answerOptions: [
        "`@Get()` 데코레이터는 HTTP GET 요청을 처리하는 메소드를 정의한다.",
        "`@Get()` 데코레이터는 HTTP POST 요청을 처리하는 메소드를 정의한다.",
        "`@Get()` 데코레이터는 HTTP PUT 요청을 처리하는 메소드를 정의한다.",
        "`@Get()` 데코레이터는 HTTP DELETE 요청을 처리하는 메소드를 정의한다.",
      ],
      answer:
        "`@Get()` 데코레이터는 HTTP GET 요청을 처리하는 메소드를 정의한다.",
      explanation:
        "`@Get()` 데코레이터는 HTTP GET 요청을 처리하는 메소드를 정의하는 역할을 합니다. 클라이언트로부터 GET 요청을 받으면 이 데코레이터가 달려있는 메소드가 실행됩니다.",
      explanationCode: `
      // @Get() 데코레이터 사용 예시
      @Get()
      getPosts() {
        return this.postsService.getAllPost();
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
