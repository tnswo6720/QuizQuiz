import React, { useState, useEffect } from "react";

const Quiz = () => {
  const initialQuestions = [
    // 여기에 문제를 추가합니다...

    {
      questionText: "REST API에서 HTTP PUT 메소드의 주된 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "리소스를 생성합니다.",
        "리소스를 삭제합니다.",
        "리소스를 업데이트합니다.",
        "리소스를 조회합니다.",
      ],
      answer: "리소스를 업데이트합니다.",
      explanation:
        "HTTP PUT 메소드는 주로 서버의 리소스를 전체적으로 업데이트하는 데 사용됩니다.",
      explanationCode: `
    // PUT 메소드를 사용한 전체 업데이트 예시
    axios.put('/api/posts/1', {
      title: 'Updated Post',
      content: 'This is the updated post.',
      author: 'John Doe'
    });
  `,
    },
    {
      questionText: "REST API에서 HTTP PATCH 메소드의 주된 용도는 무엇인가요?",
      code: "",
      answerOptions: [
        "리소스를 생성합니다.",
        "리소스를 삭제합니다.",
        "리소스를 업데이트합니다.",
        "리소스를 조회합니다.",
      ],
      answer: "리소스를 업데이트합니다.",
      explanation:
        "HTTP PATCH 메소드는 주로 서버의 리소스를 부분적으로 업데이트하는 데 사용됩니다.",
      explanationCode: `
    // PATCH 메소드를 사용한 부분 업데이트 예시
    axios.patch('/api/posts/1', {
      title: 'Updated Post'
    });
  `,
    },
    {
      questionText:
        "HTTP PUT 메소드와 PATCH 메소드의 주요 차이점은 무엇인가요?",
      code: "",
      answerOptions: [
        "PUT은 리소스의 전체를 업데이트하고, PATCH는 리소스의 일부를 업데이트합니다.",
        "PUT은 리소스의 일부를 업데이트하고, PATCH는 리소스의 전체를 업데이트합니다.",
        "PUT은 리소스를 생성하고, PATCH는 리소스를 삭제합니다.",
        "PUT은 리소스를 삭제하고, PATCH는 리소스를 생성합니다.",
      ],
      answer:
        "PUT은 리소스의 전체를 업데이트하고, PATCH는 리소스의 일부를 업데이트합니다.",
      explanation:
        "PUT 메소드는 대상 리소스의 현재 상태를 클라이언트가 제공한 상태로 전체를 교체하는 것을 의미합니다. 반면에 PATCH 메소드는 대상 리소스의 일부만을 교체하는 것을 의미합니다.",
      explanationCode: `
    // PUT 메소드를 사용한 예시
    axios.put('/api/posts/1', {
      title: 'Updated Post',
      content: 'This is the updated post.',
      author: 'John Doe'
    });

    // PATCH 메소드를 사용한 예시
    axios.patch('/api/posts/1', {
      title: 'Updated Post'
    });
  `,
    },

    {
      questionText:
        "@nestjs/common의 @Body 데코레이터가 하는 역할은 무엇인가요?",
      code: `
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
      answerOptions: [
        "요청 본문에서 특정 속성을 가져온다.",
        "요청 헤더에서 특정 속성을 가져온다.",
        "요청 URL에서 특정 속성을 가져온다.",
        "요청 쿠키에서 특정 속성을 가져온다.",
      ],
      answer: "요청 본문에서 특정 속성을 가져온다.",
      explanation:
        "NestJS에서 @Body() 데코레이터는 HTTP 요청 본문에서 특정 속성을 가져오는 역할을 합니다. 이를 통해 클라이언트가 보낸 데이터를 쉽게 추출하여 사용할 수 있습니다. 예시 코드에서는 'author', 'title', 'content'라는 키를 가진 요청 본문의 데이터를 각각 author, title, content 변수에 할당하고 있습니다.",
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
        "위 코드에서 새로운 글이 게시되는 순서를 올바르게 나열한 것은 어떤 것인가요?",
      code: `
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
      answerOptions: [
        "1. 새로운 PostModel 객체 생성 -> 2. 객체를 posts 배열에 추가 -> 3. 새로 생성된 post 반환",
        "1. 새로운 PostModel 객체 생성 -> 2. 새로 생성된 post 반환 -> 3. 객체를 posts 배열에 추가",
        "1. 객체를 posts 배열에 추가 -> 2. 새로운 PostModel 객체 생성 -> 3. 새로 생성된 post 반환",
        "1. 새로 생성된 post 반환 -> 2. 새로운 PostModel 객체 생성 -> 3. 객체를 posts 배열에 추가",
      ],
      answer:
        "1. 새로운 PostModel 객체 생성 -> 2. 객체를 posts 배열에 추가 -> 3. 새로 생성된 post 반환",
      explanation:
        "위의 코드에서 새로운 글이 게시되는 순서는 다음과 같습니다. 1) 먼저, @Body 데코레이터를 사용하여 전달된 author, title, content 정보를 바탕으로 새로운 PostModel 객체를 생성합니다. 2) 그리고 이 객체를 기존의 posts 배열에 추가합니다. 3) 마지막으로, 새로 생성된 post를 반환하여 사용자에게 응답을 보냅니다.",
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
        "NestJS에서 @Post()와 @Body() 데코레이터가 사용된 함수의 역할은 무엇인가요?",
      code: `
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
      answerOptions: [
        "HTTP GET 요청을 처리하고, 요청 본문에 있는 데이터를 추출한다.",
        "HTTP POST 요청을 처리하고, 요청 본문에 있는 데이터를 추출한다.",
        "HTTP PUT 요청을 처리하고, 요청 URL에 있는 데이터를 추출한다.",
        "HTTP DELETE 요청을 처리하고, 요청 헤더에 있는 데이터를 추출한다.",
      ],
      answer: "HTTP POST 요청을 처리하고, 요청 본문에 있는 데이터를 추출한다.",
      explanation:
        "NestJS에서 @Post() 데코레이터는 해당 함수가 HTTP POST 요청을 처리하도록 지정합니다. 그리고 @Body() 데코레이터는 HTTP 요청 본문에서 특정 속성을 추출하는 역할을 합니다. 따라서 위 코드에서는 HTTP POST 요청을 처리하고, 요청 본문에서 'author', 'title', 'content'라는 키를 가진 데이터를 추출하여 새로운 포스트를 생성하는 역할을 하게 됩니다.",
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
        "NestJS에서 @Put(':id')와 @Param('id') 데코레이터가 사용된 함수의 역할은 무엇인가요?",
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
        "HTTP GET 요청을 처리하고, 요청 URL에 있는 'id' 파라미터를 추출한다.",
        "HTTP POST 요청을 처리하고, 요청 본문에 있는 데이터를 추출한다.",
        "HTTP PUT 요청을 처리하고, 요청 URL에 있는 'id' 파라미터를 추출한다.",
        "HTTP DELETE 요청을 처리하고, 요청 헤더에 있는 데이터를 추출한다.",
      ],
      answer:
        "HTTP PUT 요청을 처리하고, 요청 URL에 있는 'id' 파라미터를 추출한다.",
      explanation:
        "NestJS에서 @Put(':id') 데코레이터는 해당 함수가 HTTP PUT 요청을 처리하도록 지정합니다. 그리고 @Param('id') 데코레이터는 HTTP 요청 URL에 있는 'id' 파라미터를 추출하는 역할을 합니다. 따라서 위 코드에서는 HTTP PUT 요청을 처리하고, 요청 URL에서 'id' 파라미터를 추출하여 해당 id를 가진 포스트를 업데이트하는 역할을 하게 됩니다.",
      explanationCode: `
      
      `,
    },

    {
      questionText:
        "NestJS에서 @Delete(':id')와 @Param('id') 데코레이터가 사용된 함수의 역할은 무엇인가요?",
      code: `
      @Delete(':id')
      deletePost(@Param('id') id: string) {
        const post = posts.find((post) => post.id === +id);
    
        if (!post) {
          throw new NotFoundException();
        }
    
        posts = posts.filter((post) => post.id !== +id);
    
        return id;
      }
      `,
      answerOptions: [
        "HTTP GET 요청을 처리하고, 요청 URL에 있는 'id' 파라미터를 추출한다.",
        "HTTP POST 요청을 처리하고, 요청 본문에 있는 데이터를 추출한다.",
        "HTTP PUT 요청을 처리하고, 요청 URL에 있는 'id' 파라미터를 추출한다.",
        "HTTP DELETE 요청을 처리하고, 요청 URL에 있는 'id' 파라미터를 추출한다.",
      ],
      answer:
        "HTTP DELETE 요청을 처리하고, 요청 URL에 있는 'id' 파라미터를 추출한다.",
      explanation:
        "NestJS에서 @Delete(':id') 데코레이터는 해당 함수가 HTTP DELETE 요청을 처리하도록 지정합니다. 그리고 @Param('id') 데코레이터는 HTTP 요청 URL에 있는 'id' 파라미터를 추출하는 역할을 합니다. 따라서 위 코드에서는 HTTP DELETE 요청을 처리하고, 요청 URL에서 'id' 파라미터를 추출하여 해당 id를 가진 포스트를 삭제하는 역할을 하게 됩니다. filter() 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 만듭니다. 따라서 filter() 메소드 내에서 == 비교 연산자를 사용하면 일치하는 요소만 새로운 배열에 포함되고, !== 비교 연산자를 사용하면 일치하지 않는 요소만 새로운 배열에 포함됩니다. 위에서 제공된 코드에서는 post.id !== +id 구문을 사용하여 일치하지 않는 요소만 새로운 배열에 포함하고 있습니다. 이는 주어진 id와 일치하는 요소, 즉 삭제하려는 post가 새로운 배열에 포함되지 않도록 하기 위함입니다. 따라서 이 코드는 id가 주어진 id와 일치하는 post를 배열에서 제거하고, 나머지 post들로 이루어진 새로운 배열을 생성하는 역할",
      explanationCode: `
      
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
