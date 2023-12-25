// questions1.js
export const nestjsNotionModule = [
  // 질문 데이터...

  {
    type: "multiple-choice",
    questionText:
      "NestJS에서 클래스 A와 클래스 C가 클래스 B의 인스턴스를 생성자를 통해 주입받고 있습니다. 이러한 패턴은 NestJS의 어떤 원칙과 관련이 있으며, IoC 컨테이너의 역할은 무엇인가요?",
    code: "class A {\n  constructor(instance: B) { }\n}\n\nclass C {\n  constructor(instance: B) { }\n}\n\nclass B { }",
    answerOptions: [
      {
        text: "이 패턴은 의존성 주입(Dependency Injection) 원칙과 관련이 있으며, IoC 컨테이너는 각 클래스에 필요한 의존성을 자동으로 주입하는 역할을 합니다.",
        isCorrect: true,
      },
      {
        text: "이 패턴은 단일 책임 원칙(Single Responsibility Principle)과 관련이 있으며, IoC 컨테이너는 단일 책임을 강제하는 역할을 합니다.",
        isCorrect: false,
      },
      {
        text: "이 패턴은 개방-폐쇄 원칙(Open/Closed Principle)과 관련이 있으며, IoC 컨테이너는 클래스 확장을 용이하게 만드는 역할을 합니다.",
        isCorrect: false,
      },
      {
        text: "이 패턴은 인터페이스 분리 원칙(Interface Segregation Principle)과 관련이 있으며, IoC 컨테이너는 인터페이스의 분리를 관리하는 역할을 합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "이 패턴은 의존성 주입(Dependency Injection) 원칙과 관련이 있으며, IoC 컨테이너는 각 클래스에 필요한 의존성을 자동으로 주입하는 역할을 합니다.",
    explanation:
      "NestJS에서 클래스 A와 클래스 C가 클래스 B의 인스턴스를 주입받는 것은 의존성 주입(Dependency Injection) 원칙을 따르는 예시입니다. 의존성 주입은 클래스가 자신의 의존성을 직접 생성하지 않고, 외부(대체로 IoC 컨테이너)로부터 주입받도록 하는 디자인 패턴입니다. 이를 통해 클래스 간의 결합도는 낮아지고, 코드의 재사용성과 테스트 용이성이 향상됩니다. IoC 컨테이너의 역할은 애플리케이션의 실행 흐름을 제어하고, 필요한 의존성을 해당 클래스에 자동으로 주입하는 것입니다. 이는 제어의 역전(Inversion of Control) 원칙의 핵심 개념으로, 객체의 생성과 의존성의 관리를 컨테이너에 위임함으로써 달성됩니다.",
    subject: "nestjs",
    subSubject: "모듈과제어의역전",
    quizType: "conceptual",
  },
  {
    type: "multiple-choice",
    questionText:
      "NestJS의 의존성 주입 시스템에서 모듈과 프로바이더가 어떻게 상호 작용하는지 설명하십시오. 아래의 설명 중에서 가장 정확한 것을 고르세요.",
    code: `
      @Injectable()
      class CatsService {
        constructor(private readonly catsRepository: CatsRepository) {}
      }
  
      @Module({
        providers: [CatsService, CatsRepository],
        controllers: [CatsController]
      })
      export class CatsModule {}
    `,
    answerOptions: [
      {
        text: "NestJS 모듈은 프로바이더의 인스턴스 생성을 직접 관리하며, 프로바이더의 모든 의존성은 모듈에서 수동으로 주입해야 합니다.",
        isCorrect: false,
      },
      {
        text: "프로바이더는 모듈에 등록된 후, NestJS의 DI 컨테이너에 의해 필요한 의존성이 자동으로 주입됩니다.",
        isCorrect: true,
      },
      {
        text: "모듈은 프로바이더를 단순히 저장하는 용도로 사용되며, 의존성 주입은 각 프로바이더 내에서 독립적으로 처리됩니다.",
        isCorrect: false,
      },
      {
        text: "프로바이더는 모듈에 등록할 필요가 없으며, NestJS는 글로벌 스코프에서 모든 프로바이더를 자동으로 해석합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "프로바이더는 모듈에 등록된 후, NestJS의 DI 컨테이너에 의해 필요한 의존성이 자동으로 주입됩니다.",
    explanation:
      "NestJS에서 의존성 주입은 핵심 기능 중 하나로, 모듈 시스템과 밀접하게 연관되어 있습니다. 모듈 내에서 선언된 프로바이더(예: 서비스, 리포지토리 등)는 NestJS의 DI 컨테이너에 의해 인스턴스화되며, 필요한 의존성들은 생성자를 통해 자동으로 주입됩니다. 이를 통해 클래스의 인스턴스를 생성하고 관리하는 복잡성이 감소하고, 애플리케이션의 테스트와 유지보수가 용이해집니다. 프로바이더는 해당 모듈의 `providers` 배열에 등록되어야 하며, 이렇게 등록된 프로바이더는 모듈의 컨트롤러나 다른 프로바이더 내에서 주입될 수 있습니다.",
    subject: "nestjs",
    subSubject: "모듈과제어의역전",
    quizType: "conceptual",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 NestJS 코드는 애플리케이션을 시작하는 데 어떤 역할을 합니까?",
    code: `
      import { NestFactory } from '@nestjs/core';
      import { AppModule } from './app.module';
  
      async function bootstrap() {
        const app = await NestFactory.create(AppModule);
        await app.listen(3000);
      }
      bootstrap();
    `,
    answerOptions: [
      {
        text: "이 코드는 `AppModule`을 사용하여 HTTP 서버를 생성하고, 포트 3000번에서 애플리케이션을 리스닝합니다.",
        isCorrect: true,
      },
      {
        text: "이 코드는 모든 모듈을 컴파일하고, 애플리케이션의 전역 설정을 정의합니다.",
        isCorrect: false,
      },
      {
        text: "이 코드는 데이터베이스 연결을 설정하고, ORM을 초기화합니다.",
        isCorrect: false,
      },
      {
        text: "이 코드는 의존성 주입 컨테이너를 생성하고, 프로바이더 인스턴스를 관리합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "이 코드는 `AppModule`을 사용하여 HTTP 서버를 생성하고, 포트 3000번에서 애플리케이션을 리스닝합니다.",
    explanation:
      "제공된 코드는 NestJS의 기본적인 애플리케이션 부트스트랩 과정을 나타냅니다. `NestFactory.create(AppModule)`는 애플리케이션 인스턴스를 생성하며, 여기에 주 모듈인 `AppModule`을 전달합니다. 이 모듈은 애플리케이션의 루트 모듈로, NestJS 애플리케이션의 구성 요소들을 모아둔 진입점입니다. `app.listen(3000)`은 생성된 애플리케이션을 3000번 포트에서 리스닝하도록 서버를 시작합니다. 이 과정을 통해 애플리케이션은 외부 요청을 받을 준비가 됩니다.",
    subject: "nestjs",
    subSubject: "모듈과제어의역전",
    quizType: "conceptual",
  },
];
