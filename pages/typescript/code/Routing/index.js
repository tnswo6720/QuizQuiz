import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "Next.js에서 현재 페이지의 URL 정보를 가져오는 Hook은 무엇일까요?",
      code: `
        import { _______ } from 'next/router';
    
        function Page() {
          const router = _______();
    
          console.log(router.pathname);
    
          return <div>Welcome to Next.js!</div>;
        }
    
        export default Page;
      `,
      answerOptions: ["useRouter", "useRoute", "useRouterPath", "usePath"],
      answer: "useRouter,useRouter",
      explanation:
        "Next.js에서는 useRouter라는 Hook을 제공합니다. 이 Hook을 사용하면 현재 페이지의 URL 정보를 가져올 수 있습니다. 이를 통해 동적 라우팅을 처리하거나, 현재 페이지의 경로에 따라 다른 동작을 수행하는 등의 기능을 구현할 수 있습니다.",
    },
    {
      questionText:
        "Next.js에서 useRouter Hook을 사용해 쿼리 파라미터를 받아오려면 어떻게 해야할까요?",
      code: `
        import { useRouter } from 'next/router';
    
        function Page() {
          const router = useRouter();
    
          console.log(_______);
    
          return <div>Welcome to Next.js!</div>;
        }
    
        export default Page;
      `,
      answerOptions: [
        "router.query",
        "router.params",
        "router.pathname",
        "router.url",
      ],
      answer: "router.query",
      explanation:
        "Next.js의 useRouter Hook에서는 현재 페이지의 URL 정보를 객체 형태로 제공합니다. 이 객체의 query 프로퍼티를 통해 쿼리 파라미터를 받아올 수 있습니다. 예를 들어, '/page?id=1'과 같은 URL에서 useRouter Hook을 사용하면 router.query.id로 '1'을 받아올 수 있습니다.",
    },
    {
      questionText:
        "Optional Chaining을 사용하여 writer를 안전하게 출력하는 코드를 완성하세요.",
      code: `
        const data = {
          fetchBoard: {
            writer: 'John Doe',
            title: 'Hello, world!',
            contents: 'This is a test.',
          },
        };
        
        console.log(data?.fetchBoard?._______);
      `,
      answerOptions: ["writer", "title", "contents", "number"],
      answer: "writer",
      explanation:
        "Optional Chaining 연산자 '?.’는 객체가 null 또는 undefined인 경우에도 에러를 발생시키지 않고 안전하게 undefined를 반환합니다. 이를 통해 프로그래머는 객체의 속성에 안전하게 접근할 수 있습니다.",
    },
    {
      questionText:
        "Nullish Coalescing를 사용하여 number가 없는 경우 'No number'를 출력하는 코드를 완성하세요.",
      code: `
        const data = {
          fetchBoard: {
            writer: 'John Doe',
            title: 'Hello, world!',
            contents: 'This is a test.',
          },
        };
        
        console.log(data?.fetchBoard?.number ?? '_______');
      `,
      answerOptions: ["No number", "0", "Unknown", "Not found"],
      answer: "No number",
      explanation:
        "Nullish Coalescing 연산자 '??'는 좌변의 값이 null 또는 undefined인 경우에 우변의 값을 반환합니다. 이를 통해 프로그래머는 값의 존재 여부를 안전하게 확인하고 대체 값을 지정할 수 있습니다.",
    },
    {
      questionText:
        "조건부 렌더링을 사용하여 data가 있을 때만 게시글 정보를 출력하는 코드를 완성하세요.",
      code: `
        import { useQuery, gql } from '@apollo/client';
        
        const FETCH_BOARD = gql\`
          query {
            fetchBoard(number: 3) {
              writer
              title
              contents
            }
          }
        \`;
        
        export default function Page() {
          const { data } = useQuery(FETCH_BOARD);
        
          return (
            <div>
              <div>3번 게시글 이동이 완료되었습니다</div>
        
              {_______ && (
                <>
                  <div>작성자: {data.fetchBoard.writer}</div>
                  <div>제목: {data.fetchBoard.title}</div>
                  <div>내용: {data.fetchBoard.contents}</div>
                </>
              )}
            </div>
          );
        }
      `,
      answerOptions: [
        "data",
        "data.fetchBoard",
        "data !== null",
        "data !== undefined",
      ],
      answer: "data",
      explanation:
        "조건부 렌더링은 조건에 따라 다른 컴포넌트를 렌더링하는 방식입니다. 이 경우 data가 있을 때만 게시글 정보를 출력하므로, 조건부 렌더링을 위해 'data'를 사용합니다.",
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
