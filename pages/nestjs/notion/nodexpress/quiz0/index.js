import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "Node.js의 싱글 쓰레드 모델에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "Node.js는 한 번에 하나의 요청만 처리하는 모델",
        "Node.js는 다중 쓰레드를 사용하여 병렬 처리하는 모델",
        "Node.js는 동시에 여러 개의 요청을 처리하는 모델",
        "Node.js는 비동기 이벤트 기반 모델",
      ],
      answer: "Node.js는 비동기 이벤트 기반 모델",
      explanation:
        "Node.js는 비동기 이벤트 기반 모델로 동작합니다. 이 모델에서는 단일 쓰레드가 비동기적으로 이벤트를 처리하며, 논블로킹(non-blocking) 입출력 작업을 통해 효율적인 동시 처리를 구현합니다.",
    },
    {
      questionText: "Node.js의 싱글 쓰레드 모델의 장점은 무엇인가요?",
      code: "",
      answerOptions: [
        "높은 동시성 처리 가능",
        "더 적은 메모리 사용",
        "더 높은 처리 성능",
        "더 적은 CPU 사용",
      ],
      answer: "높은 동시성 처리 가능",
      explanation:
        "Node.js의 싱글 쓰레드 모델은 높은 동시성 처리를 가능하게 합니다. 비동기 이벤트 기반 방식으로 동작하므로 단일 쓰레드가 여러 개의 요청을 동시에 처리할 수 있고, 논블로킹 입출력 작업을 통해 높은 성능을 제공합니다.",
    },
    {
      questionText: "Node.js의 싱글 쓰레드 모델의 단점은 무엇인가요?",
      code: "",
      answerOptions: [
        "CPU 사용이 제한적",
        "메모리 사용이 많음",
        "동시 요청 처리 시간이 길어짐",
        "확장성이 낮음",
      ],
      answer: "동시 요청 처리 시간이 길어짐",
      explanation:
        "Node.js의 싱글 쓰레드 모델은 동시 요청 처리 시간이 길어질 수 있는 단점이 있습니다. 비동기 방식으로 동작하는 것은 장점이지만, CPU 연산이 많이 필요한 작업이나 장시간 동작하는 작업의 경우 처리 시간이 늘어날 수 있습니다.",
    },
    {
      questionText:
        "Node.js의 싱글 쓰레드 모델이 주로 사용되는 분야는 무엇인가요?",
      code: "",
      answerOptions: [
        "웹 개발",
        "데이터베이스 관리",
        "네트워크 프로그래밍",
        "인공지능",
      ],
      answer: "웹 개발",
      explanation:
        "Node.js의 싱글 쓰레드 모델은 주로 웹 개발에서 사용됩니다. 웹 서버의 입출력이 많은 환경에서 비동기 처리를 통해 높은 동시성을 제공하고, 이벤트 기반 구조로 인해 실시간 통신이 필요한 웹 애플리케이션에 적합합니다.",
    },
    {
      questionText:
        "Node.js의 이벤트 큐(Event Queue)에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "비동기 작업의 콜백 함수들이 대기하는 큐",
        "CPU 연산 작업을 처리하는 큐",
        "메인 쓰레드와 병렬로 동작하는 작업 큐",
        "워커 스레드들이 작업을 수행하는 큐",
      ],
      answer: "비동기 작업의 콜백 함수들이 대기하는 큐",
      explanation:
        "Node.js의 이벤트 큐는 비동기 작업의 콜백 함수들이 대기하는 큐입니다. 이벤트 루프를 통해 이벤트 큐에 대기 중인 콜백 함수들이 실행되게 됩니다.",
    },
    {
      questionText:
        "Node.js의 이벤트 루프(Event Loop)에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "비동기 작업을 처리하고 이벤트 큐의 콜백 함수들을 실행하는 역할",
        "CPU 연산 작업을 처리하는 역할",
        "워커 스레드들을 관리하는 역할",
        "메인 쓰레드와 병렬로 동작하는 작업을 수행하는 역할",
      ],
      answer: "비동기 작업을 처리하고 이벤트 큐의 콜백 함수들을 실행하는 역할",
      explanation:
        "Node.js의 이벤트 루프는 비동기 작업을 처리하고 이벤트 큐에 대기 중인 콜백 함수들을 실행하는 역할을 담당합니다. 이를 통해 비동기 작업의 처리와 이벤트 기반 동작이 가능해집니다.",
    },
    {
      questionText:
        "Node.js 싱글 쓰레드 모델에서 워커 스레드를 사용하는 이유는 무엇인가요?",
      code: "",
      answerOptions: [
        "CPU 연산 작업을 분산하여 처리하기 위해",
        "이벤트 루프의 부하를 줄이기 위해",
        "병렬 작업을 처리하여 처리 성능을 향상하기 위해",
        "메인 쓰레드의 부하를 분산하기 위해",
      ],
      answer: "병렬 작업을 처리하여 처리 성능을 향상하기 위해",
      explanation:
        "Node.js의 싱글 쓰레드 모델에서 워커 스레드를 사용하는 이유는 병렬 작업을 처리하여 처리 성능을 향상하기 위함입니다. 워커 스레드를 사용하면 CPU 연산이 많이 필요한 작업을 병렬로 처리할 수 있어 전체적인 처리 속도를 향상시킬 수 있습니다.",
    },
    {
      questionText:
        "Node.js의 non-blocking과 blocking에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "non-blocking은 동기적으로 작업을 처리하고, blocking은 비동기적으로 작업을 처리하는 방식",
        "non-blocking은 작업을 비동기적으로 처리하고, blocking은 작업을 동기적으로 처리하는 방식",
        "non-blocking은 작업을 동시에 처리하고, blocking은 작업을 순차적으로 처리하는 방식",
        "non-blocking은 작업을 병렬로 처리하고, blocking은 작업을 직렬로 처리하는 방식",
      ],
      answer:
        "non-blocking은 작업을 비동기적으로 처리하고, blocking은 작업을 동기적으로 처리하는 방식",
      explanation:
        "Node.js에서 non-blocking은 작업을 비동기적으로 처리하는 방식을 말하며, blocking은 작업을 동기적으로 처리하는 방식을 말합니다. non-blocking 방식은 작업을 요청한 후 결과를 기다리지 않고 다른 작업을 수행하며, 작업이 완료되면 콜백 함수를 호출하여 결과를 처리합니다. 반면 blocking 방식은 작업을 요청한 후 결과가 반환될 때까지 대기하며, 작업이 완료되면 다음 작업을 처리합니다.",
    },
    {
      questionText:
        "Node.js의 non-blocking 방식이 주로 사용되는 이유는 무엇인가요?",
      code: "",
      answerOptions: [
        "동시성 처리를 효율적으로 할 수 있기 때문",
        "단일 쓰레드에서 높은 처리 성능을 제공하기 때문",
        "메모리 사용을 최적화할 수 있기 때문",
        "CPU 사용을 최소화할 수 있기 때문",
      ],
      answer: "동시성 처리를 효율적으로 할 수 있기 때문",
      explanation:
        "Node.js의 non-blocking 방식은 동시성 처리를 효율적으로 할 수 있는 장점이 있습니다. 비동기적으로 작업을 처리하고, 작업이 완료되면 콜백 함수를 호출하여 다음 작업을 처리할 수 있습니다. 이를 통해 단일 쓰레드에서도 동시에 여러 작업을 처리할 수 있어 높은 처리 성능을 제공할 수 있습니다.",
    },

    {
      questionText:
        "Node.js의 싱글 쓰레드 모델에서 blocking 작업이 발생할 경우 어떤 문제가 발생할 수 있나요?",
      code: "",
      answerOptions: [
        "메모리 누수가 발생할 수 있음",
        "CPU 사용이 제한되어 성능 저하가 발생할 수 있음",
        "동시성 처리가 불가능해질 수 있음",
        "비동기 작업의 결과를 처리할 수 없음",
      ],
      answer: "동시성 처리가 불가능해질 수 있음",
      explanation:
        "Node.js의 싱글 쓰레드 모델에서 blocking 작업이 발생하면 동시성 처리가 불가능해질 수 있습니다. blocking 작업이 실행되는 동안 다른 작업을 처리할 수 없으므로, 단일 쓰레드에서 동시에 여러 작업을 처리하는 장점을 활용할 수 없게 됩니다.",
    },
    {
      questionText: "blocking에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "작업이 동기적으로 실행되어 결과가 반환될 때까지 다음 작업을 처리하지 않는 것",
        "작업이 비동기적으로 실행되어 결과를 기다리지 않고 다음 작업을 처리하는 것",
        "여러 작업이 동시에 실행되어 병렬 처리되는 것",
        "다른 작업의 결과를 대기하며 실행되는 것",
      ],
      answer:
        "작업이 동기적으로 실행되어 결과가 반환될 때까지 다음 작업을 처리하지 않는 것",
      explanation:
        "blocking은 작업이 동기적으로 실행되어 결과가 반환될 때까지 다음 작업을 처리하지 않는 것을 의미합니다. blocking 작업은 작업이 완료될 때까지 대기하며, 다른 작업을 수행할 수 없는 상태입니다.",
    },
    {
      questionText:
        "워커 스레드(Worker Thread)에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "Node.js에서 병렬 처리를 위해 사용되는 메인 쓰레드",
        "CPU 연산 작업을 순차적으로 처리하는 스레드",
        "비동기 작업을 동시에 처리하는 스레드",
        "메인 쓰레드와 독립적으로 병렬 작업을 수행하는 스레드",
      ],
      answer: "메인 쓰레드와 독립적으로 병렬 작업을 수행하는 스레드",
      explanation:
        "워커 스레드(Worker Thread)는 메인 쓰레드와 독립적으로 병렬 작업을 수행하는 스레드입니다. 워커 스레드를 사용하여 CPU 연산이 많이 필요한 작업을 병렬로 처리할 수 있습니다.",
    },
    {
      questionText:
        "이벤트 큐(Event Queue)에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "비동기 작업의 콜백 함수들이 대기하는 큐",
        "CPU 연산 작업을 처리하는 큐",
        "워커 스레드들이 작업을 수행하는 큐",
        "이벤트 루프에 의해 실행되는 큐",
      ],
      answer: "비동기 작업의 콜백 함수들이 대기하는 큐",
      explanation:
        "이벤트 큐(Event Queue)는 비동기 작업의 콜백 함수들이 대기하는 큐입니다. 이벤트 루프를 통해 이벤트 큐에 대기 중인 콜백 함수들이 실행되게 됩니다.",
    },
    // 추가 문제를 넣을 수 있습니다.
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setQuestions(shuffleArray(initialQuestions));
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
