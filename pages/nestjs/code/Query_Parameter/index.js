import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...
    {
      questionText:
        "Nest.js에서 특정 id를 가진 post를 가져오는 코드를 작성하려고 합니다. 만약 해당 id를 가진 post가 존재하지 않을 때, NotFoundException을 발생시키려면 어떻게 해야 할까요?",
      code: `
        @Get(':id')
        getPost(@Param('id') id: string) {
          const post = posts.find((post) => post.id === +id);
          if (______) { // 여기에 무엇을 써야할까요?
            throw new NotFoundException();
          }
          return post;
        }
      `,
      answerOptions: [
        "!post",
        "post === undefined",
        "post === null",
        "post === ''",
      ],
      answer: "!post",
      explanation:
        "JavaScript에서는 null, undefined, NaN, 빈 문자열(''), 0, -0, false 등을 'falsy' 값이라고 합니다. 이런 값들은 불린 연산자를 통해 false로 취급됩니다. 따라서 만약 'post'가 undefined(즉, 찾지 못했다면), '!post'는 true가 되어 이 if문이 실행됩니다.",
      explanationCode: `
        @Get(':id')
        getPost(@Param('id') id: string) {
          const post = posts.find((post) => post.id === +id);
          if (!post) { // 'post'가 undefined일 경우, '!post'는 true가 됩니다.
            throw new NotFoundException();
          }
          return post;
        }
      `,
    },
    {
      questionText:
        "Nest.js에서 HTTP 요청 본문(body)에서 'author', 'title', 'content'라는 키를 가진 데이터를 각각 `author`, `title`, `content`라는 파라미터에 할당하는 코드를 작성하려고 합니다. 이를 수행하는 코드를 작성하려면 빈 칸에 어떤 것을 입력해야 할까요?",
      code: `
        @Post()
        postPosts(
          @(_____)('author') author: string,
          @(_____)('title') title: string,
          @(_____)('content') content: string,
        ) {
          const post: PostModel = {
            id: posts[posts.length - 1].id + 1,
            author,
            title,
            content,
            likeCount: 0,
            commentCount: 0,
          };
    
          posts = [...posts, post];
          return post;
        }
      `,
      answerOptions: ["Request", "Body", "Param", "Query"],
      answer: "Body",
      explanation:
        "Nest.js에서 @Body() 데코레이터는 HTTP 요청 본문에서 특정 속성을 가져오는 역할을 합니다. 이를 통해 클라이언트가 보낸 데이터를 쉽게 추출하여 사용할 수 있습니다. 따라서 'author', 'title', 'content'라는 키를 가진 데이터를 각각 `author`, `title`, `content` 파라미터에 할당하기 위해서는 @Body() 데코레이터를 사용해야 합니다.",
      explanationCode: `
        @Post()
        postPosts(
          @Body('author') author: string,
          @Body('title') title: string,
          @Body('content') content: string,
        ) {
          const post: PostModel = {
            id: posts[posts.length - 1].id + 1,
            author,
            title,
            content,
            likeCount: 0,
            commentCount: 0,
          };
    
          posts = [...posts, post];
          return post;
        }
      `,
    },

    {
      questionText:
        "@Put 데코레이터와 관련된 설명 중 옳지 않은 것은 무엇인가요?",
      code: `
      @Put(':id')
      putPost(
        @Param('id') id: string,
        @Body('author') author?: string,
        @Body('title') title?: string,
        @Body('content') content?: string,
      ) {
        const post = posts.find((post) => post.id === +id);
    
        if (!post) {
          throw new NotFoundException();
        }
    
        if (author) {
          post.author = author;
        }
    
        if (title) {
          post.title = title;
        }
    
        if (content) {
          post.content = content;
        }
    
        posts = posts.map((prevPost) => (prevPost.id === +id ? post : prevPost));
    
        return post;
      }
      `,
      answerOptions: [
        "@Put 데코레이터는 HTTP PUT 요청을 처리하는 메서드를 정의하는데 사용됩니다.",
        "HTTP PUT 메서드는 기존 리소스의 전체를 교체하는데 사용됩니다.",
        "@Put(':id')는 id 파라미터를 사용해 특정 리소스를 식별합니다.",
        "@Body 데코레이터는 요청 본문에서 특정 프로퍼티를 가져오는데 사용되지 않습니다.",
      ],
      answer:
        "@Body 데코레이터는 요청 본문에서 특정 프로퍼티를 가져오는데 사용되지 않습니다.",
      explanation:
        "@Body 데코레이터는 요청 본문에서 특정 프로퍼티를 가져오는데 사용됩니다. 이를 통해 클라이언트가 보낸 데이터를 서버에서 사용할 수 있습니다.",
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

// 기본 문법:
// 변수와 상수
// 데이터 타입
// 연산자
// 제어문 (if, for, while 등)
