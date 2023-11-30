import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "일반 인스턴스화와 디펜던시 인젝션의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "객체 생성 위치의 차이",
        "클래스 의존성의 관리 방법의 차이",
        "실행 시점의 차이",
        "모두 맞다",
      ],
      answer: "클래스 의존성의 관리 방법의 차이",
      explanation:
        "일반 인스턴스화는 개발자가 직접 객체를 생성하고 관리하며, 디펜던시 인젝션은 외부에서 의존성을 주입받아 사용합니다. 이로 인해 의존성 관리가 수월해지고 코드의 유연성이 향상됩니다.",
      explanationCode: "",
    },

    {
      questionText:
        "인버전 오브 컨트롤(IoC)의 개념에 대한 설명으로 가장 적절한 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "객체의 생성과 생명주기를 개발자가 직접 관리하는 것",
        "객체의 생성과 생명주기를 프레임워크나 컨테이너가 관리하는 것",
        "개발자가 모든 코드를 직접 작성하는 것",
        "모든 코드를 자동으로 생성하는 것",
      ],
      answer: "객체의 생성과 생명주기를 프레임워크나 컨테이너가 관리하는 것",
      explanation:
        "인버전 오브 컨트롤(IoC)은 개발자가 직접 제어하던 프로그램의 흐름을 외부의 프레임워크나 컨테이너가 대신 제어하는 디자인 패턴입니다.",
      explanationCode: "",
    },

    {
      questionText:
        "NestJS에서 인버전 오브 컨트롤과 디펜던시 인젝션의 관계에 대한 설명으로 가장 적절한 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "NestJS에서는 IoC 패턴을 기반으로 디펜던시 인젝션을 지원한다",
        "NestJS에서는 디펜던시 인젝션을 통해 IoC 패턴을 구현한다",
        "NestJS에서는 IoC 패턴과 디펜던시 인젝션을 별개로 취급한다",
        "NestJS에서는 디펜던시 인젝션을 지원하지 않는다",
      ],
      answer: "NestJS에서는 IoC 패턴을 기반으로 디펜던시 인젝션을 지원한다",
      explanation:
        "NestJS는 IoC 패턴을 기반으로 하며, 이를 통해 디펜던시 인젝션을 지원합니다. 이로 인해 개발자는 코드의 재사용성, 테스트 용이성, 결합도 감소 등의 이점을 누릴 수 있습니다.",
      explanationCode: "",
    },

    {
      questionText: "NestJS에서 프로바이더란 무엇인가요?",
      code: "",
      answerOptions: [
        "의존성을 주입할 수 있는 모든 것",
        "서비스 클래스를 제공하는 것",
        "모듈을 제공하는 것",
        "컨트롤러를 제공하는 것",
      ],
      answer: "의존성을 주입할 수 있는 모든 것",
      explanation:
        "NestJS에서 프로바이더는 의존성을 주입할 수 있는 모든 것을 의미합니다. 프로바이더는 주로 서비스 클래스를 제공하지만, 값, 팩토리, 비동기 팩토리 등 다양한 형태를 가질 수 있습니다.",
      explanationCode: `
        @Injectable()
        class MyService {
          constructor(private readonly otherService: OtherService) {}
        }
      `,
    },
    {
      questionText: "Nest.js에서 컨트롤러는 어떤 역할을 하는지 설명하시오.",
      code: `
    @Controller('posts')
    export class PostsController {
      constructor(private readonly postsService: PostsService) {}
    
      @Get()
      getPosts() {
        return this.postsService.getAllPost();
      }
    }
      `,
      answerOptions: [
        "컨트롤러는 클라이언트의 요청을 처리하고 응답을 반환하는 역할을 한다.",
        "컨트롤러는 데이터베이스와의 연결을 관리하는 역할을 한다.",
        "컨트롤러는 서버의 상태를 모니터링하는 역할을 한다.",
        "컨트롤러는 서버의 설정을 관리하는 역할을 한다.",
      ],
      answer:
        "컨트롤러는 클라이언트의 요청을 처리하고 응답을 반환하는 역할을 한다.",
      explanation:
        "Nest.js에서 컨트롤러는 클라이언트의 요청을 처리하고 응답을 반환하는 역할을 합니다. 컨트롤러는 라우팅 메커니즘을 통해 특정 엔드포인트에 매핑되며, 해당 엔드포인트에 대한 HTTP 요청이 들어오면 관련 로직을 실행합니다.",
    },
    {
      questionText: "Nest.js에서 서비스는 어떤 역할을 하는지 설명하시오.",
      code: `
    @Injectable()
    export class PostsService {
      getAllPost() {
        return posts;
      }
    }
      `,
      answerOptions: [
        "서비스는 비즈니스 로직을 수행하는 역할을 한다.",
        "서비스는 클라이언트의 요청을 처리하고 응답을 반환하는 역할을 한다.",
        "서비스는 데이터베이스와의 연결을 관리하는 역할을 한다.",
        "서비스는 서버의 상태를 모니터링하는 역할을 한다.",
      ],
      answer: "서비스는 비즈니스 로직을 수행하는 역할을 한다.",
      explanation:
        "Nest.js에서 서비스는 비즈니스 로직을 수행하는 역할을 합니다. 서비스는 데이터베이스에서 데이터를 가져오거나, 데이터를 변형하거나, 다른 서비스로 데이터를 전달하는 등의 작업을 수행합니다. 컨트롤러는 서비스를 통해 이러한 작업을 수행하게 됩니다.",
    },
    {
      questionText: "Nest.js에서 모듈은 어떤 역할을 하는지 설명하시오.",
      code: `
    @Module({
      controllers: [PostsController],
      providers: [PostsService],
    })
    export class PostsModule {}
      `,
      answerOptions: [
        "모듈은 관련된 컨트롤러와 서비스를 그룹화하는 역할을 한다.",
        "모듈은 클라이언트의 요청을 처리하고 응답을 반환하는 역할을 한다.",
        "모듈은 데이터베이스와의 연결을 관리하는 역할을 한다.",
        "모듈은 서버의 상태를 모니터링하는 역할을 한다.",
      ],
      answer: "모듈은 관련된 컨트롤러와 서비스를 그룹화하는 역할을 한다.",
      explanation:
        "Nest.js에서 모듈은 관련된 컨트롤러와 서비스를 그룹화하여 코드를 구조화하는 역할을 합니다. 모듈은 애플리케이션의 특정 부분을 나타내며, 각 모듈은 애플리케이션의 다른 부분과 독립적으로 동작할 수 있습니다.",
    },
    {
      questionText: "Nest.js에서 데코레이터의 역할은 무엇인지 설명하시오.",
      code: `
    @Controller('posts')
    export class PostsController {
      constructor(private readonly postsService: PostsService) {}
    
      @Get()
      getPosts() {
        return this.postsService.getAllPost();
      }
    }
      `,
      answerOptions: [
        "데코레이터는 클래스, 메서드, 속성, 매개변수에 메타데이터를 추가하거나 수정하는 데 사용된다.",
        "데코레이터는 비즈니스 로직을 수행하는 역할을 한다.",
        "데코레이터는 클라이언트의 요청을 처리하고 응답을 반환하는 역할을 한다.",
        "데코레이터는 데이터베이스와의 연결을 관리하는 역할을 한다.",
      ],
      answer:
        "데코레이터는 클래스, 메서드, 속성, 매개변수에 메타데이터를 추가하거나 수정하는 데 사용된다.",
      explanation:
        "Nest.js에서 데코레이터는 클래스, 메서드, 속성, 매개변수에 메타데이터를 추가하거나 수정하는 데 사용됩니다. 예를 들어, `@Controller()` 데코레이터는 해당 클래스가 컨트롤러임을 나타내며, `@Get()` 데코레이터는 해당 메서드가 GET 요청을 처리함을 나타냅니다.",
    },
    {
      questionText: "`NotFoundException`은 어떤 경우에 사용하는지 설명하시오.",
      code: `
    getPostById(id: number) {
      const post = posts.find((post) => post.id === +id);
    
      if (!post) {
        throw new NotFoundException();
      }
      return post;
    }
      `,
      answerOptions: [
        "`NotFoundException`은 원하는 리소스를 찾을 수 없을 때 사용한다.",
        "`NotFoundException`은 서버 내부 오류가 발생했을 때 사용한다.",
        "`NotFoundException`은 클라이언트의 요청이 잘못되었을 때 사용한다.",
        "`NotFoundException`은 서버가 요청을 처리하는 데 필요한 자원이 부족할 때 사용한다.",
      ],
      answer: "`NotFoundException`은 원하는 리소스를 찾을 수 없을 때 사용한다.",
      explanation:
        "`NotFoundException`은 Nest.js에서 원하는 리소스를 찾을 수 없을 때 발생하는 예외입니다. 주로 특정 ID로 데이터를 조회할 때 해당 ID의 데이터가 없는 경우에 이 예외를 발생시킵니다.",
    },
    {
      questionText:
        "Nest.js에서 `@Body()` 데코레이터의 역할은 무엇인지 설명하시오.",
      code: `
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
        "`@Body()` 데코레이터는 HTTP 요청 본문에서 특정 속성을 가져오는 데 사용된다.",
        "`@Body()` 데코레이터는 HTTP 요청 헤더에서 특정 속성을 가져오는 데 사용된다.",
        "`@Body()` 데코레이터는 HTTP 요청의 쿼리 파라미터에서 특정 속성을 가져오는 데 사용된다.",
        "`@Body()` 데코레이터는 HTTP 요청의 경로 파라미터에서 특정 속성을 가져오는 데 사용된다.",
      ],
      answer:
        "`@Body()` 데코레이터는 HTTP 요청 본문에서 특정 속성을 가져오는 데 사용된다.",
      explanation:
        "Nest.js에서 `@Body()` 데코레이터는 HTTP 요청 본문에서 특정 속성을 가져오는 데 사용됩니다. 주로 POST나 PUT 요청에서 클라이언트가 서버로 보낸 데이터를 처리하는 데 사용됩니다.",
    },
    {
      questionText: "Nest.js 애플리케이션의 실행 흐름에 대해 설명하시오.",
      code: `
    // app.module.ts
    @Module({
      imports: [PostsModule],
      controllers: [AppController],
      providers: [AppService],
    })
    export class AppModule {}
    
    // posts.module.ts
    @Module({
      controllers: [PostsController],
      providers: [PostsService],
    })
    export class PostsModule {}
    
    // posts.controller.ts
    @Controller('posts')
    export class PostsController {
      constructor(private readonly postsService: PostsService) {}
    
      @Get()
      getPosts() {
        return this.postsService.getAllPost();
      }
    }
    
    // posts.service.ts
    @Injectable()
    export class PostsService {
      getAllPost() {
        return posts;
      }
    }
      `,
      answerOptions: [
        "1) 애플리케이션 시작 -> 2) AppModule 로드 -> 3) PostsModule 로드 -> 4) PostsController 로드 -> 5) PostsService 로드 -> 6) `GET /posts` 요청 처리",
        "1) 애플리케이션 시작 -> 2) PostsModule 로드 -> 3) PostsController 로드 -> 4) PostsService 로드 -> 5) AppModule 로드 -> 6) `GET /posts` 요청 처리",
        "1) 애플리케이션 시작 -> 2) PostsController 로드 -> 3) PostsService 로드 -> 4) PostsModule 로드 -> 5) AppModule 로드 -> 6) `GET /posts` 요청 처리",
        "1) 애플리케이션 시작 -> 2) PostsService 로드 -> 3) PostsController 로드 -> 4) PostsModule 로드 -> 5) AppModule 로드 -> 6) `GET /posts` 요청 처리",
      ],
      answer:
        "1) 애플리케이션 시작 -> 2) AppModule 로드 -> 3) PostsModule 로드 -> 4) PostsController 로드 -> 5) PostsService 로드 -> 6) `GET /posts` 요청 처리",
      explanation:
        "Nest.js 애플리케이션의 실행 흐름은 다음과 같습니다: 1) 애플리케이션을 시작하면 가장 먼저 AppModule이 로드됩니다. 2) AppModule 내에서 import된 모듈인 PostsModule이 로드됩니다. 3) PostsModule에 등록된 PostsController가 로드되고, 이 컨트롤러의 생성자에서 PostsService가 주입됩니다. 4) 클라이언트가 `GET /posts` 요청을 보내면, PostsController의 `getPosts()` 메서드가 호출되고, 이 메서드 내에서 PostsService의 `getAllPost()` 메서드가 호출되어 요청을 처리합니다.",
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
    const formattedUserAnswer = userAnswer.replace(/\s/g, "").toLowerCase();
    const formattedCorrectAnswer = questions[currentQuestion].answer
      .replace(/\s/g, "")
      .toLowerCase();

    setIsCorrect(formattedUserAnswer === formattedCorrectAnswer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
  };

  return (
    <Wrapper>
      {questions.length > 0 ? (
        <>
          <Section>
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </Section>

          {isSubmitted && (
            <Section>
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <pre>{questions[currentQuestion].explanationCode}</pre>
              {currentQuestion < questions.length - 1 && (
                <Button onClick={handleNext}>다음 문제</Button>
              )}
            </Section>
          )}

          <Section>
            <h2>선택지</h2>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <Button onClick={handleSubmit}>제출</Button>
          </Section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};
export default Quiz;
