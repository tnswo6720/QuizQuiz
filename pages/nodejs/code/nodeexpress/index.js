import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "Node.js에서 HTTP 서버를 생성하려고 합니다. 다음 코드에서 빈칸에 들어갈 적절한 메소드는 무엇일까요?",
      code: `
        const http = require("http");
        const server = http.______((req, res) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Hello World</h1>");
        });
        `,
      answerOptions: [
        "createServer",
        "buildServer",
        "makeServer",
        "generateServer",
      ],
      answer: "createServer",
      explanation:
        "'createServer' 메소드는 Node.js의 HTTP 모듈에서 제공하는 메소드로, HTTP 서버를 생성하는 역할을 합니다. 이 메소드를 이용하여 요청(req)과 응답(res)을 처리할 수 있습니다.",
    },
    {
      questionText:
        "Node.js에서 HTTP 서버가 클라이언트의 요청에 응답하기 위해 사용하는 메소드는 무엇일까요?",
      code: `
        const server = http.createServer((req, res) => {
          res.______(200, { "Content-Type": "text/html" });
          res.______("<h1>Hello World</h1>");
        });
        `,
      answerOptions: [
        "writeHead, end",
        "write, finish",
        "writeTop, close",
        "writeHeader, exit",
      ],
      answer: "writeHead, end",
      explanation:
        "'writeHead' 메소드는 응답의 상태 코드와 HTTP 헤더를 설정합니다. 'end' 메소드는 서버의 응답을 종료합니다. 여기서는 상태 코드 200(성공)과 'Content-Type' 헤더를 설정하고, 응답으로 HTML 문자열을 전송한 후 응답을 종료합니다.",
    },
    {
      questionText:
        "express.js에서 어떤 함수를 호출하면 서버를 생성할 수 있을까요?",
      code: `
        const express = require("express");
        const app = ______();
        `,
      answerOptions: ["express", "createServer", "http", "createApplication"],
      answer: "express",
      explanation:
        "express.js에서 서버를 생성하기 위해서는 'express()' 함수를 호출해야 합니다. 이 함수는 express application을 반환합니다.",
    },
    {
      questionText:
        "express.js에서 특정 경로로 들어온 HTTP 요청을 처리하는 메소드는 무엇일까요?",
      code: `
        const express = require("express");
        const app = express();
        app.______("/", (req, res) => {
          res.send("<h1>Home Page</h1>");
        });
        `,
      answerOptions: ["get", "post", "put", "delete"],
      answer: "get",
      explanation:
        "express.js에서 특정 경로로 들어온 GET 요청을 처리하기 위해서는 'app.get()' 메소드를 사용해야 합니다. 첫 번째 인자로 경로를, 두 번째 인자로 요청을 처리할 콜백 함수를 받습니다.",
    },
    {
      questionText: "express.js에서 서버를 시작하는 메소드는 무엇일까요?",
      code: `
        const express = require("express");
        const app = express();
        app.______(3000, () => {
          console.log("server running on http://localhost:3000");
        });
        `,
      answerOptions: ["start", "run", "init", "listen"],
      answer: "listen",
      explanation:
        "express.js에서 서버를 시작하기 위해서는 'app.listen()' 메소드를 사용해야 합니다. 이 메소드는 첫 번째 인자로 포트 번호를, 두 번째 인자로 서버가 시작되었을 때 실행될 콜백 함수를 받습니다.",
    },
    {
      questionText:
        "express.js에서 모든 경로에 대해 특정 처리를 하는 메소드는 무엇일까요?",
      code: `
        const express = require("express");
        const app = express();
        app.______((req, res) => {
          res.status(404).send("<h1>404 Page Not Found!</h1>");
        });
        `,
      answerOptions: ["all", "every", "use", "any"],
      answer: "use",
      explanation:
        "express.js에서 모든 경로에 대해 특정 처리를 하기 위해서는 'app.use()' 메소드를 사용해야 합니다. 이 메소드는 미들웨어 함수를 인자로 받아서, 요청이 들어올 때마다 이 함수를 실행합니다. 따라서, 위의 코드에서는 어떤 경로로의 요청이든 404 에러 페이지를 반환하게 됩니다.",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false); // 힌트를 보여줄지 말지를 결정하는 상태를 추가합니다.
  // 정답인 코드를 생성하는 함수를 추가합니다.

  // 정답 코드를 상태로 관리합니다.
  const [answerCode, setAnswerCode] = useState("");

  useEffect(() => {
    setQuestions(shuffleArray(initialQuestions));
  }, []);

  const shuffleArray = (array) => {
    const arr = [...array]; // 배열 복사
    let currentIndex = arr.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }

    return arr;
  };
  const createAnswerCode = (code, answer) => {
    const answers = answer.split(",");
    let updatedCode = code;

    answers.forEach((ans) => {
      updatedCode = updatedCode.replace(/______/, ans.trim());
    });

    return updatedCode;
  };

  const handleSubmit = () => {
    const userAnswers = userAnswer.split(",");
    const correctAnswers = questions[currentQuestion].answer.split(",");

    if (userAnswers.length !== correctAnswers.length) {
      setIsCorrect(false);
    } else {
      const isAllCorrect = userAnswers.every((ans, index) => {
        return ans.trim() === correctAnswers[index].trim();
      });

      setIsCorrect(isAllCorrect);
    }

    setIsSubmitted(true);
  };

  const formatCode = (code) => {
    return code.replace(/\s/g, ""); // 모든 공백 제거
  };

  const handleNext = () => {
    if (!isCorrect) {
      const correctCode = formatCode(
        createAnswerCode(
          questions[currentQuestion].code,
          questions[currentQuestion].answer
        )
      );

      if (formatCode(answerCode) !== correctCode) {
        alert("Please enter the correct code.");
        console.log("Correct Code:", correctCode);
        return;
      }
    }

    // 정답을 맞추었거나, 틀렸지만 정답 코드를 맞게 입력했다면 다음 문제로 넘어갑니다.
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer("");
      setAnswerCode("");
      setIsSubmitted(false);
      setIsCorrect(null);
      setShowHint(false);
    } else {
      alert("Quiz finished!");
    }
  };
  const handleShowHint = () => {
    setShowHint(true); // 힌트 보기 버튼을 눌렀을 때 힌트를 보여줍니다.
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
            {showHint ? (
              questions[currentQuestion].answerOptions.map((option, index) => (
                <p key={index}>{option}</p>
              ))
            ) : (
              <button onClick={handleShowHint}>힌트 보기</button>
            )}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isSubmitted}
            />
            <button onClick={handleSubmit} disabled={!userAnswer}>
              제출
            </button>
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
              {isCorrect && <button onClick={handleNext}>다음 문제</button>}
            </div>
          )}

          {isSubmitted && !isCorrect && (
            <div className="code-input-section">
              <h2>코드 입력</h2>
              <textarea
                value={answerCode}
                onChange={(e) => setAnswerCode(e.target.value)}
                style={{ width: "30%", height: "100px" }}
              />
              <button onClick={handleNext}>다음 문제</button>
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
