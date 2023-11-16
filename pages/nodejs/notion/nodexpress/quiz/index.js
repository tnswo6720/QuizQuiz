import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "Node.js에서 http.createServer 메소드가 반환하는 객체의 종류는 무엇인가요?",
      code: "", // 코드 예시가 필요하지 않으므로 비워둡니다.
      answerOptions: [
        "HTTP request",
        "HTTP server",
        "HTTP response",
        "HTTP client",
      ],
      answer: "HTTP server",
      explanation:
        "Node.js의 http.createServer 메소드는 HTTP 서버 객체를 반환합니다. 이 객체를 사용하여 클라이언트의 요청을 수신하고, 이에 대한 응답을 전송할 수 있습니다.",
      explanationCode: "", // 설명에 대한 예시 코드가 필요하지 않으므로 비워둡니다.
    },
    {
      questionText:
        "Node.js에서 'localhost'는 어떤 주소를 가리키는 별칭인가요?",
      code: "", // 코드 예시가 필요하지 않으므로 비워둡니다.
      answerOptions: [
        "현재 네트워크의 주소",
        "외부 네트워크의 주소",
        "서버를 실행한 컴퓨터의 주소",
        "특정 도메인의 주소",
      ],
      answer: "서버를 실행한 컴퓨터의 주소",
      explanation:
        "'localhost'는 현재 컴퓨터, 즉 서버를 실행한 컴퓨터의 주소를 가리키는 별칭입니다. IP 주소로는 '127.0.0.1'로 표현됩니다.",
      explanationCode: "", // 설명에 대한 예시 코드가 필요하지 않으므로 비워둡니다.
    },
    {
      questionText:
        "Node.js에서 서버가 요청에 대한 응답을 전송한 후 더 이상 데이터를 전송하지 않으려면 어떤 메소드를 사용해야 하나요?",
      code: "", // 코드 예시가 필요하지 않으므로 비워둡니다.
      answerOptions: ["res.write", "res.send", "res.end", "res.close"],
      answer: "res.end",
      explanation:
        "Node.js에서 서버가 요청에 대한 응답을 전송한 후 더 이상 데이터를 전송하지 않으려면 'res.end' 메소드를 사용해야 합니다. 이 메소드는 서버의 응답을 종료합니다.",
      explanationCode: "", // 설명에 대한 예시 코드가 필요하지 않으므로 비워둡니다.
    },
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
