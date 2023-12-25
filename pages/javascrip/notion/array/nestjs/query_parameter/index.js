// questions1.js
export const nestjsNotionQueryParameter = [
  // 질문 데이터...

  {
    type: "multiple-choice",
    questionText: "다음 코드에서, `GET` 메소드가 수행하는 작업은 무엇인가요?",
    code: `
    @Get('/users/:id')
    findOne(@Param('id') id: string): User {
      return this.usersService.findOne(id);
    }
    `,
    answerOptions: [
      {
        text: "특정 사용자를 검색합니다.",
        isCorrect: true,
      },
      {
        text: "새로운 사용자를 생성합니다.",
        isCorrect: false,
      },
      {
        text: "특정 사용자를 수정합니다.",
        isCorrect: false,
      },
      {
        text: "특정 사용자를 삭제합니다.",
        isCorrect: false,
      },
    ],
    answer: "특정 사용자를 검색합니다.",
    explanation:
      "해당 코드에서 `GET` 메소드는 특정 사용자를 검색하는 작업을 수행합니다. `:id`로 사용자의 ID를 받아서 `usersService.findOne(id)` 함수를 이용해 특정 사용자를 찾습니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래 코드에서, `POST` 메소드가 수행하는 작업은 무엇인가요?",
    code: `
    @Post('/users')
    create(@Body() createUserDto: CreateUserDto) {
      this.usersService.create(createUserDto);
    }
    `,
    answerOptions: [
      {
        text: "새로운 사용자를 생성합니다.",
        isCorrect: true,
      },
      {
        text: "특정 사용자를 검색합니다.",
        isCorrect: false,
      },
      {
        text: "특정 사용자를 수정합니다.",
        isCorrect: false,
      },
      {
        text: "특정 사용자를 삭제합니다.",
        isCorrect: false,
      },
    ],
    answer: "새로운 사용자를 생성합니다.",
    explanation:
      "해당 코드에서 `POST` 메소드는 새로운 사용자를 생성하는 작업을 수행합니다. `createUserDto`를 받아서 `usersService.create(createUserDto)` 함수를 이용해 새로운 사용자를 생성합니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래 코드에서, `PATCH` 메소드가 수행하는 작업은 무엇인가요?",
    code: `
    @Patch('/users/:id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.update(id, updateUserDto);
    }
    `,
    answerOptions: [
      {
        text: "특정 사용자를 수정합니다.",
        isCorrect: true,
      },
      {
        text: "새로운 사용자를 생성합니다.",
        isCorrect: false,
      },
      {
        text: "특정 사용자를 검색합니다.",
        isCorrect: false,
      },
      {
        text: "특정 사용자를 삭제합니다.",
        isCorrect: false,
      },
    ],
    answer: "특정 사용자를 수정합니다.",
    explanation:
      "해당 코드에서 `PATCH` 메소드는 특정 사용자를 수정하는 작업을 수행합니다. `:id`로 사용자의 ID를 받고, `updateUserDto`를 통해 업데이트할 데이터를 받아서 `usersService.update(id, updateUserDto)` 함수를 이용해 특정 사용자를 수정합니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서, `DELETE` 메소드가 수행하는 작업은 무엇인가요?",
    code: `
    @Delete('/users/:id')
    remove(@Param('id') id: string) {
      return this.usersService.remove(id);
    }
    `,
    answerOptions: [
      {
        text: "특정 사용자를 삭제합니다.",
        isCorrect: true,
      },
      {
        text: "새로운 사용자를 생성합니다.",
        isCorrect: false,
      },
      {
        text: "특정 사용자를 수정합니다.",
        isCorrect: false,
      },
      {
        text: "특정 사용자를 검색합니다.",
        isCorrect: false,
      },
    ],
    answer: "특정 사용자를 삭제합니다.",
    explanation:
      "해당 코드에서 `DELETE` 메소드는 특정 사용자를 삭제하는 작업을 수행합니다. `:id`로 사용자의 ID를 받아서 `usersService.remove(id)` 함수를 이용해 특정 사용자를 삭제합니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드에서, 어떤 파라미터가 쿼리 파라미터로 사용되었나요?",
    code: `
    @Get('/users')
    findAll(@Query('name') name: string) {
      return this.usersService.findByName(name);
    }
    `,
    answerOptions: [
      {
        text: "`name`",
        isCorrect: true,
      },
      {
        text: "`users`",
        isCorrect: false,
      },
      {
        text: "`findAll`",
        isCorrect: false,
      },
      {
        text: "`usersService`",
        isCorrect: false,
      },
    ],
    answer: "`name`",
    explanation:
      "해당 코드에서 `@Query('name')`를 통해 `name` 파라미터를 쿼리 파라미터로 사용하고 있습니다. 이 값을 통해 `usersService.findByName(name)` 함수를 호출하여 이름에 해당하는 사용자를 찾습니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래 코드에서, 어떤 파라미터가 바디 파라미터로 사용되었나요?",
    code: `
    @Post('/users')
    create(@Body() createUserDto: CreateUserDto) {
      this.usersService.create(createUserDto);
    }
    `,
    answerOptions: [
      {
        text: "`createUserDto`",
        isCorrect: true,
      },
      {
        text: "`users`",
        isCorrect: false,
      },
      {
        text: "`create`",
        isCorrect: false,
      },
      {
        text: "`usersService`",
        isCorrect: false,
      },
    ],
    answer: "`createUserDto`",
    explanation:
      "해당 코드에서 `@Body()`를 통해 `createUserDto` 파라미터를 바디 파라미터로 사용하고 있습니다. 이 값을 통해 `usersService.create(createUserDto)` 함수를 호출하여 새로운 사용자를 생성합니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드에서 @Param('id')의 역할은 무엇인가요?",
    code: `
    @Get(':id')
    getPost(@Param('id') id: string) {
      return posts.find((post) => post.id === +id);
    }
    `,
    answerOptions: [
      {
        text: "URL 경로의 :id 부분에 들어오는 값을 가져와서, 이를 id 파라미터로 사용한다.",
        isCorrect: true,
      },
      {
        text: "URL 경로의 :id 부분을 무시하고, id 파라미터를 직접 지정하여 사용한다.",
        isCorrect: false,
      },
      {
        text: "@Param('id')는 단지 장식자일뿐 실제로는 사용되지 않는다.",
        isCorrect: false,
      },
      {
        text: "id 파라미터는 무조건 1로 설정되어 있으며, 이를 이용하여 posts 배열에서 첫 번째 post를 찾아 반환한다.",
        isCorrect: false,
      },
    ],
    answer:
      "URL 경로의 :id 부분에 들어오는 값을 가져와서, 이를 id 파라미터로 사용한다.",
    explanation:
      "@Get(':id')는 URL 경로에서 :id 부분에 들어오는 값을 가져오는 역할을 하며, @Param('id')는 이 값을 id 파라미터로 받아오는 역할을 합니다. 따라서 이 코드는 URL 경로에서 특정 id 값을 가져와, 이를 이용하여 posts 배열에서 해당 id를 가진 post를 찾아 반환하는 기능을 구현하고 있습니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "다음 코드에서 @Param('id')의 역할은 무엇인가요?",
    code: `
    @Get(':id')
    getPost(@Param('id') id: string) {
      return posts.find((post) => post.id === +id);
    }
    `,
    answerOptions: [
      {
        text: "URL 경로의 :id 부분에 들어오는 값을 가져와서, 이를 id 파라미터로 사용한다.",
        isCorrect: true,
      },
      {
        text: "URL 경로의 :id 부분을 무시하고, id 파라미터를 직접 지정하여 사용한다.",
        isCorrect: false,
      },
      {
        text: "@Param('id')는 단지 장식자일뿐 실제로는 사용되지 않는다.",
        isCorrect: false,
      },
      {
        text: "id 파라미터는 무조건 1로 설정되어 있으며, 이를 이용하여 posts 배열에서 첫 번째 post를 찾아 반환한다.",
        isCorrect: false,
      },
    ],
    answer:
      "URL 경로의 :id 부분에 들어오는 값을 가져와서, 이를 id 파라미터로 사용한다.",
    explanation:
      "@Get(':id')는 URL 경로에서 :id 부분에 들어오는 값을 가져오는 역할을 하며, @Param('id')는 이 값을 id 파라미터로 받아오는 역할을 합니다. 따라서 이 코드는 URL 경로에서 특정 id 값을 가져와, 이를 이용하여 posts 배열에서 해당 id를 가진 post를 찾아 반환하는 기능을 구현하고 있습니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "다음 코드에서 NotFoundException이 발생하는 경우는 어떤 경우인가요?",
    code: `
    @Get(':id')
    getPost(@Param('id') id: string) {
      const post = posts.find((post) => post.id === +id);

      if (!post) {
        throw new NotFoundException();
      }

      return post;
    }
    `,
    answerOptions: [
      {
        text: "id 값이 숫자가 아닐 때",
        isCorrect: false,
      },
      {
        text: "post 배열이 비어 있을 때",
        isCorrect: false,
      },
      {
        text: "id에 해당하는 post가 없을 때",
        isCorrect: true,
      },
      {
        text: "항상 NotFoundException이 발생한다.",
        isCorrect: false,
      },
    ],
    answer: "id에 해당하는 post가 없을 때",
    explanation:
      "NotFoundException은 NestJS에서 제공하는 HTTP 예외 클래스로, 404 Not Found HTTP 응답 상태 코드를 반환합니다. 위 코드에서는 id에 해당하는 post를 찾지 못하면 NotFoundException이 발생하도록 되어 있습니다. 따라서 id에 해당하는 post가 posts 배열에 없을 때 NotFoundException이 발생합니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래 코드에서 `postPosts` 메소드는 어떤 동작을 수행하는가?",
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
      {
        text: "`posts` 배열에 새로운 게시물을 추가한다.",
        isCorrect: true,
      },
      {
        text: "`posts` 배열에서 특정 게시물을 삭제한다.",
        isCorrect: false,
      },
      {
        text: "`posts` 배열의 모든 게시물을 반환한다.",
        isCorrect: false,
      },
      {
        text: "`posts` 배열에서 특정 게시물을 수정한다.",
        isCorrect: false,
      },
    ],
    answer: "`posts` 배열에 새로운 게시물을 추가한다.",
    explanation:
      "`postPosts` 메소드는 클라이언트로부터 받은 `author`, `title`, `content` 정보를 바탕으로 새로운 게시물을 생성하고, 이를 `posts` 배열에 추가합니다. 이 메소드는 생성된 게시물을 반환합니다. 이는 HTTP POST 요청을 처리하는 로직을 구현한 것입니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래 코드에서 `putPost` 메소드가 수행하는 기능은 무엇인가?",
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
      {
        text: "`posts` 배열에서 특정 게시물을 수정한다.",
        isCorrect: true,
      },
      {
        text: "`posts` 배열에 새로운 게시물을 추가한다.",
        isCorrect: false,
      },
      {
        text: "`posts` 배열에서 특정 게시물을 삭제한다.",
        isCorrect: false,
      },
      {
        text: "`posts` 배열의 모든 게시물을 반환한다.",
        isCorrect: false,
      },
    ],
    answer: "`posts` 배열에서 특정 게시물을 수정한다.",
    explanation:
      "`putPost` 메소드는 클라이언트로부터 받은 `id`, `author`, `title`, `content` 정보를 바탕으로 해당 `id`를 가진 게시물의 정보를 수정합니다. 이는 HTTP PUT 요청을 처리하는 로직을 구현한 것입니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText: "아래 코드의 기능은 무엇인가?",
    code: `
  posts = posts.map((prevPost) => (prevPost.id === +id ? post : prevPost));
    `,
    answerOptions: [
      {
        text: "모든 게시물의 `id`를 새로운 `id`로 변경한다.",
        isCorrect: false,
      },
      {
        text: "`id`가 일치하는 게시물을 새로운 게시물로 교체한다.",
        isCorrect: true,
      },
      {
        text: "`id`가 일치하지 않는 게시물을 삭제한다.",
        isCorrect: false,
      },
      {
        text: "`id`가 일치하는 게시물을 삭제한다.",
        isCorrect: false,
      },
    ],
    answer: "`id`가 일치하는 게시물을 새로운 게시물로 교체한다.",
    explanation:
      "주어진 코드는 `posts` 배열을 순회하면서 `id`가 일치하는 게시물을 찾습니다. 일치하는 게시물이 있다면, 그 게시물을 새로운 게시물(`post`)로 교체합니다. 따라서 이 코드는 특정 `id`를 가진 게시물을 수정하는 데 사용됩니다.",
    subject: "nestjs",
    subSubject: "queryparameter",
    quizType: "coding",
  },
  {
    type: "multiple-choice",
    questionText:
      "아래의 코드는 id에 해당되는 POST를 삭제하는 함수에 대한 내용입니다.\n\njavascript\n@Delete(':id')\ndeletePost(@Param('id') id: string) {\n  const post = posts.find((post) => post.id === +id);\n  if (!post) {\n    throw new NotFoundException();\n  }\n  posts = posts.filter((post) => post.id !== +id);\n  return id;\n}\n}\n\n이 함수에 대한 설명 중 가장 정확한 것은 무엇인가요?",
    code: "@Delete(':id')\ndeletePost(@Param('id') id: string) {\n  const post = posts.find((post) => post.id === +id);\n  if (!post) {\n    throw new NotFoundException();\n  }\n  posts = posts.filter((post) => post.id !== +id);\n  return id;\n}\n}",
    answerOptions: [
      {
        text: "deletePost 함수는 id를 인자로 받아, 해당 id의 post를 삭제하며, 삭제 후 해당 id를 반환합니다.",
        isCorrect: true,
      },
      {
        text: "deletePost 함수는 id를 인자로 받아, 해당 id의 post를 찾지만, 삭제하지는 않습니다.",
        isCorrect: false,
      },
      {
        text: "deletePost 함수는 id를 인자로 받아, 해당 id의 post를 찾아 삭제하지만, 반환값은 없습니다.",
        isCorrect: false,
      },
      {
        text: "deletePost 함수는 id를 인자로 받지 않으며, 모든 post를 삭제합니다.",
        isCorrect: false,
      },
    ],
    answer:
      "deletePost 함수는 id를 인자로 받아, 해당 id의 post를 삭제하며, 삭제 후 해당 id를 반환합니다.",
    explanation:
      "deletePost 함수는 id를 인자로 받아 해당 id의 post를 찾습니다. 만약 post를 찾지 못하면 NotFoundException를 발생시킵니다. 찾은 post는 filter 메서드를 이용해 posts 배열에서 제거하며, 삭제 후 해당 id를 반환합니다.",
    subject: "typescript",
    subSubject: "queryparameter",
    quizType: "coding",
  },
];
