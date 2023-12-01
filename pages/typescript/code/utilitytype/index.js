import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Section,
  Button,
  TextArea,
  OptionsContainer,
  Sectionchoice,
  InputAndButtonContainer,
} from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 TypeScript 유틸리티 타입은 무엇인가요? 이 타입은 원래 타입의 모든 속성을 선택적으로 만듭니다.",
      code: `
      export interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
      }
    
      type aaa = ______<IProfile>;
      `,
      answerOptions: ["Partial", "Required", "Pick", "Omit"],
      answer: "Partial",
      explanation:
        "TypeScript의 'Partial' 유틸리티 타입은 원래 타입의 모든 속성을 선택적으로 만듭니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 TypeScript 유틸리티 타입은 무엇인가요? 이 타입은 원래 타입의 모든 선택적 속성을 필수로 만듭니다.",
      code: `
      export interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
      }
    
      type bbb = ______<IProfile>;
      `,
      answerOptions: ["Partial", "Required", "Pick", "Omit"],
      answer: "Required",
      explanation:
        "TypeScript의 'Required' 유틸리티 타입은 원래 타입의 모든 선택적 속성을 필수로 만듭니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 TypeScript 유틸리티 타입은 무엇인가요? 이 타입은 원래 타입에서 특정 속성만 선택하여 새로운 타입을 만듭니다.",
      code: `
      export interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
      }
    
      type ccc = ______<IProfile, "name" | "age">;
      `,
      answerOptions: ["Partial", "Required", "Pick", "Omit"],
      answer: "Pick",
      explanation:
        "TypeScript의 'Pick' 유틸리티 타입은 원래 타입에서 특정 속성만 선택하여 새로운 타입을 만듭니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 TypeScript 유틸리티 타입은 무엇인가요? 이 타입은 원래 타입에서 특정 속성을 제외하고 새로운 타입을 만듭니다.",
      code: `
      export interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
      }
    
      type ddd = ______<IProfile, "school">;
      `,
      answerOptions: ["Partial", "Required", "Pick", "Omit"],
      answer: "Omit",
      explanation:
        "TypeScript의 'Omit' 유틸리티 타입은 원래 타입에서 특정 속성을 제외하고 새로운 타입을 만듭니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 TypeScript 유틸리티 타입은 무엇인가요? 이 유틸리티 타입은 키-값 쌍으로 객체 타입을 생성합니다.",
      code: `
      export interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
      }
    
      type eee = "철수" | "영희" | "훈이";
      type fff = ______<eee, IProfile>;
      `,
      answerOptions: ["Partial", "Required", "Pick", "Omit", "Record"],
      answer: "Record",
      explanation:
        "TypeScript의 'Record' 유틸리티 타입은 키-값 쌍으로 객체 타입을 생성합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 TypeScript 유틸리티 타입은 무엇인가요? 이 유틸리티 타입은 객체의 속성 이름들을 유니온 타입으로 반환합니다.",
      code: `
      export interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
      }
    
      type ggg = ______<IProfile>;
      `,
      answerOptions: ["Partial", "Required", "Pick", "Omit", "Record", "keyof"],
      answer: "keyof",
      explanation:
        "TypeScript의 'keyof' 유틸리티 타입은 객체의 속성 이름들을 유니온 타입으로 반환합니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 TypeScript의 구문은 무엇인가요? 이 구문은 선언 병합(Declaration Merging)을 가능하게 합니다.",
      code: `
      ______ IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
      }
    
      ______ IProfile {
        candy: number;
      }
      `,
      answerOptions: ["type", "interface"],
      answer: "interface",
      explanation:
        "TypeScript의 'interface'는 선언 병합(Declaration Merging)을 가능하게 합니다. 반면에 'type'은 선언 병합을 지원하지 않습니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 TypeScript 유틸리티 타입은 무엇인가요? 이 유틸리티 타입은 모든 속성을 선택적으로 만들어 사용할 수 있게 합니다.",
      code: `
      export interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
        candy: number;
      }
    
      let profile: ______<IProfile> = {
        candy: 10,
      };
      `,
      answerOptions: ["Partial", "Required", "Pick", "Omit", "Record", "keyof"],
      answer: "Partial",
      explanation:
        "TypeScript의 'Partial' 유틸리티 타입은 원래 타입의 모든 속성을 선택적으로 만듭니다. 따라서, 일부 속성만 포함한 객체를 만들 수 있습니다.",
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
    <Wrapper>
      {questions.length > 0 ? (
        <>
          <Section className="question-section">
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <pre>{questions[currentQuestion].code}</pre>
          </Section>

          {isSubmitted && !isCorrect && (
            <Section className="code-input-section">
              <h2>코드 입력</h2>
              <TextArea
                value={answerCode}
                onChange={(e) => setAnswerCode(e.target.value)}
              />
              <Button onClick={handleNext}>다음 문제</Button>
            </Section>
          )}

          {isSubmitted && (
            <Section className="explanation-section">
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              {isCorrect && <Button onClick={handleNext}>다음 문제</Button>}
            </Section>
          )}

          <Sectionchoice className="answer-section">
            <h2>선택지</h2>
            <OptionsContainer>
              {showHint ? (
                <div>
                  {questions[currentQuestion].answerOptions.map(
                    (option, index) => (
                      <p key={index}>{option}</p>
                    )
                  )}
                </div>
              ) : null}
              {!showHint ? (
                <Button onClick={handleShowHint}>힌트 보기</Button>
              ) : null}
            </OptionsContainer>
            <InputAndButtonContainer>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={isSubmitted}
              />
              <Button onClick={handleSubmit} disabled={!userAnswer}>
                제출
              </Button>
            </InputAndButtonContainer>
          </Sectionchoice>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default Quiz;

// 기본 문법:
// 변수와 상수
// 데이터 타입
// 연산자
// 제어문 (if, for, while 등)

// 반복자가 뭔지
