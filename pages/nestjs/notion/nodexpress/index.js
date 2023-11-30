import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "다음 중 JSON(JavaScript Object Notation)의 특징이 아닌 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "언어 독립적이다",
        "데이터를 주고 받는 데 사용된다",
        "텍스트 기반의 데이터 포맷이다",
        "순환 참조를 지원한다",
      ],
      answer: "순환 참조를 지원한다",
      explanation:
        "JSON은 데이터를 주고 받는 데 사용되는 텍스트 기반의 데이터 포맷이며, 언어 독립적이지만 순환 참조를 지원하지 않습니다.",
    },
    {
      questionText:
        "'http://example.com:3000/posts?id=1'는 URL입니다. 각 구성 요소에 해당하는 'http','example.com', '3000', '/posts', 'id=1' 이 각각 무엇을 의미하는지 알맞게 맞춰보세요.",
      code: "",
      answerOptions: [
        ["프로토콜", "호스트", "포트", "경로", "쿼리 파라미터"],
        ["프로토콜", "서브도메인", "포트", "경로", "쿼리 파라미터"],
        ["서비스 타입", "도메인", "포트", "리소스", "쿼리 파라미터"],
        ["프로토콜", "도메인", "서버 번호", "리소스", "쿼리 파라미터"],
      ],
      answer: ["프로토콜", "호스트", "포트", "경로", "쿼리 파라미터"],
      explanation:
        "'http'는 프로토콜, 'example.com'는 호스트, '3000'는 포트, '/posts'는 경로, 'id=1'는 쿼리 파라미터를 의미합니다.",
    },

    {
      questionText:
        "HTTP 메서드 중 PATCH 요청과 PUT 요청의 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "PUT은 리소스를 완전히 대체하고, PATCH는 리소스의 일부를 수정한다",
        "PATCH는 리소스를 완전히 대체하고, PUT은 리소스의 일부를 수정한다",
        "PUT은 안전하고 멱등이며, PATCH는 그렇지 않다",
        "PATCH는 안전하고 멱등이며, PUT은 그렇지 않다",
      ],
      answer:
        "PUT은 리소스를 완전히 대체하고, PATCH는 리소스의 일부를 수정한다",
      explanation:
        "PUT 요청은 대상 리소스를 완전히 대체하는 반면, PATCH 요청은 대상 리소스의 일부만을 수정하는 데 사용됩니다.",
    },
    {
      questionText: "HTTP 헤더의 주요 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "요청이나 응답에 대한 메타데이터를 포함한다",
        "요청이나 응답의 본문을 포함한다",
        "서버와 클라이언트 간의 연결을 유지한다",
        "요청이나 응답의 상태 코드를 포함한다",
      ],
      answer: "요청이나 응답에 대한 메타데이터를 포함한다",
      explanation:
        "HTTP 헤더는 요청이나 응답에 대한 메타데이터를 포함하며, 이는 컨텐츠 유형, 인증, 캐싱 등과 같은 여러 가지 정보를 포함할 수 있습니다.",
    },
    {
      questionText: "HTTP 본문(body)의 주요 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "요청이나 응답에 대한 메타데이터를 포함한다",
        "요청이나 응답의 본문을 포함한다",
        "서버와 클라이언트 간의 연결을 유지한다",
        "요청이나 응답의 상태 코드를 포함한다",
      ],
      answer: "요청이나 응답의 본문을 포함한다",
      explanation:
        "HTTP 본문은 주로 POST 또는 PUT 요청에 사용되며, 서버로 전송되는 데이터를 포함합니다.",
    },
    {
      questionText:
        "HTTP 응답에 대한 구성 요소 중 상태 코드(status code)의 역할은 무엇인가요?",
      code: "",
      answerOptions: [
        "서버의 처리 상태를 나타낸다",
        "요청이나 응답에 대한 메타데이터를 포함한다",
        "요청이나 응답의 본문을 포함한다",
        "서버와 클라이언트 간의 연결을 유지한다",
      ],
      answer: "서버의 처리 상태를 나타낸다",
      explanation:
        "HTTP 상태 코드는 서버가 클라이언트의 요청을 어떻게 처리했는지 설명하는 3자리 숫자입니다.",
    },
    {
      questionText: "Next.js의 주요 특징과 그 이유에 대해 간단히 설명해주세요.",
      code: "",
      answerOptions: [
        "서버 사이드 렌더링 지원, 빠른 페이지 로드와 SEO 향상을 위해",
        "클라이언트 사이드 렌더링 지원, 사용자 경험 향상을 위해",
        "서버 사이드 렌더링 지원, 서버 부하 감소를 위해",
        "클라이언트 사이드 렌더링 지원, 개발 편의성 향상을 위해",
      ],
      answer: "서버 사이드 렌더링 지원, 빠른 페이지 로드와 SEO 향상을 위해",
      explanation:
        "Next.js는 서버 사이드 렌더링을 지원하며, 이는 빠른 페이지 로드와 검색 엔진 최적화(SEO) 향상을 위한 것입니다.",
    },
    {
      questionText: "REST API에서 'PUT' 메소드의 주요 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "리소스를 생성한다",
        "리소스를 읽는다",
        "리소스를 수정한다",
        "리소스를 삭제한다",
      ],
      answer: "리소스를 수정한다",
      explanation:
        "'PUT' 메소드는 HTTP 메소드 중 하나로, 특정 리소스를 수정하는 데 사용됩니다.",
    },
    {
      questionText: "HTTP 헤더 중 'Content-Type'은 어떤 정보를 나타내는가요?",
      code: "",
      answerOptions: [
        "요청이나 응답 본문의 미디어 유형",
        "요청을 보낸 클라이언트의 브라우저 정보",
        "요청을 보낸 클라이언트의 IP 주소",
        "서버의 응답 상태",
      ],
      answer: "요청이나 응답 본문의 미디어 유형",
      explanation:
        "'Content-Type' 헤더는 HTTP 헤더 중 하나로, 요청이나 응답 본문의 미디어 유형을 나타냅니다.",
    },
    {
      questionText: "다음 중 HTTP 응답 상태 코드 '404'의 의미는 무엇인가요?",
      code: "",
      answerOptions: [
        "OK",
        "Not Found",
        "Unauthorized",
        "Internal Server Error",
      ],
      answer: "Not Found",
      explanation:
        "HTTP 응답 상태 코드 '404'는 요청한 리소스를 찾을 수 없음을 나타냅니다.",
    },
    {
      questionText: "Express.js에서 미들웨어의 역할은 무엇인가요?",
      code: "",
      answerOptions: [
        "요청과 응답 사이에서 실행되는 함수",
        "데이터베이스와의 연결을 관리하는 함수",
        "클라이언트에게 HTML을 전송하는 함수",
        "서버의 상태를 모니터링하는 함수",
      ],
      answer: "요청과 응답 사이에서 실행되는 함수",
      explanation:
        "Express.js에서 미들웨어는 요청과 응답 사이에서 실행되는 함수로, 요청 객체와 응답 객체에 접근할 수 있으며, 요청-응답 주기를 조작하는 데 사용됩니다.",
    },
    {
      questionText: "Express.js에서 'app.get()' 메소드의 역할은 무엇인가요?",
      code: "",
      answerOptions: [
        "GET 요청을 처리하는 라우트를 등록한다",
        "데이터를 가져오는 데 사용되는 함수를 등록한다",
        "애플리케이션의 설정을 가져온다",
        "애플리케이션의 상태를 가져온다",
      ],
      answer: "GET 요청을 처리하는 라우트를 등록한다",
      explanation:
        "Express.js에서 'app.get()' 메소드는 GET 요청을 처리하는 라우트를 등록하는 데 사용됩니다.",
    },
    {
      questionText:
        "Express.js에서 라우트 파라미터(route parameter)의 역할은 무엇인가요?",
      code: "",
      answerOptions: [
        "URL 경로에 변수를 포함시킨다",
        "클라이언트로부터 전달받은 데이터를 처리한다",
        "서버의 응답을 정의한다",
        "라우트 핸들러를 등록한다",
      ],
      answer: "URL 경로에 변수를 포함시킨다",
      explanation:
        "Express.js에서 라우트 파라미터는 URL 경로에 변수를 포함시키는 역할을 합니다. 이를 통해 동적 URL을 생성할 수 있습니다.",
    },
    {
      questionText: "Node.js에서 'EventEmitter'의 주요 역할은 무엇인가요?",
      code: "",
      answerOptions: [
        "이벤트를 발생시킨다",
        "이벤트를 처리한다",
        "이벤트를 모니터링한다",
        "이벤트를 저장한다",
      ],
      answer: "이벤트를 발생시킨다",
      explanation:
        "Node.js에서 'EventEmitter'는 이벤트를 발생시키는 역할을 합니다. 이를 통해 다른 부분의 코드에서 이 이벤트를 감지하고 반응할 수 있습니다.",
    },
    {
      questionText: "HTTP 메서드 중 'POST' 메서드의 주요 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "리소스를 생성한다",
        "리소스를 읽는다",
        "리소스를 수정한다",
        "리소스를 삭제한다",
      ],
      answer: "리소스를 생성한다",
      explanation:
        "'POST' 메서드는 HTTP 메소드 중 하나로, 새로운 리소스를 생성하는 데 사용됩니다.",
    },
    {
      questionText: "다음 중 HTTP 응답 상태 코드 '500'의 의미는 무엇인가요?",
      code: "",
      answerOptions: [
        "OK",
        "Not Found",
        "Unauthorized",
        "Internal Server Error",
      ],
      answer: "Internal Server Error",
      explanation: "HTTP 응답 상태 코드 '500'는 서버 내부 오류를 나타냅니다.",
    },
    {
      questionText: "Node.js에서 'Buffer' 객체의 주요 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "이진 데이터를 처리한다",
        "문자열 데이터를 처리한다",
        "정수 데이터를 처리한다",
        "부동 소수점 데이터를 처리한다",
      ],
      answer: "이진 데이터를 처리한다",
      explanation:
        "Node.js에서 'Buffer' 객체는 이진 데이터를 처리하는 데 사용됩니다. 'Buffer' 객체를 통해 이진 데이터를 생성, 조작, 변환할 수 있습니다.",
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
