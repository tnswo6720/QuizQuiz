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
      questionText: "DOM에서 특정 요소를 선택하는 메서드를 작성하세요.",
      code: `
        document.______('div');
      `,
      answerOptions: [
        "getElementsByName",
        "querySelector",
        "getElementById",
        "appendChild",
      ],
      answer: "querySelector",
      explanation:
        "JavaScript에서 DOM의 특정 요소를 선택하기 위해 'querySelector' 메서드를 사용할 수 있습니다.",
    },
    {
      questionText: "DOM에서 새로운 요소를 생성하는 메서드를 작성하세요.",
      code: `
        document.______('div');
      `,
      answerOptions: [
        "createElement",
        "createAttribute",
        "appendChild",
        "removeChild",
      ],
      answer: "createElement",
      explanation:
        "JavaScript에서 DOM에 새로운 요소를 생성하기 위해 'createElement' 메서드를 사용할 수 있습니다.",
    },
    {
      questionText: "XMLHttpRequest 객체를 만드는 코드를 작성하세요.",
      code: `
        const xhr = new ______();
      `,
      answerOptions: [
        "XMLHttpRequest",
        "HTTPRequest",
        "AjaxRequest",
        "FetchRequest",
      ],
      answer: "XMLHttpRequest",
      explanation:
        "JavaScript에서 서버와 데이터를 교환하기 위한 객체를 만들 때 'new XMLHttpRequest()'를 사용합니다. 이것은 AJAX 프로그래밍의 기본적인 구성 요소입니다.",
    },
    {
      questionText:
        "DOM에서 특정 요소에 이벤트 리스너를 추가하는 메서드를 작성하세요.",
      code: `
        const button = document.querySelector('button');
        button.______('click', handleClick);
      `,
      answerOptions: ["addEventListener", "attachEvent", "addEvent", "on"],
      answer: "addEventListener",
      explanation:
        "JavaScript에서 DOM의 특정 요소에 이벤트 리스너를 추가하기 위해 'addEventListener' 메서드를 사용할 수 있습니다.",
    },
    {
      questionText:
        "DOM에서 특정 요소의 자식 요소를 모두 제거하는 코드를 작성하세요.",
      code: `
        const element = document.querySelector('div');
        while (element.______) {
          element.removeChild(element.firstChild);
        }
      `,
      answerOptions: [
        "firstChild",
        "lastChild",
        "nextSibling",
        "previousSibling",
      ],
      answer: "firstChild",
      explanation:
        "JavaScript에서 DOM의 특정 요소의 자식 요소를 모두 제거하려면 'firstChild' 속성과 'removeChild' 메서드를 사용할 수 있습니다.",
    },
    {
      questionText:
        "Fetch API를 사용해 서버로 GET 요청을 보내는 코드를 작성하세요.",
      code: `
        fetch('https://api.example.com/data', {
          method: ______,
        });
      `,
      answerOptions: ["'GET'", "'POST'", "'PUT'", "'DELETE'"],
      answer: "'GET'",
      explanation:
        "JavaScript에서 Fetch API를 사용해 서버로 GET 요청을 보내려면 'method' 옵션에 'GET'을 지정할 수 있습니다.",
    },
    {
      questionText: "DOM에서 특정 요소의 텍스트를 변경하는 속성을 작성하세요.",
      code: `
        const element = document.querySelector('div');
        element.______ = 'Hello, World!';
      `,
      answerOptions: ["textContent", "innerText", "innerHTML", "outerHTML"],
      answer: "textContent",
      explanation:
        "JavaScript에서 DOM의 특정 요소의 텍스트를 변경하려면 'textContent' 속성을 사용할 수 있습니다.",
    },
    {
      questionText:
        "DOM에서 특정 요소를 부모 요소로부터 제거하는 메서드를 작성하세요.",
      code: `
        const element = document.querySelector('div');
        element.______(element);
      `,
      answerOptions: [
        "removeChild",
        "deleteChild",
        "detachChild",
        "excludeChild",
      ],
      answer: "removeChild",
      explanation:
        "JavaScript에서 DOM의 특정 요소를 부모 요소로부터 제거하려면 'removeChild' 메서드를 사용할 수 있습니다.",
    },
    {
      questionText:
        "Fetch API를 사용해 서버로 POST 요청을 보내는 코드를 작성하세요.",
      code: `
        fetch('https://api.example.com/data', {
          method: ______,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ key: 'value' })
        });
      `,
      answerOptions: ["'GET'", "'POST'", "'PUT'", "'DELETE'"],
      answer: "'POST'",
      explanation:
        "JavaScript에서 Fetch API를 사용해 서버로 POST 요청을 보내려면 'method' 옵션에 'POST'를 지정하고, 'headers'와 'body' 옵션을 적절히 설정할 수 있습니다.",
    },
    {
      questionText:
        "DOM에서 특정 요소의 클래스를 추가하는 메서드는 무엇인가요?",
      code: `
        const element = document.querySelector('div');
        element.classList.______('new-class');
      `,
      answerOptions: ["addClass", "pushClass", "appendClass", "add"],
      answer: "add",
      explanation:
        "JavaScript에서 DOM의 특정 요소에 클래스를 추가하려면 'classList.add' 메서드를 사용할 수 있습니다.",
    },
    {
      questionText:
        "Fetch API를 사용해 서버로부터 데이터를 받아올 때 반환값은 무엇인가요?",
      code: `
        fetch('https://api.example.com/data')
          .then(response => response.______())
          .then(data => console.log(data));
      `,
      answerOptions: ["json", "text", "blob", "arrayBuffer"],
      answer: "json",
      explanation:
        "JavaScript에서 Fetch API를 사용해 서버로부터 데이터를 받아올 때, 'response.json()' 메서드를 통해 JSON 형태의 데이터를 받아올 수 있습니다.",
    },
    {
      questionText:
        "XMLHttpRequest 객체의 readyState가 4일 때, 이는 무엇을 의미하나요?",
      code: `
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === ______) {
            console.log(xhr.responseText);
          }
        };
        xhr.open('GET', 'https://api.example.com/data');
        xhr.send();
      `,
      answerOptions: [
        "요청이 초기화되었다.",
        "서버와의 연결이 설정되었다.",
        "요청이 처리 중이다.",
        "요청이 완료되고 응답이 준비되었다.",
      ],
      answer: "요청이 완료되고 응답이 준비되었다.",
      explanation:
        "XMLHttpRequest 객체의 readyState가 4인 경우, 이는 요청이 완료되고 응답이 준비된 상태를 의미합니다.",
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
