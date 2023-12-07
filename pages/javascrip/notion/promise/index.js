import React, { useState, useEffect } from "react";
import { Wrapper, Section, Button, CodeBlock } from "./style.js";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "자바스크립트에서 동기와 비동기의 차이점에 대해 설명해주세요.",
      code: "",
      answerOptions: [
        "동기는 작업을 순차적으로 진행하며, 한 작업이 끝나야 다음 작업을 진행한다. 비동기는 여러 작업이 동시에 진행되며, 작업의 진행 상황과 상관없이 다음 작업을 진행한다.",
        "동기는 여러 작업이 동시에 진행되며, 작업의 진행 상황과 상관없이 다음 작업을 진행한다. 비동기는 작업을 순차적으로 진행하며, 한 작업이 끝나야 다음 작업을 진행한다.",
        "동기와 비동기는 자바스크립트의 작업 처리 방식을 나타내며, 두 방식 모두 작업을 순차적으로 처리한다.",
        "동기는 작업을 순차적으로 진행하며, 한 작업이 끝나면 즉시 다음 작업을 시작한다. 비동기는 여러 작업을 동시에 처리하며, 작업이 끝날 때까지 기다리지 않고 다음 작업을 시작한다.",
      ],
      answer:
        "동기는 작업을 순차적으로 진행하며, 한 작업이 끝나야 다음 작업을 진행한다. 비동기는 여러 작업이 동시에 진행되며, 작업의 진행 상황과 상관없이 다음 작업을 진행한다.",
      explanation:
        "동기 방식은 작업을 순차적으로 처리하는 반면, 비동기 방식은 작업을 병렬로 처리합니다. 비동기 방식은 특정 작업이 완료되기를 기다리지 않고 다음 작업을 시작할 수 있기 때문에 효율적인 작업 처리가 가능합니다.",
      explanationCode: `
      // 동기적 실행
      console.log('1');
      console.log('2');
      console.log('3');
    
      // 비동기적 실행
      console.log('1');
      setTimeout(() => console.log('2'), 0);
      console.log('3');
      `,
    },
    {
      questionText: "콜백 함수에 대해 설명하고, 그 예시를 들어주세요.",
      code: "",
      answerOptions: [
        "콜백 함수는 함수의 인자로 전달되어, 해당 함수에 의해 호출되는 함수를 의미한다. 이는 주로 비동기 작업을 처리할 때 사용된다.",
        "콜백 함수는 함수의 인자로 전달되어, 해당 함수에 의해 호출되는 함수를 의미한다. 이는 주로 동기 작업을 처리할 때 사용된다.",
        "콜백 함수는 함수의 결과를 반환하는 함수를 의미한다. 이는 주로 비동기 작업을 처리할 때 사용된다.",
        "콜백 함수는 함수의 결과를 반환하는 함수를 의미한다. 이는 주로 동기 작업을 처리할 때 사용된다.",
      ],
      answer:
        "콜백 함수는 함수의 인자로 전달되어, 해당 함수에 의해 호출되는 함수를 의미한다. 이는 주로 비동기 작업을 처리할 때 사용된다.",
      explanation:
        "콜백 함수는 함수의 인자로 전달되어, 해당 함수에 의해 호출되는 함수를 의미합니다. 이는 주로 비동기 작업을 처리할 때 사용됩니다. 콜백 함수를 사용하면, 비동기 작업이 완료된 후에 원하는 작업을 실행할 수 있습니다.",
      explanationCode: `
      function greeting(name) {
        console.log('Hello ' + name);
      }
    
      function processUserInput(callback) {
        let name = prompt('Please enter your name.');
        callback(name);
      }
    
      processUserInput(greeting); // Hello [Entered Name]
      `,
    },
    {
      questionText: "프로미스(Promise)에 대해 설명하고, 그 예시를 들어주세요.",
      code: "",
      answerOptions: [
        "프로미스는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체이다. 프로미스는 성공 또는 실패와 관련된 처리 방법을 연결할 수 있는 메서드를 제공한다.",
        "프로미스는 동기 작업의 최종 완료 또는 실패를 나타내는 객체이다. 프로미스는 성공 또는 실패와 관련된 처리 방법을 연결할 수 있는 메서드를 제공한다.",
        "프로미스는 비동기 작업의 중간 과정을 나타내는 객체이다. 프로미스는 성공 또는 실패와 관련된 처리 방법을 연결할 수 있는 메서드를 제공한다.",
        "프로미스는 동기 작업의 중간 과정을 나타내는 객체이다. 프로미스는 성공 또는 실패와 관련된 처리 방법을 연결할 수 있는 메서드를 제공한다.",
      ],
      answer:
        "프로미스는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체이다. 프로미스는 성공 또는 실패와 관련된 처리 방법을 연결할 수 있는 메서드를 제공한다.",
      explanation:
        "프로미스는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체입니다. 프로미스는 성공(fulfilled) 상태, 실패(rejected) 상태, 대기(pending) 상태, 처리됨(settled) 상태를 가질 수 있습니다. 프로미스는 then, catch, finally와 같은 메서드를 제공하여 비동기 작업의 결과를 처리할 수 있게 합니다.",
      explanationCode: `
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Promise resolved');
        }, 2000);
      });
    
      promise.then((value) => {
        console.log(value); // 'Promise resolved'
      });
      `,
    },
    {
      questionText:
        "자바스크립트에서 이벤트 루프(Event Loop)에 대해 설명해주세요.",
      code: "",
      answerOptions: [
        "이벤트 루프는 자바스크립트가 단일 스레드에서 비동기 작업을 처리할 수 있도록 돕는 메커니즘이다. 이벤트 루프는 호출 스택이 비어 있을 때만 태스크 큐에서 작업을 가져와 처리한다.",
        "이벤트 루프는 자바스크립트가 단일 스레드에서 동기 작업을 처리할 수 있도록 돕는 메커니즘이다. 이벤트 루프는 호출 스택이 비어 있을 때만 태스크 큐에서 작업을 가져와 처리한다.",
        "이벤트 루프는 자바스크립트가 다중 스레드에서 비동기 작업을 처리할 수 있도록 돕는 메커니즘이다. 이벤트 루프는 호출 스택이 가득 찼을 때만 태스크 큐에서 작업을 가져와 처리한다.",
        "이벤트 루프는 자바스크립트가 다중 스레드에서 동기 작업을 처리할 수 있도록 돕는 메커니즘이다. 이벤트 루프는 호출 스택이 가득 찼을 때만 태스크 큐에서 작업을 가져와 처리한다.",
      ],
      answer:
        "이벤트 루프는 자바스크립트가 단일 스레드에서 비동기 작업을 처리할 수 있도록 돕는 메커니즘이다. 이벤트 루프는 호출 스택이 비어 있을 때만 태스크 큐에서 작업을 가져와 처리한다.",
      explanation:
        "이벤트 루프는 자바스크립트의 핵심적인 부분으로, 비동기 작업을 관리합니다. 이벤트 루프는 호출 스택에 작업이 없을 때 태스크 큐에서 작업을 가져와 호출 스택에 넣습니다. 이런 방식으로 자바스크립트는 단일 스레드에서도 비동기 작업을 처리할 수 있습니다.",
      explanationCode: `
      console.log('Hello');
    
      setTimeout(() => {
        console.log('JavaScript');
      }, 0);
    
      console.log('World');
    
      // 출력 결과
      // Hello
      // World
      // JavaScript
      `,
    },

    // 추가 문제를 넣을 수 있습니다.
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    const shuffledQuestions = shuffleArray(initialQuestions).map(
      (question) => ({
        ...question,
        answerOptions: shuffleArray(question.answerOptions),
      })
    );
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const handleSubmit = () => {
    const formattedUserAnswer = userAnswer.replace(/\s/g, "").toLowerCase();
    const formattedCorrectAnswer = questions[currentQuestion].answer
      .replace(/\s/g, "")
      .toLowerCase();

    setIsCorrect(formattedUserAnswer === formattedCorrectAnswer);
    setIsSubmitted(true);
  };
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
  };

  return (
    <Wrapper>
      {questions.length > 0 ? (
        <>
          <Section>
            <h2>문제</h2>
            <p>{questions[currentQuestion].questionText}</p>
            <CodeBlock>{questions[currentQuestion].code}</CodeBlock>
          </Section>

          {isSubmitted && (
            <Section>
              <h2>정답 설명</h2>
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <CodeBlock>
                {questions[currentQuestion].explanationCode}
              </CodeBlock>
              {currentQuestion < questions.length - 1 && (
                <Button onClick={handleNext}>다음 문제</Button>
              )}
            </Section>
          )}

          <Section>
            <h2>선택지</h2>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <Button onClick={handleSubmit}>제출</Button>
          </Section>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default Quiz;
