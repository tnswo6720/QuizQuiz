import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      topic: "보스 보상 분배", // 문제 주제 추가
      questionText: "엠블 순번제의 정의와 장점이 아닌 것은? ",
      image: "/em.jpg", // 이미지 URL 추가
      answerOptions: [
        "엠블 순번제는 언젠가는 나도 엠블 먹을 수 있다는 희망을 가질 수 있다.",
        "엠블 순번제는 파티원들 전원이 엠블렘을 먹을 때까지 있는다라는 보상 분배 계약이다",
        "파티원이 계정 판매나 현생 이슈 등으로 파티를 이탈할 수 있다",
      ],
      answer: "파티원이 계정 판매나 현생 이슈 등으로 파티를 이탈할 수 있다",
      explanation:
        "엠블 순번제는 메이플의 사회적 제도로 파티원 전원이 미트라의 엠블렘을 획득할 때까지 파티를 지속한다는 암묵적 협약입니다. 부작용으로는 엠블렘을 먹은 파티원이 협약을 끝까지 이행하지 않을 수도 있습니다. ",
      explanationCode: "",
    },

    {
      topic: "보스 공략", // 문제 주제 추가
      questionText:
        "세렌 2페이즈에 진입 시 화면 로딩 직후 숙여야 하는 이유는? ",
      image: "/pa.jpg", // 이미지 URL 추가
      answerOptions: [
        "세렌이 소환된 직후 레이저 빔을 쏘면 캐릭터가 움직여지지 않는다",
        "파티원들에게 경의를 표하기 위한 예절이다",
        "",
      ],
      answer: "파티원이 계정 판매나 현생 이슈 등으로 파티를 이탈할 수 있다",
      explanation:
        "세렌이 전방을 향해 레이저를 발사하면 피격 시 최대 체력 비례 35%의 피해, 5초동안 기절 상태이상,  회복 봉인이 걸린다. 세렌의 뒤에 있거나 숙이면 피할 수 있다.  태양 게이지가 많이 차오르는 패턴이라 주의가 필요하다 ",
      explanationCode: "",
    },
    {
      topic: " 보스 패턴",
      questionText: "석양 패턴에 대한 설명 중 옳지 않은 것은?",
      image: "/suck.gif",
      answerOptions: [
        "석양에 진입하면 매 초마다 노멀 모드에서는 최대 체력 비례 0.9%, 하드/익스트림 모드에서는 최대 체력 비례 1%의 피해를 받는다.",
        "석양 패턴에서의 물약의 회복 효율은 노멀 모드에서는 40%, 하드 모드에서는 20% 로 감소한다.",
        "세렌의 태양 베기 1,2타를 전부 숙여서 피할 수 없다.",
        "익스트림 세렌에서는 석양 페이즈의 패턴들이 하드 모드에 비해 그다지 눈에 띄게 강화되지 않았다.",
      ],
      answer:
        "최근 패치로 세렌의 태양 베기 1,2타를 전부 숙여서 피할 수 없게 되었다.",
      explanation:
        "최근 패치로 세렌의 태양 베기 1,2타는 전부 숙여서 피할 수 있게 되었습니다. 석양에 진입하면 매 초마다 노멀 모드에서는 최대 체력 비례 0.9%, 하드/익스트림 모드에서는 최대 체력 비례 1%의 피해를 받게 됩니다. 석양 패턴에 피격당하면 매우 치명적인 데미지를 받는 것이 맞으며, 익스트림 세렌에서는 석양 페이즈의 패턴들이 하드 모드에 비해 그다지 눈에 띄게 강화되지 않았습니다.",
      explanationCode: "",
    },
    {
      topic: " 보스 패턴",
      questionText: "캐릭터 대가리에 해당 화면이 보일 때 대처 방법은?",
      image: "/cha.gif",
      answerOptions: [
        "중독에 걸린 상황이다.",
        "피가 계속 깍이고 물약도 안먹어진다",
        "의지로 해제 가능하다 ",
        "익스트림 세렌에서는 석양 페이즈의 패턴들이 하드 모드에 비해 그다지 눈에 띄게 강화되지 않았다.",
      ],
      answer:
        "최근 패치로 세렌의 태양 베기 1,2타를 전부 숙여서 피할 수 없게 되었다.",
      explanation:
        "최근 패치로 세렌의 태양 베기 1,2타는 전부 숙여서 피할 수 있게 되었습니다. 석양에 진입하면 매 초마다 노멀 모드에서는 최대 체력 비례 0.9%, 하드/익스트림 모드에서는 최대 체력 비례 1%의 피해를 받게 됩니다. 석양 패턴에 피격당하면 매우 치명적인 데미지를 받는 것이 맞으며, 익스트림 세렌에서는 석양 페이즈의 패턴들이 하드 모드에 비해 그다지 눈에 띄게 강화되지 않았습니다.",
      explanationCode: "",
    },
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
    setIsCorrect(userAnswer === questions[currentQuestion].answer);
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
            <h3>주제: {questions[currentQuestion].topic}</h3>{" "}
            {/* 문제 주제 출력 */}
            <p>{questions[currentQuestion].questionText}</p>
            {questions[currentQuestion].image && (
              <div
                style={{
                  backgroundImage: `url(${questions[currentQuestion].image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "300px",
                  width: "300px",
                }}
              />
            )}
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
              <p>{isCorrect ? "정답입니다!" : "틀렸습니다."}</p>
              {questions[currentQuestion].explanation
                .split(/(.{20}[^\s]*)\s+/)
                .filter(Boolean)
                .map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              <pre>{questions[currentQuestion].explanationCode}</pre>{" "}
              {/* 설명에 대한 예시 코드를 보여줍니다. */}
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
