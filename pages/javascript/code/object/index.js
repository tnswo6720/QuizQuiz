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
        "다음 코드에서 빈 칸에 들어갈 수 있는 객체의 속성은 무엇인가요?",
      code: `
      const student = {
        name: 'Kim',
        age: 20,
        ______
      }
    
      console.log(student.gender);
      `,
      answerOptions: [
        "gender: 'female'",
        "score: 85",
        "subject: 'Math'",
        "grade: 'A'",
      ],
      answer: "gender: 'female'",
      explanation:
        "여기서는 'gender' 속성을 콘솔에 출력하려 하므로, 'gender: 'female''가 적절한 속성입니다.",
    },
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 메서드는 무엇인가요?",
      code: `
      const student = {
        name: 'Kim',
        greet: ______
      }
    
      student.greet();
      `,
      answerOptions: [
        "function() { console.log('Hello!'); }",
        "'Hello!'",
        "'greet()'",
        "greet: 'Hello!'",
      ],
      answer: "function() { console.log('Hello!'); }",
      explanation:
        "자바스크립트에서 객체의 메서드는 함수로 정의합니다. 이 경우, 'function() { console.log('Hello!'); }'가 적절한 메서드입니다.",
    },
    {
      questionText: "다음 코드에서 빈 칸에 들어갈 수 있는 메서드는 무엇인가요?",
      code: `
      const student = {
        name: 'Kim',
        greet: ______
      }
    
      console.log(student.greet());
      `,
      answerOptions: [
        "function() { return 'Hello!'; }",
        "'Hello!'",
        "function() { console.log('Hello!'); }",
        "greet()",
      ],
      answer: "function() { return 'Hello!'; }",
      explanation:
        "여기서는 greet 메서드의 반환 값을 콘솔에 출력하려 하므로, 'function() { return 'Hello!'; }'가 적절한 메서드입니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 객체의 속성을 작성하세요.",
      code: `
      const car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        ______
      }
    
      console.log(car.color);
      `,
      answerOptions: [
        "color: 'red'",
        "color: 2020",
        "Toyota: 'color'",
        "color: 'Camry'",
      ],
      answer: "color: 'red'",
      explanation:
        "여기서는 'color' 속성을 콘솔에 출력하려 하므로, 'color: 'red''가 적절한 속성입니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 프로토타입 메서드는 무엇인가요?",
      code: `
      function Student(name, age) {
        this.name = name;
        this.age = age;
      }
    
      Student.prototype.______ = function() {
        return this.name;
      }
    
      const student = new Student('Kim', 20);
      console.log(student.getName());
      `,
      answerOptions: ["getName", "name", "getAge", "age"],
      answer: "getName",
      explanation:
        "여기서는 getName 메서드를 호출하려 하므로, 'getName'이 적절한 메서드 이름입니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 객체의 메서드는 무엇인가요?",
      code: `
      const teacher = {
        name: 'Park',
        subject: 'Math',
        ______
      }
    
      teacher.teach();
      `,
      answerOptions: [
        "teach: function() { console.log('Teaching...'); }",
        "'Teaching...'",
        "function() { console.log('Teaching...'); }",
        "teach()",
      ],
      answer: "teach: function() { console.log('Teaching...'); }",
      explanation:
        "자바스크립트에서 객체의 메서드는 함수로 정의합니다. 이 경우, 'teach: function() { console.log('Teaching...'); }'가 적절한 메서드입니다.",
    },
    {
      questionText:
        "다음 코드에서 빈 칸에 들어갈 수 있는 객체의 속성은 무엇인가요?",
      code: `
      const car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        ______
      }
    
      console.log(car.owner);
      `,
      answerOptions: [
        "owner: 'Kim'",
        "color: 'red'",
        "Toyota: 'owner'",
        "owner: 2020",
      ],
      answer: "owner: 'Kim'",
      explanation:
        "여기서는 'owner' 속성을 콘솔에 출력하려 하므로, 'owner: 'Kim''이 적절한 속성입니다.",
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
