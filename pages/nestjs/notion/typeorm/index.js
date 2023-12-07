import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "TypeORM은 무엇인가요?",
      answerOptions: [
        "TypeScript로 작성된 객체 관계형 매핑 라이브러리",
        "JavaScript로 작성된 객체 관계형 매핑 라이브러리",
        "Python으로 작성된 객체 관계형 매핑 라이브러리",
        "Java로 작성된 객체 관계형 매핑 라이브러리",
      ],
      answer: "TypeScript로 작성된 객체 관계형 매핑 라이브러리",
      explanation:
        "TypeORM은 TypeScript로 작성된 객체 관계형 매핑 라이브러리입니다. Node.js에서 동작하며, 데이터베이스의 테이블을 JavaScript 또는 TypeScript 객체로 매핑해주고, 이를 통해 데이터베이스 작업을 수행할 수 있게 도와줍니다.",
    },

    {
      questionText:
        "아래의 Nest.js 코드에서 TypeOrmModule.forRoot 메서드에 전달된 객체의 'type' 속성은 무엇을 의미하는가요?",
      code: `
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: '127.0.0.1',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'postgres',
          entities: [],
          synchronize: true,
        }),
      `,
      answerOptions: [
        "데이터베이스의 유형",
        "엔티티의 유형",
        "데이터베이스의 이름",
        "데이터베이스 연결의 이름",
      ],
      answer: "데이터베이스의 유형",
      explanation:
        "'type' 속성은 사용할 데이터베이스의 유형을 나타냅니다. 여기서는 'postgres'로 설정되어 있어 PostgreSQL 데이터베이스를 사용하도록 설정되어 있습니다.",
      explanationCode: `
        TypeOrmModule.forRoot({
          type: 'postgres',
          // ...
        }),
      `,
    },
    {
      questionText:
        "아래의 Nest.js 코드에서 TypeOrmModule.forRoot 메서드에 전달된 객체의 'synchronize' 속성은 어떤 역할을 하는가요?",
      code: `
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: '127.0.0.1',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'postgres',
          entities: [],
          synchronize: true,
        }),
      `,
      answerOptions: [
        "데이터베이스 연결을 동기화하는 역할",
        "엔티티 클래스와 데이터베이스 스키마를 동기화하는 역할",
        "데이터베이스 트랜잭션을 동기화하는 역할",
        "데이터베이스와 애플리케이션 사이의 데이터를 동기화하는 역할",
      ],
      answer: "엔티티 클래스와 데이터베이스 스키마를 동기화하는 역할",
      explanation:
        "'synchronize' 속성은 엔티티 클래스와 데이터베이스 스키마를 동기화하는 역할을 합니다. 이 속성이 true로 설정되면, 애플리케이션이 시작될 때 TypeORM은 자동으로 데이터베이스 스키마를 생성하거나 업데이트합니다.",
      explanationCode: `
        TypeOrmModule.forRoot({
          // ...
          synchronize: true,
        }),
      `,
    },
    {
      questionText:
        "아래의 Nest.js 코드에서 TypeOrmModule.forRoot 메서드에 전달된 객체의 'host' 속성은 어떤 역할을 하는가요?",
      code: `
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: '127.0.0.1',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'postgres',
          entities: [],
          synchronize: true,
        }),
      `,
      answerOptions: [
        "데이터베이스 서버의 IP 주소 또는 도메인 이름을 지정하는 역할",
        "데이터베이스 서버의 호스트 이름을 지정하는 역할",
        "데이터베이스 서버의 위치를 지정하는 역할",
        "데이터베이스 서버의 환경을 지정하는 역할",
      ],
      answer: "데이터베이스 서버의 IP 주소 또는 도메인 이름을 지정하는 역할",
      explanation:
        "'host' 속성은 데이터베이스 서버의 IP 주소 또는 도메인 이름을 지정하는 역할을 합니다. 여기서는 '127.0.0.1'로 설정되어 있어, 로컬 호스트에서 실행되는 데이터베이스 서버에 연결하도록 설정되어 있습니다.",
      explanationCode: `
        TypeOrmModule.forRoot({
          // ...
          host: '127.0.0.1',
          // ...
        }),
      `,
    },
    {
      questionText:
        "Nest.js 코드에서 TypeOrmModule.forRoot 메서드에 전달된 객체의 'entities' 속성이 비어있을 때 어떤 문제가 발생할 수 있을까요?",
      code: `
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: '127.0.0.1',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'postgres',
          entities: [],
          synchronize: true,
        }),
      `,
      answerOptions: [
        "데이터베이스와의 연결이 실패할 수 있다",
        "데이터베이스 스키마가 생성되지 않을 수 있다",
        "데이터베이스에 데이터를 저장할 수 없다",
        "모든 엔티티가 데이터베이스에 자동으로 추가된다",
      ],
      answer: "데이터베이스 스키마가 생성되지 않을 수 있다",
      explanation:
        "'entities' 속성은 데이터베이스와 연결할 때 사용할 엔티티 클래스를 정의하는 배열입니다. 이 배열이 비어 있으면, TypeORM은 어떤 엔티티를 데이터베이스와 매핑해야 할지 알 수 없으므로, 데이터베이스 스키마가 제대로 생성되지 않을 수 있습니다.",
      explanationCode: `
        TypeOrmModule.forRoot({
          // ...
          entities: [],
          // ...
        }),
      `,
    },
    {
      questionText: "@Entity() 데코레이터는 어떤 역할을 하는가요?",
      code: `
        @Entity()
        export class PostsModel {
          // ...
        }
      `,
      answerOptions: [
        "테이블과 매핑할 클래스를 정의하는 역할",
        "데이터베이스와의 연결을 설정하는 역할",
        "데이터베이스의 스키마를 정의하는 역할",
        "데이터베이스의 데이터를 조회하는 역할",
      ],
      answer: "테이블과 매핑할 클래스를 정의하는 역할",
      explanation:
        "@Entity() 데코레이터는 테이블과 매핑할 클래스를 정의하는 역할을 합니다. 이 데코레이터를 사용하여 정의된 클래스는 TypeORM에서 엔티티 클래스라고 부르며, 각 엔티티 인스턴스는 테이블의 한 행을 나타냅니다.",
      explanationCode: `
        @Entity()
        export class PostsModel {
          // ...
        }
      `,
    },
    {
      questionText: "@Column() 데코레이터는 어떤 역할을 하는가요?",
      code: `
        @Entity()
        export class PostsModel {
          // ...
          
          @Column()
          title: string;
          
          // ...
        }
      `,
      answerOptions: [
        "테이블의 열과 매핑할 속성을 정의하는 역할",
        "데이터베이스와의 연결을 설정하는 역할",
        "데이터베이스의 스키마를 정의하는 역할",
        "데이터베이스의 데이터를 조회하는 역할",
      ],
      answer: "테이블의 열과 매핑할 속성을 정의하는 역할",
      explanation:
        "@Column() 데코레이터는 테이블의 열과 매핑할 속성을 정의하는 역할을 합니다. 이 데코레이터를 사용하여 정의된 속성은 해당 엔티티가 테이블의 한 행을 나타낼 때, 해당 속성의 값은 테이블의 해당 열의 값을 나타냅니다.",
      explanationCode: `
        @Entity()
        export class PostsModel {
          // ...
          
          @Column()
          title: string;
          
          // ...
        }
      `,
    },
    {
      questionText:
        "@PrimaryGeneratedColumn() 데코레이터는 어떤 역할을 하는가요?",
      code: `
        @Entity()
        export class PostsModel {
          @PrimaryGeneratedColumn()
          id: number;
          
          // ...
        }
      `,
      answerOptions: [
        "자동으로 생성되고 증가하는 기본 키를 정의하는 역할",
        "데이터베이스와의 연결을 설정하는 역할",
        "데이터베이스의 스키마를 정의하는 역할",
        "데이터베이스의 데이터를 조회하는 역할",
      ],
      answer: "자동으로 생성되고 증가하는 기본 키를 정의하는 역할",
      explanation:
        "@PrimaryGeneratedColumn() 데코레이터는 자동으로 생성되고 증가하는 기본 키를 정의하는 역할을 합니다. 이 데코레이터를 사용하여 정의된 속성은 해당 엔티티의 기본 키를 나타내며, 테이블의 각 행을 고유하게 식별하는 데 사용됩니다.",
      explanationCode: `
        @Entity()
        export class PostsModel {
          @PrimaryGeneratedColumn()
          id: number;
          
          // ...
        }
      `,
    },
    {
      questionText:
        "NestJS에서 주입된 레퍼지토리를 private으로 선언하는 이유는 무엇인가요?",
      code: `
        @Injectable()
        export class PostsService {
          constructor(
            @InjectRepository(PostsModel)
            private readonly postRepository: Repository<PostModel>,
          ) {}
        }
      `,
      answerOptions: [
        "서비스 내부에서만 사용하기 위해",
        "다른 모듈에서 사용하지 못하게 하기 위해",
        "레퍼지토리를 재사용하기 위해",
        "모듈 간의 의존성을 제거하기 위해",
      ],
      answer: "서비스 내부에서만 사용하기 위해",
      explanation:
        "NestJS에서 레퍼지토리를 private으로 선언하는 이유는 해당 레퍼지토리를 해당 서비스 내부에서만 사용하려는 의도 때문입니다. 이렇게 하면 외부에서 직접 레퍼지토리를 접근하여 변경하는 것을 방지할 수 있습니다.",
    },
    {
      questionText:
        "`TypeOrmModule.forRoot`와 `TypeOrmModule.forFeature`의 차이점은 무엇인가요?",
      answerOptions: [
        "`forRoot`는 애플리케이션의 루트 모듈에서 데이터베이스 연결을 설정하는 데 사용되고, `forFeature`는 특정 모듈 내에서 레퍼지토리를 등록하는 데 사용된다.",
        "`forRoot`는 특정 모듈 내에서 레퍼지토리를 등록하는 데 사용되고, `forFeature`는 애플리케이션의 루트 모듈에서 데이터베이스 연결을 설정하는 데 사용된다.",
        "`forRoot`와 `forFeature` 모두 애플리케이션의 루트 모듈에서 데이터베이스 연결을 설정하는 데 사용된다.",
        "`forRoot`와 `forFeature` 모두 특정 모듈 내에서 레퍼지토리를 등록하는 데 사용된다.",
      ],
      answer:
        "`forRoot`는 애플리케이션의 루트 모듈에서 데이터베이스 연결을 설정하는 데 사용되고, `forFeature`는 특정 모듈 내에서 레퍼지토리를 등록하는 데 사용된다.",
      explanation:
        "`TypeOrmModule.forRoot`는 애플리케이션의 루트 모듈에서 데이터베이스 연결을 설정하는 데 사용됩니다. 한편, `TypeOrmModule.forFeature`는 특정 모듈 내에서 레퍼지토리를 등록하는 데 사용됩니다. 이를 통해 각 모듈은 필요한 레퍼지토리만을 가지며, 모듈 간의 독립성이 유지됩니다.",
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
