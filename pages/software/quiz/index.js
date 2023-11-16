import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "소프트웨어 생명주기 모델 중 요구사항 분석 단계에서 수행되는 활동은 무엇인가요?",
      code: "",
      answerOptions: [
        "요구사항 도출",
        "소프트웨어 설계",
        "코딩 및 구현",
        "소프트웨어 테스트",
      ],
      answer: "요구사항 도출",
      explanation:
        "소프트웨어 생명주기 모델에서 요구사항 분석 단계는 사용자와 상호작용하여 필요한 요구사항을 도출하는 단계입니다. 이 단계에서는 사용자 요구사항을 수집하고 분석하여 소프트웨어의 기능과 제약조건을 정의합니다.",
    },
    {
      questionText:
        "소프트웨어 개발 방법론 중 워터폴 모델의 특징은 무엇인가요?",
      code: "",
      answerOptions: [
        "선형적인 개발 절차",
        "반복적인 개발 절차",
        "기능 중심의 개발 절차",
        "프로토타입 기반의 개발 절차",
      ],
      answer: "선형적인 개발 절차",
      explanation:
        "워터폴 모델은 소프트웨어 개발을 선형적인 개발 절차로 수행하는 방법론입니다. 요구사항 분석, 설계, 구현, 테스트, 유지보수 등의 단계를 차례로 진행하며, 한 단계가 완료되면 다음 단계로 진행합니다.",
    },
    {
      questionText: "소프트웨어 디버깅이란 무엇인가요?",
      code: "",
      answerOptions: [
        "에러를 찾고 수정하는 과정",
        "소스 코드를 작성하는 과정",
        "프로그램의 실행 결과를 확인하는 과정",
        "소프트웨어 요구사항을 도출하는 과정",
      ],
      answer: "에러를 찾고 수정하는 과정",
      explanation:
        "소프트웨어 디버깅은 프로그램이 예상대로 동작하지 않을 때, 문제를 찾고 수정하는 과정을 의미합니다. 디버깅을 통해 프로그램의 오류를 발견하고 해결하여 정상적으로 동작하도록 할 수 있습니다.",
    },
    {
      questionText:
        "소프트웨어 테스트에서 '흰박스 테스트'는 무엇을 의미하나요?",
      code: "",
      answerOptions: [
        "소스 코드의 내부 구조를 고려한 테스트",
        "사용자 인터페이스를 통한 테스트",
        "실제 환경에서의 전체 시스템 테스트",
        "테스트 케이스를 작성하지 않고 테스트하는 것",
      ],
      answer: "소스 코드의 내부 구조를 고려한 테스트",
      explanation:
        "흰박스 테스트(White-box Testing)는 소프트웨어 테스트 중 소스 코드의 내부 구조를 고려하여 테스트하는 방법입니다. 테스트 케이스를 작성하고 코드의 논리적인 경로를 따라 실행하며 코드의 모든 분기와 조건을 테스트합니다.",
    },
    {
      questionText: "인터프리터와 컴파일러의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "실행 속도",
        "번역 과정",
        "코드 실행 방식",
        "플랫폼 호환성",
      ],
      answer: "번역 과정",
      explanation:
        "인터프리터와 컴파일러의 주요 차이점은 번역 과정에 있습니다. 컴파일러는 소스 코드를 전체적으로 번역하여 기계어로 변환한 후 실행하는 반면, 인터프리터는 소스 코드를 한 줄씩 읽어들여 즉시 실행합니다.",
    },
    {
      questionText: "인터프리터의 장점은 무엇인가요?",
      code: "",
      answerOptions: [
        "컴파일 시간 단축",
        "실행 속도 향상",
        "디버깅 용이성",
        "메모리 효율성",
      ],
      answer: "디버깅 용이성",
      explanation:
        "인터프리터의 장점 중 하나는 디버깅 용이성입니다. 인터프리터는 소스 코드를 한 줄씩 실행하기 때문에 디버깅 과정에서 오류를 쉽게 찾고 수정할 수 있습니다.",
    },
    {
      questionText: "컴파일러의 장점은 무엇인가요?",
      code: "",
      answerOptions: [
        "실행 속도 향상",
        "간단한 코드 작성",
        "메모리 효율성",
        "플랫폼 호환성",
      ],
      answer: "실행 속도 향상",
      explanation:
        "컴파일러의 장점 중 하나는 실행 속도 향상입니다. 컴파일러는 소스 코드를 전체적으로 번역하여 기계어로 변환하기 때문에 한 번의 번역 과정 이후에는 실행 속도가 빠릅니다.",
    },
    {
      questionText:
        "인터프리터 언어와 컴파일러 언어의 예시로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "인터프리터 언어: C++, 컴파일러 언어: Python",
        "인터프리터 언어: Python, 컴파일러 언어: C++",
        "인터프리터 언어: Java, 컴파일러 언어: JavaScript",
        "인터프리터 언어: JavaScript, 컴파일러 언어: Java",
      ],
      answer: "인터프리터 언어: Python, 컴파일러 언어: C++",
      explanation:
        "인터프리터 언어로는 Python이 대표적이며, 컴파일러 언어로는 C++가 대표적입니다. Python은 소스 코드를 한 줄씩 읽어들여 즉시 실행하는 인터프리터 언어이고, C++은 소스 코드를 전체적으로 번역하여 기계어로 변환하는 컴파일러 언어입니다.",
    },
    {
      questionText:
        "JIT(Just-In-Time) 컴파일러의 동작 방식에 대해 옳은 설명은 무엇인가요?",
      code: "",
      answerOptions: [
        "소스 코드를 전체적으로 한 번에 기계어로 변환하여 실행",
        "실행 시점에 필요한 부분만 기계어로 변환하여 실행",
        "소스 코드를 해석하여 중간 표현 형태로 변환한 후 실행",
        "컴파일된 코드를 저장하여 다음 실행 때 재사용",
      ],
      answer: "실행 시점에 필요한 부분만 기계어로 변환하여 실행",
      explanation:
        "JIT 컴파일러는 소스 코드를 실행 시점에 필요한 부분만 기계어로 변환하여 실행합니다. 이는 전체 코드를 한 번에 변환하지 않고, 실제 실행되는 시점에 필요한 부분을 동적으로 컴파일하여 실행 속도를 향상시키는 방식입니다.",
    },
    {
      questionText: "JIT 컴파일러의 장점은 무엇인가요?",
      code: "",
      answerOptions: [
        "실행 속도 향상",
        "컴파일 시간 단축",
        "메모리 효율성",
        "플랫폼 호환성",
      ],
      answer: "실행 속도 향상",
      explanation:
        "JIT 컴파일러는 실행 시점에 필요한 부분만 기계어로 변환하여 실행하므로 실행 속도를 향상시킬 수 있습니다. 동적으로 컴파일되는 부분은 기계어로 변환된 후 캐시에 저장되어 다음 실행 때 재사용됩니다.",
    },
    {
      questionText: "JIT 컴파일러의 단점은 무엇인가요?",
      code: "",
      answerOptions: [
        "컴파일 시간이 오래 걸림",
        "메모리 사용량이 증가",
        "플랫폼 호환성이 낮음",
        "디버깅이 어려움",
      ],
      answer: "메모리 사용량이 증가",
      explanation:
        "JIT 컴파일러는 실행 시점에 필요한 부분을 동적으로 컴파일하므로 메모리 사용량이 증가할 수 있습니다. 기계어로 변환된 코드와 중간 표현 형태의 코드가 함께 메모리에 존재하기 때문입니다.",
    },
    {
      questionText:
        "JIT 컴파일러가 주로 사용되는 프로그래밍 언어는 무엇인가요?",
      code: "",
      answerOptions: ["C", "Python", "Java", "JavaScript"],
      answer: "Java",
      explanation:
        "JIT 컴파일러는 주로 Java와 같은 언어에서 사용됩니다. Java는 소스 코드를 바이트 코드로 변환한 후, 실행 시점에 JIT 컴파일러를 통해 바이트 코드를 기계어로 변환하여 실행합니다.",
    },
    {
      questionText:
        "머신 코드(Machine Code)에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "기계어로 직접 실행 가능한 코드",
        "고수준 언어로 작성된 코드",
        "컴파일러에 의해 생성된 중간 코드",
        "가상 머신에서 실행되는 코드",
      ],
      answer: "기계어로 직접 실행 가능한 코드",
      explanation:
        "머신 코드(Machine Code)는 컴퓨터 프로세서가 직접 실행할 수 있는 기계어로 된 코드를 의미합니다. 이 코드는 0과 1로 이루어진 이진 형태로 작성되며, 컴퓨터 하드웨어에 직접적으로 의해 해석되고 실행됩니다.",
    },
    {
      questionText:
        "바이트 코드(Bytecode)에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "기계어로 직접 실행 가능한 코드",
        "고수준 언어로 작성된 코드",
        "컴파일러에 의해 생성된 중간 코드",
        "가상 머신에서 실행되는 코드",
      ],
      answer: "컴파일러에 의해 생성된 중간 코드",
      explanation:
        "바이트 코드(Bytecode)는 고수준 언어로 작성된 소스 코드를 컴파일러에 의해 생성된 중간 코드를 의미합니다. 이 중간 코드는 특정 플랫폼에 종속적이지 않은 형태로, 가상 머신에서 실행되는 코드입니다.",
    },
    {
      questionText: "머신 코드와 바이트 코드의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "실행 속도",
        "코드 작성 방식",
        "플랫폼 호환성",
        "메모리 사용량",
      ],
      answer: "플랫폼 호환성",
      explanation:
        "머신 코드는 특정 아키텍처와 프로세서에 종속적인 코드이므로 특정 플랫폼에서만 실행될 수 있습니다. 하지만 바이트 코드는 특정 플랫폼에 종속되지 않고, 가상 머신에서 실행되기 때문에 플랫폼 호환성이 높습니다.",
    },
    {
      questionText: "주로 바이트 코드를 사용하는 프로그래밍 언어는 무엇인가요?",
      code: "",
      answerOptions: ["C", "Python", "Java", "JavaScript"],
      answer: "Java",
      explanation:
        "바이트 코드는 주로 Java와 같은 언어에서 사용됩니다. Java 컴파일러는 소스 코드를 컴파일하여 바이트 코드로 변환하며, 이후에 가상 머신에서 해당 바이트 코드를 실행합니다.",
    },
    {
      questionText:
        "자바스크립트가 바이트 코드를 사용하는 주요한 이유는 무엇인가요?",
      code: "",
      answerOptions: [
        "컴파일 시간 단축",
        "실행 속도 향상",
        "메모리 효율성",
        "플랫폼 호환성",
      ],
      answer: "플랫폼 호환성",
      explanation:
        "자바스크립트는 바이트 코드를 사용하여 플랫폼 호환성을 높입니다. 바이트 코드는 특정 플랫폼에 종속되지 않고, 자바스크립트 가상 머신에서 실행될 수 있기 때문에 다양한 플랫폼에서 동일한 코드를 실행할 수 있습니다.",
    },
    {
      questionText:
        "소프트웨어 개발 단계 중 요구 분석 단계에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "소프트웨어의 동작과 기능에 대한 명세를 수립하는 단계",
        "소프트웨어의 코드를 작성하는 단계",
        "소프트웨어를 테스트하여 오류를 찾고 수정하는 단계",
        "소프트웨어를 배포하고 사용자에게 지원하는 단계",
      ],
      answer: "소프트웨어의 동작과 기능에 대한 명세를 수립하는 단계",
      explanation:
        "요구 분석 단계는 소프트웨어 개발의 초기 단계로, 소프트웨어의 동작과 기능에 대한 명세를 수립하는 단계입니다. 이 단계에서 사용자의 요구사항을 파악하고 문제를 해결하기 위한 소프트웨어의 필요한 기능을 정의합니다.",
    },
    {
      questionText:
        "소프트웨어 개발에서 애자일(Agile) 방법론에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "계획과 문서 중심의 개발 방법론",
        "소프트웨어 개발 생명주기를 순차적으로 진행하는 방법론",
        "작은 주기로 반복적인 개발을 수행하는 방법론",
        "강력한 업무 분담과 엄격한 계약을 기반으로 하는 방법론",
      ],
      answer: "작은 주기로 반복적인 개발을 수행하는 방법론",
      explanation:
        "애자일(Agile) 방법론은 소프트웨어 개발을 작은 주기로 반복적으로 수행하는 방법론입니다. 이 방법론은 변화에 유연하게 대처하고 사용자의 피드백을 적극적으로 수용하여 소프트웨어를 개발하는 접근 방식을 강조합니다.",
    },
    {
      questionText:
        "소프트웨어 테스트 단계 중 흰박스 테스트(White-box Testing)에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "소프트웨어의 내부 구조와 동작을 검증하는 테스트 방법",
        "사용자의 요구사항에 기반하여 기능을 검증하는 테스트 방법",
        "소프트웨어의 성능과 부하를 검증하는 테스트 방법",
        "사용자의 입장에서 소프트웨어를 평가하는 테스트 방법",
      ],
      answer: "소프트웨어의 내부 구조와 동작을 검증하는 테스트 방법",
      explanation:
        "흰박스 테스트(White-box Testing)는 소프트웨어의 내부 구조와 동작을 검증하는 테스트 방법입니다. 이 방법은 소스 코드의 논리적인 경로나 조건을 테스트하여 프로그램의 정확성을 확인하는 데 중점을 둡니다.",
    },
    {
      questionText:
        "소프트웨어 유지보수 단계 중 예방적 유지보수에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "소프트웨어의 오류를 수정하고 기능을 개선하는 유지보수 방법",
        "소프트웨어의 성능을 향상시키는 유지보수 방법",
        "사용자의 요구사항을 반영하여 소프트웨어를 수정하는 유지보수 방법",
        "소프트웨어의 결함을 예방하고 안정성을 유지하는 유지보수 방법",
      ],
      answer: "소프트웨어의 결함을 예방하고 안정성을 유지하는 유지보수 방법",
      explanation:
        "예방적 유지보수는 소프트웨어의 결함을 예방하고 안정성을 유지하는 유지보수 방법입니다. 이 방법은 소프트웨어를 주기적으로 점검하고 문제를 예방하기 위한 조치를 취하는 것을 포함합니다.",
    },
    {
      questionText:
        "소프트웨어(Software)에 대한 설명으로 옳은 것은 무엇인가요?",
      code: "",
      answerOptions: [
        "컴퓨터 하드웨어를 구성하는 부품들의 집합",
        "컴퓨터 시스템을 운영하고 관리하는 프로그램",
        "컴퓨터 프로그래밍 언어로 작성된 코드의 집합",
        "컴퓨터 사용자의 명령을 해석하고 실행하는 시스템",
      ],
      answer: "컴퓨터 프로그래밍 언어로 작성된 코드의 집합",
      explanation:
        "소프트웨어(Software)는 컴퓨터 프로그래밍 언어로 작성된 코드의 집합을 의미합니다. 이 코드들은 컴퓨터에서 실행되어 원하는 작업을 수행하게 됩니다.",
    },
    {
      questionText:
        "소프트웨어 개발에서 '디버깅(Debugging)'이란 무엇을 의미하나요?",
      code: "",
      answerOptions: [
        "소프트웨어의 버그를 찾아 수정하는 과정",
        "소프트웨어의 기능을 테스트하는 과정",
        "소프트웨어의 설계를 수행하는 과정",
        "소프트웨어를 배포 및 관리하는 과정",
      ],
      answer: "소프트웨어의 버그를 찾아 수정하는 과정",
      explanation:
        "디버깅(Debugging)은 소프트웨어의 버그를 찾아 수정하는 과정을 의미합니다. 개발자는 디버깅을 통해 소프트웨어의 동작을 분석하고 문제를 해결하기 위해 코드를 검사하고 수정합니다.",
    },
    {
      questionText:
        "소프트웨어 개발에서 '배포(Deployment)'란 무엇을 의미하나요?",
      code: "",
      answerOptions: [
        "소프트웨어의 버그를 찾아 수정하는 과정",
        "소프트웨어의 기능을 테스트하는 과정",
        "소프트웨어의 설계를 수행하는 과정",
        "완성된 소프트웨어를 사용자에게 제공하는 과정",
      ],
      answer: "완성된 소프트웨어를 사용자에게 제공하는 과정",
      explanation:
        "배포(Deployment)는 완성된 소프트웨어를 사용자에게 제공하는 과정을 의미합니다. 이 과정에서 개발된 소프트웨어는 실제 환경에 설치되거나 온라인으로 제공되어 사용자가 이용할 수 있게 됩니다.",
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setQuestions(shuffleArray(initialQuestions));
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
    setIsSubmitted(true);
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer("");
    setIsSubmitted(false);
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
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <p key={index}>{option}</p>
            ))}
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleSubmit}>제출</button>
          </div>

          {isSubmitted && (
            <div className="explanation-section">
              <h2>정답 설명</h2>
              <p>
                {userAnswer === questions[currentQuestion].answer ? (
                  <>
                    정답입니다!
                    <br />
                    {questions[currentQuestion].explanation}
                  </>
                ) : (
                  <>
                    틀렸습니다.
                    <br />
                    {questions[currentQuestion].explanation}
                  </>
                )}
              </p>
              {currentQuestion < questions.length - 1 && (
                <button onClick={handleNext}>다음 문제</button>
              )}
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
