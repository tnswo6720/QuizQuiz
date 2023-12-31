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
        "아래의 코드에서 빈칸에 들어갈 수 있는 TypeScript 키워드는 무엇일까요?",
      code: `
          class AppController {
            constructor(______ readonly appService: AppService) {}
    
            @Get()
            getHome() {
              return 'Home Page';
            }
          }
        `,
      answerOptions: ["public", "private", "protected", "readonly"],
      answer: "private",
      explanation:
        "이 경우, 'appService' 속성은 클래스 내에서만 접근되므로 'private'이 적절합니다.",
    },
    {
      questionText:
        "NestJS에서 HTTP 요청 메소드를 처리하는 데코레이터는 무엇일까요?",
      code: `
          class AppController {
            constructor(private readonly appService: AppService) {}
    
            ______
            getHome() {
              return 'Home Page';
            }
          }
        `,
      answerOptions: ["@Post()", "@Get()", "@Put()", "@Delete()"],
      answer: "@Get()",
      explanation:
        "이 경우, 'getHome' 메소드는 GET 요청을 처리하므로 '@Get()' 데코레이터를 사용합니다.",
    },
    {
      questionText:
        "NestJS에서 특정 경로의 GET 요청을 처리하려면 어떻게 해야 할까요?",
      code: `
          class AppController {
            constructor(private readonly appService: AppService) {}
    
            @Get(______)
            getPost() {
              return 'Post Page';
            }
          }
        `,
      answerOptions: ["'post'", "'/post'", "/post", "post"],
      answer: "'post'",
      explanation:
        "'@Get()' 데코레이터의 인자로 경로를 문자열 형태로 전달합니다. 이 경우, 'post' 경로의 GET 요청을 처리하므로 '@Get('post')'를 사용합니다.",
    },
    {
      questionText:
        "NestJS와 TypeScript를 사용하여 HTTP GET 요청을 처리하는 메소드를 작성하려고 합니다. `/api/post` 경로에서, 특정 JSON을 반환해야 합니다. 아래의 코드 빈칸에 들어갈 내용은 무엇일까요?",
      code: `
      import { Controller, Get } from '@nestjs/common';
    
      interface Post {
        author: string;
        title: string;
        content: string;
        likeCount: number;
        commentCount: number;
      }
    
      @Controller(______)
      export class PostController {
        @Get()
        getPost(): Post {
          return {
            author: 'newjeans_offcial',
            title: '뉴진스 민지',
            content: '메이크업 고치고 있는 민지',
            likeCount: 1000000,
            commentCount: 999999,
          };
        }
      }
      `,
      answerOptions: ["'post'", "'/post'", "/post", "post"],
      answer: "'post'",
      explanation:
        "'@Controller()' 데코레이터의 인자로 경로를 문자열 형태로 전달합니다. 이 경우, 'post' 경로를 처리하므로 '@Controller('post')'를 사용합니다.",
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
        return (
          ans.replace(/\s/g, "") === correctAnswers[index].replace(/\s/g, "")
        );
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
                  {questions[currentQuestion].answerOptions?.map(
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
