import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 키워드는 무엇인가요?",
      code: `
        const btn = document.querySelector('button');
    
        btn.______('click', function() {
          console.log('Button clicked!');
        });
      `,
      answerOptions: [
        "addEventListener",
        "removeEventListener",
        "dispatchEvent",
        "createEvent",
      ],
      answer: "addEventListener",
      explanation:
        "'addEventListener' 메서드는 특정 이벤트를 감지하고 그에 반응하는 이벤트 리스너를 추가하는 데 사용됩니다.",
    },
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 키워드는 무엇인가요?",
      code: `
        const btn = document.querySelector('button');
    
        function handleClick() {
          console.log('Button clicked!');
        }
    
        btn.addEventListener('click', handleClick);
        btn.______('click', handleClick);
      `,
      answerOptions: [
        "addEventListener",
        "removeEventListener",
        "dispatchEvent",
        "createEvent",
      ],
      answer: "removeEventListener",
      explanation:
        "'removeEventListener' 메서드는 이전에 추가된 이벤트 리스너를 제거하는 데 사용됩니다.",
    },
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 키워드는 무엇인가요?",
      code: `
        const btn = document.querySelector('button');
    
        const event = new ______('click');
    
        btn.dispatchEvent(event);
      `,
      answerOptions: ["Event", "CustomEvent", "MouseEvent", "KeyboardEvent"],
      answer: "Event",
      explanation:
        "'Event' 생성자는 새로운 이벤트 객체를 생성하는 데 사용됩니다.",
    },
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 키워드는 무엇인가요?",
      code: `
        const btn = document.querySelector('button');
    
        btn.addEventListener('click', function(e) {
          console.log(e.______);
        });
      `,
      answerOptions: ["target", "currentTarget", "type", "bubbles"],
      answer: "bubbles",
      explanation:
        "'bubbles' 속성은 이벤트가 버블링 단계를 거치는지 여부를 나타냅니다.",
    },
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 키워드는 무엇인가요?",
      code: `
        const btn = document.querySelector('button');
    
        btn.addEventListener('click', function(e) {
          console.log(e.______);
        });
      `,
      answerOptions: ["target", "currentTarget", "type", "bubbles"],
      answer: "target",
      explanation: "'target' 속성은 이벤트가 발생한 요소를 가리킵니다.",
    },
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 키워드는 무엇인가요?",
      code: `
        const btn = document.querySelector('button');
    
        btn.addEventListener('click', function(e) {
          console.log(e.______);
        });
      `,
      answerOptions: ["target", "currentTarget", "type", "bubbles"],
      answer: "currentTarget",
      explanation:
        "'currentTarget' 속성은 이벤트 리스너가 연결된 요소를 가리킵니다.",
    },
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 키워드는 무엇인가요?",
      code: `
        const btn = document.querySelector('button');
    
        btn.addEventListener('click', function(e) {
          console.log(e.______);
        });
      `,
      answerOptions: ["target", "currentTarget", "type", "bubbles"],
      answer: "type",
      explanation: "'type' 속성은 발생한 이벤트의 유형을 나타냅니다.",
    },
    {
      questionText: "이벤트 버블링이란 무엇인가요?",
      code: "",
      answerOptions: [
        "하위 요소에서 발생한 이벤트가 상위 요소로 전파되는 현상",
        "상위 요소에서 발생한 이벤트가 하위 요소로 전파되는 현상",
        "같은 요소에서 동시에 발생한 여러 이벤트가 충돌하는 현상",
        "이벤트 리스너가 여러 번 호출되는 현상",
      ],
      answer: "하위 요소에서 발생한 이벤트가 상위 요소로 전파되는 현상",
      explanation:
        "이벤트 버블링은 하위 요소에서 발생한 이벤트가 상위 요소로 전파되는 현상을 말합니다.",
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

// 기본 문법:
// 변수와 상수
// 데이터 타입
// 연산자
// 제어문 (if, for, while 등)
