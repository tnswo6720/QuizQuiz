import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "타입스크립트에서, 이벤트 핸들러 함수의 매개변수 타입을 지정하는 방법은 무엇인가요?",
      code: `
      import { useState } from "react";
      import type { ChangeEvent } from "react";
    
      export default function BoardWrite() {
        const [writer, setWriter] = useState("");
    
        const onChangeWriter = ______ {
          setWriter(event.target.value);
        };
    
        return (
          <div>
            <input onChange={onChangeWriter} />
          </div>
        );
      }
      `,
      answerOptions: [
        "(event) =>",
        "(event: ChangeEvent<HTMLInputElement>) =>",
        "(event: Event) =>",
        "(event: InputEvent) =>",
      ],
      answer: "(event: ChangeEvent<HTMLInputElement>) =>",
      explanation:
        "타입스크립트에서는 이벤트 핸들러 함수의 매개변수에 타입을 지정해야 합니다. 입력 이벤트의 경우 'ChangeEvent<HTMLInputElement>' 타입을 사용합니다.",
    },
    {
      questionText:
        "타입스크립트에서, 함수의 반환 타입을 지정하는 방법은 무엇인가요?",
      code: `
      import { useMutation } from "@apollo/client";
      import { 나의그래프큐엘셋팅 } from "./BoardWrite.queries";
      import { useRouter } from "next/router";
      import { useState } from "react";
    
      export default function BoardWrite() {
        const router = useRouter();
        const [writer, setWriter] = useState("");
        const [나의함수] = useMutation(나의그래프큐엘셋팅);
    
        const onClickSubmit = async ______ {
          const result = await 나의함수({
            variables: {
              writer: writer
            },
          });
          router.push(\`/section09/09-04-boards/\${result.data.createBoard.number}\`);
        };
    
        return (
          <div>
            <button onClick={onClickSubmit}>Submit</button>
          </div>
        );
      }
      `,
      answerOptions: [
        "(): void =>",
        "(): Promise<void> =>",
        "(): Promise<any> =>",
        "(): any =>",
      ],
      answer: "(): Promise<void> =>",
      explanation:
        "타입스크립트에서는 함수의 반환 타입을 지정해야 합니다. 비동기 함수의 경우, 반환 타입은 'Promise'이며, 이 함수가 반환값을 가지지 않는 경우 'void'를 사용하여 'Promise<void>' 타입을 지정합니다.",
    },
    {
      questionText:
        "타입스크립트에서, 변수의 타입을 명시적으로 지정하는 방법은 무엇인가요?",
      code: `
      import { useRouter } from "next/router";
      import type { IMyvariables } from "./BoardWrite.types";
    
      export default function BoardWrite() {
        const router = useRouter();
    
        const onClickUpdate = async () => {
          ______ myvariables = {
            number: Number(router.query.number),
          };
    
          // ... 나머지 코드 ...
        };
    
        // ... 나머지 코드 ...
      }
      `,
      answerOptions: [
        "let myvariables: IMyvariables =",
        "const myvariables: IMyvariables =",
        "var myvariables: IMyvariables =",
        "myvariables: IMyvariables =",
      ],
      answer: "const myvariables: IMyvariables =",
      explanation:
        "타입스크립트에서는 변수를 선언할 때 그 변수의 타입을 지정할 수 있습니다. 이때, '변수명: 타입 =' 형식을 사용하며, 변경되지 않는 변수는 'const'를 사용하여 선언합니다.",
    },
    {
      questionText:
        "타입스크립트에서, 리액트 컴포넌트의 props의 타입을 지정하는 방법은 무엇인가요?",
      code: `
      import { useState } from "react";
      import type { IBoardWriteProps } from "./BoardWrite.types";
    
      export default function BoardWrite(______) {
        const [writer, setWriter] = useState("");
    
        // ... 나머지 코드 ...
      }
      `,
      answerOptions: [
        "props: IBoardWriteProps",
        "props = IBoardWriteProps",
        "props == IBoardWriteProps",
        "props === IBoardWriteProps",
      ],
      answer: "props: IBoardWriteProps",
      explanation:
        "타입스크립트에서는 리액트 컴포넌트의 props의 타입을 지정할 수 있습니다. 이때, 'props: 타입' 형식을 사용합니다.",
    },
    {
      questionText:
        "타입스크립트에서 타입 별칭을 사용하는 올바른 방법은 무엇인가요?",
      code: `
      _____ IMyvariables = {
        number: number,
        writer?: string,
        title?: string,
        contents?: string,
      };
      `,
      answerOptions: [
        "alias IMyvariables =",
        "type IMyvariables =",
        "let IMyvariables =",
        "const IMyvariables =",
      ],
      answer: "type IMyvariables =",
      explanation:
        "타입스크립트에서는 'type' 키워드를 사용하여 타입 별칭을 정의할 수 있습니다. 이 별칭은 새 타입을 만드는 것이 아니라 이미 있는 타입에 다른 이름을 붙이는 것입니다.",
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

// 타입스크립트의 개념

// 타입스크립트 만드는 방법

// 타입스크립트 설치 과정(yarn으로 되어 있을 경우)
// 을 명령어 중심으로

// dependencies와 devDependecies의 차이

// tsconfig.json은 무엇인가?

// nest.js에서 tsconfig.json이 빈칸일 때 감지를 해서 자동적으로 채워지게 하는 방법.
// 그리고 해당 방법을 실행하기 위해 수행해야할 명령어

// 타입스크립트의 용도는?

// js를 tsx로 바꾸는 과정

// jsx가 무엇인가

// tsx와 ts의 차이점
