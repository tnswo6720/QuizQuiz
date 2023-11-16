import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "웹에서 데이터를 주고받을 때 가장 많이 사용되는 방식은 무엇인가요?",
      code: `
    fetch('https://api.example.com/data', {
      method: '______',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
      `,
      answerOptions: ["GET", "POST", "PUT", "DELETE"],
      answer: "POST",
      explanation:
        "웹에서 데이터를 주고받을 때 가장 많이 사용되는 방식은 'POST'입니다. 'POST' 메서드는 서버로 보내는 데이터를 요청 본문에 담아서 전송합니다.",
    },
    {
      questionText: "HTTP 상태 코드 404의 의미는 무엇인가요?",
      code: `HTTP/1.1 404 ______`,
      answerOptions: ["OK", "Created", "Not Found", "Bad Request"],
      answer: "Not Found",
      explanation:
        "HTTP 상태 코드 404는 'Not Found'를 의미합니다. 요청한 리소스를 서버에서 찾을 수 없을 때 이 상태 코드가 반환됩니다.",
    },
    {
      questionText:
        "웹 브라우저에서 서버로 데이터를 요청하는 API는 무엇인가요?",
      code: `
    ______.fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));
      `,
      answerOptions: ["Window", "Document", "Navigator", "Console"],
      answer: "Window",
      explanation:
        "웹 브라우저에서 서버로 데이터를 요청하는 API는 'Window'의 'fetch' 메서드입니다. 이 메서드를 사용하면 서버로 HTTP 요청을 보낼 수 있습니다.",
    },
    {
      questionText:
        "서버로부터 받은 JSON 데이터를 JavaScript 객체로 변환하는 메서드는 무엇인가요?",
      code: `
    fetch(url)
      .then(response => response.______())
      .then(data => console.log(data));
      `,
      answerOptions: ["json", "text", "formData", "blob"],
      answer: "json",
      explanation:
        "서버로부터 받은 JSON 데이터를 JavaScript 객체로 변환하기 위해서는 'Response' 객체의 'json' 메서드를 사용합니다. 이 메서드는 'Promise'를 반환하며, 이 'Promise'의 결과 값은 JSON 데이터를 파싱한 JavaScript 객체입니다.",
    },
    {
      questionText: "HTTP 메서드 중 리소스를 삭제하는 메서드는 무엇인가요?",
      code: `
    fetch('https://api.example.com/data', {
      method: '______',
      headers: {
        'Content-Type': 'application/json'
      }
    });
      `,
      answerOptions: ["GET", "POST", "PUT", "DELETE"],
      answer: "DELETE",
      explanation:
        "HTTP 메서드 중에서 'DELETE' 메서드는 서버의 특정 리소스를 삭제할 때 사용됩니다. 이 메서드를 사용하여 요청을 보내면, 서버는 해당 리소스를 삭제하고 상태 코드 200(성공) 또는 204(No Content)를 반환합니다.",
    },
    {
      questionText: "HTTP 상태 코드 200의 의미는 무엇인가요?",
      code: `HTTP/1.1 200 ______`,
      answerOptions: ["OK", "Created", "Not Found", "Bad Request"],
      answer: "OK",
      explanation:
        "HTTP 상태 코드 200은 'OK'를 의미합니다. 이 상태 코드는 서버가 클라이언트의 요청을 성공적으로 처리했음을 나타냅니다.",
    },
    {
      questionText: "HTTP 메서드 중 리소스를 삭제하는 메서드는 무엇인가요?",
      code: `
    fetch('https://api.example.com/data', {
      method: '______',
      headers: {
        'Content-Type': 'application/json'
      }
    });
      `,
      answerOptions: ["GET", "POST", "PUT", "DELETE"],
      answer: "DELETE",
      explanation:
        "HTTP 메서드 중에서 'DELETE' 메서드는 서버의 특정 리소스를 삭제할 때 사용됩니다. 이 메서드를 사용하여 요청을 보내면, 서버는 해당 리소스를 삭제하고 상태 코드 200(성공) 또는 204(No Content)를 반환합니다.",
    },
    {
      questionText: "HTTP 상태 코드 200의 의미는 무엇인가요?",
      code: `HTTP/1.1 200 ______`,
      answerOptions: ["OK", "Created", "Not Found", "Bad Request"],
      answer: "OK",
      explanation:
        "HTTP 상태 코드 200은 'OK'를 의미합니다. 이 상태 코드는 서버가 클라이언트의 요청을 성공적으로 처리했음을 나타냅니다.",
    },
    {
      questionText:
        "웹 브라우저에서 현재 위치 정보를 가져오는 API는 무엇인가요?",
      code: ` ______.getCurrentPosition(position => {
        console.log(\`Latitude: \${position.coords.latitude}\`);
        console.log(\`Longitude: \${position.coords.longitude}\`);
      });
      `,
      answerOptions: [
        "navigator.geolocation",
        "window.location",
        "document.location",
        "console.location",
      ],
      answer: "navigator.geolocation",
      explanation:
        "웹 브라우저에서 현재 위치 정보를 가져오는 API는 'navigator.geolocation'입니다. 'getCurrentPosition' 메서드를 사용하면 현재 위치의 위도와 경도 정보를 가져올 수 있습니다.",
    },
    {
      questionText:
        "서버로부터 받은 텍스트 데이터를 문자열로 변환하는 메서드는 무엇인가요?",
      code: `
    fetch(url)
      .then(response => response.______())
      .then(data => console.log(data));
      `,
      answerOptions: ["json", "text", "formData", "blob"],
      answer: "text",
      explanation:
        "서버로부터 받은 텍스트 데이터를 문자열로 변환하기 위해서는 'Response' 객체의 'text' 메서드를 사용합니다. 이 메서드는 'Promise'를 반환하며, 이 'Promise'의 결과 값은 텍스트 데이터를 담은 문자열입니다.",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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
              <p>
                {userAnswer === questions[currentQuestion].answer
                  ? "정답입니다!"
                  : `틀렸습니다. ${questions[currentQuestion].explanation}`}
              </p>
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
