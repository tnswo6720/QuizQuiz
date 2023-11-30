import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "React에서 props 값에 따라 다른 내용을 렌더링하려면 어떤 방법을 사용해야 하나요?",
      code: `
      export default function BoardComponent(props) {
        return (
          <>
            <h1>{props.isEdit ? "수정" : ______}페이지</h1>
            제목: <input type="text" /> <br></br>
            내용: <input type="text" /> <br></br>
            <button>{props.isEdit ? "수정" : "등록"}하기</button>
          </>
        );
      }
      `,
      answerOptions: ['"등록"', '"생성"', '"추가"', '"삽입"'],
      answer: '"등록"',
      explanation:
        "React에서 조건에 따라 다른 내용을 렌더링하려면 삼항 연산자를 사용할 수 있습니다. 여기에서는 'props.isEdit'의 값이 참일 경우 '수정', 거짓일 경우 '등록'을 렌더링합니다.",
    },
    {
      questionText:
        "React 컴포넌트에서 props의 값을 참조하려면 어떻게 해야 하나요?",
      code: `
      export default function BoardComponent(props) {
        return (
          <>
            <h1>{______.isEdit ? "수정" : "등록"}페이지</h1>
            제목: <input type="text" /> <br></br>
            내용: <input type="text" /> <br></br>
            <button>{props.isEdit ? "수정" : "등록"}하기</button>
          </>
        );
      }
      `,
      answerOptions: ["props", "state", "context", "ref"],
      answer: "props",
      explanation:
        "React 컴포넌트에서 부모 컴포넌트로부터 받은 props의 값을 참조하려면 'props' 키워드를 사용합니다. 여기에서는 'props.isEdit'를 통해 'isEdit' 값에 접근하고 있습니다.",
    },
    {
      questionText:
        "React 컴포넌트에서 입력 필드를 렌더링하려면 어떤 태그를 사용해야 하나요?",
      code: `
      export default function BoardComponent(props) {
        return (
          <>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            제목: <______ type="text" /> <br></br>
            내용: <input type="text" /> <br></br>
            <button>{props.isEdit ? "수정" : "등록"}하기</button>
          </>
        );
      }
      `,
      answerOptions: ["input", "textarea", "select", "button"],
      answer: "input",
      explanation:
        "React에서 사용자의 입력을 받기 위해 'input' 태그를 사용합니다. 'type' 속성은 입력 필드의 유형을 결정합니다. 여기에서는 'text'로 설정되어 있어 텍스트를 입력받는 필드를 렌더링합니다.",
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
    const userAnswers = userAnswer
      .split(",")
      .map((ans) => ans.replace(/\s/g, "").toLowerCase()); // 콤마 뒤의 공백 제거 및 소문자로 변환
    const correctAnswers = String(questions[currentQuestion].answer)
      .split(",")
      .map((ans) => ans.replace(/\s/g, "").toLowerCase()); // 콤마 뒤의 공백 제거 및 소문자로 변환

    if (userAnswers.length !== correctAnswers.length) {
      setIsCorrect(false);
    } else {
      const isAllCorrect = userAnswers.every((ans, index) => {
        return ans === correctAnswers[index];
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
