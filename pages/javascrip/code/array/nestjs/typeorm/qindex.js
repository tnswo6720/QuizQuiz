export const nestjsCodeTypeorm = [
  {
    type: "fill-in-the-blank",
    questionText:
      "다음 코드에서 빈 1칸에 들어갈 수 있는 메서드는 무엇인가요? 이 메서드는 TypeORM 레포지토리에서 특정 조건에 맞는 단일 엔티티를 검색할 때 사용됩니다.",
    code: `
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        async getPostById(id: number) {
          const post = await this.postsRepository.______({
            where: {
              id,
            },
          });
  
          if (!post) {
            throw new NotFoundException();
          }
  
          return post;
        }
      `,
    answerOptions: ["find", "findOne", "findAll", "getMany"],
    answer: "findOne",
    explanation:
      "TypeORM 레포지토리에서 특정 조건에 맞는 단일 엔티티를 검색할 때는 'findOne' 메서드를 사용합니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "NestJS 애플리케이션에서 TypeORM을 설정하려고 합니다. PostgreSQL 데이터베이스에 연결하기 위한 설정을 아래 코드 빈칸에 적절히 채워넣으세요.",
    code: `
      import { Module } from '@nestjs/common';
      import { AppController } from './app.controller';
      import { AppService } from './app.service';
      import { PostsModule } from './posts/posts.module';
      import { TypeOrmModule } from '@nestjs/typeorm';
  
      @Module({
        imports: [
          PostsModule,
          TypeOrmModule.forRoot({
            _____: 'postgres',
            _____: '127.0.0.1',
            _____: 5432,
            _____: 'postgres',
            _____: 'postgres',
            _____: 'postgres',
            entities: [],
            _____: true,
          }),
        ],
        controllers: [AppController],
        providers: [AppService],
      })
      export class AppModule {}
    `,
    answerOptions: [
      ["type, host, port, username, password, database, synchronize"],
      ["dbType, dbHost, dbPort, dbUsername, dbPassword, dbName, dbSynchronize"],
      ["databaseType, hostname, databasePort, user, pass, dbName, autoSync"],
      [
        "driver, server, serverPort, userId, userPassword, databaseName, autoMigrate",
      ],
    ],
    answer: ["type, host, port, username, password, database, synchronize"],
    explanation:
      "TypeORM 설정에서는 데이터베이스 연결을 위한 몇 가지 핵심 속성들을 정의해야 합니다. `type` 속성은 사용할 데이터베이스의 드라이버 유형을 지정합니다. `host`는 데이터베이스 서버의 주소를 나타내며, `port`는 해당 데이터베이스 서비스의 포트 번호입니다. `username`과 `password`는 데이터베이스 접속에 사용할 인증 정보이며, `database`는 연결할 데이터베이스의 이름입니다. 마지막으로 `synchronize` 속성은 애플리케이션 실행 시 데이터베이스 스키마를 자동으로 동기화할지 여부를 결정합니다. 이러한 설정들을 통해 NestJS 애플리케이션은 TypeORM을 사용하여 PostgreSQL 데이터베이스에 연결하고 데이터를 관리할 수 있습니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "NestJS와 TypeORM을 사용하여 데이터베이스 테이블과 매핑되는 엔티티 클래스를 정의하는 코드를 작성하세요. 빈칸을 채워 `PostsModel` 클래스를 완성하십시오.",
    code: `
      @_____()
      export class PostsModel {
        @_____() // 이 필드가 기본 키임을 나타내고 자동으로 값이 생성되게 합니다.
        id: number;
  
        @_____ // 이 필드가 테이블의 컬럼임을 나타냅니다.
        author: string;
  
        // 나머지 필드들도 테이블의 컬럼으로 사용될 속성임을 나타냅니다.
        title: string;
        likeCount: number;
        commentCount: number;
      }
    `,
    answerOptions: [
      ["Entity", "PrimaryGeneratedColumn", "Column"],
      ["Table", "AutoIncrement", "Field"],
      ["Model", "Generated", "Property"],
      ["Struct", "Identity", "Attribute"],
    ],
    answer: ["Entity", "PrimaryGeneratedColumn", "Column"],
    explanation:
      "TypeORM을 사용할 때, `@Entity()` 데코레이터는 클래스가 데이터베이스 테이블과 매핑될 것임을 나타냅니다. `@PrimaryGeneratedColumn()` 데코레이터는 필드가 테이블의 기본 키(primary key)로 사용되고, 값이 자동으로 생성될 것임을 나타냅니다. `@Column` 데코레이터는 클래스의 속성이 테이블의 컬럼으로 사용될 것임을 나타내며, 모든 컬럼 필드에 적용됩니다. 'AutoIncrement', 'Field', 'Generated', 'Property', 'Identity', 'Attribute'는 TypeORM에서 사용되는 데코레이터가 아닙니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
  {
    type: "fill-in-the-blank",
    questionText:
      "NestJS 서비스 클래스에서 TypeORM의 `Repository`를 주입받아 사용하기 위한 생성자 코드를 작성하세요. 아래 코드의 빈칸을 채워 `PostsService` 클래스 생성자를 완성하십시오.",
    code: `
      @Injectable()
      export class PostsService {
        constructor(
          @_____Repository(_____Model)
          private readonly _____: Repository<_____Model>,
        ) {}
  
        // ... 나머지 서비스 메서드들 ...
      }
    `,
    answerOptions: [
      ["Inject", "Posts", "postsRepository", "Posts"],
      ["Inject", "Post", "postRepository", "Post"],
      ["Add", "Posts", "postsRepository", "Posts"],
      ["Add", "Post", "postRepository", "Post"],
    ],
    answer: ["Inject, Posts, postsRepository, Posts"],
    explanation:
      "NestJS에서 TypeORM 레포지토리를 서비스 클래스에 주입하려면, `@InjectRepository()` 데코레이터를 사용하여 관련 엔티티 모델의 레포지토리를 요청합니다. 이를 통해 TypeORM의 `Repository` 인터페이스와 엔티티 모델을 사용하여 데이터베이스 연산을 수행할 수 있습니다. 생성자의 매개변수에서 `private readonly`는 TypeScript의 접근 제한자이며, 이를 통해 해당 레포지토리를 클래스 내부에서 안전하게 사용할 수 있습니다. 여기서는 `PostsModel` 클래스에 해당하는 `Repository`를 `postsRepository`라는 이름으로 주입받고 있습니다.",
    subject: "nestjs",
    subSubject: "typeorm",
    quizType: "coding",
  },
];
