import React, { useState, useEffect } from "react";

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
