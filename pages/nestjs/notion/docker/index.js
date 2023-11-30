import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "도커는 무엇인가요?",
      code: "",
      answerOptions: [
        "컨테이너 기반의 오픈소스 가상화 플랫폼",
        "프론트엔드 개발을 위한 패키지 관리 도구",
        "백엔드 개발을 위한 프레임워크",
        "데이터베이스 관리 시스템",
      ],
      answer: "컨테이너 기반의 오픈소스 가상화 플랫폼",
      explanation:
        "도커(Docker)는 컨테이너 기반의 오픈소스 가상화 플랫폼입니다. 도커를 통해 애플리케이션을 빠르게 구축, 테스트 및 배포할 수 있습니다. 도커는 소프트웨어를 컨테이너라는 표준화된 유닛으로 패키징하는 것으로, 이 컨테이너에는 코드, 런타임, 시스템 도구, 시스템 라이브러리 등 서버에 설치되는 무엇이든 포함할 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText: "도커와 가상화의 다른 점은 무엇인가요?",
      code: "",
      answerOptions: [
        "도커는 컨테이너를, 가상화는 가상 머신을 사용한다",
        "도커는 백엔드 개발에, 가상화는 프론트엔드 개발에 사용된다",
        "도커는 리눅스 기반 시스템에서만 동작하고, 가상화는 여러 운영 체제에서 동작한다",
        "도커는 오픈소스이고, 가상화는 오픈소스가 아니다",
      ],
      answer: "도커는 컨테이너를, 가상화는 가상 머신을 사용한다",
      explanation:
        "도커와 가상화의 가장 큰 차이점은 도커는 컨테이너를, 가상화는 가상 머신을 사용한다는 점입니다. 컨테이너는 가상화와 달리 게스트 OS를 사용하지 않아서 더 가볍고 빠릅니다. 또한, 컨테이너는 호스트 OS의 커널을 공유하지만, 각 컨테이너는 서로 격리되어 있어서 마치 각각의 시스템처럼 동작합니다. 반면, 가상화는 하드웨어를 에뮬레이션하여 완전히 독립된 가상 머신을 생성합니다. 각 가상 머신은 자체 OS를 가지고 있습니다.",
      explanationCode: "",
    },
    {
      questionText:
        "Docker Compose에 대해 설명하고, 그 사용 예시를 들어주세요.",
      code: "",
      answerOptions: [
        "Docker Compose는 여러 Docker 컨테이너가 함께 작동하는 애플리케이션을 정의하고 관리하기 위한 도구이다. 개발 환경 구성, CI 파이프라인, 임시 환경 등 다양한 상황에서 사용될 수 있다.",
        "Docker Compose는 단일 Docker 컨테이너를 관리하기 위한 도구이다. 개발 환경 구성, CI 파이프라인, 임시 환경 등 다양한 상황에서 사용될 수 있다.",
        "Docker Compose는 여러 Docker 컨테이너가 함께 작동하는 애플리케이션을 정의하고 관리하기 위한 도구이다. 그러나 개발 환경 구성이나 CI 파이프라인, 임시 환경 등에서는 사용될 수 없다.",
        "Docker Compose는 단일 Docker 컨테이너를 관리하기 위한 도구이다. 그러나 개발 환경 구성이나 CI 파이프라인, 임시 환경 등에서는 사용될 수 없다.",
      ],
      answer:
        "Docker Compose는 여러 Docker 컨테이너가 함께 작동하는 애플리케이션을 정의하고 관리하기 위한 도구이다. 개발 환경 구성, CI 파이프라인, 임시 환경 등 다양한 상황에서 사용될 수 있다.",
      explanation:
        "Docker Compose는 여러 Docker 컨테이너가 함께 작동하는 애플리케이션을 정의하고 관리하는 도구입니다. YAML 파일 형식으로 서비스 설정을 정의하고, 이를 통해 서비스를 생성하고 시작할 수 있습니다. 개발 환경 구성, CI 파이프라인 설정, 임시 환경 생성 등 다양한 상황에서 Docker Compose를 활용할 수 있습니다.",
      explanationCode: "",
    },
    {
      questionText:
        "도커 컴포즈(Docker Compose) 파일에서 'services'는 무엇을 의미하나요?",
      code: "",
      answerOptions: [
        "'services'는 도커 컴포즈 파일에서 실행할 컨테이너 서비스를 정의하는 부분입니다.",
        "'services'는 도커 컴포즈 파일에서 사용할 이미지를 정의하는 부분입니다.",
        "'services'는 도커 컴포즈 파일에서 네트워크 설정을 정의하는 부분입니다.",
        "'services'는 도커 컴포즈 파일에서 데이터 볼륨을 정의하는 부분입니다.",
      ],
      answer:
        "'services'는 도커 컴포즈 파일에서 실행할 컨테이너 서비스를 정의하는 부분입니다.",
      explanation:
        "'services'는 도커 컴포즈 파일에서 실행할 컨테이너 서비스를 정의하는 부분입니다. 각 서비스는 독립적으로 실행되는 컨테이너를 의미하며, 서비스 당 하나 이상의 컨테이너를 실행할 수 있습니다. 'services' 아래에는 각 서비스의 설정이 들어갑니다.",
      explanationCode: "services:\n  postgres:\n    image: postgres:15",
    },
    {
      questionText:
        "도커 컴포즈(Docker Compose)를 실행하는 명령어는 무엇인가요?",
      code: "",
      answerOptions: [
        "docker-compose down",
        "docker-compose build",
        "docker-compose up",
        "docker-compose run",
      ],
      answer: "docker-compose up",
      explanation:
        "'docker-compose up' 명령어는 도커 컴포즈 파일에 정의된 서비스를 실행하는 명령어입니다. 이 명령어를 실행하면 도커는 필요한 이미지를 가져와서 서비스를 시작합니다.",
      explanationCode: "docker-compose up",
    },

    {
      questionText:
        "도커 컴포즈(Docker Compose) 파일에서 'image'의 역할은 무엇인가요?",
      code: "",
      answerOptions: [
        "'image'는 컨테이너가 사용할 도커 이미지를 지정합니다.",
        "'image'는 컨테이너의 시작점(entry point)를 지정합니다.",
        "'image'는 컨테이너가 사용할 커맨드를 지정합니다.",
        "'image'는 컨테이너의 환경 변수를 설정합니다.",
      ],
      answer: "'image'는 컨테이너가 사용할 도커 이미지를 지정합니다.",
      explanation:
        "'image'는 컨테이너가 사용할 도커 이미지를 지정합니다. 이 이미지는 도커 허브(Docker Hub) 등의 저장소에서 가져올 수 있습니다. 'image'로 지정된 이미지를 기반으로 컨테이너가 생성됩니다.",
      explanationCode: `services:
      postgres:
        image: postgres:15`,
    },
    {
      questionText:
        "도커 컴포즈(Docker Compose) 파일에서 'ports'의 역할은 무엇인가요?",
      code: "",
      answerOptions: [
        "'ports'는 컨테이너의 네트워크 포트를 호스트와 연결합니다.",
        "'ports'는 컨테이너의 볼륨을 호스트와 연결합니다.",
        "'ports'는 컨테이너의 환경 변수를 설정합니다.",
        "'ports'는 컨테이너의 시작점(entry point)를 설정합니다.",
      ],
      answer: "'ports'는 컨테이너의 네트워크 포트를 호스트와 연결합니다.",
      explanation:
        "'ports'는 컨테이너의 네트워크 포트를 호스트와 연결합니다. 'ports' 설정을 통해 컨테이너가 호스트의 특정 포트와 통신할 수 있게 됩니다. 'ports' 설정 값은 '호스트포트:컨테이너포트' 형식으로 지정하며, 여러 포트를 연결하려면 여러 값을 지정할 수 있습니다.",
      explanationCode: `services:
      postgres:
        ports:
          - '5432:5432'`,
    },
    {
      questionText:
        "도커 컴포즈(Docker Compose) 파일에서 'volumes'의 역할은 무엇인가요?",
      code: `
    services:
      postgres:
        volumes:
          - ./postgres-data:/var/lib/postgresql/data
      `,
      answerOptions: [
        "'volumes'는 컨테이너의 볼륨을 호스트와 연결합니다.",
        "'volumes'는 컨테이너의 네트워크 포트를 호스트와 연결합니다.",
        "'volumes'는 컨테이너가 사용할 도커 이미지를 지정합니다.",
        "'volumes'는 컨테이너가 실패했을 때 자동으로 재시작할지 여부를 설정합니다.",
      ],
      answer: "'volumes'는 컨테이너의 볼륨을 호스트와 연결합니다.",
      explanation:
        "'volumes'는 컨테이너의 볼륨을 호스트와 연결합니다. 이 설정을 통해 호스트 OS의 특정 위치와 컨테이너 내부의 특정 위치를 맵핑할 수 있습니다. 이렇게 하면 컨테이너가 삭제되어도 데이터를 유지할 수 있습니다.",
      explanationCode: `
    services:
      postgres:
        volumes:
          - ./postgres-data:/var/lib/postgresql/data
      `,
    },
    {
      questionText:
        "도커 컴포즈(Docker Compose) 파일에서 'environment'의 역할은 무엇인가요?",
      code: `
    services:
      postgres:
        environment:
          POSTGRES_USE: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: postgres
      `,
      answerOptions: [
        "'environment'는 컨테이너의 환경 변수를 설정합니다.",
        "'environment'는 컨테이너의 네트워크 포트를 호스트와 연결합니다.",
        "'environment'는 컨테이너가 사용할 도커 이미지를 지정합니다.",
        "'environment'는 컨테이너가 실패했을 때 자동으로 재시작할지 여부를 설정합니다.",
      ],
      answer: "'environment'는 컨테이너의 환경 변수를 설정합니다.",
      explanation:
        "'environment'는 컨테이너의 환경 변수를 설정합니다. 이 설정을 통해 컨테이너 실행 환경에 필요한 변수를 전달할 수 있습니다. 'environment' 설정 값은 '변수명=값' 형식으로 지정하며, 여러 변수를 설정하려면 여러 값을 지정할 수 있습니다.",
      explanationCode: `
    services:
      postgres:
        environment:
          POSTGRES_USE: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: postgres
      `,
    },
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
