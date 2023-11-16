import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...

    {
      questionText: "REST API에서 HTTP PUT 메소드의 주된 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "리소스를 생성합니다.",
        "리소스를 삭제합니다.",
        "리소스를 업데이트합니다.",
        "리소스를 조회합니다.",
      ],
      answer: "리소스를 업데이트합니다.",
      explanation:
        "HTTP PUT 메소드는 주로 서버의 리소스를 전체적으로 업데이트하는 데 사용됩니다.",
      explanationCode: `
        // PUT 메소드를 사용한 전체 업데이트 예시
        axios.put('/api/posts/1', {
          title: 'Updated Post',
          content: 'This is the updated post.',
          author: 'John Doe'
        });
      `,
    },
    {
      questionText: "REST API에서 HTTP PATCH 메소드의 주된 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "리소스를 생성합니다.",
        "리소스를 삭제합니다.",
        "리소스를 업데이트합니다.",
        "리소스를 조회합니다.",
      ],
      answer: "리소스를 업데이트합니다.",
      explanation:
        "HTTP PATCH 메소드는 주로 서버의 리소스를 부분적으로 업데이트하는 데 사용됩니다.",
      explanationCode: `
        // PATCH 메소드를 사용한 부분 업데이트 예시
        axios.patch('/api/posts/1', {
          title: 'Updated Post'
        });
      `,
    },
    {
      questionText:
        "HTTP PUT 메소드와 PATCH 메소드의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "PUT은 리소스의 전체를 업데이트하고, PATCH는 리소스의 일부를 업데이트합니다.",
        "PUT은 리소스의 일부를 업데이트하고, PATCH는 리소스의 전체를 업데이트합니다.",
        "PUT은 리소스를 생성하고, PATCH는 리소스를 삭제합니다.",
        "PUT은 리소스를 삭제하고, PATCH는 리소스를 생성합니다.",
      ],
      answer:
        "PUT은 리소스의 전체를 업데이트하고, PATCH는 리소스의 일부를 업데이트합니다.",
      explanation:
        "PUT 메소드는 대상 리소스의 현재 상태를 클라이언트가 제공한 상태로 전체를 교체하는 것을 의미합니다. 반면에 PATCH 메소드는 대상 리소스의 일부만을 교체하는 것을 의미합니다.",
      explanationCode: `
        // PUT 메소드를 사용한 예시
        axios.put('/api/posts/1', {
          title: 'Updated Post',
          content: 'This is the updated post.',
          author: 'John Doe'
        });
    
        // PATCH 메소드를 사용한 예시
        axios.patch('/api/posts/1', {
          title: 'Updated Post'
        });
      `,
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
