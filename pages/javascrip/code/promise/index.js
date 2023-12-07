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
        "다음 코드에서 'fetchData' 함수를 호출하는 부분에 들어갈 콜백 함수를 정의하는 키워드는 무엇인가요?",
      code: `
        function fetchData(callback) {
          setTimeout(() => {
            callback('Data fetched!');
          }, 2000);
        }
    
        fetchData(______(data) => {
          console.log(data);
        });
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "function",
      explanation:
        "콜백 함수를 정의하기 위해서는 'function' 키워드가 필요합니다.",
    },
    {
      questionText:
        "다음 코드에서 'fetchData' 함수가 반환한 프로미스가 성공적으로 완료됐을 때 호출될 콜백 함수를 정의하는 키워드는 무엇인가요?",
      code: `
        function fetchData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Data fetched!');
            }, 2000);
          });
        }
    
        fetchData().then(______(data) => {
          console.log(data);
        });
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "function",
      explanation:
        "'then' 메서드는 프로미스가 성공적으로 완료됐을 때 호출되는 콜백 함수를 인자로 받습니다. 이 콜백 함수를 정의하기 위해서는 'function' 키워드가 필요합니다.",
    },
    {
      questionText:
        "다음 코드에서 'printData' 함수를 정의하고, 이 함수 내에서 'fetchData' 함수를 호출하는 데 필요한 두 가지 키워드는 무엇인가요?",
      code: `
        function fetchData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Data fetched!');
            }, 2000);
          });
        }
    
        ______ function printData() {
          const data = ______ fetchData();
          console.log(data);
        }
    
        printData();
      `,
      answerOptions: [
        "async, await",
        "await, async",
        "function, promise",
        "promise, function",
      ],
      answer: "async, await",
      explanation:
        "'async' 키워드는 비동기 함수를 정의하고, 'await' 키워드는 프로미스의 결과를 기다리는 데 사용됩니다.",
    },

    {
      questionText:
        "다음 코드에서 'fetchData' 함수가 반환한 프로미스가 거부되었을 때 호출될 콜백 함수를 정의하는 키워드는 무엇인가요?",
      code: `
        function fetchData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject('Error occurred!');
            }, 2000);
          });
        }
    
        fetchData().catch(______(error) => {
          console.log(error);
        });
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "function",
      explanation:
        "'catch' 메서드는 프로미스가 거부됐을 때 호출되는 콜백 함수를 인자로 받습니다. 이 콜백 함수를 정의하기 위해서는 'function' 키워드가 필요합니다.",
    },
    {
      questionText:
        "다음 코드에서 'printData' 함수를 정의하는 데 필요한 키워드는 무엇인가요?",
      code: `
        const fetchData = async () => {
          return 'Data fetched!';
        }
    
        const printData = ______ () => {
          const data = await fetchData();
          console.log(data);
        }
    
        printData();
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "async",
      explanation:
        "'await' 키워드를 사용하려면 함수는 'async' 키워드로 선언되어야 합니다.",
    },
    {
      questionText:
        "다음 코드에서 'fetchData' 함수를 호출하고 그 결과를 기다리는 데 필요한 키워드는 무엇인가요?",
      code: `
        const fetchData = async () => {
          return 'Data fetched!';
        }
    
        const printData = async () => {
          const data = ______ fetchData();
          console.log(data);
        }
    
        printData();
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "await",
      explanation: "'await' 키워드는 프로미스의 결과를 기다리는 데 사용됩니다.",
    },
    {
      questionText:
        "다음 코드에서 비동기 함수를 정의하는 데 필요한 키워드는 무엇인가요?",
      code: `
        ______ function fetchData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Data fetched!');
            }, 2000);
          });
        }
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "async",
      explanation: "'async' 키워드는 비동기 함수를 정의하는데 사용됩니다.",
    },
    {
      questionText:
        "다음 코드에서 프로미스를 반환하는 데 필요한 키워드는 무엇인가요?",
      code: `
        function fetchData() {
          return new ______((resolve, reject) => {
            setTimeout(() => {
              resolve('Data fetched!');
            }, 2000);
          });
        }
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "promise",
      explanation:
        "'new Promise' 키워드를 사용하여 프로미스를 반환할 수 있습니다.",
    },
    {
      questionText:
        "다음 코드에서 비동기 함수 내에서 프로미스의 결과를 기다리는 데 사용되는 키워드는 무엇인가요?",
      code: `
        async function fetchData() {
          const response = await fetch('https://api.example.com/data');
          const data = ______ response.json();
          return data;
        }
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "await",
      explanation:
        "'await' 키워드는 비동기 함수 내에서 프로미스의 결과를 기다리는 데 사용됩니다.",
    },
    {
      questionText:
        "다음 코드에서 'fetchData' 함수가 반환한 프로미스가 성공적으로 완료되거나 거부됐을 때 호출될 콜백 함수를 정의하는 키워드는 무엇인가요?",
      code: `
        function fetchData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (Math.random() < 0.5) {
                resolve('Data fetched!');
              } else {
                reject('Error occurred!');
              }
            }, 2000);
          });
        }
    
        fetchData().finally(______(result) => {
          console.log(result);
        });
      `,
      answerOptions: ["async", "await", "function", "promise"],
      answer: "function",
      explanation:
        "'finally' 메서드는 프로미스가 성공적으로 완료되거나 거부됐을 때 호출되는 콜백 함수를 인자로 받습니다. 이 콜백 함수를 정의하기 위해서는 'function' 키워드가 필요합니다.",
    },
    {
      questionText:
        "다음 코드에서 'fetchData' 함수를 호출하고 그 결과를 기다리는 데 필요한 두 가지 키워드는 무엇인가요?",
      code: `
        function fetchData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('Data fetched!');
            }, 2000);
          });
        }
    
        ______ async function printData() {
          try {
            const data = ______ fetchData();
            console.log(data);
          } catch (error) {
            console.error(error);
          }
        }
    
        printData();
      `,
      answerOptions: [
        "async, await",
        "await, async",
        "function, promise",
        "promise, function",
      ],
      answer: "async, await",
      explanation:
        "비동기 함수를 정의하려면 'async' 키워드가 필요하고, 비동기 함수 내에서 프로미스의 결과를 기다리려면 'await' 키워드가 필요합니다.",
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
