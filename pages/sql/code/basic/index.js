import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    // 문제 1
    {
      questionText: "데이터가 왜 초기화되는지 설명한 문장을 완성하세요.",
      code: `
  "RAM에 올라간 데이터는 프로그램이 ______ 되면 리셋된다"
  `,
      answer: "재시작",
      explanation:
        "RAM에 저장된 데이터는 전원을 끄거나 프로그램을 재시작하면 초기화됩니다. 이는 RAM이 휘발성 메모리여서 전원을 공급하지 않으면 정보를 유지할 수 없기 때문입니다.",
    },

    // 문제 2
    {
      questionText: "SQL에 대한 설명을 빈칸을 채워 완성하세요.",
      code: `
  "SQL은 ______로 구성되어 있고 정보를 담는 구조이다."
  `,
      answer: "테이블",
      explanation:
        "SQL은 Structured Query Language의 약자로, 관계형 데이터베이스에서 데이터를 관리하기 위한 언어입니다. SQL에서 데이터는 '테이블'이라는 구조 안에 저장됩니다.",
    },

    // 문제 3
    {
      questionText: "UPDATE 문을 완성하세요.",
      code: `
  "UPDATE {table} SET ______ WHERE {condition}"
  `,
      answer: "{column}",
      explanation:
        "UPDATE 문은 SQL에서 데이터를 수정하는데 사용됩니다. 'SET' 다음에는 수정하고자 하는 컬럼과 그에 대응하는 새로운 값을 지정해야 합니다.",
    },

    // 문제 4
    {
      questionText: "INSERT 문을 완성하세요.",
      code: `
  "INSERT INTO {table} ______ VALUES {value1, value2...}"
  `,
      answer: "{column1, column2 ...}",
      explanation:
        "INSERT 문은 SQL에서 새로운 데이터를 추가하는데 사용됩니다. 'INTO' 다음에는 데이터를 추가하려는 테이블을, 'VALUES' 앞에는 그 테이블의 컬럼을 지정해야 합니다.",
    },
    // 추가 문제 1
    {
      questionText: "RAM을 왜 사용하는지 설명한 문장을 완성하세요.",
      code: `
  "프로그램이 종료되더라도 데이터를 유지하려면 ______에 데이터를 작성해야한다."
  `,
      answer: "HDD/SSD",
      explanation:
        "RAM은 휘발성 메모리로, 전원을 끄면 저장된 모든 정보가 사라집니다. 따라서 프로그램이 종료되더라도 데이터를 유지하려면 비휘발성 메모리인 HDD나 SSD에 데이터를 저장해야 합니다.",
    },

    // 추가 문제 2
    {
      questionText: "DELETE 문을 완성하세요.",
      code: `
  "DELETE FROM {table} ______"
  `,
      answer: "WHERE {condition}",
      explanation:
        "DELETE 문은 SQL에서 특정 데이터를 삭제하는데 사용됩니다. 'FROM {table}' 다음에는 삭제하려는 데이터를 지정하는 조건문 'WHERE {condition}'을 작성해야 합니다.",
    },

    // 추가 문제 3
    {
      questionText: "SELECT 문을 완성하세요.",
      code: `
  "SELECT ______ FROM {table}"
  `,
      answer: "{column}",
      explanation:
        "SELECT 문은 SQL에서 데이터를 조회하는데 사용됩니다. 'SELECT' 다음에는 조회하려는 컬럼을, 'FROM' 다음에는 해당 컬럼이 속한 테이블을 지정해야 합니다.",
    },

    // 추가 문제 4
    {
      questionText:
        "SELECT 문에서 특정 조건을 만족하는 데이터만 조회하려면 어떻게 해야 하나요?",
      code: `
  "SELECT {column} FROM {table} ______"
  `,
      answer: "WHERE {condition}",
      explanation:
        "SELECT 문에서 특정 조건을 만족하는 데이터만 조회하려면 WHERE 절을 사용합니다. 'WHERE {condition}'을 통해 조회하려는 데이터가 만족해야 하는 조건을 지정할 수 있습니다.",
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
    const correctAnswers = String(questions[currentQuestion].answer).split(",");

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

// 데이터는 왜 초기화되는가?

// HDD/SSD부터 RAM으로

// RAM에 올라간 데이터는 프로그램이 재시작되면 리셋된다

// 램을 왜 사용하는가?

// 프로그램이 종료되더라도 데이터를 유지하려면 HDD/SSD에 데이터를 작성해야한다

// SQL의 약자

// SQL은 테이블로 구성되어 있고 정보를 담는 구조이다

// 테이블의 두 가지 요소인 칼럼과 로우

// Select

// Select {column} From { table}

// Update

// UPDATE {table } SET{ column} WHERE { condition}

// DELETE

// DELETE FROM {table} WHERE {condition}

// Insert

// INSERT INTO {table} {column1, column2 ...}
// VALUES {value1, value2...}

// SQL 기본 개념에 대해서 내가 메모한 것을 바탕으로 문제를 만들어줘
